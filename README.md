# 榕的Blog · Rick Shota

个人博客「榕的Blog」的静态站点仓库，使用 [Hexo](https://hexo.io/) 6.1.0 生成，托管在 GitHub Pages。

- **线上地址**：<https://rickshota.github.io/>
- **作者**：Shota榕（[@RickShota](https://github.com/RickShota)）
- **简介**：君子知命不惧，日日自新

## 仓库说明

本仓库存放的是 Hexo **生成后的静态文件**（HTML / CSS / JS / 图片等），仅用于 GitHub Pages 发布，不是博客源文件。文章内容（Markdown）与 Hexo 配置在独立的源仓库中维护。

> 请勿直接手工修改本仓库中的生成文件，下次部署会被覆盖。

## 更新流程

1. 在 Hexo 源仓库中写作并生成站点：`hexo clean && hexo generate`
2. 将 `public/` 下的产物发布到本仓库的 `main` 分支（例如通过 `hexo deploy`，或手动提交推送）
3. GitHub Pages 会自动从 `main` 构建发布，稍等片刻即可在 <https://rickshota.github.io/> 看到更新

## 目录结构

| 路径 | 说明 |
| --- | --- |
| `index.html` | 站点首页 |
| `2022/` | 文章页面（按 `/年/月/日/标题/` 的 permalink 结构存放） |
| `archives/` | 归档页 |
| `categories/` | 分类页 |
| `tags/` | 标签页 |
| `about/` `myself/` `link/` | 关于 / 个人 / 友链页面 |
| `css/` `js/` `img/` | 样式、脚本与图片资源 |
| `manifest.json` `service-worker.js` | PWA 配置与离线缓存（Workbox） |

## 分支与发布

- `main`：唯一分支，同时是 GitHub Pages 的发布源。
- 向本仓库推送的内容会直接出现在线上站点，请确保只推送生成产物（以及本 README）。

## 版权

博客文章版权归作者所有；页面模板与第三方资源遵循各自许可证。
