'use strict';
/* 作业小伙伴 - 把对话转发给 OpenAI 兼容的大模型接口(如你自己的 LLM 转发网关)
 * 环境变量: LLM_BASE_URL(如 https://xxx/v1)  LLM_API_KEY  LLM_MODEL
 * key 只放在服务端, 浏览器拿不到。
 */
const BASE = (process.env.LLM_BASE_URL || '').replace(/\/+$/, '');
const KEY = process.env.LLM_API_KEY || '';
const MODEL = process.env.LLM_MODEL || '';
const MAX_BODY = 64 * 1024;
const MAX_MSGS = 24;
const MAX_CHARS = 2000;
const TIMEOUT_MS = 90 * 1000;

const SYSTEM = `你是"星星姐姐",陪小学生(约 6-12 岁)写作业的大姐姐。你的目标不是把作业做完,而是让孩子自己想明白。语气温暖、有耐心、爱用比喻,偶尔用一个表情,不要太多。

核心规则(必须遵守):
1. 不直接给答案。孩子问"这题答案是什么",先问她"你读完题,觉得它在问什么?"
2. 每次只问一个问题。一条消息最多一个问句。
3. 句子要短,一句不超过 25 个字,少用术语。算式单独成行。整条回复尽量不超过 6 行。
4. 先让孩子说。先问她已经会什么、卡在哪一步,再给提示。
5. 三级提示逐级加码:第一级问方向;第二级给线索(如先画图、先算哪一步);第三级示范一道类似但不同的例题,让孩子照着做原题。
6. 孩子连续 3 次都卡住,才完整讲解这一步的思路(仍不直接写出最终答案),讲完立刻出一道类似题让她自己做。
7. 孩子答错了:先肯定她做对的部分,再问"你再检查一下第 X 步?",不要直接改正。
8. 孩子答对了:具体表扬,并让她用自己的话说一遍"是怎么想出来的"。
9. 不代写。作文、造句、日记、读后感只帮她列提纲、问问题、改错别字,正文必须她自己写。她要你"帮我写一段",温柔拒绝并改成"我们先说说你想写什么"。
10. 不聊与作业无关的内容,跑题时轻轻拉回。不询问孩子的姓名、学校、住址、电话等个人信息。

开场:孩子说了科目和题目后,让她用自己的话说一遍题目,再问她已经知道什么、还差什么,然后进入三级提示。

分科做法:
- 数学:先问"要求什么""已知哪些数";鼓励画线段图、画表格、摆小物件;做完让她先估算再验算;应用题先让她说"一句话故事"再列式。
- 语文:字词用形近字、偏旁、组词引导;阅读理解让她回到文章里找最相关的那一句念给你听;作文问"谁、在哪、做了什么、你当时怎么想",帮她列 3-4 点提纲;古诗先问"你看到了什么画面"。
- 英语:单词先让她读,再引导拆音节、联想图片;语法用生活例子带她发现规律,再让她自己造句;读和说优先,每次最多练 5 个词。

节奏与情绪:孩子烦躁、说"我不会""太难了"时,先接住情绪,再把题拆成更小的一步。学习约 25 分钟时提醒她站起来喝水、活动 5 分钟。结束前请她用一句话总结"今天我学会了什么",你再用一句话鼓励。

如果孩子发来的是图片文字描述不清,请她用自己的话把题目打出来。只用中文回答(英语单词和句子除外)。`;

const PARENT_SYSTEM = `你是一位温和的教育助手。下面是孩子和"星星姐姐"今天的作业对话记录。请给家长写一份简短总结:
1. 今天练习了什么(科目、大概题目),
2. 孩子卡在哪、哪里有进步,
3. 在家可以怎么引导(1-2 条,具体可做,不批评孩子、不给孩子贴标签)。
总共不超过 8 行,用中文,语气平和。`;

/* 简单限流: 每个 IP 每分钟 20 次 */
const hits = new Map();
function limited(ip) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter(t => now - t < 60000);
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 500) for (const [k, v] of hits) if (!v.length || now - v[v.length - 1] > 60000) hits.delete(k);
  return arr.length > 20;
}

function json(res, code, obj) {
  const b = Buffer.from(JSON.stringify(obj));
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Content-Length': b.length });
  res.end(b);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', c => { size += c.length; if (size > MAX_BODY) { reject(new Error('too large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function clean(text) {
  return String(text || '').replace(/<think>[\s\S]*?<\/think>/gi, '').replace(/^\s+/, '').trim();
}

async function callLLM(messages) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT_MS);
  try {
    const r = await fetch(BASE + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + KEY },
      body: JSON.stringify({ model: MODEL, messages, temperature: 0.6, max_tokens: 700, stream: false }),
      signal: ctl.signal
    });
    const txt = await r.text();
    if (!r.ok) throw new Error('模型接口返回 ' + r.status + ': ' + txt.slice(0, 200));
    let j; try { j = JSON.parse(txt); } catch (e) { throw new Error('模型接口返回的不是 JSON'); }
    const out = clean(j && j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content);
    if (!out) throw new Error('模型没有返回内容');
    return out;
  } finally { clearTimeout(timer); }
}

function sanitize(list) {
  if (!Array.isArray(list)) return [];
  return list.slice(-MAX_MSGS)
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .map(m => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }));
}

/* url.pathname 形如 /api/homework/chat */
async function handle(req, res, url) {
  const p = url.pathname;
  if (p === '/api/homework/config' && req.method === 'GET') {
    return json(res, 200, { enabled: !!(BASE && KEY && MODEL) });
  }
  if ((p === '/api/homework/chat' || p === '/api/homework/parent') && req.method === 'POST') {
    if (!(BASE && KEY && MODEL)) return json(res, 503, { error: '还没有配置大模型(LLM_BASE_URL / LLM_API_KEY / LLM_MODEL)' });
    const ip = req.socket.remoteAddress || '?';
    if (limited(ip)) return json(res, 429, { error: '问得太快啦,休息一分钟再来' });
    let body;
    try { body = JSON.parse(await readBody(req)); } catch (e) { return json(res, 400, { error: '请求格式不对' }); }
    const msgs = sanitize(body && body.messages);
    if (!msgs.length || msgs[msgs.length - 1].role !== 'user') return json(res, 400, { error: '没有可回答的问题' });
    try {
      let out;
      if (p === '/api/homework/parent') {
        const transcript = msgs.map(m => (m.role === 'user' ? '孩子:' : '星星姐姐:') + m.content).join('\n');
        out = await callLLM([{ role: 'system', content: PARENT_SYSTEM }, { role: 'user', content: transcript }]);
      } else {
        out = await callLLM([{ role: 'system', content: SYSTEM }].concat(msgs));
      }
      return json(res, 200, { reply: out });
    } catch (e) {
      console.error('作业小伙伴调用失败:', e.message);
      return json(res, 502, { error: e.name === 'AbortError' ? '模型响应太慢了,再试一次' : '星星姐姐暂时联系不上,稍后再试' });
    }
  }
  return json(res, 404, { error: 'not found' });
}

module.exports = { handle };
