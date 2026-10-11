/* node tools/build.js : 由 registry.js 生成 public/tools.json 与题型页面 public/math/<id>/index.html */
const fs = require('fs'), path = require('path');
const R = require('./registry.js');
const root = path.join(__dirname, '..', 'public');
const out = [];
const quizTpl = (id, title) => `<!DOCTYPE html>
<html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<title>${title}</title><link rel="stylesheet" href="/css/hub.css"></head>
<body><div class="page" id="app"></div>
<script src="/js/tool.js"></script><script src="/js/quiz.js"></script>
<script src="/js/qd-basic.js"></script><script src="/js/qd-frac.js"></script><script src="/js/qd-geo.js"></script>
<script>Quiz.start('${id}')</script></body></html>
`;
const seen = new Set();
for (const [id, grades, topic, icon, name, desc, kw, kind] of R.list) {
  if (seen.has(id)) throw new Error('重复 id ' + id); seen.add(id);
  out.push({ id, cat: 'math', grades, topic, icon, name, desc, kw, color: R.col[topic] });
  if (kind === 'quiz') {
    const d = path.join(root, 'math', id); fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, 'index.html'), quizTpl(id, name));
  } else if (!fs.existsSync(path.join(root, 'math', id, 'index.html'))) {
    console.warn('缺少页面文件:', id);
  }
}
/* 其它模块(不属于数学小工具目录) */
out.push({ id: 'english', cat: 'english', href: '/english/', grades: [3, 4, 5, 6], topic: '英语', icon: '🔤', name: '英语语法小课堂', desc: '人教PEP四年级 · 出题', kw: '英语 语法 单词 听力 自然拼读 词性', color: '#fecaca' });
fs.writeFileSync(path.join(root, 'tools.json'), JSON.stringify(out, null, 1));
console.log('tools:', out.length);
