# 学习中心（docker 版）

小学中高年级的互动学习网站：浏览器打开就能用，电脑鼠标和平板触屏都能操作。

- **首页**：分类 + 搜索，学过的工具显示星星
- **数学小工具**：口算练习、24点、分数可视化、百分比理解、3D长方体、量角器、面积与周长（星星进度存在浏览器里）
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

1. 新建 `public/math/<id>/index.html`，引入 `/css/hub.css` 和 `/js/tool.js`，用 `Hub.bar('标题')` 生成顶栏，答对后 `Hub.star('<id>', 1~3)` 记星星。
2. 在 `public/tools.json` 里加一行（id、cat、name、desc、icon、color）。刷新首页就出现。

触控提示：拖拽用 pointer 事件（鼠标和手指通用），按钮高度不小于 44px。
