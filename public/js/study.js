/* 单词/句子练习共用：本地存储、间隔复习(轻量 FSRS)、发音、统计、庆祝动效
 * FSRS 调度思路参考自 keykey 的轻量实现(FSRS-4.5 默认参数)，数据只存浏览器 */
(function () {
  var W = [0.4072, 1.1829, 3.1262, 15.4722, 7.2102, 0.5316, 1.0651, 0.0234, 1.6160, 0.1544,
    1.0824, 1.9813, 0.0953, 0.2975, 2.2042, 0.2407, 2.9466, 0.5034, 0.6567];
  var DECAY = -0.5, FACTOR = 19 / 81, RET = 0.9, DAY = 86400000, MIN = 60000;
  function clamp(v, a, b) { return Math.min(b, Math.max(a, v)); }
  function initD(r) { return clamp(W[4] - (r - 3) * W[5], 1, 10); }
  function intervalDays(s) { return clamp(Math.round(s / FACTOR * (Math.pow(RET, 1 / DECAY) - 1)), 1, 36500); }
  function retr(el, s) { return s ? Math.pow(1 + FACTOR * el / s, DECAY) : 0; }
  /* prev: {stability,difficulty,reps,lapses,last_review} 或 null；rating 1=忘了 2=吃力 3=顺利 4=轻松 */
  function schedule(prev, rating, now) {
    prev = prev || {}; now = now || Date.now();
    var s, d, lapses = prev.lapses || 0, reps = (prev.reps || 0) + 1;
    if (!prev.reps) { d = initD(rating); s = Math.max(0.1, W[rating - 1]); if (rating === 1) lapses = 1; }
    else {
      var r = retr(Math.max(0, (now - (prev.last_review || now)) / DAY), prev.stability);
      d = clamp(prev.difficulty - W[6] * (rating - 3), 1, 10);
      d = clamp(W[7] * initD(4) + (1 - W[7]) * d, 1, 10);
      if (rating === 1) {
        lapses++;
        s = W[11] * Math.pow(d, -W[12]) * (Math.pow(prev.stability + 1, W[13]) - 1) * Math.exp(W[14] * (1 - r));
      } else {
        s = prev.stability * (1 + Math.exp(W[8]) * (11 - d) * Math.pow(prev.stability, -W[9]) * (Math.exp(W[10] * (1 - r)) - 1));
      }
      s = clamp(s, 0.1, 36500);
    }
    var days = rating === 1 ? 0 : intervalDays(s);
    return { stability: s, difficulty: d, reps: reps, lapses: lapses, last_review: now, due: rating === 1 ? now + 10 * MIN : now + days * DAY, days: days };
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(t) { var d = new Date(t || Date.now()); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  window.Study = {
    esc: function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); },
    shuf: function (a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; },
    /* ---- 本机数据 ---- */
    load: function (key) {
      var d = {};
      try { d = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch (e) {}
      d.wrong = d.wrong || {}; d.prog = d.prog || {}; d.set = d.set || {}; d.cards = d.cards || {}; d.days = d.days || {};
      return d;
    },
    save: function (key, d) { try { localStorage.setItem(key, JSON.stringify(d)); } catch (e) {} },
    /* ---- 间隔复习 ---- */
    rate: function (D, k, rating, meta) {
      var c = D.cards[k], out = schedule(c ? { stability: c.s, difficulty: c.d, reps: c.r, lapses: c.l, last_review: c.t } : null, rating);
      D.cards[k] = { s: out.stability, d: out.difficulty, r: out.reps, l: out.lapses, t: out.last_review, due: out.due, z: (meta && meta.zh) || (c && c.z) || '', p: (meta && meta.ph) || (c && c.p) || '' };
      return out;
    },
    label: function (rating, days) {
      if (rating === 1) return '10 分钟后';
      if (days <= 1) return '明天';
      if (days >= 365) return '约 ' + Math.round(days / 365) + ' 年后';
      return days + ' 天后';
    },
    due: function (D) { var n = Date.now(); return Object.keys(D.cards).filter(function (k) { return D.cards[k].due <= n; }).sort(function (a, b) { return D.cards[a].due - D.cards[b].due; }); },
    /* ---- 每日统计 ---- */
    log: function (D, n) { var k = dayKey(); D.days[k] = (D.days[k] || 0) + (n || 1); },
    today: function (D) { return D.days[dayKey()] || 0; },
    streak: function (D) {
      var n = 0, t = Date.now();
      if (!D.days[dayKey(t)]) t -= DAY;
      while (D.days[dayKey(t)]) { n++; t -= DAY; }
      return n;
    },
    /* ---- 发音 ---- */
    _au: null,
    say: function (text, acc) {
      var self = this;
      try { if (self._au) { self._au.pause(); self._au = null; } } catch (e) {}
      function tts() { try { if (!window.speechSynthesis) return; speechSynthesis.cancel(); var m = new SpeechSynthesisUtterance(text); m.lang = acc === 'us' ? 'en-US' : 'en-GB'; m.rate = 0.85; speechSynthesis.speak(m); } catch (e) {} }
      try {
        var a = new Audio('https://dict.youdao.com/dictvoice?audio=' + encodeURIComponent(text) + '&type=' + (acc === 'us' ? 2 : 1));
        self._au = a; var p = a.play(); if (p && p.catch) p.catch(tts); a.onerror = tts;
      } catch (e) { tts(); }
    },
    /* ---- 撒花 ---- */
    confetti: function (box) {
      var em = ['⭐', '✨', '🎉', '💜', '🌟', '🎈'], h = '';
      for (var i = 0; i < 28; i++) {
        var x = Math.round(Math.random() * 100), dx = Math.round(Math.random() * 160 - 80), dl = (Math.random() * 0.5).toFixed(2), r = Math.round(Math.random() * 360);
        h += '<i style="left:' + x + '%;--dx:' + dx + 'px;--r:' + r + 'deg;animation-delay:' + dl + 's">' + em[i % em.length] + '</i>';
      }
      var d = document.createElement('div'); d.className = 'cf'; d.innerHTML = h; box.appendChild(d);
      setTimeout(function () { if (d.parentNode) d.parentNode.removeChild(d); }, 2600);
    },
    stars: function (acc, hi) { return acc >= (hi || 95) ? 3 : acc >= 80 ? 2 : acc > 0 ? 1 : 0; }
  };
})();
