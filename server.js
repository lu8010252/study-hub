'use strict';
/* 学习中心 - 无第三方依赖的小服务器
 *  /            首页(分类 + 搜索)
 *  /math/<id>/  数学小工具(纯前端, 进度存浏览器)
 *  /english/    英语语法小课堂(数据存 DATA_DIR/english/data.json)
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const PORT = parseInt(process.env.PORT || '8080', 10);
const PUB = path.join(__dirname, 'public');
const english = require('./apps/english.js');
const homework = require('./apps/homework.js');

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json'
};
const COMPRESSIBLE = new Set(['.html', '.js', '.css', '.json', '.svg', '.txt']);
const gzCache = new Map();

function serveStatic(req, res, url) {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); return res.end(); }
  let rel;
  try { rel = decodeURIComponent(url.pathname); } catch (e) { res.writeHead(400); return res.end(); }
  if (rel.endsWith('/')) rel += 'index.html';
  const file = path.normalize(path.join(PUB, rel));
  if (!file.startsWith(PUB + path.sep)) { res.writeHead(403); return res.end(); }
  fs.stat(file, (err, st) => {
    if (!err && st.isDirectory()) { res.writeHead(301, { Location: url.pathname + '/' }); return res.end(); }
    if (err || !st.isFile()) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); return res.end('Not found'); }
    const ext = path.extname(file).toLowerCase();
    const tag = '"' + st.size.toString(16) + '-' + Math.floor(st.mtimeMs).toString(16) + '"';
    const headers = { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache', ETag: tag, Vary: 'Accept-Encoding' };
    if (req.headers['if-none-match'] === tag) { res.writeHead(304, headers); return res.end(); }
    fs.readFile(file, (e2, buf) => {
      if (e2) { res.writeHead(500); return res.end(); }
      const gz = COMPRESSIBLE.has(ext) && buf.length > 1024 && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
      if (!gz) { headers['Content-Length'] = buf.length; res.writeHead(200, headers); return res.end(req.method === 'HEAD' ? undefined : buf); }
      let c = gzCache.get(file);
      if (!c || c.tag !== tag) { c = { tag, gz: zlib.gzipSync(buf, { level: 9 }) }; gzCache.set(file, c); }
      headers['Content-Encoding'] = 'gzip'; headers['Content-Length'] = c.gz.length;
      res.writeHead(200, headers);
      res.end(req.method === 'HEAD' ? undefined : c.gz);
    });
  });
}

http.createServer((req, res) => {
  let url;
  try { url = new URL(req.url, 'http://x'); } catch (e) { res.writeHead(400); return res.end(); }
  if (url.pathname === '/healthz') { res.writeHead(200, { 'Content-Type': 'text/plain' }); return res.end('ok'); }
  if (url.pathname.startsWith('/api/homework/')) return homework.handle(req, res, url);
  if (url.pathname === '/english') { res.writeHead(301, { Location: '/english/' }); return res.end(); }
  if (url.pathname.startsWith('/english/')) {
    url.pathname = url.pathname.slice('/english'.length) || '/';
    return english.handle(req, res, url);
  }
  serveStatic(req, res, url);
}).listen(PORT, () => console.log('学习中心已启动：端口 ' + PORT));

function bye() { english.saveSync(); process.exit(0); }
process.on('SIGTERM', bye);
process.on('SIGINT', bye);
