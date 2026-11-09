---
name: AUI 企业级组件库
period: 2025.04 — 2025.08
summary: 10+ 产品线共用的 Vue3 组件库，从 Monorepo 工程体系到 50+ 组件的测试与文档生态。
thesis: 十个产品线各造轮子，先把组件与工程规范收进一个仓库。
context: 各产品线重复造轮子，交互与视觉不统一。目标是建设公司级组件库，统一技术栈与设计语言，服务中后台、数据可视化、移动端 H5 等多类应用。我主导组件库从架构设计到生态建设的完整过程。
flow:
  - name: Monorepo
    detail: 源码、文档、示例与工具包统一管理
  - name: 组件研发
    detail: Vue3 + TypeScript 基础组件
  - name: 质量保障
    detail: Vitest 测试与 Storybook 文档
  - name: 发布与接入
    detail: 多格式产物、按需加载与版本发布
decisions:
  - title: 先搭工程体系，再堆组件数量
    problem: 组件、文档、示例和工具各自成仓库，版本与依赖很难对齐。
    choice: 用 Lerna 与 pnpm workspace 组织 Monorepo，统一管理组件源码、文档站、示例项目与工具包。
    benefit: 一次改动可以在同一套依赖下完成构建、文档与发布，构建速度提升约 40%。
  - title: 逻辑与 UI 解耦，组件才能被复用
    problem: 业务场景差异大，把逻辑写死在模板里会导致每条产品线各改一份。
    choice: 用 Renderless 模式拆分组件逻辑与 UI，配合主题 Token 支持视觉定制。
    benefit: 同一套行为逻辑可以服务不同视觉规范，定制不必复制组件。
  - title: 测试与文档是组件库的一部分
    problem: 组件数量增长后，靠人工回归无法保证质量，接入方也缺少可信的用法说明。
    choice: 用 Vitest 与 Testing Library 覆盖渲染、交互与无障碍，Storybook 为每个组件提供 API 文档、示例与测试示例。
    benefit: 核心组件测试覆盖率达到 90% 以上，接入方可以按文档自助使用，减少口头支持。
checks:
  - 新增组件是否同时具备类型、文档、示例与测试？
  - 业务方按需引入时，产物是否真正被 Tree-shaking？
  - 主题与国际化切换，是否覆盖全部基础组件？
outcome: 组件库服务公司内部 10+ 核心产品线，统一技术栈与设计语言，组件质量与研发效率同步提升。
responsibility: 主导组件库工程体系、核心组件研发、测试与文档平台建设，并推动各产品线接入。
stack: [Vue3, TypeScript, Vite, Vitest, Lerna, pnpm, Storybook]
metrics: [50+ 组件, 10+ 产品线, 90%+ 测试覆盖率]
order: 4
---
