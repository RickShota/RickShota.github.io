# 榕的个人站 · RickRone

个人网站与作品集，基于 [Astro](https://astro.build/) 构建，部署在 GitHub Pages。

- 线上地址：<https://rickshota.github.io/>（中文）· <https://rickshota.github.io/en/>（English）
- 定位：深耕 ToB 工业互联网的全栈开发工程师，3 年+ 企业级系统经验
- 内容：项目案例、行业经验、工作经历、技术能力分层、职业方向（工业 AI / FDE）、技术探索、网页版简历、求职与合作
- 语言：中文（根路径）与 English（`/en/`）双语，共享同一套页面结构与样式
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
| 个人信息、求职意向、工作经历、技术能力分层、技术探索（中文） | `src/data/site.ts` |
| 同上（English） | `src/data/site.en.ts` |
| 项目案例（Markdown + frontmatter，中文） | `src/content/projects/` |
| 项目案例（English） | `src/content/projects/en/` |
| 页面视图与页面级文案 | `src/views/*.astro` |
| 路由（中文在根路径，英文在 `src/pages/en/`） | `src/pages/` |
| 语言工具（路径前缀、语言切换、项目 slug） | `src/i18n/index.ts` |
| 简历页文案与打印样式 | `src/views/ResumeView.astro` |
| 技术探索页 | `src/views/LabView.astro` |
| 求职与合作文案 | `src/views/ServicesView.astro` |
| 联系页（邮件与微信二维码） | `src/views/ContactView.astro`，路由 `/contact/` 与 `/en/contact/` |
| 图片资源 | `public/images/` |
| 页面样式 | `src/styles/global.css`、各组件内 scoped style |
| 右下角彩蛋动画 | `src/components/SwarmEgg.astro`（依赖 `cursor-build`） |

### 双语约定

- 中文页面位于根路径（`/`、`/about/`、`/projects/<slug>/`），英文页面统一加 `/en/` 前缀。
- 页面结构只维护一份：`src/views/` 中的视图组件接收 `lang`，从中英文数据文件与内置文案对象取内容；`src/pages/` 下的路由文件只负责传入语言。
- 英文项目案例放在 `src/content/projects/en/`，文件名（不带 `en/`）与中文案例保持一致，用于配对 slug 与前后篇导航。
- 导航语言切换按当前路径映射：`/about/` ↔ `/en/about/`；`BaseLayout` 输出 `hreflang`（zh-CN / en / x-default）。
- 修改内容时中英文需同步：个人数据改 `site.ts` 与 `site.en.ts`，案例改两个 `projects` 目录，页面文案改对应视图组件内的 `copy` 对象。

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
  content/projects/ 项目案例 Markdown（中文；en/ 下为英文）
  data/             site.ts（中文）、site.en.ts（英文）、index.ts（按语言取数据）
  i18n/             语言类型、路径前缀、语言切换与项目 slug 工具
  layouts/          页面骨架（head / SEO / hreflang / Open Graph / JSON-LD / 主题初始化）
  views/            页面视图与页面级双语文案（首页、关于、简历、探索、合作、案例）
  pages/            路由：中文页面 + en/ 英文页面 + 404
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

- `@astrojs/sitemap` 生成 `sitemap-index.xml`（含中英文全部页面）
- `robots.txt` 指向 sitemap
- 每页 canonical、description、Open Graph 与 Twitter Card
- 中英文页面的 `hreflang` 与 `og:locale` 标注
- 首页 Person / WebSite JSON-LD

## 设计说明

- 配色：设备冷灰 + 炭黑 + 信号橙；深浅色主题使用同一套中性色与橙色状态色。
- 字体：本地托管 Public Sans + 中文黑体，标题使用粗字重；等宽字体用于日期、编号与技术标记。
- 图标：本地打包 Bootstrap Icons 字体图标，通过 `src/components/Icon.astro` 引用；界面箭头使用图标，不使用 Unicode 文本符号。
- 首页按个人定位、项目档案、工程能力、经历与探索、联系五段组织；二次元头像保留在工牌式信息面板中。
- 项目展示包含 3 个精选案例与 3 个档案列表，全部支持分类筛选。技术图示来自案例内容，明确标识为示意，不冒充产品截图。
- 完整技术分层保留在关于页与简历页；学习中的 AI 与工业协议方向继续单独标注。
- 动效仅包括首屏入场、按钮与卡片反馈、能力区文字强调；支持减少动态效果设置，不使用循环闪烁或滚动劫持。
- 视窗右下角固定一个 SVG 彩蛋，手动点击后才加载并播放 `cursor-build` 的页面重建动画：自动缓慢滚动整页、构建跟随滚动推进，关闭声音与内置 HUD，动画期间按钮隐藏；开启「减少动态效果」时按钮隐藏。

## 历史

旧版 Hexo 站点位于 `2905858` 及更早的提交中，新站从该基线重建。
