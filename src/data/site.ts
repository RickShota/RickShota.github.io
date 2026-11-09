export const site = {
  name: '榕',
  fullName: '黄瑞瑞',
  nameEn: 'Rick Shota',
  title: '前端工程师 · 工程化与 AI 应用',
  location: '安徽',
  github: 'https://github.com/RickShota',
  email: 'rickrone@qq.com',
  avatar: '/images/headportrait.jpg',
  intro:
    '3 年前端开发经验，在两家公司做中后台、组件库与 AI 应用的前端建设。擅长把重复的事工程化，也擅长把 AI 用进日常研发。',
  now: '在易立德负责中后台与前端基建，关注大模型应用与 Agent。',
};

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: '易立德信息科技有限公司',
    role: '前端开发工程师',
    period: '2025.04 — 至今',
    points: [
      '基于 Vben Admin（Vue3 + Vite）负责中后台核心业务模块，覆盖数据可视化、工作流引擎与权限中心。',
      '主导前端工程化基建：CLI 脚手架、代码规范与提交校验、私有 NPM 与组件库文档站、CI/CD 流水线。',
      '推动 TypeScript 与 Composition API 深度应用，落地微前端架构支持多团队并行开发。',
    ],
  },
  {
    company: '安徽三禾一信息科技有限公司',
    role: '前端开发工程师',
    period: '2023.02 — 2025.04',
    points: [
      '负责 CBG 终端公共服务业务线的前端架构与开发，构建卡片化组件与可配置的卡片编排系统，支撑消息中心、服务门户与任务看板。',
      '参与工程化体系搭建：Monorepo 微前端架构、私有 NPM、通用构建插件与 GitLab CI/CD 流水线。',
      '规划并维护技术文档与 WIKI 知识库，推动技术分享与 Code Review 规范化。',
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
    items: ['HTML / CSS', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    group: '框架',
    items: ['Vue 2/3（Router、Pinia / Vuex）', 'React（Hooks、Context、Redux）', 'Next.js', 'uni-app'],
  },
  {
    group: '工程化',
    items: ['Vite / Webpack', 'Monorepo（pnpm / Lerna）', 'CI/CD（GitHub Actions / GitLab CI）', '私有 NPM', 'Storybook', 'Vitest'],
  },
  {
    group: '服务端',
    items: ['Node.js（Express / Koa、RESTful API、BFF）'],
  },
  {
    group: 'AI',
    items: ['Cursor / Claude / Copilot 深度使用', '大模型 API 集成', 'SSE 流式输出', 'AI Agent / MCP（关注）'],
  },
  {
    group: '可视化与其他',
    items: ['ECharts', 'Docker', 'Git Flow'],
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
