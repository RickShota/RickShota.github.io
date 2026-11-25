import type { CapabilityItem, ExperienceItem, Exploration, SkillTier } from './site';

export const site = {
  name: '榕',
  nameEn: 'RickRone',
  title: 'Full-stack engineer in ToB industrial internet',
  jobTitle: 'Full-stack Engineer · ToB Industrial Internet',
  location: 'Anhui, China',
  github: 'https://github.com/RickShota',
  email: 'rickrone@qq.com',
  avatar: '/images/headportrait.jpg',
  intro:
    '3+ years of full-stack development with a front-end focus, building complex B2B systems for logistics, warehousing and materials management. Primarily Vue / React / TypeScript, with hands-on Java / Spring Boot API development, Redis caching, RabbitMQ messaging and Docker-based delivery. Currently exploring industrial AI and enterprise AI adoption; Forward Deployed Engineer is the long-term direction.',
  now: 'Employed, leading full-stack development and engineering foundations for an enterprise product line; over the past year I have worked on both the front end and Spring Boot services of an AI platform, while continuing to explore industrial AI.',
  availability: 'Open to full-time roles first; remote collaboration and project-based work are also possible',
  resumeUpdated: 'Nov 2026',
};

export const jobTargets = [
  'Full-stack Engineer (front-end focused)',
  'Front-end Engineer (ToB / Industrial Internet)',
  'AI Application Engineer',
  'Forward Deployed Engineer / Industrial Software',
];

export const experience: ExperienceItem[] = [
  {
    company: 'An enterprise software provider',
    role: 'Full-stack Engineer · Front-end',
    period: 'Apr 2025 — Present',
    summary:
      'Own full-stack delivery plus engineering and containerization foundations for an enterprise product line; drive TypeScript, Composition API and micro-frontends; contribute to logistics, CMS and AI platform projects.',
    points: [
      'Lead full-stack development of an application product line: data visualization, workflow engine and permission center on Vben Admin (Vue 3 + Vite), plus core back-end APIs, from prototype to production delivery.',
      'Lead engineering and containerization foundations: a custom CLI scaffold, shared code standards and commit checks, a private NPM registry, a component documentation site and CI/CD pipelines; push Docker builds and automated deployment for consistent delivery across environments.',
      'Evolve the stack over time: extend Vben Admin internals, maintain internal component and utility libraries, apply TypeScript and Composition API in depth, and introduce micro-frontends for parallel team development.',
      'On the AI platform project, own the front end and part of the Spring Boot back end, including JWT + RBAC authorization and a RabbitMQ-based asynchronous logging pipeline.',
    ],
    keywords: ['Full-stack delivery', 'Admin systems', 'Engineering', 'Containerization'],
  },
  {
    company: 'An enterprise IT services company',
    role: 'Front-end Engineer',
    period: 'Feb 2023 — Apr 2025',
    summary:
      'Owned the front-end architecture for a public-service business line, built a card composition system and Monorepo tooling, and contributed to a cross-platform warehousing app.',
    points: [
      'Owned front-end architecture and development for a public-service business line: abstracted shared card containers, state management and data contracts into a configurable card orchestration system for the message center, service portal and task dashboard.',
      'Contributed to engineering foundations: designed a Monorepo micro-frontend architecture, built a private NPM registry and shared build plugins, and introduced GitLab CI/CD pipelines.',
      'Built a structured WIKI knowledge base, standardized tech talks and code reviews, and documented architecture decisions, component conventions and engineering configuration.',
      'Contributed to the cross-platform architecture and offline workflow of a mobile warehousing app, keeping receiving, stocktaking and handover usable on weak warehouse networks.',
    ],
    keywords: ['Card orchestration', 'Monorepo', 'Cross-platform', 'CI/CD'],
  },
];

export const education = {
  school: 'Chaohu University',
  major: 'Computer Science · B.Eng.',
  period: 'Sep 2019 — Jun 2023',
  honors: [
    'First Prize (Provincial), 15th Chinese Collegiate Computing Competition (Top 3%)',
    'CET-4 · Mandarin Proficiency Level 2A',
  ],
};

export const capabilities: CapabilityItem[] = [
  {
    index: '01',
    title: 'Complex B2B and industrial systems',
    detail:
      'Logistics and materials, warehouse operations, content and low-code platforms; multi-role permissions, approval flows, data visualization, and migrations that never stop the business.',
    proof: 'Materials system · CMS platform · Smart warehousing',
    href: '/projects/smart-materials/',
    linkLabel: 'View the business system case',
  },
  {
    index: '02',
    title: 'Front-end engineering and component infrastructure',
    detail:
      'Monorepos, private NPM, CLI tooling, component libraries, testing and documentation; turning repeated work into reusable foundations.',
    proof: 'AUI component library · 10+ product lines · 50+ components',
    href: '/projects/aui-components/',
    linkLabel: 'View the component library case',
  },
  {
    index: '03',
    title: 'Full-stack delivery and AI integration',
    detail:
      'LLM APIs, SSE streaming, context and usage management; Spring Boot services, Redis caching and RabbitMQ pipelines on the AI platform, with containerized delivery on both ends.',
    proof: 'AI platform · Logistics AI analysis',
    href: '/projects/ai-platform/',
    linkLabel: 'View the AI platform case',
  },
  {
    index: '04',
    title: 'Cross-platform and field operations',
    detail:
      'uni-app across platforms, barcode scanning, offline sync and map tracking; keeping field work continuous on weak networks.',
    proof: 'Smart warehousing · 50k+ scans per day (internal figures)',
    href: '/projects/smart-warehouse/',
    linkLabel: 'View the cross-platform case',
  },
];

export const skillTiers: SkillTier[] = [
  {
    key: 'practice',
    level: 'In production',
    title: 'Core development on delivered projects',
    note: 'Used in admin systems, component libraries, low-code, cross-platform and AI projects; I can design and implement modules independently.',
    groups: [
      {
        name: 'Frameworks & languages',
        items: ['Vue 3 / Vue 2', 'React 18', 'Next.js', 'TypeScript', 'Vben Admin', 'HTML/CSS', 'JavaScript (ES6+)'],
        usage: 'Admin systems, CMS, low-code, component library and cross-platform apps',
      },
      {
        name: 'State, routing & UI',
        items: ['Pinia / Vuex', 'Vue Router', 'Zustand / React Query', 'Ant Design / Ant Design Vue', 'Tailwind CSS'],
        usage: 'Complex business state, data caching and design fidelity',
      },
      {
        name: 'Business delivery',
        items: ['ToB delivery', 'Requirement discovery', 'Permissions & approval flows', 'Data visualization & dashboards'],
        usage: 'Logistics, warehousing and enterprise platforms',
      },
      {
        name: 'Engineering & cloud native',
        items: ['Vite', 'Monorepo (pnpm / Lerna)', 'Private NPM', 'CLI scaffolding', 'Vitest', 'Storybook', 'CI/CD (GitLab CI / GitHub Actions)', 'Docker / Docker Compose', 'Nginx'],
        usage: 'Component library, team tooling and containerized delivery',
      },
      {
        name: 'Back end & data',
        items: ['Java', 'Spring Boot', 'MyBatis-Plus', 'MySQL', 'Redis', 'RabbitMQ', 'Spring Security + JWT'],
        usage: 'AI platform APIs, authentication, caching and messaging',
      },
      {
        name: 'AI, cross-platform & visualization',
        items: ['LLM API integration', 'SSE streaming', 'uni-app', 'ECharts', 'AMap SDK', 'Cursor / Claude / Copilot'],
        usage: 'AI features, mobile field work and data dashboards',
      },
    ],
  },
  {
    key: 'familiar',
    level: 'Working knowledge',
    title: 'Used on projects, not the main stack',
    note: 'Can handle routine development and integration; complex scenarios still need documentation or team collaboration.',
    groups: [
      {
        name: 'Frameworks & rendering',
        items: ['Webpack', 'react-window / react-virtualized'],
        usage: 'Build configuration and long-list virtualization',
      },
      {
        name: 'Server side',
        items: ['Node.js (BFF / API layer)', 'Express / Koa'],
        usage: 'API layers and integration; complex server logic stays in Java',
      },
    ],
  },
  {
    key: 'learning',
    level: 'Learning & exploring',
    title: 'Studying or validating, no production project yet',
    note: 'These areas are in study, practice or solution-design stages and are not presented as delivered experience.',
    groups: [
      {
        name: 'AI applications',
        items: ['RAG', 'Agent', 'MCP'],
        usage: 'Retrieval augmentation, tool calling and protocol experiments',
      },
      {
        name: 'Industrial software',
        items: ['Modbus TCP', 'OPC UA', 'Industrial protocols'],
        usage: 'Device data acquisition and system integration study',
      },
    ],
  },
];

export const explorations: Exploration[] = [
  {
    id: 'industrial-ai',
    statusKey: 'planned',
    status: 'Planned',
    title: 'Industrial AI maintenance assistant',
    summary:
      'An experimental project for industrial equipment maintenance: asset information, condition monitoring, knowledge-base retrieval and fault diagnosis support, aiming at a closed loop from data acquisition to knowledge retrieval, diagnosis suggestions and work orders.',
    plans: [
      'Asset information and condition monitoring',
      'Modbus TCP data simulation and acquisition',
      'Industrial equipment knowledge base with RAG',
      'AI-assisted fault diagnosis',
      'Maintenance work-order management',
      'Spring Boot back end + Vue 3 front end + Docker deployment',
    ],
    boundary:
      'Currently at solution design and technology selection; no public code or running results, so it is not presented as project experience.',
  },
  {
    id: 'agent',
    statusKey: 'learning',
    status: 'Learning',
    title: 'Agent / MCP and RAG',
    summary:
      'Exploring LLM tool calling, retrieval-augmented generation and the MCP protocol, with attention to context management, permissions and traceability in enterprise AI applications.',
    plans: ['Tool calling and task orchestration', 'Knowledge retrieval and citation tracking', 'MCP protocol and external tool integration'],
    boundary: 'Research and experimentation only; no production project yet.',
  },
];

export const industry = {
  statement:
    'Since 2023 I have worked on ToB projects at two enterprise software companies, long-term around logistics, warehousing and materials management: from mobile work on the warehouse floor to materials approval and AI analysis, and on to enterprise platforms serving multiple product lines. Front end is my main ground, but I also take on APIs, caching and deployment. Beyond technology, understanding business roles, process states and system boundaries matters most.',
  tags: ['Logistics', 'Warehouse operations', 'Materials management', 'Approval flows', 'Field work', 'Dashboards'],
  stats: [
    { value: '3+ years', label: 'ToB enterprise software' },
    { value: '6', label: 'Enterprise projects (anonymized)' },
    { value: '3', label: 'Logistics / warehousing / materials domains' },
  ],
  evidence: [
    {
      title: 'Logistics and materials management',
      scenario: 'Materials requests, approvals, inventory alerts and dashboard monitoring',
      response: 'Vue 2 → Vue 3 migration, dual SSE / WebSocket channels and AI analysis reports',
      href: '/projects/smart-materials/',
      linkLabel: 'View the materials system case',
    },
    {
      title: 'Warehouse field operations',
      scenario: 'Receiving, picking, stocktaking, handover and transport tracking',
      response: 'uni-app across platforms, offline cache, dual-mode scanning and weak-network adaptation',
      href: '/projects/smart-warehouse/',
      linkLabel: 'View the smart warehousing case',
    },
    {
      title: 'Enterprise platform building',
      scenario: 'Content platform, low-code, component library and AI platform',
      response: 'Reuse across product lines, unified contracts and engineered delivery',
      href: '/#projects',
      linkLabel: 'Browse all cases',
    },
  ],
  understanding: [
    'Roles and process states: materials requests, approvals, inventory alerts and dashboards serve different roles, so permissions, states and action boundaries must be clear first.',
    'Field constraints come first: warehouse and transport networks are unstable; offline mode, scan debouncing and reconnection are availability requirements, not optimizations.',
    'The business cannot stop: migrations and refactors run alongside daily operations, so work proceeds module by module with consistent behavior.',
    'Systems must stay maintainable: type systems, component contracts, tests and documentation determine how well enterprise systems survive multiple teams and product lines.',
  ],
  boundary:
    'All scenarios above come from company projects I actually worked on. Production, equipment and quality scenarios I did not work on are omitted, and industrial protocols I am still learning are never presented as project experience.',
};

export const careerDirection = {
  statement:
    'Starting from enterprise business systems and the industrial internet, I connect the front end, Java services and the deployment path, while exploring how enterprise AI and industrial intelligence land in real work. My goal is to grow into an engineer who can independently own system design, API development and delivery, moving toward industrial AI and Forward Deployed Engineering.',
  fdeNote:
    'FDE (Forward Deployed Engineer) is a career direction, not my current title. The sections above separate project evidence, current learning and future goals; learning work is never written up as production experience.',
  vertical: [
    { title: 'Front-end development', detail: 'Vue / React / TypeScript; independent module design and implementation' },
    { title: 'Front-end engineering', detail: 'Monorepo, component library, build, testing and CI/CD' },
    { title: 'Enterprise B2B systems', detail: 'Delivery experience in logistics, warehousing, materials, content and low-code platforms' },
  ],
  horizontal: [
    { name: 'Java back end & full stack', status: 'In projects', statusKey: 'practice' },
    { name: 'Enterprise AI · LLM / SSE', status: 'In projects', statusKey: 'practice' },
    { name: 'Redis / RabbitMQ / auth', status: 'In projects', statusKey: 'practice' },
    { name: 'Docker & containerized delivery', status: 'In projects', statusKey: 'practice' },
    { name: 'RAG / Agent / MCP', status: 'Learning', statusKey: 'learning' },
    { name: 'Industrial device integration', status: 'Learning', statusKey: 'learning' },
    { name: 'Industrial AI & FDE', status: 'Learning', statusKey: 'learning' },
    { name: 'Customer discovery & solution design', status: 'Practiced', statusKey: 'practice' },
  ],
  states: [
    {
      key: 'A',
      label: 'Backed by project evidence',
      tone: 'evidence',
      items: [
        'Complex B2B systems: logistics materials, smart warehousing, CMS and low-code platforms',
        'Front-end architecture and engineering: component library, Monorepo, testing, docs and CI/CD',
        'Java back end: Spring Boot APIs, MyBatis-Plus, Redis caching and RabbitMQ pipelines',
        'Authentication and permissions: Spring Security + JWT, RBAC and method-level checks',
        'Cloud-native delivery: Docker multi-stage builds, Nginx and multi-environment deployment',
        'AI integration: model APIs, SSE streaming, context and usage management',
      ],
    },
    {
      key: 'B',
      label: 'Learning and practicing',
      tone: 'learning',
      items: [
        'RAG / Agent / MCP: retrieval augmentation, tool calling and protocol experiments',
        'Industrial communication: Modbus TCP / OPC UA basics and device data simulation',
        'Industrial AI maintenance assistant: solution design, no public code yet',
        'FDE skills: customer-site problem framing, solution design and private deployment',
      ],
    },
    {
      key: 'C',
      label: 'Future direction · FDE',
      tone: 'target',
      items: [
        'Understand customer problems and constraints on site, not just requirement documents',
        'Combine software, AI and industry knowledge into solutions that ship',
        'Own system integration, private deployment and delivery, driving real adoption',
        'Not working as an FDE yet; full-stack and industrial AI are the path toward it',
      ],
    },
  ],
};
