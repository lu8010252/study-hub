# 学习中心（docker 版）

小学中高年级的互动学习网站：浏览器打开就能用，电脑鼠标和平板触屏都能操作。

- **首页**：按**年级**（1~6 年级）和**专题**（数与代数 / 图形与几何 / 统计与概率 / 应用与思维）筛选，支持关键词搜索（工具名、知识点、别名都能搜到），学过的工具显示星星
- **数学小工具 65 个**：
  - **45 个练习题型**（通用练习引擎）：每个都有「知识点讲解」→ 分难度 → 10 题（数字键盘 / 选择题，电脑键盘也能输入）→ 错题解析 → 星星；涵盖 10 以内加减到分数乘除、小数、因数倍数、单位换算、百分数、比和比例、解方程、应用题（行程/鸡兔同笼/工程）、周长面积体积、圆与圆柱圆锥、角、统计与可能性等
  - **20 个互动演示**：钟表、数轴、九九乘法表、计数器、24 点、分数可视化、百分比涂格子、3D 长方体、量角器、面积周长、轴对称、三角形内角和、圆的探索、平行四边形变长方形、转盘与可能性、条形统计图、汉诺塔、年历、数独等（拖拽用指针事件，鼠标和手指通用）
  - 星星进度存在浏览器里
- **英语语法小课堂**：人教PEP四年级对齐，约 810 道题，学习者档案 / 错题本 / 学习报告（数据存在服务器 `/data`，可清除、可备份）

服务端只用 Node 自带模块，构建时不需要 npm install。

## 部署

新建一个目录，放入 `docker-compose.yml`（或贴到 1Panel 的编排里）：

```yaml
services:
  study-hub:
    image: ghcr.io/lu8010252/study-hub:latest
    container_name: study-hub
    restart: unless-stopped
    ports:
      - "8080:8080"
    environment:
      - TZ=Asia/Shanghai
      - ADMIN_PIN=      # 家长密码，留空=不设；设置后英语模块清除/删除/导入需要输入
    volumes:
      - ./data:/data
```

`docker compose up -d`，访问 `http://服务器IP:8080`。更新：`docker compose pull && docker compose up -d`。
镜像由 GitHub Actions 在每次推送 main 后自动构建（amd64 / arm64）。

## 路径

| 路径 | 内容 |
| --- | --- |
| `/` | 首页 |
| `/math/<id>/` | 数学小工具（纯前端） |
| `/english/` | 英语语法小课堂（带服务端存档） |

## 加一个新工具

工具清单的源头是 `tools/registry.js`，改完运行 `node tools/build.js` 会生成 `public/tools.json`（首页用）和各练习题型页面。

- **加一个练习题型**：在 `public/js/qd-*.js` 里加 `Quiz.defs['id'] = { title, intro(知识点html), levels, gen(level) }`（gen 返回 `{q, a, exp, ...}`，写法见 `public/js/quiz.js` 顶部注释），再在 `registry.js` 里加一行（类型 `quiz`）。
- **加一个互动演示**：新建 `public/math/<id>/index.html`，引入 `/css/hub.css` 和 `/js/tool.js`，用 `Hub.bar('标题')` 生成顶栏，答对后 `Hub.star('<id>', 1~3)` 记星星；在 `registry.js` 里加一行（类型 `page`）。

触控提示：拖拽用 pointer 事件（鼠标和手指通用），按钮高度不小于 44px。
