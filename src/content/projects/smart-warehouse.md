---
name: 移动端智慧仓储
period: 2024.08 — 2025.03
summary: 面向仓库现场的 uni-app 跨端应用，扫码、离线作业与运输追踪在弱网下依然可用。
thesis: 仓库现场没有稳定网络，应用得先假设会断网。
category: cross-platform
context: 物流现场作业依赖纸质单据与桌面系统，效率低、信息滞后。目标是做一套覆盖 Android、iOS 与 H5 的移动仓储应用，让现场人员在手持设备上完成全部作业流程。我主导跨端应用的设计与开发。
flow:
  - name: 现场作业
    detail: 入库、出库、盘点与签收
  - name: 扫码识别
    detail: 摄像头与蓝牙扫描枪双模式
  - name: 离线与同步
    detail: 本地缓存、断网可用、增量同步
  - name: 运输追踪
    detail: 实时定位、轨迹回放与电子围栏
decisions:
  - title: 离线不是降级，是默认路径
    problem: 仓库与运输途中网络不稳定，依赖在线请求会让关键作业直接中断。
    choice: 用 IndexedDB 与 SQLite 缓存业务数据与操作记录，断网时照常扫描与交接，恢复后增量同步。
    benefit: 出入库与盘点不再被网络状态阻断，数据在恢复后补齐。
  - title: 扫码准确率靠多重校验
    problem: 现场条码磨损、手抖和重复扫描都会带来错误数据。
    choice: 摄像头与蓝牙扫描枪双模式，配合扫描防抖、本地校验与自动纠错。
    benefit: 扫码准确率达到 99.8%，日均支撑 5 万次以上扫码作业。
  - title: 多端一致不等于多端相同
    problem: Android、iOS 与 H5 的相机、定位和文件能力不同，一套代码直接跑会处处例外。
    choice: 用 uni-app 条件编译处理平台差异，按端做性能与交互适配，H5 首屏控制在 2 秒内。
    benefit: 一套代码交付三端，同时保留各端的原生体验。
checks:
  - 断网期间完成的操作，恢复后是否完整、无重复地同步？
  - 弱光、磨损条码与连续扫描下，识别结果是否可靠？
  - 低端设备上，扫码、地图与列表是否仍保持可用帧率？
outcome: 现场作业效率提升 50% 以上，日均支持 5 万次以上扫码作业，弱网与离线环境下依然可用。
responsibility: 主导 uni-app 跨端应用架构与核心作业模块，负责离线体系、扫码链路、运输追踪与性能优化。
stack: [uni-app, Vue3, TypeScript, Pinia, uView UI, ECharts, 高德地图 SDK, WebSocket]
metrics: [作业效率 +50%, 日均 5 万+ 次扫码, 扫码准确率 99.8%]
order: 6
---
