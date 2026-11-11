export const site = {
  name: '榕',
  nameEn: 'RickRone',
  title: '软件工程师 · 工程化与 AI 应用',
  jobTitle: '软件工程师',
  location: '安徽',
  github: 'https://github.com/RickShota',
  email: 'rickrone@qq.com',
  avatar: '/images/headportrait.jpg',
  intro:
    '具备 Vue / React 双栈开发经验，专注复杂中后台、前端工程化与企业应用建设。持续探索全栈开发、AI 应用和工业软件系统集成。',
  now: '在职，负责中后台与前端基建；正在学习 Java / Spring Boot，并探索工业 AI 与 Agent 应用。',
  availability: '优先寻找全职机会，也接受远程协作与项目制合作',
  resumeUpdated: '2026.11',
};

export const jobTargets = [
  '前端开发工程师',
  '全栈开发工程师（前端为主）',
  'AI 应用开发工程师',
  '工业软件 / FDE 方向',
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
    role: '前端开发工程师 · 全栈方向',
    period: '2025.04 — 至今',
    summary: '负责应用级产品线前端与团队工程化基建，推动 TypeScript、Composition API 与微前端落地。',
    points: [
      '主导应用级产品线前端开发，基于 Vben Admin（Vue3 + Vite）负责数据可视化、工作流引擎、权限中心等核心模块，覆盖从原型到生产交付的完整闭环。',
      '主导团队工程化基建：定制 CLI 脚手架、统一代码规范与提交校验，搭建私有 NPM、组件库文档站与 CI/CD 流水线，提升研发效率与代码一致性。',
      '持续演进技术栈：扩展 Vben Admin 底层模块、维护内部组件库与工具库，推动 TypeScript 与 Composition API 深度应用，落地微前端支撑多团队并行开发。',
    ],
    keywords: ['中后台', '工程化', '组件库', '微前端'],
  },
  {
    company: '某企业信息化服务公司',
    role: '前端开发工程师 · 全栈方向',
    period: '2023.02 — 2025.04',
    summary: '负责公共服务业务线前端架构，建设卡片编排系统与 Monorepo 工程体系。',
    points: [
      '负责公共服务业务线前端架构与开发，抽象通用卡片容器、状态管理与数据协议，构建可配置的卡片编排系统，支撑消息中心、服务门户与任务看板迭代。',
      '参与工程化体系建设：设计 Monorepo 微前端架构，搭建私有 NPM 与通用构建插件，推动 GitLab CI/CD 流水线落地。',
      '搭建结构化 WIKI 知识库，规范技术分享与 Code Review，沉淀架构设计、组件规范与工程化配置文档。',
    ],
    keywords: ['卡片编排', 'Monorepo', '私有 NPM', 'CI/CD'],
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
    title: '复杂中后台与业务系统',
    detail: '数据可视化、工作流、权限中心、审批与运营管理端；在业务不停摆的前提下做迁移与重构。',
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
    title: 'AI 应用接入与全栈探索',
    detail: '大模型 API、SSE 流式输出、上下文与用量管理；具备 Node / BFF 接口层经验，向 Java 全栈延伸。',
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
        name: '工程化',
        items: ['Vite', 'Monorepo（pnpm / Lerna）', '私有 NPM', 'CLI 脚手架', 'CI/CD（GitLab CI / GitHub Actions）', 'Vitest', 'Storybook'],
        usage: '组件库、团队基建与质量保障',
      },
      {
        name: '服务端与 AI',
        items: ['Node.js（BFF / 接口层）', '大模型 API 集成', 'SSE 流式输出'],
        usage: '接口层、AI 能力接入与会话交互',
      },
      {
        name: '跨端与可视化',
        items: ['uni-app', 'ECharts', '高德地图 SDK'],
        usage: '移动作业、数据看板与运输追踪',
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
        items: ['Next.js'],
        usage: 'CMS / 低代码中台的 SSR 与路由',
      },
      {
        name: '服务端与交付',
        items: ['Express / Koa', 'RESTful API', 'MySQL（基础）', 'Docker'],
        usage: 'BFF、接口联调、基础查询与容器化部署',
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
        name: '后端',
        items: ['Java', 'Spring Boot'],
        usage: '后端基础、接口开发与部署练习',
      },
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
    id: 'java',
    status: '学习中',
    title: 'Java / Spring Boot',
    summary:
      '补后端基础：Java 语法、Spring Boot 接口开发、数据库访问与部署，目标是把现有的 BFF 经验延伸到 Java 服务端。',
    plans: ['RESTful API 设计与实现', '数据库访问与基础建模', 'Spring Boot 项目结构与部署'],
    boundary: '学习与练习阶段，尚无生产项目。',
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
