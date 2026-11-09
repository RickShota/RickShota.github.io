---
name: AUI 企业级组件库
period: 2025.04 — 2025.08
summary: 公司级 Vue3 组件库，从 Monorepo 工程体系到 50+ 组件的研发与生态建设。
stack: [Vue3, TypeScript, Vite, Vitest, Lerna, pnpm, Storybook]
metrics: [50+ 组件, 10+ 产品线, 90%+ 测试覆盖率]
order: 4
---

## 背景

各产品线重复造轮子，交互与视觉不统一。目标是建设公司级组件库，统一技术栈与设计语言，服务中后台、数据可视化、移动端 H5 等多类应用。

## 我做了什么

- 设计基于 Lerna + pnpm workspace 的 Monorepo 工程体系，统一管理组件源码、文档站点、示例项目与工具包，构建速度提升约 40%。
- 基于 Vue3 Composition API 与 TypeScript 研发表单、数据展示、导航、反馈等基础组件，用 Renderless 模式解耦组件逻辑与 UI。
- 搭建工具链：ESLint + Prettier 统一代码规范，commitlint + husky 做提交前校验，开发阶段实时发现问题。
- 基于 Storybook 搭建组件文档与可视化开发平台，每个组件提供 API 文档、交互式示例与测试示例。
- 用 Vitest + Testing Library 构建覆盖渲染、交互、无障碍访问的测试体系，核心组件测试覆盖率达 90%+。
- 配置多格式产物（ESM / CJS / UMD），通过 Tree-shaking、代码分割与按需加载控制包体积。
- 实现国际化与主题定制系统，支持明暗主题切换与自定义 Design Token。
- 编写组件开发、贡献与性能优化指南，组织培训与代码评审，推动组件化开发文化。

## 结果

组件库服务公司内部 10+ 核心产品线，统一了技术栈与设计语言，组件质量与研发效率同步提升。
