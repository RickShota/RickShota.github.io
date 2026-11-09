# 榕的Blog · RickRone

个人网站与博客，基于 [Astro](https://astro.build/) 构建，部署在 GitHub Pages。

- 线上地址：<https://rickshota.github.io/>
- 技术栈：Astro 7 · TypeScript · 原生 CSS · Markdown 内容集合

## 本地开发

```bash
npm install
npm run dev      # 开发服务器，默认 http://localhost:4321
npm run build    # 构建静态文件到 dist/
npm run preview  # 预览构建结果
```

## 内容维护

| 内容 | 位置 |
| --- | --- |
| 个人信息、工作经历、技能、开源项目 | `src/data/site.ts` |
| 项目案例（Markdown + frontmatter） | `src/content/projects/` |
| 文章（Markdown + frontmatter） | `src/content/blog/` |
| 图片资源 | `public/images/` |
| 页面样式 | `src/styles/global.css`、各组件内 scoped style |

> `docs/` 目录用于存放不公开的个人资料（简历等），已在 `.gitignore` 中忽略，不会上传。

文章 frontmatter 字段：

```yaml
---
title: 文章标题
description: 一句话摘要，用于列表与 SEO
pubDate: 2026-01-01
tags: ['标签']
---
```

项目案例 frontmatter 字段（案例页按「问题与约束 → 核心链路 → 架构取舍 → 结果 → 验证关注点 → 职责」组织）：

```yaml
---
name: 项目名
period: 2024.08 — 2025.03
summary: 列表页的一句话摘要
thesis: 详情页开头的核心问题
category: ai | business | infra | cross-platform
context: 问题与约束
flow: [{ name: 环节名, detail: 说明 }]
decisions: [{ title: 取舍标题, problem: 难点, choice: 方案, benefit: 考虑 }]
checks: ['验证关注点']
outcome: 这套设计解决了什么
responsibility: 我的职责
stack: [技术栈]
metrics: [成果]
order: 1
---
```

## 目录结构

```text
src/
  components/      导航、页脚、项目行、文章行
  content/blog/    文章 Markdown
  data/site.ts     站点与个人信息
  layouts/         页面骨架（head/SEO/主题初始化）
  lib/             工具函数
  pages/           首页、文章、关于、404、RSS
  styles/          全局样式与设计 token
public/
  images/          静态图片
.github/workflows/ GitHub Pages 自动部署
```

## 部署

推送到 `main` 分支后，GitHub Actions 会构建并发布到 GitHub Pages：

1. 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**（首次需要设置一次）。
2. 之后每次推送 `main` 触发 `.github/workflows/deploy.yml` 自动构建部署。

## 设计说明

- 配色：浅青灰纸面 + 墨绿近黑 + 朱砂点缀，暗色模式为深墨绿底。
- 字体：标题 Fraunces + 中文宋体回退，正文 Public Sans + 系统中文字体。
- 首页右侧的手绘曲线取意「榕」的气生根，是页面唯一的装饰元素。

## 历史

旧版 Hexo 站点位于 `2905858` 及更早的提交中，新站从该基线重建。
