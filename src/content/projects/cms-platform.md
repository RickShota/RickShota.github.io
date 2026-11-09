---
name: 统一内容管理 CMS 中台
period: 2025.08 — 2026.02
summary: 多类内容场景共用一套编辑、版本与发布流，内容资产集中管理、可追溯。
thesis: 多个内容场景各建一套后台，先把内容模型与发布流统一。
context: 企业官网、帮助中心、博客社区、产品文档等场景各自维护内容系统，能力重复、体验割裂。目标是建设统一 CMS 中台，为企业内部多个内容场景提供一致、高效、可扩展的管理服务。我负责中台前端从 0 到 1 的建设。
flow:
  - name: 内容生产
    detail: 富文本与 Markdown 双模式
  - name: 协作与版本
    detail: 多人编辑、草稿与版本回溯
  - name: 审核与发布
    detail: 多级审核、变更对比、定时发布
  - name: 多站点接入
    detail: 统一内容服务、权限与站点管理
decisions:
  - title: 用一层内容服务隔离存储差异
    problem: 不同站点使用不同存储与内容格式，业务组件直接依赖后端会让切换成本扩散。
    choice: 封装 useContentService，用泛型与策略模式统一文章、页面、多媒体与分类的调用接口，并用 React Query 管理缓存与刷新。
    benefit: 存储后端或内容格式调整时，变更集中在一层，页面组件不需要跟着改。
  - title: 版本管理先算存储成本
    problem: 每次保存都存全量快照，版本越多存储增长越快。
    choice: 草稿与发布分离，版本回溯结合差异算法与快照策略。
    benefit: 保留可回溯的版本历史，同时避免内容量增长带来无上限的存储开销。
  - title: 长列表性能决定编辑体验
    problem: 内容列表与媒体库数据量大，滚动卡顿会直接影响日常操作。
    choice: 用 react-window 与 react-virtualized 做虚拟滚动，只渲染可视区域。
    benefit: 万级数据下保持 60fps 滚动，编辑与检索不再被列表拖慢。
checks:
  - 切换存储后端或内容格式时，页面组件是否需要同步修改？
  - 版本回溯与变更对比，是否覆盖草稿、发布与审核状态？
  - 多人同时编辑时，保存与刷新是否会互相覆盖？
outcome: 多类内容场景统一接入，编辑体验与发布效率提升，内容资产集中管理、可追溯。
responsibility: 负责 CMS 中台前端从 0 到 1 的架构与核心功能，包括编辑体验、内容服务层、版本审批流与管理端。
stack: [React 18, TypeScript, Next.js, Tailwind CSS, Ant Design, Zustand, React Query, Docker]
metrics: [万级内容流畅管理, 多人协作编辑, 多站点统一接入]
order: 3
---
