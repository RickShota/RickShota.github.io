---
name: 物流智慧物资管理系统
period: 2025.07 — 2026.01
summary: 业务不停摆的前提下把 Vue2 老系统迁移到 Vue3，并加上 AI 智能分析，把操作工具升级为分析平台。
thesis: 业务不停摆，把 Vue2 老系统整体搬到 Vue3，再长出一层 AI 分析。
category: business
context: 原系统基于 Vue2 + Options API 构建，代码组织混乱、TypeScript 支持不完整、性能瓶颈明显。目标是在业务不停摆的前提下完成 Vue3 迁移，并引入 AI 智能分析能力，把系统从操作型工具升级为分析决策平台。我主导这次迁移与智能化改造。
flow:
  - name: 存量系统
    detail: Vue2 + Options API，业务持续运行
  - name: 技术栈迁移
    detail: Composition API 重写与类型体系
  - name: 实时通信
    detail: SSE 轻通知与 WebSocket 大屏
  - name: AI 分析
    detail: 自然语言生成智能报告
decisions:
  - title: 迁移不是翻译代码，是重建约束
    problem: 原系统有大量隐式类型与职责混杂的组件，逐行翻译会把旧问题带进新栈。
    choice: 用 Composition API 重写业务组件，同时建立严格的 TypeScript 类型体系，按模块推进迁移。
    benefit: 迁移完成后类型安全与可维护性同步改善，而不是只换了一套语法。
  - title: 按消息类型拆实时通道
    problem: 审批与库存预警是轻量通知，大屏监控和多人协同需要双向高频通信，一套方案很难同时合适。
    choice: 轻量通知走 SSE，大屏与协同走 WebSocket，并做连接池管理与断线重连，适配工业网络。
    benefit: 两类场景各用合适的通道，弱网下连接可以恢复，高频消息也不会拖垮通知链路。
  - title: AI 报告要能落到业务动作
    problem: 固定报表只能看数，异常出现后仍要靠人判断原因与处理方式。
    choice: 结合时序异常检测与大模型生成可能原因、影响范围与处理建议，支持一键生成标准工单。
    benefit: 分析结果直接进入工单闭环，从看到异常推进到处理异常。
checks:
  - 迁移后的业务模块，行为与旧系统是否一致？
  - 网络抖动或断连时，SSE 与 WebSocket 是否按预期恢复？
  - AI 报告的原因与建议，能否追溯到对应数据与异常检测结果？
outcome: 系统完成技术栈与架构重构，固定报表升级为可交互的智能分析报告，老系统的性能与可维护性问题得到系统性解决。
responsibility: 主导 Vue2 到 Vue3 的迁移与前端架构重写，设计 AI 智能分析报告、混合实时通信与工业 PAD 适配方案。
stack: [Vue3, TypeScript, Vite, Pinia, Ant Design Vue, ECharts, SSE, WebSocket]
metrics: [Vue2 → Vue3 全量迁移, 双通道实时通信, 弱网离线可用]
order: 2
---
