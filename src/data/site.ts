export const site = {
  name: '榕',
  nameEn: 'RickRone',
  title: '全栈工程师 · 工程化与 AI 应用',
  location: '安徽',
  github: 'https://github.com/RickShota',
  email: 'rickrone@qq.com',
  avatar: '/images/headportrait.jpg',
  intro:
    '3 年开发经验，Vue / React 双栈，能从前端页面做到 Node / BFF 与工程化基建；近一年主要把 AI 能力接进业务系统。',
  now: '在职，负责中后台与前端基建，向全栈与 AI 应用延伸；关注大模型应用与 Agent。',
  availability: '接受全职现场、远程协作与项目制合作',
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
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

export const skillGroups = [
  {
    group: '语言与基础',
    note: '日常写代码的地基',
    items: ['HTML / CSS', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    group: '框架',
    note: 'Vue / React 双栈',
    items: ['Vue 2/3（Router、Pinia / Vuex）', 'React（Hooks、Context、Redux）', 'Next.js', 'uni-app'],
  },
  {
    group: '工程化',
    note: '构建、协作与交付',
    items: ['Vite / Webpack', 'Monorepo（pnpm / Lerna）', 'CI/CD（GitHub Actions / GitLab CI）', '私有 NPM', 'Storybook', 'Vitest', 'Git Flow'],
  },
  {
    group: '服务端',
    note: 'BFF 与接口层',
    items: ['Node.js（Express / Koa、RESTful API、BFF）'],
  },
  {
    group: 'AI',
    note: '把模型接进产品与研发流程',
    items: ['Cursor / Claude / Copilot 深度使用', '大模型 API 集成', 'SSE 流式输出', 'AI Agent / MCP（关注）'],
  },
  {
    group: '可视化与部署',
    note: '图表、地图与交付',
    items: ['ECharts', '高德地图 SDK', 'Docker'],
  },
];

export const focus = [
  '大模型应用与 AI Agent',
  'MCP 协议',
  '前端智能化：AI 组件生成、智能测试用例生成',
];

export const ossProjects = [
  {
    name: 'shoppingo-vue2',
    description: '第一个 Vue 练手项目，电商场景。',
    stack: 'Vue 2',
    url: 'https://github.com/RickShota/shoppingo-vue2',
  },
  {
    name: 'facelook-uniapp',
    description: '第一个 uni-app 项目，一套代码多端运行。',
    stack: 'uni-app',
    url: 'https://github.com/RickShota/facelook-uniapp',
  },
  {
    name: 'Questionnaire-System',
    description: 'Java 实现的问卷调查系统。',
    stack: 'Java',
    url: 'https://github.com/RickShota/Questionnaire-System',
  },
  {
    name: 'MineSweeper-Qt',
    description: 'C++ / Qt 写的桌面扫雷，第一个 GUI 项目。',
    stack: 'C++',
    url: 'https://github.com/RickShota/MineSweeper-Qt',
  },
  {
    name: 'Snake',
    description: 'TypeScript 实现的贪吃蛇小游戏。',
    stack: 'TypeScript',
    url: 'https://github.com/RickShota/Snake',
  },
];
