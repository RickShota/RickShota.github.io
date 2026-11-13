# 榕的个人站 · RickRone

个人网站与作品集，基于 [Astro](https://astro.build/) 构建，部署在 GitHub Pages。

- 线上地址：<https://rickshota.github.io/>
- 定位：深耕 ToB 工业互联网的全栈开发工程师，近 4 年企业级系统经验
- 内容：项目案例、行业经验、工作经历、技术能力分层、职业方向（工业 AI / FDE）、技术探索、网页版简历、求职与合作
- 技术栈：Astro 7 · TypeScript · 原生 CSS · Markdown 内容集合

## 本地开发

```bash
npm install
npm run dev      # 开发服务器，默认 http://localhost:4321
npm run build    # 构建静态文件到 dist/
npm run preview  # 预览构建结果
npm run check    # Astro + TypeScript 类型检查
```

## 内容维护

| 内容 | 位置 |
| --- | --- |
| 个人信息、求职意向、工作经历、技术能力分层、技术探索 | `src/data/site.ts` |
| 项目案例（Markdown + frontmatter） | `src/content/projects/` |
| 简历页文案与打印样式 | `src/pages/resume.astro` |
| 技术探索页 | `src/pages/lab.astro` |
| 求职与合作文案 | `src/pages/services.astro` |
| 图片资源 | `public/images/` |
| 页面样式 | `src/styles/global.css`、各组件内 scoped style |

> `docs/` 目录用于存放不公开的个人资料（简历原稿等），已在 `.gitignore` 中忽略，不会上传。
> `public/images/` 中保留了一些旧站图片，当前页面未引用；如确认不再需要可单独清理。

## 项目案例结构

案例页按「业务场景 → 背景与目标 → 我的职责 → 技术方案与核心难点 → 项目成果 → 验证关注点 → 技术栈 → 界面与资料」组织。每篇案例区分：

- **主导设计**：方案、架构与关键取舍
- **独立负责**：具体由个人完成的模块
- **协作参与**：与后端、业务方或团队共同完成的部分

项目 frontmatter 字段：

```yaml
---
name: 项目名
period: 2024.08 — 2025.03
role: 跨端应用负责人
audience: 面向的用户或团队
summary: 列表页的一句话摘要
thesis: 详情页开头的核心问题
category: ai | business | infra | cross-platform
domain: ['行业 / 业务场景标签']
scenario: 项目服务的业务场景、业务角色与真实问题
complexity: 业务流程与系统约束的复杂性
systems: ['需要交互的其他系统']
context: 项目背景与原有困难
goals: ['项目目标']
constraints: ['技术或业务约束']
flow: [{ name: 环节名, detail: 说明 }]
decisions: [{ title: 取舍标题, problem: 难点, choice: 方案, benefit: 取舍 }]
checks: ['验证关注点']
outcome: 这套设计解决了什么
responsibility: 我的职责概述
contribution:
  led: ['主导设计']
  owned: ['独立负责']
  team: ['协作参与']
stack: [技术栈]
metrics: [成果指标]
metricsNote: 指标口径说明
media: ['待补充的截图 / 录屏清单']
order: 1
---
```

### 关于截图与指标

- 公司项目界面需要脱敏，当前不展示真实截图，也不使用模拟界面冒充产品截图。
- 案例中的流程图来自项目流程整理，已明确标注为技术示意。
- 指标来自项目内部口径；`metricsNote` 会说明是接入场景数、性能验证口径还是业务统计。无法公开复核的数据不会补造。
- 学习中的技术（RAG、Agent / MCP、工业通信协议等）在「学习与技术探索」层展示，不写成生产经验。

## 目录结构

```text
src/
  components/       导航、页脚、项目行、技术能力分层、行业经验、职业方向、案例图示
  content/projects/ 项目案例 Markdown
  data/site.ts      站点信息、经历、能力分层、技术探索
  layouts/          页面骨架（head / SEO / Open Graph / JSON-LD / 主题初始化）
  pages/            首页、项目案例、关于我、简历、技术探索、求职与合作、404
  styles/           全局样式与设计 token
public/
  images/           静态图片与 Open Graph 封面
  favicon.svg       站点图标
  robots.txt        搜索引擎说明
.github/workflows/  GitHub Pages 自动部署
```

## 部署

推送到 `main` 分支后，GitHub Actions 会构建并发布到 GitHub Pages：

1. 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**（首次需要设置一次）。
2. 之后每次推送 `main` 触发 `.github/workflows/deploy.yml` 自动构建部署。

站点配置了：

- `@astrojs/sitemap` 生成 `sitemap-index.xml`
- `robots.txt` 指向 sitemap
- 每页 canonical、description、Open Graph 与 Twitter Card
- 首页 Person / WebSite JSON-LD

## 设计说明

- 配色：浅青灰纸面 + 墨绿近黑 + 朱砂点缀，暗色模式为深墨绿底。
- 字体：标题 Fraunces + 中文宋体回退，正文 Public Sans + 系统中文字体。
- 首页右侧的工业管线式示意，与「工业互联网 / 工程化」的定位呼应，是页面唯一的装饰性图形。
- 技术能力按「项目实战 / 有使用经验 / 学习与技术探索」三层展示，不使用技术 Logo 墙。

## 历史

旧版 Hexo 站点位于 `2905858` 及更早的提交中，新站从该基线重建。
