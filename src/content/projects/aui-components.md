---
name: AUI 企业级组件库
period: 2025.04 — 2025.08
role: 组件库负责人
audience: 公司内部 10+ 产品线的前端团队
summary: 10+ 产品线共用的 Vue3 组件库，从 Monorepo 工程体系到 50+ 组件的测试与文档生态。
thesis: 十个产品线各造轮子，先把组件与工程规范收进一个仓库。
category: infra
domain:
  - 企业级组件
  - 多产品线复用
  - 设计规范
  - 前端工程化
scenario: 服务公司内部 10+ 产品线的前端团队，让各业务按需引入统一组件、文档与工具包，减少重复造轮子。
complexity: 各产品线业务场景与视觉规范不同，组件还要同时覆盖文档、示例、测试与多格式产物；组件数量增长后不能靠人工回归。
systems:
  - 业务产品线
  - 私有 NPM 与 Monorepo
  - Storybook 文档站
  - CI 发布流水线
context: 各产品线重复造轮子，交互与视觉不统一；组件、文档、示例与工具包分散在不同仓库，版本与依赖难以对齐。
goals:
  - 统一 10+ 产品线的技术栈与设计语言。
  - 建设 50+ 组件的研发、测试、文档与发布体系。
  - 让业务方可以按需引入、按文档自助使用。
constraints:
  - 各产品线业务场景差异大，组件不能只服务一种视觉规范。
  - 组件、文档、示例、工具包原本各自成仓库。
  - 组件数量增长后，靠人工回归无法保证质量。
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
contribution:
  led:
    - Lerna + pnpm workspace 的 Monorepo 工程体系。
    - 组件协议、Renderless 模式与主题 Token 方案。
    - 测试、文档与发布流程。
  owned:
    - 表单、数据展示、导航、反馈等核心基础组件。
    - Vite 多格式产物、按需加载与 Tree-shaking 配置。
    - Storybook 文档站、Vitest 测试体系与贡献规范。
    - 主题定制与国际化能力。
  team:
    - 推动各产品线接入，收集反馈并迭代组件。
    - 组织组件评审、使用培训与文档维护。
stack: [Vue3, TypeScript, Vite, Vitest, Lerna, pnpm, Storybook]
metrics: [50+ 组件, 10+ 产品线, 90%+ 测试覆盖率]
metricsNote: 「50+ 组件」「90%+ 覆盖率」来自仓库与测试报告统计；「构建提速约 40%」为团队内部对比口径，原始记录未公开。
media:
  - Storybook 组件文档站
  - 核心组件示例与 API 表格
  - Vitest 测试报告
  - Monorepo 目录结构图
order: 4
---
