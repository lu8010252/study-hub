/* 题型定义 · 第一部分：10以内 ~ 万以内的计算、运算顺序、简算、数的认识 */
(function () {
  var Q = Quiz, U = Q.U, rnd = U.rnd, pick = U.pick, D = Q.defs;
  var CN = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  function cn(n) { return CN[n]; }
  function fmt(n) { return String(n).replace(/\B(?=(\d{4})+(?!\d))/g, ' '); } /* 四位一分节，便于读大数 */




  function koujue(a, b) {
    var x = Math.min(a, b), y = Math.max(a, b), p = a * b, t;
    if (p < 10) t = cn(x) + cn(y) + '得' + cn(p);
    else if (p === 10) t = cn(x) + cn(y) + '一十';
    else if (p < 20) t = cn(x) + cn(y) + '十' + cn(p - 10);
    else t = cn(x) + cn(y) + cn(Math.floor(p / 10)) + '十' + (p % 10 ? cn(p % 10) : '');
    return t;
  }






  /* 运算顺序 */


  D['place-value'] = {
    title: '数位与大数', n: 10, levels: ['五位数', '八位数（万级）', '十位数（亿级）'],
    intro: '<p>从右往左数位依次是：<b>个、十、百、千、万、十万、百万、千万、亿、十亿</b>…… 每相邻两个计数单位之间的进率是 10。</p><div class="eg">个级：个、十、百、千　万级：万、十万、百万、千万　亿级：亿、十亿……</div><p>读数时从高位读起，<b>每级末尾的 0 不读，其它数位连续几个 0 只读一个零</b>。</p><p>数位上的数字表示几个“计数单位”：53 214 里的 3 在<b>千位</b>，表示 3 个千，也就是 3000。</p>',
    gen: function (l) {
      var len = [5, 8, 10][l], names = ['个', '十', '百', '千', '万', '十万', '百万', '千万', '亿', '十亿'], digs = [], i;
      var pool = U.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      for (i = 0; i < len; i++) digs.push(i === 0 ? pool.filter(function (x) { return x; })[0] : pool[i % 10]);
      var n = digs.join(''), pos = rnd(0, len - 1), d = n[pos], k = len - 1 - pos, kind = rnd(0, 2);
      var shown = fmt(n);
      if (kind === 0) return { q: shown + ' 中，<b>' + names[k] + '位</b>上的数字是', a: d, exp: '从右往左数：个、十、百、千、万…… 第 ' + (k + 1) + ' 位是 ' + names[k] + '位，数字是 ' + d + '。' };
      if (kind === 1) { var cand = []; for (var z = 0; z < len; z++) if (n[z] !== '0' && len - 1 - z <= 7) cand.push(z); pos = pick(cand); d = n[pos]; k = len - 1 - pos; var v = d + '0'.repeat(k); return { q: shown + ' 中，' + names[k] + '位上的 <b>' + d + '</b> 表示', a: v, unit: '', exp: names[k] + '位上的 ' + d + ' 表示 ' + d + ' 个' + (k ? '1' + '0'.repeat(k) : '一') + '，即 ' + v + '。' }; }
      var kk = pick([4, 5, 6, 7].filter(function (x) { return x < len; })), top = n.slice(0, len - kk);
      return { q: shown + ' 里面有 ( ) 个' + (kk === 4 ? '万' : names[kk]), a: String(+top.replace(/^0+/, '') || 0), exp: '把 ' + shown + ' 从右往左去掉 ' + kk + ' 位，剩下的 ' + top + ' 就是' + (kk === 4 ? '万' : names[kk]) + '的个数。' };
    }
  };

  D['rounding'] = {
    title: '四舍五入与近似数', n: 10, levels: ['精确到十位 / 百位 / 千位', '省略“万”后面的尾数', '省略“亿”后面的尾数'],
    intro: '<p><b>四舍五入</b>：看要保留的那一位的<b>下一位</b>——<b>4 及以下舍去，5 及以上进 1</b>。</p><div class="eg">3478 ≈ 3500（精确到百位：看十位 7 ≥ 5，向百位进 1）<br>3441 ≈ 3400（十位 4 &lt; 5，舍去）</div><p>省略“万”后面的尾数：看<b>千位</b>。如 345 678 ≈ 35 万（千位 5，进 1）。</p>',
    gen: function (l) {
      if (l === 0) {
        var n = rnd(1000, 99999), u = pick([[10, '十'], [100, '百'], [1000, '千']]), r = Math.round(n / u[0]) * u[0], nxt = Math.floor(n / (u[0] / 10)) % 10;
        return { q: n + ' 四舍五入到' + u[1] + '位 ≈', a: String(r), exp: '看' + (u[0] === 10 ? '个' : u[0] === 100 ? '十' : '百') + '位的 ' + nxt + '：' + (nxt >= 5 ? '≥ 5，向前进 1' : '≤ 4，舍去') + '，得 ' + r + '。' };
      }
      if (l === 1) { var m = rnd(100000, 9999999), r2 = Math.round(m / 10000), th = Math.floor(m / 1000) % 10; return { q: fmt(m) + ' 省略万位后面的尾数 ≈ ( ) 万', a: String(r2), exp: '看千位的 ' + th + '：' + (th >= 5 ? '进 1' : '舍去') + '，所以约是 ' + r2 + ' 万。' }; }
      var h = rnd(1000000000, 99999999999), r3 = Math.round(h / 100000000), th2 = Math.floor(h / 10000000) % 10;
      return { q: fmt(h) + ' 省略亿位后面的尾数 ≈ ( ) 亿', a: String(r3), exp: '看千万位的 ' + th2 + '：' + (th2 >= 5 ? '进 1' : '舍去') + '，所以约是 ' + r3 + ' 亿。' };
    }
  };

  D['estimate'] = {
    title: '估算', n: 10, levels: ['加减法估算', '乘法估算'],
    intro: '<p><b>估算</b>就是把数看成接近的整十、整百数，再快速算出大约的结果。</p><div class="eg">398 + 205 ≈ 400 + 200 = 600<br>49 × 21 ≈ 50 × 20 = 1000</div><p>估算常用来<b>检查计算结果</b>是否离谱，或判断“够不够”。</p>',
    gen: function (l) {
      var a, b, est, ex;
      if (l === 0) {
        a = rnd(121, 899); b = rnd(121, 899); var add = rnd(0, 1), ra = Math.round(a / 100) * 100, rb = Math.round(b / 100) * 100;
        if (!add && a < b) { var t = a; a = b; b = t; ra = Math.round(a / 100) * 100; rb = Math.round(b / 100) * 100; }
        est = add ? ra + rb : ra - rb;
        return { q: a + (add ? ' + ' : ' − ') + b + ' ≈ ( )', a: String(est), exp: '把两个数看成整百数：' + a + ' ≈ ' + ra + '，' + b + ' ≈ ' + rb + '，' + ra + (add ? ' + ' : ' − ') + rb + ' = ' + est + '。' };
      }
      a = rnd(12, 98); b = rnd(12, 98);
      var ra2 = Math.round(a / 10) * 10, rb2 = Math.round(b / 10) * 10; est = ra2 * rb2;
      return { q: a + ' × ' + b + ' ≈ ( )', a: String(est), exp: '把两个数看成整十数：' + a + ' ≈ ' + ra2 + '，' + b + ' ≈ ' + rb2 + '，' + ra2 + ' × ' + rb2 + ' = ' + est + '。' };
    }
  };

  D['patterns'] = {
    title: '找规律填数', n: 10, levels: ['等差数列', '倍数 / 变化的差', '综合'],
    intro: '<p>找规律的方法：<b>看相邻两个数的“差”或“倍数”</b>有什么关系。</p><div class="eg">2, 5, 8, 11, ( )：每次加 3 → 14<br>3, 6, 12, 24, ( )：每次乘 2 → 48<br>1, 2, 4, 7, 11, ( )：差依次是 1、2、3、4 → 16</div>',
    gen: function (l) {
      var k = l === 2 ? rnd(0, 4) : l === 0 ? 0 : rnd(1, 3), s, d, seq = [], i, rule, ans;
      if (k === 0) { s = rnd(1, 20); d = rnd(2, 9); for (i = 0; i < 5; i++) seq.push(s + d * i); ans = s + d * 5; rule = '每次加 ' + d; if (rnd(0, 1)) { d = -d; s = 50 + rnd(0, 30); seq = []; for (i = 0; i < 5; i++) seq.push(s + d * i); ans = s + d * 5; rule = '每次减 ' + (-d); } }
      else if (k === 1) { s = rnd(1, 5); d = pick([2, 3]); for (i = 0; i < 5; i++) seq.push(s * Math.pow(d, i)); ans = s * Math.pow(d, 5); rule = '每次乘 ' + d; }
      else if (k === 2) { s = rnd(1, 5); d = rnd(1, 2); var cur = s; for (i = 0; i < 5; i++) { seq.push(cur); cur += d + i; } ans = cur; rule = '相邻两数的差依次是 ' + d + '、' + (d + 1) + '、' + (d + 2) + '……，越来越大'; }
      else if (k === 3) { s = rnd(1, 3); for (i = 0; i < 5; i++) seq.push((s + i) * (s + i)); ans = (s + 5) * (s + 5); rule = '依次是 ' + s + '、' + (s + 1) + '……的平方（自己乘自己）'; }
      else { s = rnd(1, 3); var a = rnd(1, 3), b = a + rnd(1, 3); seq = [a, b]; for (i = 2; i < 6; i++) seq.push(seq[i - 1] + seq[i - 2]); ans = seq[5] + seq[4]; seq = seq.slice(0, 6); rule = '从第三个数起，每个数等于前两个数的和'; }
      return { q: seq.join('，') + '，（ ）', a: String(ans), exp: '规律：' + rule + '。所以下一个数是 ' + ans + '。' };
    }
  };

  D['compare'] = {
    title: '比较大小', n: 10, levels: ['整数', '带算式', '小数', '分数'],
    intro: '<p><b>比较整数</b>：位数多的大；位数相同，从最高位比起。</p><p><b>比较小数</b>：先比整数部分，再比十分位、百分位……（0.8 &gt; 0.75，因为 0.80 &gt; 0.75）。</p><p><b>比较分数</b>：同分母比分子，分子大的大；同分子比分母，分母小的反而大；分母分子都不同就先通分。</p>',
    gen: function (l) {
      var a, b, c, qa, qb, ea, eb;
      if (l === 0) { a = rnd(10, 9999); b = rnd(0, 1) ? a + rnd(-30, 30) : rnd(10, 9999); if (b < 1) b = 5; qa = a; qb = b; ea = a; eb = b; }
      else if (l === 1) { a = rnd(2, 30); b = rnd(2, 30); c = rnd(2, 30); qa = a + ' + ' + b; ea = a + b; qb = String(c + rnd(0, 20)); eb = +qb; if (rnd(0, 2) === 0) { qb = String(ea); eb = ea; } }
      else if (l === 2) { a = rnd(1, 99) / 10; b = rnd(0, 1) ? +(a + rnd(-5, 5) / 100).toFixed(2) : rnd(1, 99) / 10; if (b <= 0) b = 0.5; qa = U.r(a); qb = U.r(b); ea = a; eb = b; if (rnd(0, 3) === 0) { qb = U.r(a) + '0'; eb = a; } }
      else {
        var d = rnd(3, 12), n1 = rnd(1, d - 1), n2 = rnd(1, d - 1), d2 = rnd(0, 1) ? d : rnd(3, 12), n3 = rnd(1, d2 - 1);
        qa = U.fr(n1, d); ea = n1 / d; qb = U.fr(n3, d2); eb = n3 / d2;
        var res = Math.abs(ea - eb) < 1e-9 ? '＝' : ea > eb ? '＞' : '＜';
        return { q: qa + ' ○ ' + qb, a: res, choices: ['＞', '＜', '＝'], exp: '通分后比较：' + n1 + '/' + d + ' = ' + (n1 * d2) + '/' + (d * d2) + '，' + n3 + '/' + d2 + ' = ' + (n3 * d) + '/' + (d * d2)+ '，分子大的分数大。' };
      }
      var r = Math.abs(ea - eb) < 1e-9 ? '＝' : ea > eb ? '＞' : '＜';
      return { q: qa + ' ○ ' + qb, a: r, choices: ['＞', '＜', '＝'], exp: '先算出两边的值再比较：' + ea + ' 和 ' + eb + '，所以填 ' + r + '。' };
    }
  };

  D['rmb'] = {
    title: '认识人民币', n: 10, levels: ['元、角、分换算', '买东西算总价', '付钱找零'],
    intro: '<p><b>1 元 = 10 角</b>，<b>1 角 = 10 分</b>，所以 1 元 = 100 分。</p><div class="eg">3 元 5 角 = 35 角<br>2 元 = 200 分</div><p>买东西：总价 = 单价 × 数量；找零 = 付的钱 − 应付的钱。</p>',
    gen: function (l) {
      var a, b, c;
      if (l === 0) { a = rnd(1, 9); b = rnd(0, 9); var p = rnd(0, 2); if (p === 0) return { q: a + ' 元 ' + b + ' 角 = ( ) 角', a: String(a * 10 + b), exp: a + ' 元 = ' + a * 10 + ' 角，再加 ' + b + ' 角 = ' + (a * 10 + b) + ' 角。' }; if (p === 1) { c = a * 10 + b; return { q: c + ' 角 = ( ) 元 ( ) 角，元的个数是', a: String(a), exp: '10 角 = 1 元，' + c + ' ÷ 10 = ' + a + ' 余 ' + b + '。' }; } return { q: a + ' 元 = ( ) 分', a: String(a * 100), exp: '1 元 = 100 分，' + a + ' × 100 = ' + (a * 100) + ' 分。' }; }
      if (l === 1) { a = rnd(2, 9); b = rnd(2, 9); c = rnd(1, 9); return { q: '铅笔 ' + a + ' 元 1 支，买 ' + b + ' 支；橡皮 ' + c + ' 元。一共要', a: String(a * b + c), unit: '元', exp: a + ' × ' + b + ' = ' + (a * b) + '，再加 ' + c + '，共 ' + (a * b + c) + ' 元。' }; }
      a = rnd(3, 19); b = a + rnd(1, 15); var pay = pick([20, 50, 100]); if (pay < b) pay = 100;
      return { q: '买一本书 ' + b + ' 元，付 ' + pay + ' 元，应找回', a: String(pay - b), unit: '元', exp: pay + ' − ' + b + ' = ' + (pay - b) + ' 元。' };
    }
  };

  D['time-calc'] = {
    title: '时间的计算', n: 10, levels: ['认识时、分、秒', '经过的时间', '24 时计时法'],
    intro: '<p><b>1 时 = 60 分，1 分 = 60 秒</b>。</p><p><b>经过的时间</b> = 结束时刻 − 开始时刻。可以先算到整点，再算剩下的。</p><div class="eg">从 8:20 到 10:05：8:20 → 9:20 是 1 小时；9:20 → 10:05 是 45 分，共 1 小时 45 分。</div><p><b>24 时计时法</b>：下午 3 时 = 15 时（12 + 3）；晚上 9 时 = 21 时。</p>',
    gen: function (l) {
      var h, m, d, e, p;
      if (l === 0) { p = rnd(0, 2); if (p === 0) { h = rnd(1, 5); return { q: h + ' 时 = ( ) 分', a: String(h * 60), exp: '1 时 = 60 分，' + h + ' × 60 = ' + (h * 60) + '。' }; } if (p === 1) { m = rnd(2, 9); return { q: m + ' 分 = ( ) 秒', a: String(m * 60), exp: '1 分 = 60 秒，' + m + ' × 60 = ' + (m * 60) + '。' }; } m = rnd(1, 5) * 60 + pick([0, 0]); return { q: m + ' 秒 = ( ) 分', a: String(m / 60), exp: m + ' ÷ 60 = ' + (m / 60) + '。' }; }
      if (l === 1) {
        h = rnd(7, 14); m = rnd(0, 11) * 5; d = rnd(2, 20) * 5 + rnd(0, 3) * 60; e = h * 60 + m + d;
        function t(x) { return Math.floor(x / 60) + ':' + ('0' + x % 60).slice(-2); }
        var right = t(e); return { q: '小明 ' + t(h * 60 + m) + ' 开始写作业，写了 ' + Math.floor(d / 60) + ' 时 ' + d % 60 + ' 分，结束时间是', a: right, choices: U.opts(right, [t(e + 10), t(e - 10), t(e + 60), t(e - 60)]), exp: '开始时间加上经过的时间：' + t(h * 60 + m) + ' + ' + Math.floor(d / 60) + ' 时 ' + d % 60 + ' 分 = ' + right + '。' };
      }
      h = rnd(1, 11); var pm = rnd(0, 1);
      if (rnd(0, 1)) { var r = (pm ? h + 12 : h) + ' 时'; return { q: (pm ? '下午 ' : '上午 ') + h + ' 时 用 24 时计时法是', a: r, choices: U.opts(r, [(h + 12) + ' 时', h + ' 时', (h + 6) + ' 时', (h + 10) + ' 时']), exp: pm ? '下午的时刻加 12：' + h + ' + 12 = ' + (h + 12) + '。' : '上午的时刻不变。' }; }
      h = rnd(13, 23); var rr = (h - 12) + ' 时'; return { q: h + ' 时 是下午（晚上）几时？', a: rr, choices: U.opts(rr, [(h - 10) + ' 时', (h - 11) + ' 时', (h - 13) + ' 时', h + ' 时']), exp: '24 时计时法里，13 时以后减 12：' + h + ' − 12 = ' + (h - 12) + '。' };
    }
  };

  D['average'] = {
    title: '平均数', n: 10, levels: ['求平均数', '已知平均数求总数 / 缺的数', '应用题'],
    intro: '<p><b>平均数 = 总数 ÷ 份数</b>。平均数是“移多补少”后每份一样多的数。</p><div class="eg">3、5、10 的平均数：(3 + 5 + 10) ÷ 3 = 6</div><p>反过来：<b>总数 = 平均数 × 份数</b>。平均数一定在最大数和最小数之间。</p>',
    gen: function (l) {
      var n, avg, nums = [], i, sum;
      if (l === 0) { n = rnd(3, 5); avg = rnd(8, 40); sum = avg * n; for (i = 0; i < n - 1; i++) nums.push(rnd(Math.max(1, avg - 6), avg + 6)); var last = sum - nums.reduce(function (x, y) { return x + y; }, 0); nums.push(last); return { q: nums.join('、') + ' 的平均数是', a: String(avg), exp: '总和 ' + nums.join(' + ') + ' = ' + sum + '，' + sum + ' ÷ ' + n + ' = ' + avg + '。' }; }
      if (l === 1) { n = rnd(3, 5); avg = rnd(70, 95); sum = avg * n; for (i = 0; i < n - 1; i++) nums.push(rnd(avg - 10, avg + 8)); var miss = sum - nums.reduce(function (x, y) { return x + y; }, 0); return { q: '前 ' + (n - 1) + ' 次成绩是 ' + nums.join('、') + '，第 ' + n + ' 次考多少分，' + n + ' 次的平均分才是 ' + avg + ' 分？第 ' + n + ' 次要考', a: String(miss), unit: '分', exp: n + ' 次总分 = ' + avg + ' × ' + n + ' = ' + sum + '，前面已有 ' + (sum - miss) + '，所以第 ' + n + ' 次 = ' + sum + ' − ' + (sum - miss) + ' = ' + miss + '。' }; }
      var a = rnd(2, 6), b = rnd(2, 6), x = rnd(10, 30), y = rnd(10, 30); sum = a * x + b * y;
      if (sum % (a + b)) { x = x + (a + b) - sum % (a + b); if (sum % (a + b)) { x = 10; y = 10; } sum = a * x + b * y; }
      return { q: '一组 ' + a + ' 人，平均每人做了 ' + x + ' 道题；另一组 ' + b + ' 人，平均每人做了 ' + y + ' 道题。两组合起来平均每人做了', a: String(sum / (a + b)), unit: '道', exp: '总题数 = ' + a + ' × ' + x + ' + ' + b + ' × ' + y + ' = ' + sum + '，总人数 ' + (a + b) + '，平均 ' + sum + ' ÷ ' + (a + b) + ' = ' + (sum / (a + b)) + '。', dec: true };
    }
  };
})();
