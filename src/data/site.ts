export const site = {
  name: '榕',
  nameEn: 'RickRone',
  title: '深耕 ToB 工业互联网的全栈开发工程师',
  jobTitle: 'ToB 工业互联网全栈开发工程师',
  location: '安徽',
  github: 'https://github.com/RickShota',
  email: 'rickrone@qq.com',
  avatar: '/images/headportrait.jpg',
  intro:
    '近 4 年 ToB 企业级软件研发经验，长期围绕物流、仓储与物资管理场景建设复杂 B 端系统；Vue / React / TypeScript 前端为主，能独立完成 Java / Spring Boot 接口开发、Redis 缓存、RabbitMQ 异步链路与 Docker 容器化部署。持续关注工业 AI 与企业 AI 应用落地，FDE 是长期发展方向。',
  now: '在职，负责企业级产品全栈开发与工程化基建；近一年在 AI 中台项目中承担前端与部分 Spring Boot 后端开发，并持续探索工业 AI 与企业 AI 应用落地。',
  availability: '优先寻找全职机会，也接受远程协作与项目制合作',
  resumeUpdated: '2026.11',
};

export const jobTargets = [
  '全栈开发工程师（前端为主）',
  '前端开发工程师（ToB / 工业互联网）',
  'AI 应用开发工程师',
  'FDE / 工业软件方向',
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
  keywords: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: '某企业软件服务商',
    role: '全栈开发工程师 · 前端方向',
    period: '2025.04 — 至今',
    summary: '负责企业级产品线全栈开发与团队工程化、容器化基建，推动 TypeScript、Composition API 与微前端落地；参与物流物资、CMS 与 AI 中台等 ToB 项目。',
    points: [
      '主导应用级产品线全栈开发，基于 Vben Admin（Vue3 + Vite）负责数据可视化、工作流引擎、权限中心等核心模块，并承担部分后端接口研发，覆盖从原型到生产交付的完整闭环。',
      '主导团队工程化与容器化基建：定制 CLI 脚手架、统一代码规范与提交校验，搭建私有 NPM、组件库文档站与 CI/CD 流水线，推动 Docker 构建与自动化部署，保障多环境一致交付。',
      '持续演进技术栈：扩展 Vben Admin 底层模块、维护内部组件库与工具库，推动 TypeScript 与 Composition API 深度应用，落地微前端支撑多团队并行开发。',
      '在 AI 智能化中台项目中承担前端与部分 Spring Boot 后端开发，落地 JWT + RBAC 权限体系与 RabbitMQ 异步日志链路。',
    ],
    keywords: ['全栈交付', '中后台', '工程化', '容器化'],
  },
  {
    company: '某企业信息化服务公司',
    role: '前端开发工程师',
    period: '2023.02 — 2025.04',
    summary: '负责公共服务业务线前端架构，建设卡片编排系统与 Monorepo 工程体系；参与仓储现场跨端应用建设。',
    points: [
      '负责公共服务业务线前端架构与开发，抽象通用卡片容器、状态管理与数据协议，构建可配置的卡片编排系统，支撑消息中心、服务门户与任务看板迭代。',
      '参与工程化体系建设：设计 Monorepo 微前端架构，搭建私有 NPM 与通用构建插件，推动 GitLab CI/CD 流水线落地。',
      '搭建结构化 WIKI 知识库，规范技术分享与 Code Review，沉淀架构设计、组件规范与工程化配置文档。',
      '参与移动端智慧仓储的跨端架构与离线作业方案，支持仓库现场在弱网环境下完成出入库、盘点与签收。',
    ],
    keywords: ['卡片编排', 'Monorepo', '跨端作业', 'CI/CD'],
  },
];

export const education = {
  school: '巢湖学院',
  major: '计算机科学与技术 · 本科',
  period: '2019.09 — 2023.06',
  honors: [
    '第 15 届中国大学生计算机设计大赛 省赛一等奖（Top 3%）',
    'CET-4 · 普通话二级甲等',
  ],
};

export interface CapabilityItem {
  index: string;
  title: string;
  detail: string;
  proof: string;
  href: string;
  linkLabel: string;
}

export const capabilities: CapabilityItem[] = [
  {
    index: '01',
    title: '复杂 B 端与工业业务系统',
    detail: '物流物资、仓储现场与内容 / 低代码平台；覆盖多角色权限、审批流、数据可视化，以及业务不停摆的迁移与重构。',
    proof: '物流物资系统 · CMS 中台 · 智慧仓储',
    href: '/projects/smart-materials/',
    linkLabel: '查看业务系统案例',
  },
  {
    index: '02',
    title: '前端工程化与组件基建',
    detail: 'Monorepo、私有 NPM、CLI、组件库、测试与文档；把重复的事收敛成可复用的基建。',
    proof: 'AUI 组件库 · 10+ 产品线 · 50+ 组件',
    href: '/projects/aui-components/',
    linkLabel: '查看组件库案例',
  },
  {
    index: '03',
    title: '全栈交付与 AI 应用接入',
    detail: '大模型 API、SSE 流式输出、上下文与用量管理；在 AI 中台承担 Spring Boot 接口、Redis 缓存与 RabbitMQ 异步链路，具备前后端容器化部署经验。',
    proof: 'AI 智能化中台 · 物流 AI 分析',
    href: '/projects/ai-platform/',
    linkLabel: '查看 AI 中台案例',
  },
  {
    index: '04',
    title: '跨端与现场作业',
    detail: 'uni-app 多端、扫码、离线同步与地图追踪；在弱网环境下保证现场作业连续。',
    proof: '智慧仓储 · 日均 5 万+ 次扫码（内部统计）',
    href: '/projects/smart-warehouse/',
    linkLabel: '查看跨端案例',
  },
];

export interface SkillTier {
  key: 'practice' | 'familiar' | 'learning';
  level: string;
  title: string;
  note: string;
  groups: {
    name: string;
    items: string[];
    usage: string;
  }[];
}

export const skillTiers: SkillTier[] = [
  {
    key: 'practice',
    level: '项目实战',
    title: '在交付项目中承担核心开发',
    note: '以下技术在中后台、组件库、低代码、跨端与 AI 项目中实际使用，能独立完成模块设计与实现。',
    groups: [
      {
        name: '框架与语言',
        items: ['Vue 3 / Vue 2', 'React 18', 'TypeScript', 'HTML/CSS', 'JavaScript (ES6+)'],
        usage: '中后台、CMS、低代码、组件库与跨端应用',
      },
      {
        name: '状态、路由与 UI',
        items: ['Pinia / Vuex', 'Vue Router', 'Zustand / React Query', 'Ant Design / Ant Design Vue', 'Tailwind CSS'],
        usage: '复杂业务状态、数据缓存与设计还原',
      },
      {
        name: '业务与交付',
        items: ['ToB 项目交付', '需求梳理与方案沟通', '权限与审批流', '数据可视化与大屏'],
        usage: '物流物资、仓储现场与企业级平台',
      },
      {
        name: '工程化与云原生',
        items: ['Vite', 'Monorepo（pnpm / Lerna）', '私有 NPM', 'CLI 脚手架', 'CI/CD（GitLab CI / GitHub Actions）', 'Docker', 'Nginx'],
        usage: '组件库、团队基建与前后端容器化部署',
      },
      {
        name: '后端与数据',
        items: ['Java', 'Spring Boot', 'MyBatis-Plus', 'MySQL', 'Redis', 'RabbitMQ', 'Spring Security + JWT'],
        usage: 'AI 中台接口、认证授权、缓存与异步消息',
      },
      {
        name: 'AI、跨端与可视化',
        items: ['大模型 API 集成', 'SSE 流式输出', 'uni-app', 'ECharts', '高德地图 SDK'],
        usage: 'AI 能力接入、移动作业与数据看板',
      },
    ],
  },
  {
    key: 'familiar',
    level: '有使用经验',
    title: '在项目中用过，但不是主栈',
    note: '能完成常规开发与联调；复杂场景仍需要查文档或与团队协作。',
    groups: [
      {
        name: '框架与渲染',
        items: ['Next.js', 'Webpack'],
        usage: 'CMS / 低代码中台的 SSR、路由与构建',
      },
      {
        name: '服务端',
        items: ['Node.js（BFF / 接口层）', 'Express / Koa'],
        usage: '接口层与联调，复杂服务端逻辑仍以 Java 为主',
      },
    ],
  },
  {
    key: 'learning',
    level: '学习与技术探索',
    title: '正在学习或验证，尚无生产项目',
    note: '以下方向处于学习、练习或方案设计阶段，不作为已交付项目经验展示。',
    groups: [
      {
        name: 'AI 应用',
        items: ['RAG', 'Agent', 'MCP'],
        usage: '检索增强、工具调用与协议实验',
      },
      {
        name: '工业软件',
        items: ['Modbus TCP', 'OPC UA', '工业通信协议'],
        usage: '设备数据采集与系统集成学习',
      },
    ],
  },
];

export type ExplorationStatus = '学习中' | '实验中' | '规划中' | '已有公开代码';

export interface Exploration {
  id: string;
  status: ExplorationStatus;
  title: string;
  summary: string;
  plans: string[];
  boundary: string;
}

export const explorations: Exploration[] = [
  {
    id: 'industrial-ai',
    status: '规划中',
    title: '工业 AI 设备运维助手',
    summary:
      '面向工业设备运维的实验项目：设备信息、状态监控、知识库检索与故障辅助诊断，目标是打通「数据采集 → 知识检索 → 诊断建议 → 维修工单」的闭环。',
    plans: [
      '设备信息管理与状态监控',
      'Modbus TCP 数据模拟与采集',
      '工业设备知识库与 RAG 检索',
      'AI 故障辅助诊断',
      '维修工单管理',
      'Spring Boot 后端 + Vue 3 前端 + Docker 部署',
    ],
    boundary: '目前处于方案设计与技术选型阶段，尚无公开代码与运行结果，不作为项目经历展示。',
  },
  {
    id: 'agent',
    status: '学习中',
    title: 'Agent / MCP 与 RAG',
    summary:
      '探索大模型工具调用、检索增强生成与 MCP 协议，关注企业 AI 应用中的上下文管理、权限与可追溯性。',
    plans: ['工具调用与任务编排', '知识库检索与引用追踪', 'MCP 协议与外部工具接入'],
    boundary: '关注与实验阶段，尚无生产项目。',
  },
];

export const industry = {
  statement:
    '从 2023 年开始，我在两家企业软件服务商参与 ToB 项目，长期围绕物流、仓储与物资管理场景开发业务系统：从仓库现场的移动作业，到物资审批与 AI 分析，再到服务多条产品线的企业级平台；前端为主，也承担接口、缓存与部署等后端工作。技术之外，更重要的是理解业务角色、流程状态与系统边界。',
  tags: ['物流运输', '仓储作业', '物资管理', '审批流程', '现场作业', '数据看板'],
  stats: [
    { value: '近 4 年', label: 'ToB 企业级软件研发' },
    { value: '6 个', label: '企业级项目（已脱敏）' },
    { value: '3 类', label: '物流 / 仓储 / 物资场景' },
  ],
  evidence: [
    {
      title: '物流与物资管理',
      scenario: '物资申请、审批、库存预警与大屏监控',
      response: 'Vue 2 → Vue 3 迁移、SSE / WebSocket 双通道与 AI 分析报告',
      href: '/projects/smart-materials/',
      linkLabel: '查看物资系统案例',
    },
    {
      title: '仓储现场作业',
      scenario: '入库、出库、盘点、签收与运输追踪',
      response: 'uni-app 跨端、离线缓存、扫码双模式与弱网适配',
      href: '/projects/smart-warehouse/',
      linkLabel: '查看智慧仓储案例',
    },
    {
      title: '企业级平台建设',
      scenario: '内容中台、低代码、组件库与 AI 中台',
      response: '多产品线复用、统一协议与工程化交付',
      href: '/#projects',
      linkLabel: '浏览全部案例',
    },
  ],
  understanding: [
    '多角色与流程状态：物资申请、审批、库存预警与大屏监控面向不同角色，权限、状态与操作边界必须先理清。',
    '现场约束优先：仓库与运输现场网络不稳定，离线、扫码防抖与断线重连不是优化项，而是可用性前提。',
    '业务不停摆：老系统迁移、重构与日常业务并行，方案需要按模块推进并保证行为一致。',
    '系统要能长期维护：类型体系、组件协议、测试与文档决定企业系统在多人、多产品线下的可维护性。',
  ],
  boundary:
    '以上场景均来自实际参与的公司项目；未参与的生产、设备、质量等场景没有写入，也不把学习中的工业协议写成项目经验。',
};

export const careerDirection = {
  statement:
    '从企业级业务系统与工业互联网出发，把前端、Java 后端与部署链路打通，同时持续探索企业 AI 与工业智能化落地；希望成长为能独立完成系统设计、接口开发与交付的工程师，逐步走向工业 AI 与 FDE。',
  fdeNote:
    'FDE（Forward Deployed Engineer）是职业发展方向，不是当前职位。以上区分已有项目证据、正在学习与未来目标，不把学习内容写成生产经验。',
  vertical: [
    { title: '前端开发', detail: 'Vue / React / TypeScript，能独立完成模块设计与实现' },
    { title: '前端工程化', detail: 'Monorepo、组件库、构建、测试与 CI/CD' },
    { title: '企业级 B 端系统', detail: '物流、仓储、物资与内容 / 低代码平台的交付经验' },
  ],
  horizontal: [
    { name: 'Java 后端与全栈', status: '项目中使用' },
    { name: '企业 AI 应用 · LLM / SSE', status: '项目中使用' },
    { name: 'Redis / RabbitMQ / 认证授权', status: '项目中使用' },
    { name: 'Docker 与容器化部署', status: '项目中使用' },
    { name: 'RAG / Agent / MCP', status: '学习中' },
    { name: '工业设备数据接入', status: '学习中' },
    { name: '工业 AI 与 FDE', status: '学习中' },
    { name: '客户需求与方案设计', status: '项目中实践' },
  ],
  states: [
    {
      key: 'A',
      label: '已有项目证据',
      tone: 'evidence',
      items: [
        '复杂 B 端系统：物流物资、智慧仓储、CMS 中台与低代码平台',
        '前端架构与工程化：组件库、Monorepo、测试、文档与 CI/CD',
        'Java 后端：Spring Boot 接口、MyBatis-Plus、Redis 缓存与 RabbitMQ 异步链路',
        '认证与权限：Spring Security + JWT、RBAC 与方法级鉴权',
        '云原生交付：Docker 多阶段构建、Nginx 与多环境部署',
        'AI 能力接入：模型 API、SSE 流式输出、上下文与用量管理',
      ],
    },
    {
      key: 'B',
      label: '正在学习与实践',
      tone: 'learning',
      items: [
        'RAG / Agent / MCP：检索增强、工具调用与协议实验',
        '工业通信：Modbus TCP / OPC UA 基础与设备数据模拟',
        '工业 AI 设备运维助手：方案设计阶段，尚无公开代码',
        'FDE 所需能力：客户现场问题拆解、方案设计与私有化交付',
      ],
    },
    {
      key: 'C',
      label: '未来方向 · FDE',
      tone: 'target',
      items: [
        '理解客户现场的业务问题与约束，而不是只接需求文档',
        '把软件、AI 与行业知识组合成可落地的方案',
        '负责系统集成、私有化部署与交付，推动实际使用',
        '当前尚未以 FDE 身份工作，全栈与工业 AI 是通往它的路径',
      ],
    },
  ],
};
