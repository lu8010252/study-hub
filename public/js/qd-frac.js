/* 题型定义 · 第二部分：小数、分数、因数倍数、单位换算、负数、百分数、比和比例、方程、应用题 */
(function () {
  var Q = Quiz, U = Q.U, rnd = U.rnd, pick = U.pick, fr = U.fr, D = Q.defs;
  function dec(n, k) { return U.r(n / Math.pow(10, k), k); }   /* 整数 n 缩小 10^k 倍，去掉多余的 0 */
  function mix(w, n, d) { return w + fr(n, d); }



  D['frac-meaning'] = {
    title: '分数的意义', n: 10, levels: ['几分之一', '几分之几', '分数单位、假分数与带分数'],
    intro: '<p>把一个整体<b>平均分成若干份</b>，表示其中<b>一份或几份</b>的数叫分数。</p><div class="eg">把蛋糕平均分成 8 份，取 3 份，就是 <span class="fr">3<i></i>8</span>。分母 8 表示平均分成 8 份，分子 3 表示取了 3 份。</div><p><b>分数单位</b>：分子是 1 的分数。<span class="fr">3<i></i>8</span> 里有 3 个 <span class="fr">1<i></i>8</span>。</p><p><b>假分数</b>：分子 ≥ 分母，如 <span class="fr">7<i></i>4</span>；<b>带分数</b>：整数和真分数合在一起，如 1<span class="fr">3<i></i>4</span>。</p>',
    gen: function (l) {
      var d, n, p;
      if (l === 0) { d = rnd(2, 12); return { q: '把一个西瓜平均分成 ' + d + ' 份，每份是它的', a: '1/' + d, frac: true, exp: '平均分成 ' + d + ' 份，每份是 ' + fr(1, d) + '（填 1/' + d + '）。' }; }
      if (l === 1) { d = rnd(3, 12); n = rnd(2, d - 1); return { q: '把一根绳子平均分成 ' + d + ' 份，取其中的 ' + n + ' 份，是这根绳子的', a: n + '/' + d, frac: true, exp: '取了 ' + n + ' 份，所以是 ' + fr(n, d) + '（填 ' + n + '/' + d + '）。' }; }
      p = rnd(0, 2);
      if (p === 0) { d = rnd(3, 10); n = rnd(d + 1, 3 * d); return { q: fr(n, d) + ' 里面有 ( ) 个 ' + fr(1, d), a: String(n), exp: '分子是几，就有几个分数单位 ' + fr(1, d) + '：' + n + ' 个。' }; }
      if (p === 1) { d = rnd(3, 9); var w = rnd(1, 4), r = rnd(1, d - 1); return { q: mix(w, r, d) + ' 化成假分数，分子是', a: String(w * d + r), exp: '整数部分 ' + w + ' × 分母 ' + d + ' + 分子 ' + r + ' = ' + (w * d + r) + '。' }; }
      d = rnd(3, 9); var w2 = rnd(1, 5), r2 = rnd(1, d - 1); n = w2 * d + r2;
      return { q: fr(n, d) + ' 化成带分数，整数部分是', a: String(w2), exp: n + ' ÷ ' + d + ' = ' + w2 + ' ……' + r2 + '，商是整数部分 ' + w2 + '，余数 ' + r2 + ' 是分子，所以是 ' + mix(w2, r2, d) + '。' };
    }
  };





  function factors(n) { var r = [], i; for (i = 1; i <= n; i++) if (n % i === 0) r.push(i); return r; }
  function isPrime(n) { if (n < 2) return false; for (var i = 2; i * i <= n; i++) if (n % i === 0) return false; return true; }
  function pf(n) { var r = [], i = 2; while (n > 1) { while (n % i === 0) { r.push(i); n /= i; } i++; } return r; }


  D['prime-factor'] = {
    title: '因数、倍数、质数与合数', n: 10, levels: ['因数和倍数', '质数和合数', '2、3、5 的倍数特征'],
    intro: '<p><b>因数</b>：整除另一个数的数（36 的因数有 1、2、3、4、6、9、12、18、36）。一个数的因数个数有限，最小是 1，最大是它本身。<b>倍数</b>个数无限，最小是它本身。</p><p><b>质数</b>：只有 1 和它本身两个因数（2、3、5、7、11、13…）。<b>合数</b>：除了 1 和它本身还有别的因数（4、6、8、9…）。<b>1 既不是质数也不是合数</b>；2 是唯一的偶质数。</p><p><b>倍数特征</b>：2 的倍数个位是 0、2、4、6、8；5 的倍数个位是 0 或 5；3 的倍数各位数字之和是 3 的倍数。</p>',
    gen: function (l) {
      var n, p, c, i, w;
      if (l === 0) {
        p = rnd(0, 2);
        if (p === 0) { n = pick([12, 16, 18, 20, 24, 28, 30, 32, 36, 40, 42, 45, 48, 60]); return { q: n + ' 的因数一共有 ( ) 个', a: String(factors(n).length), exp: n + ' 的因数有：' + factors(n).join('、') + '，共 ' + factors(n).length + ' 个。' }; }
        if (p === 1) { n = rnd(12, 48); var f = pick(factors(n).filter(function (x) { return x > 1 && x < n; }).concat([2])); if (n % f) f = 1; var wrongs = []; for (i = 2; i < 40 && wrongs.length < 3; i++) if (n % i && wrongs.indexOf(i) < 0 && rnd(0, 2)) wrongs.push(i); while (wrongs.length < 3) wrongs.push(wrongs.length + 51); return { q: '下面哪个数是 ' + n + ' 的因数？', a: String(f), choices: U.opts(f, wrongs), exp: n + ' 的因数有：' + factors(n).join('、') + '。' }; }
        n = rnd(3, 9); var m = n * rnd(2, 12); wrongs = [m + 1, m - 1, m + n + 1]; return { q: '下面哪个数是 ' + n + ' 的倍数？', a: String(m), choices: U.opts(m, wrongs.filter(function (x) { return x % n; })), exp: n + ' 的倍数就是 ' + n + ' 乘 1、2、3……的结果：' + m + ' ÷ ' + n + ' = ' + (m / n) + '，能整除。' };
      }
      if (l === 1) {
        p = rnd(0, 2);
        if (p === 0) { var ps = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47], comps = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 27, 28, 30, 33, 35, 39, 45, 49]; var r = pick(ps); return { q: '下面哪个数是质数？', a: String(r), choices: U.opts(r, U.shuffle(comps).slice(0, 3)), exp: r + ' 只有 1 和 ' + r + ' 两个因数，是质数；其它几个数都还有别的因数，是合数。' }; }
        if (p === 1) { var cps = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 21, 25, 27, 33, 35, 39, 49, 51], pp = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]; var cc = pick(cps); return { q: '下面哪个数是合数？', a: String(cc), choices: U.opts(cc, U.shuffle(pp).slice(0, 3)), exp: cc + ' 的因数有：' + factors(cc).join('、') + '，有三个或更多因数，是合数。' }; }
        n = pick([20, 30, 50, 100]); c = 0; for (i = 2; i <= n; i++) if (isPrime(i)) c++; return { q: n + ' 以内（含 ' + n + '）的质数一共有 ( ) 个', a: String(c), exp: '依次数出：' + (function () { var s = []; for (var j = 2; j <= n; j++) if (isPrime(j)) s.push(j); return s.join('、'); })() + '，共 ' + c + ' 个。' };
      }
      p = rnd(0, 2);
      if (p === 0) { n = pick([2, 3, 5]); var base = rnd(10, 60); var good = base; while (good % n) good++; var bad = []; for (i = 1; bad.length < 3; i++) { var t = good + i * pick([1, 2, 3]) + rnd(0, 5); if (t % n && bad.indexOf(t) < 0) bad.push(t); } return { q: '下面哪个数是 ' + n + ' 的倍数？', a: String(good), choices: U.opts(good, bad), exp: n === 3 ? good + ' 各位数字之和是 ' + String(good).split('').reduce(function (x, y) { return +x + +y; }, 0) + '，是 3 的倍数。' : n === 2 ? good + ' 的个位是偶数，是 2 的倍数。' : good + ' 的个位是 ' + (good % 10) + '，是 5 的倍数。' }; }
      var tpl = pick([[2, 5], [2, 3], [3, 5]]); var g2 = rnd(10, 60); var L = tpl[0] * tpl[1]; while (g2 % L) g2++; var bd = []; for (i = 1; bd.length < 3; i++) { var t2 = g2 + i * pick([2, 3, 5, 6, 10]) + rnd(1, 4); if (t2 % L && bd.indexOf(t2) < 0) bd.push(t2); }
      return { q: '下面哪个数同时是 ' + tpl[0] + ' 和 ' + tpl[1] + ' 的倍数？', a: String(g2), choices: U.opts(g2, bd), exp: '同时是 ' + tpl[0] + ' 和 ' + tpl[1] + ' 的倍数，就是 ' + L + ' 的倍数，' + g2 + ' ÷ ' + L + ' = ' + (g2 / L) + '。' };
    }
  };

  var UNITS = {
    '长度': [['千米', '米', 1000, 0], ['米', '分米', 10, 0], ['米', '厘米', 100, 0], ['分米', '厘米', 10, 0], ['厘米', '毫米', 10, 0], ['米', '毫米', 1000, 0]],
    '质量与容量': [['吨', '千克', 1000, 0], ['千克', '克', 1000, 0], ['升', '毫升', 1000, 0], ['立方分米', '立方厘米', 1000, 0]],
    '时间': [['时', '分', 60, 1], ['分', '秒', 60, 1], ['日', '时', 24, 1], ['周', '日', 7, 2], ['年', '月', 12, 1]],
    '面积与体积': [['平方米', '平方分米', 100, 0], ['平方分米', '平方厘米', 100, 0], ['公顷', '平方米', 10000, 0], ['平方千米', '公顷', 100, 0], ['立方米', '立方分米', 1000, 0], ['立方分米', '立方厘米', 1000, 0]]
  };
  D['unit-convert'] = {
    title: '单位换算', n: 10, levels: ['长度', '质量与容量', '时间', '面积与体积'],
    intro: '<p><b>常用进率</b>：</p><div class="eg">长度：1 千米 = 1000 米，1 米 = 10 分米 = 100 厘米 = 1000 毫米<br>质量：1 吨 = 1000 千克，1 千克 = 1000 克<br>容量：1 升 = 1000 毫升<br>时间：1 时 = 60 分，1 分 = 60 秒，1 日 = 24 时，1 周 = 7 日，1 年 = 12 月<br>面积：1 平方米 = 100 平方分米，1 公顷 = 10000 平方米，1 平方千米 = 100 公顷<br>体积：1 立方米 = 1000 立方分米，1 升 = 1 立方分米</div><p><b>大单位化小单位 → 乘进率；小单位化大单位 → 除以进率</b>。</p>',
    gen: function (l) {
      var key = ['长度', '质量与容量', '时间', '面积与体积'][l], u = pick(UNITS[key]), big = u[0], sm = u[1], f = u[2], half = u[3], v, ans, q, e;
      if (rnd(0, 1)) {
        v = half === 2 ? rnd(1, 9) : half === 1 ? rnd(1, 12) / (rnd(0, 1) ? 2 : 1) : (rnd(0, 1) ? rnd(1, 9) : rnd(11, 99) / 10);
        if (half === 1 && f === 24 && v * 24 % 1) v = Math.round(v);
        ans = U.r(v * f, 3); q = U.r(v, 1) + ' ' + big + ' = ( ) ' + sm;
        e = big + '化' + sm + '是大单位化小单位，乘进率 ' + f + '：' + U.r(v, 1) + ' × ' + f + ' = ' + ans + '。';
      } else {
        var w = half === 2 ? rnd(1, 9) : half === 1 ? rnd(1, 9) : (rnd(0, 1) ? rnd(1, 9) : rnd(11, 99) / 10);
        var sv = U.r(w * f, 3); if (half === 1 && sv.indexOf('.') >= 0) { w = rnd(1, 9); sv = String(w * f); }
        ans = U.r(w, 1); q = sv + ' ' + sm + ' = ( ) ' + big;
        e = sm + '化' + big + '是小单位化大单位，除以进率 ' + f + '：' + sv + ' ÷ ' + f + ' = ' + ans + '。';
      }
      return { q: q, a: ans, dec: true, exp: e };
    }
  };

  D['negative'] = {
    title: '认识负数', n: 10, levels: ['正数和负数', '温度的变化', '数轴上的数'],
    intro: '<p>比 0 小的数叫<b>负数</b>，写成“−”号加一个数，如 −3。比 0 大的数叫<b>正数</b>，如 +5（“+”号可以不写）。0 既不是正数也不是负数。</p><p>负数用来表示<b>相反意义的量</b>：零上 3℃ 记作 +3℃，零下 3℃ 记作 −3℃；收入 50 元记作 +50，支出 20 元记作 −20。</p><p><b>数轴</b>：从左到右数越来越大；<b>越往右越大</b>。−5 &lt; −2 &lt; 0 &lt; 3。</p>',
    gen: function (l) {
      var a, b, p;
      if (l === 0) {
        p = rnd(0, 2); a = rnd(1, 20);
        if (p === 0) return { q: '零下 ' + a + ' ℃ 记作', a: '−' + a + ' ℃', choices: U.opts('−' + a + ' ℃', ['+' + a + ' ℃', '−' + (a + 1) + ' ℃', a + 1 + ' ℃']), exp: '零下的温度用负数表示：−' + a + ' ℃。' };
        if (p === 1) return { q: '收入 ' + a * 10 + ' 元记作 +' + a * 10 + ' 元，那么支出 ' + a * 10 + ' 元记作', a: '−' + a * 10 + ' 元', choices: U.opts('−' + a * 10 + ' 元', ['+' + a * 10 + ' 元', '0 元', '−' + a * 100 + ' 元']), exp: '支出与收入相反，用负数表示：−' + a * 10 + ' 元。' };
        b = rnd(1, 9); return { q: '海拔 ' + a * 100 + ' 米记作 +' + a * 100 + ' 米，那么低于海平面 ' + b * 10 + ' 米记作', a: '−' + b * 10 + ' 米', choices: U.opts('−' + b * 10 + ' 米', ['+' + b * 10 + ' 米', '−' + b * 100 + ' 米', '+' + b * 100 + ' 米']), exp: '海平面以下用负数表示：−' + b * 10 + ' 米。' };
      }
      if (l === 1) {
        a = rnd(-10, 10); b = rnd(2, 12);
        if (rnd(0, 1)) return { q: '清晨气温 ' + (a < 0 ? '−' + (-a) : a) + ' ℃，中午上升了 ' + b + ' ℃，中午气温是', a: String(a + b), unit: '℃', neg: true, exp: '上升就加：' + a + ' + ' + b + ' = ' + (a + b) + '。可以借助数轴，从 ' + a + ' 向右走 ' + b + ' 格。' };
        return { q: '白天气温 ' + (a < 0 ? '−' + (-a) : a) + ' ℃，夜里下降了 ' + b + ' ℃，夜里气温是', a: String(a - b), unit: '℃', neg: true, exp: '下降就减：' + a + ' − ' + b + ' = ' + (a - b) + '。可以借助数轴，从 ' + a + ' 向左走 ' + b + ' 格。' };
      }
      a = rnd(1, 9); b = rnd(1, 9);
      p = rnd(0, 2);
      if (p === 0) return { q: '数轴上，−' + a + ' 到 ' + b + ' 的距离是', a: String(a + b), exp: '−' + a + ' 到 0 是 ' + a + '，0 到 ' + b + ' 是 ' + b + '，共 ' + (a + b) + ' 个单位。' };
      if (p === 1) { var x = -rnd(1, 9), y = -rnd(1, 9); while (x === y) y = -rnd(1, 9); var r = x > y ? '' + x : '' + y; return { q: '−' + (-x) + ' 和 −' + (-y) + ' 比较，较大的数是', a: r.replace('-', '−'), choices: ['−' + (-x), '−' + (-y)], exp: '负数的绝对值越小，数越大（在数轴上越靠右）。所以 ' + r.replace('-', '−') + ' 更大。' }; }
      return { q: '下面哪个数最小？', a: '−' + (a + 3), choices: U.opts('−' + (a + 3), ['−' + a, '0', String(b)]), exp: '负数都比 0 和正数小；两个负数里，绝对值大的反而小。' };
    }
  };

  D['percent'] = {
    title: '百分数', n: 10, levels: ['百分数与小数、分数互化', '求一个数的百分之几', '百分率与已知百分之几求总数'],
    intro: '<p><b>百分数</b>表示一个数是另一个数的百分之几，也叫百分率或百分比，用“%”表示。</p><div class="eg">0.35 = 35%　　3/4 = 75%　　60% = 0.6 = 3/5</div><p>小数化百分数：<b>小数点向右移两位，添上 %</b>；百分数化小数：向左移两位，去掉 %。</p><p><b>求一个数的百分之几</b>用乘法：80 的 25% = 80 × 25% = 20。<br><b>求百分率</b> = 部分 ÷ 总数 × 100%。<b>已知部分求总数</b>用除法。</p>',
    gen: function (l) {
      var a, b, p, base;
      if (l === 0) {
        p = rnd(0, 2);
        if (p === 0) { a = rnd(1, 99); return { q: dec(a, 2) + ' = ( )%', a: String(a), dec: true, exp: '小数点向右移两位：' + dec(a, 2) + ' = ' + a + '%。' }; }
        if (p === 1) { b = pick([2, 4, 5, 10, 20, 25, 50]); a = rnd(1, b - 1); return { q: fr(a, b) + ' = ( )%', a: U.r(a / b * 100, 2), dec: true, exp: fr(a, b) + ' = ' + a + ' ÷ ' + b + ' = ' + U.r(a / b, 4) + ' = ' + U.r(a / b * 100, 2) + '%。' }; }
        a = rnd(1, 99); return { q: a + '% = ( )（写成小数）', a: dec(a, 2), dec: true, exp: '百分数化小数，小数点向左移两位：' + a + '% = ' + dec(a, 2) + '。' };
      }
      if (l === 1) {
        base = pick([40, 60, 80, 100, 120, 200, 300, 400, 500]); a = pick([5, 10, 20, 25, 30, 40, 50, 60, 75, 80]); p = rnd(0, 2);
        if (p === 0) return { q: base + ' 的 ' + a + '% 是', a: U.r(base * a / 100, 2), dec: true, exp: base + ' × ' + a + '% = ' + base + ' × ' + dec(a, 2) + ' = ' + U.r(base * a / 100, 2) + '。' };
        if (p === 1) return { q: base + ' 增加 ' + a + '% 后是', a: U.r(base * (100 + a) / 100, 2), dec: true, exp: '增加后是原来的 (100% + ' + a + '%) = ' + (100 + a) + '%：' + base + ' × ' + (100 + a) + '% = ' + U.r(base * (100 + a) / 100, 2) + '。' };
        var z = pick([5, 6, 7, 8, 9]); return { q: '一件衣服原价 ' + base + ' 元，打 ' + z + ' 折出售，现价', a: U.r(base * z / 10, 2), unit: '元', dec: true, exp: '打 ' + z + ' 折就是原价的 ' + z + '0%：' + base + ' × ' + z + '0% = ' + U.r(base * z / 10, 2) + ' 元。' };
      }
      p = rnd(0, 2);
      if (p === 0) { base = pick([20, 25, 40, 50, 80, 100, 200]); a = rnd(1, base - 1); while ((a / base * 100) % 0.5) a = rnd(1, base - 1); return { q: '共 ' + base + ' 道题，做对了 ' + a + ' 道，正确率是 ( )%', a: U.r(a / base * 100, 2), dec: true, exp: '正确率 = ' + a + ' ÷ ' + base + ' × 100% = ' + U.r(a / base * 100, 2) + '%。' }; }
      if (p === 1) { var pct = pick([20, 25, 40, 50, 60, 75, 80]), tot = pick([20, 40, 60, 80, 100, 200]); var part = tot * pct / 100; return { q: '一个数的 ' + pct + '% 是 ' + part + '，这个数是', a: String(tot), exp: '已知部分求总数用除法：' + part + ' ÷ ' + pct + '% = ' + part + ' ÷ ' + dec(pct, 2) + ' = ' + tot + '。' }; }
      base = pick([20, 25, 40, 50, 80, 100, 200]); var gn = rnd(1, 4) * base / 20 * pick([1, 2]); if (gn >= base) gn = base / 2; var pc = gn / base * 100; if (pc % 0.5) { gn = base / 2; pc = 50; }
      return { q: '去年产量 ' + base + ' 吨，今年比去年增产 ' + gn + ' 吨，增产了 ( )%', a: U.r(pc, 2), dec: true, exp: '增产百分比 = 增产量 ÷ 去年产量 × 100% = ' + gn + ' ÷ ' + base + ' × 100% = ' + U.r(pc, 2) + '%。' };
    }
  };

  D['ratio'] = {
    title: '比和比例', n: 10, levels: ['比与比值', '解比例', '按比分配'],
    intro: '<p>两个数相除又叫两个数的<b>比</b>。12 : 18 读作“12 比 18”，12 是<b>前项</b>，18 是<b>后项</b>，12 ÷ 18 = 2/3 叫做<b>比值</b>。</p><p><b>化简比</b>：前项后项同时除以它们的最大公因数。12 : 18 = 2 : 3。</p><p><b>比例</b>：表示两个比相等的式子。<b>基本性质：两个外项的积等于两个内项的积</b>。解比例：x : 6 = 4 : 8 → 8x = 6 × 4 → x = 3。</p><p><b>按比分配</b>：先求总份数，再求每份是多少，最后乘各自的份数。</p>',
    gen: function (l) {
      var a, b, g, m, n, p, x;
      if (l === 0) {
        do { m = rnd(1, 9); n = rnd(2, 9); } while (m === n || U.gcd(m, n) !== 1); g = rnd(2, 6);
        if (rnd(0, 1)) return { q: (m * g) + ' : ' + (n * g) + ' 的比值是', a: U.fa(m, n), frac: true, exp: '比值 = 前项 ÷ 后项 = ' + (m * g) + ' ÷ ' + (n * g) + ' = ' + U.frs(m, n) + '。' };
        return { q: '化简比 ' + (m * g) + ' : ' + (n * g) + '，化简后的前项是', a: String(m), exp: '前项后项同时除以最大公因数 ' + g + '，得 ' + m + ' : ' + n + '，前项是 ' + m + '。' };
      }
      if (l === 1) {
        do { m = rnd(1, 9); n = rnd(2, 9); } while (m === n || U.gcd(m, n) !== 1); g = rnd(2, 9); var form = rnd(0, 2);
        if (form === 0) return { q: 'x : ' + (n * g) + ' = ' + m + ' : ' + n + '，x =', a: String(m * g), exp: '外项积 = 内项积：n × x = ' + (n * g) + ' × ' + m + '，即 ' + n + 'x = ' + (n * g * m) + '，x = ' + (m * g) + '。' };
        if (form === 1) return { q: (m * g) + ' : x = ' + m + ' : ' + n + '，x =', a: String(n * g), exp: m + 'x = ' + (m * g) + ' × ' + n + ' = ' + (m * g * n) + '，x = ' + (n * g) + '。' };
        return { q: m + ' : ' + n + ' = ' + (m * g) + ' : x，x =', a: String(n * g), exp: m + 'x = ' + n + ' × ' + (m * g) + '，x = ' + (n * g) + '。' };
      }
      m = rnd(1, 7); n = rnd(m + 1, 9); g = rnd(2, 12); var tot = (m + n) * g; p = rnd(0, 2);
      if (p === 0) return { q: '把 ' + tot + ' 按 ' + m + ' : ' + n + ' 分成两部分，较大的一份是', a: String(n * g), exp: '总份数 ' + m + ' + ' + n + ' = ' + (m + n) + '，每份 ' + tot + ' ÷ ' + (m + n) + ' = ' + g + '，较大一份 ' + n + ' × ' + g + ' = ' + (n * g) + '。' };
      if (p === 1) return { q: '甲、乙两数的比是 ' + m + ' : ' + n + '，甲是 ' + (m * g) + '，乙是', a: String(n * g), exp: '甲的 ' + m + ' 份是 ' + (m * g) + '，每份 ' + g + '，乙 ' + n + ' 份 = ' + (n * g) + '。' };
      return { q: '红、白两种彩带长度的比是 ' + m + ' : ' + n + '，共 ' + tot + ' 米，红彩带长', a: String(m * g), unit: '米', exp: '共 ' + (m + n) + ' 份，每份 ' + g + ' 米，红彩带 ' + m + ' 份 = ' + (m * g) + ' 米。' };
    }
  };


  var NM = ['小明', '小红', '小刚', '小丽', '阳阳', '乐乐'], OBJ = ['苹果', '铅笔', '糖果', '贴纸', '邮票', '弹珠'];
  D['word-problems'] = {
    title: '应用题', n: 10, levels: ['加减一步应用题', '乘除一步应用题', '两步应用题', '行程问题', '鸡兔同笼与工程问题'],
    intro: '<p>解应用题的步骤：<b>① 读题找条件和问题 → ② 想数量关系 → ③ 列式计算 → ④ 检验作答</b>。</p><div class="eg">加法：合起来、一共、增加；减法：还剩、比…多（少）、去掉<br>乘法：几个几、倍数；除法：平均分、包含<br>行程：<b>路程 = 速度 × 时间</b>；相遇问题：路程和 = 速度和 × 相遇时间<br>鸡兔同笼：假设全是鸡，每只兔多出 2 条腿，兔数 = (总腿 − 2 × 总头) ÷ 2<br>工程问题：把总工作看作 1，工效 = 1 ÷ 时间，合作时间 = 1 ÷ 工效和</div>',
    gen: function (l) {
      var n = pick(NM), o = pick(OBJ), a, b, c, p;
      if (l === 0) { a = rnd(12, 60); b = rnd(3, 11); c = rnd(3, 15); p = rnd(0, 2); if (p === 0) return { q: n + ' 有 ' + a + ' 个' + o + '，送给别人 ' + b + ' 个，还剩', a: String(a - b), unit: '个', exp: '还剩 = 原有 − 送出 = ' + a + ' − ' + b + ' = ' + (a - b) + '。' }; if (p === 1) return { q: n + ' 有 ' + a + ' 个' + o + '，小红比他多 ' + c + ' 个，小红有', a: String(a + c), unit: '个', exp: '比他多，就用加法：' + a + ' + ' + c + ' = ' + (a + c) + '。' }; return { q: '一个班有男生 ' + a + ' 人，女生 ' + b + ' 人，全班共', a: String(a + b), unit: '人', exp: '合起来用加法：' + a + ' + ' + b + ' = ' + (a + b) + '。' }; }
      if (l === 1) { a = rnd(3, 9); b = rnd(3, 12); p = rnd(0, 2); if (p === 0) return { q: '每盒有 ' + a + ' 支铅笔，买 ' + b + ' 盒，一共有', a: String(a * b), unit: '支', exp: '求几个几用乘法：' + a + ' × ' + b + ' = ' + (a * b) + '。' }; if (p === 1) return { q: a * b + ' 个' + o + '平均分给 ' + a + ' 个小朋友，每人分到', a: String(b), unit: '个', exp: '平均分用除法：' + (a * b) + ' ÷ ' + a + ' = ' + b + '。' }; return { q: '一只小熊每天吃 ' + a + ' 千克蜂蜜，' + b + ' 天吃', a: String(a * b), unit: '千克', exp: a + ' × ' + b + ' = ' + (a * b) + '。' }; }
      if (l === 2) { a = rnd(3, 9); b = rnd(5, 12); c = rnd(2, 20); p = rnd(0, 2); if (p === 0) { c = rnd(2, Math.min(20, a * b - 1)); } if (p === 0) return { q: '文具店有 ' + a + ' 盒铅笔，每盒 ' + b + ' 支，卖出 ' + c + ' 支，还剩', a: String(a * b - c), unit: '支', exp: '先求共有 ' + a + ' × ' + b + ' = ' + (a * b) + ' 支，再减去卖出的：' + (a * b) + ' − ' + c + ' = ' + (a * b - c) + '。' }; if (p === 1) { var tot = a * b + c; return { q: '把 ' + tot + ' 个' + o + '装盒，先拿出 ' + c + ' 个送人，剩下的每 ' + a + ' 个装一盒，可以装', a: String(b), unit: '盒', exp: '先算剩下 ' + tot + ' − ' + c + ' = ' + (a * b) + ' 个，再除以 ' + a + ' 得 ' + b + ' 盒。' }; } return { q: '小红买了 ' + a + ' 本练习本，每本 ' + b + ' 元，付了 ' + (a * b + c) + ' 元，应找回', a: String(c), unit: '元', exp: '先算花了 ' + a + ' × ' + b + ' = ' + (a * b) + ' 元，再用 ' + (a * b + c) + ' − ' + (a * b) + ' = ' + c + ' 元。' }; }
      if (l === 3) { p = rnd(0, 2); var v = rnd(2, 12) * 10, t = rnd(2, 6); if (p === 0) return { q: '一辆汽车每小时行 ' + v + ' 千米，行驶 ' + t + ' 小时，共行', a: String(v * t), unit: '千米', exp: '路程 = 速度 × 时间 = ' + v + ' × ' + t + ' = ' + (v * t) + '。' }; if (p === 1) { var v1 = rnd(3, 9) * 10, v2 = rnd(3, 9) * 10; return { q: '甲、乙两车从相距 ' + ((v1 + v2) * t) + ' 千米的两地同时相向开出，甲每小时 ' + v1 + ' 千米，乙每小时 ' + v2 + ' 千米，经过 ( ) 小时相遇', a: String(t), exp: '相遇时间 = 路程 ÷ 速度和 = ' + ((v1 + v2) * t) + ' ÷ (' + v1 + ' + ' + v2 + ') = ' + t + '。' }; } return { q: '一辆车 ' + t + ' 小时行了 ' + (v * t) + ' 千米，它的速度是每小时', a: String(v), unit: '千米', exp: '速度 = 路程 ÷ 时间 = ' + (v * t) + ' ÷ ' + t + ' = ' + v + '。' }; }
      p = rnd(0, 1);
      if (p === 0) { var h = rnd(8, 20), r = rnd(2, h - 3), L = 2 * (h - r) + 4 * r; return { q: '笼子里有鸡和兔共 ' + h + ' 只，一共 ' + L + ' 条腿，兔有', a: String(r), unit: '只', exp: '假设全是鸡：' + h + ' × 2 = ' + (2 * h) + ' 条腿，多出 ' + (L - 2 * h) + ' 条，每只兔多 2 条腿，兔 = ' + (L - 2 * h) + ' ÷ 2 = ' + r + ' 只。' }; }
      var cs = pick([[6, 3, 2], [10, 15, 6], [12, 6, 4], [20, 30, 12], [4, 12, 3], [12, 24, 8], [15, 10, 6], [30, 20, 12]]);
      return { q: '一项工程，甲单独做要 ' + cs[0] + ' 天，乙单独做要 ' + cs[1] + ' 天，两人合作需要', a: String(cs[2]), unit: '天', exp: '甲每天做 ' + fr(1, cs[0]) + '，乙每天做 ' + fr(1, cs[1]) + '，合作每天做 ' + fr(1, cs[0]) + ' + ' + fr(1, cs[1]) + ' = ' + fr(1, cs[2]) + '，所以需要 ' + cs[2] + ' 天。' };
    }
  };
})();
