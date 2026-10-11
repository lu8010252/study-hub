/* 工具页通用：顶栏、星星(进度存浏览器)、提示音 */
(function () {
  var KEY = 'hub.stars';
  var ac;
  window.Hub = {
    stars: function () { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) { return {}; } },
    star: function (id, n) {
      try { var s = this.stars(); s[id] = Math.max(s[id] || 0, n); localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
    },
    clearStars: function () { try { localStorage.removeItem(KEY); } catch (e) {} },
    beep: function (ok) {
      try {
        ac = ac || new (window.AudioContext || window.webkitAudioContext)();
        var o = ac.createOscillator(), g = ac.createGain();
        o.frequency.value = ok ? 880 : 220; o.type = ok ? 'sine' : 'square';
        g.gain.value = 0.07; o.connect(g); g.connect(ac.destination);
        o.start(); o.stop(ac.currentTime + (ok ? 0.12 : 0.2));
      } catch (e) {}
    },
    bar: function (title) {
      var d = document.createElement('div');
      d.className = 'tbar';
      d.innerHTML = '<a href="/">← 首页</a><h1></h1>';
      d.querySelector('h1').textContent = title;
      document.body.insertBefore(d, document.body.firstChild);
      document.title = title + ' · 学习中心';
    },
    rnd: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  };
})();
