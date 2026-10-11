/* 通用练习引擎：知识点 → 选难度 → 10 题(数字键盘/选择题) → 解析 → 星星 + 错题回顾
 * 题型定义在 quizdefs.js：Quiz.defs[id] = { title, intro, levels?, n?, gen(level) }
 * gen 返回 { q: 题干html, a: 答案(字符串), unit?, choices?, exp: 解析html, dec?, neg?, frac? }
 *   - 没有 choices = 数字键盘作答；dec/neg/frac 控制键盘上是否出现 . − / 键
 *   - 数字答案按数值比较（0.5 和 1/2 都算对）
 */
(function () {
  var U = {
    rnd: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    pick: function (arr) { return arr[Math.floor(Math.random() * arr.length)]; },
    shuffle: function (arr) { var a = arr.slice(), i, j, t; for (i = a.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; } return a; },
    gcd: function (a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a || 1; },
    lcm: function (a, b) { return a / U.gcd(a, b) * b; },
    fr: function (n, d) { return '<span class="fr">' + n + '<i></i>' + d + '</span>'; },
    /* 分数(含整数)显示为 html */
    frs: function (n, d) { var g = U.gcd(n, d); n /= g; d /= g; return d === 1 ? String(n) : U.fr(n, d); },
    /* 分数答案字符串 "n/d"，整数就是 "n" */
    fa: function (n, d) { var g = U.gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return d === 1 ? String(n) : n + '/' + d; },
    /* 去掉小数浮点误差 */
    r: function (x, p) { p = p === undefined ? 6 : p; return String(+x.toFixed(p)); },
    /* 生成选择题选项：正确答案 + 干扰项(去重) */
    opts: function (right, wrongs) {
      var set = [String(right)], i;
      for (i = 0; i < wrongs.length; i++) if (set.indexOf(String(wrongs[i])) < 0) set.push(String(wrongs[i]));
      return U.shuffle(set.slice(0, 4));
    }
  };
  function val(s) {
    s = String(s).trim().replace('−', '-');
    if (s.indexOf('/') > 0) { var p = s.split('/'); return parseFloat(p[0]) / parseFloat(p[1]); }
    return parseFloat(s);
  }
  function same(a, b) {
    var x = val(a), y = val(b);
    if (isNaN(x) || isNaN(y)) return String(a).trim() === String(b).trim();
    return Math.abs(x - y) < 1e-9;
  }

  var app, def, id, lv = 0, st, locked = false;
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  function menu() {
    var h = '<div class="panel"><h2 style="margin-top:0">📖 知识点</h2><div class="intro">' + (def.intro || '') + '</div></div>';
    h += '<div class="panel">';
    if (def.levels) {
      h += '<h3 style="margin-top:0">选难度</h3><div class="row" id="lv">' + def.levels.map(function (n, i) { return '<button class="btn ' + (i === lv ? '' : 'ghost') + '" data-l="' + i + '">' + n + '</button>'; }).join('') + '</div>';
    }
    h += '<p style="color:var(--sub)">每轮 ' + (def.n || 10) + ' 题。答对越多星星越多；错题会给解析。</p><button class="btn" id="go">开始练习</button></div>';
    app.innerHTML = h;
    app.onclick = function (e) {
      var t = e.target;
      if (t.dataset.l !== undefined) { lv = +t.dataset.l; menu(); }
      if (t.id === 'go') start();
    };
  }

  function start() {
    st = { i: 0, ok: 0, wrong: [], t0: Date.now(), cur: null, input: '', seen: {} };
    locked = false; next();
  }
  function make() {
    var q, k = 0;
    do { q = def.gen(lv); k++; } while (st.seen[q.q] && k < 30);
    st.seen[q.q] = 1; return q;
  }
  function next() {
    if (st.i >= (def.n || 10)) return done();
    st.cur = make(); st.input = ''; locked = false; draw();
  }
  function keypad(q) {
    var k = [7, 8, 9, 4, 5, 6, 1, 2, 3], h = k.map(function (n) { return '<button data-k="' + n + '">' + n + '</button>'; }).join('');
    h += '<button data-k="0">0</button>' + (q.dec ? '<button data-k=".">.</button>' : '<span></span>') + '<button data-k="back">⌫</button>';
    if (q.neg || q.frac) h += (q.neg ? '<button data-k="-">−</button>' : '<span></span>') + (q.frac ? '<button data-k="/">/</button>' : '<span></span>') + '<span></span>';
    return '<div class="pad" style="margin:12px auto 8px">' + h + '</div><button class="btn ok" data-k="ok" style="width:100%;max-width:320px">确定 ✓</button>';
  }
  function draw(fb) {
    var q = st.cur, N = def.n || 10;
    var h = '<div class="panel" style="text-align:center"><div style="color:var(--sub)">第 ' + (st.i + 1) + ' / ' + N + ' 题 · 答对 ' + st.ok + '</div>';
    h += '<div style="height:8px;border-radius:4px;background:var(--line);margin:8px 0 14px"><div style="height:100%;border-radius:4px;width:' + (st.i / N * 100) + '%;background:linear-gradient(90deg,var(--p1),var(--p2))"></div></div>';
    h += '<div class="qtext">' + q.q;
    if (!q.choices) h += ' <span class="ans">' + (st.input ? esc(st.input) : '&nbsp;&nbsp;&nbsp;&nbsp;') + '</span>' + (q.unit ? ' ' + q.unit : '');
    h += '</div>';
    if (fb) h += '<div class="msg ' + fb.cls + '">' + fb.text + '</div>' + (fb.exp ? '<div class="exp">' + fb.exp + '</div>' : '');
    else h += '<div class="msg"></div>';
    if (q.choices) h += '<div class="chs">' + q.choices.map(function (c) { return '<button class="ch" data-c="' + esc(c) + '">' + c + '</button>'; }).join('') + '</div>';
    else h += keypad(q);
    h += '</div>';
    app.innerHTML = h; app.onclick = null;
  }
  function judge(given) {
    if (locked) return; locked = true;
    var q = st.cur, good = (q.strict || q.choices) ? String(given).trim() === String(q.a) : same(given, q.a);
    if (good) { st.ok++; Hub.beep(true); } else { st.wrong.push({ q: q.q, a: q.a, unit: q.unit, exp: q.exp, you: given }); Hub.beep(false); }
    draw({ cls: good ? 'ok' : 'bad', text: good ? '✔ 答对了！' : '✘ 正确答案：' + (q.choices ? q.a : q.a + (q.unit ? ' ' + q.unit : '')), exp: good ? '' : q.exp });
    if (q.choices) { var bs = app.querySelectorAll('.ch'), i; for (i = 0; i < bs.length; i++) { if (bs[i].dataset.c === q.a) bs[i].classList.add('good'); else if (bs[i].dataset.c === given) bs[i].classList.add('badc'); } }
    setTimeout(function () { st.i++; next(); }, good ? 650 : 2600 + Math.min(2000, (q.exp || '').length * 18));
  }
  function key(k) {
    if (!st || !st.cur || locked) return;
    var q = st.cur;
    if (q.choices) return;
    if (k === 'back') st.input = st.input.slice(0, -1);
    else if (k === 'ok') { if (st.input) judge(st.input); return; }
    else if (st.input.length < 9) {
      if (k === '.' && (!q.dec || st.input.indexOf('.') >= 0)) return;
      if (k === '-' && (!q.neg || st.input.length)) return;
      if (k === '/' && (!q.frac || st.input.indexOf('/') >= 0 || !st.input.length)) return;
      st.input += k;
    }
    var a = app.querySelector('.ans'); if (a) a.innerHTML = st.input ? esc(st.input) : '&nbsp;&nbsp;&nbsp;&nbsp;';
  }
  function done() {
    var N = def.n || 10, s = Math.round((Date.now() - st.t0) / 1000), stars = st.ok >= N ? 3 : st.ok >= N * .8 ? 2 : st.ok >= N * .5 ? 1 : 0;
    Hub.star(id, stars); st.cur = null;
    var h = '<div class="panel" style="text-align:center"><div class="big">' + '★'.repeat(stars) + '☆'.repeat(3 - stars) + '</div><h2>答对 ' + st.ok + ' / ' + N + '，用时 ' + s + ' 秒</h2>';
    if (!st.wrong.length) h += '<p>全对，太棒了！试试更高难度吧。</p>';
    h += '<div class="row" style="justify-content:center"><button class="btn" id="again">再来一轮</button><button class="btn ghost" id="mn">知识点 / 改难度</button></div></div>';
    if (st.wrong.length) {
      h += '<div class="panel"><h3 style="margin-top:0">错题回顾</h3>' + st.wrong.map(function (w) {
        return '<div class="wr"><div class="qtext" style="font-size:20px">' + w.q + ' <b style="color:var(--ok)">' + esc(w.a) + '</b>' + (w.unit ? ' ' + w.unit : '') + ' <small style="color:var(--bad)">（你答：' + esc(w.you) + '）</small></div>' + (w.exp ? '<div class="exp">' + w.exp + '</div>' : '') + '</div>';
      }).join('') + '</div>';
    }
    app.innerHTML = h;
    document.getElementById('again').onclick = start; document.getElementById('mn').onclick = menu;
  }

  window.Quiz = {
    U: U, defs: {}, same: same,
    start: function (tid) {
      id = tid; def = Quiz.defs[tid]; app = document.getElementById('app');
      if (!def) { app.textContent = '题型未找到'; return; }
      Hub.bar(def.title);
      document.addEventListener('click', function (e) {
        var t = e.target.closest('[data-k],[data-c]'); if (!t || !app.contains(t)) return;
        if (t.dataset.k !== undefined) key(t.dataset.k); else if (t.dataset.c !== undefined) judge(t.dataset.c);
      });
      document.addEventListener('keydown', function (e) {
        if (!st || !st.cur) return;
        if (e.key >= '0' && e.key <= '9') key(e.key); else if (e.key === 'Backspace') key('back');
        else if (e.key === 'Enter') key('ok'); else if (e.key === '.' || e.key === '/' || e.key === '-') key(e.key);
      });
      menu();
    }
  };
})();
