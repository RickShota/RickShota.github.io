---
name: "Logistics Materials Management"
period: "Jul 2025 — Jan 2026"
role: "Front-end lead · Migration and intelligence"
audience: "Materials staff, approvers, management and dashboard users"
summary: "Migrated a legacy Vue 2 system to Vue 3 without stopping the business, then added AI analysis to turn an operations tool into an analysis platform."
thesis: "The business cannot stop. Move the whole Vue 2 system to Vue 3, then grow an AI analysis layer."
category: business
domain:
  - "Logistics"
  - "Materials management"
  - "Approval flow"
  - "Inventory alerts"
  - "Dashboards"
scenario: "Serves materials staff, approvers and management: from materials requests and approvals to inventory alerts and dashboard monitoring, the system talks to the warehouse floor in real time and receives AI analysis results."
complexity: "Requests, approvals, inventory and alerts span multiple roles and states; dashboard monitoring depends on high-frequency bidirectional communication while industrial networks are unstable; the legacy system kept carrying daily business during the migration."
systems:
  - "Materials management and approval system"
  - "Warehouse field clients"
  - "Message push / real-time channels"
  - "AI analysis service"
  - "Dashboard monitoring"
context: "The original system ran on Vue 2 + Options API for materials management and approvals. Code organization was messy, TypeScript support incomplete, performance bottlenecks obvious, and the business was still running throughout."
goals:
  - "Complete a Vue 2 → Vue 3 migration without stopping the business."
  - "Establish a TypeScript type system and a maintainable component structure."
  - "Introduce AI analysis reports, upgrading fixed reports into interactive analysis."
constraints:
  - "The legacy system kept running; a stop-the-world rewrite was not possible."
  - "The old code had implicit types and mixed responsibilities; line-by-line translation would carry the old problems forward."
  - "Industrial networks are unstable; real-time channels must recover."
flow:
  - name: "Legacy system"
    detail: "Vue 2 + Options API, business running"
  - name: "Stack migration"
    detail: "Composition API rewrite and type system"
  - name: "Real-time channels"
    detail: "SSE for light notices, WebSocket for dashboards"
  - name: "AI analysis"
    detail: "Natural-language reports from live data"
decisions:
  - title: "Migration is not code translation; it is rebuilding constraints"
    problem: "The original system had many components with implicit types and mixed responsibilities; translating line by line would carry old problems into the new stack."
    choice: "Rewrite business components with the Composition API while establishing a strict TypeScript type system, migrating module by module."
    benefit: "Type safety and maintainability improve together, rather than just changing syntax."
  - title: "Split real-time channels by message type"
    problem: "Approvals and inventory alerts are light notifications, while dashboards and multi-user collaboration need high-frequency bidirectional communication; one approach fits neither well."
    choice: "Use SSE for light notices and WebSocket for dashboards and collaboration, with connection-pool management and reconnection for industrial networks."
    benefit: "Each scenario gets the right channel; connections recover on weak networks, and high-frequency messages do not drag down the notification path."
  - title: "AI reports must lead to a business action"
    problem: "Fixed reports only show numbers; when an anomaly appears, people still have to judge the cause and response."
    choice: "Combine time-series anomaly detection with an LLM to generate likely causes, impact scope and suggested actions, with one-click creation of a standard work order."
    benefit: "Analysis flows into the work-order loop, moving from seeing an anomaly to handling it."
  - title: "Asynchronous requests with idempotency at the core"
    problem: "Materials requests trigger inventory deduction; under concurrency, synchronous writes and repeated message consumption can oversell or deduct twice."
    choice: "Decouple order creation from inventory deduction with RabbitMQ, combine Redis SETNX with a unique order index for consumer idempotency, and use optimistic locking and conditional updates to prevent overselling."
    benefit: "The request path stays responsive under load, and retries or duplicate deliveries no longer corrupt inventory."
checks:
  - "After migration, does each business module behave the same as the legacy system?"
  - "When the network flaps or disconnects, do SSE and WebSocket recover as expected?"
  - "Can the causes and suggestions in AI reports be traced back to the underlying data and anomaly results?"
  - "Under concurrent requests or repeated message delivery, is inventory deducted exactly once?"
outcome: "The system completed its stack and architecture rebuild, fixed reports became interactive AI analysis reports, and the legacy performance and maintainability problems were addressed systematically."
responsibility: "Led the Vue 2 to Vue 3 migration and front-end architecture rewrite, and designed the AI analysis reports, hybrid real-time communication and industrial PAD adaptation."
contribution:
  led:
    - "Vue 2 → Vue 3 migration plan and front-end architecture rewrite."
    - "Interaction and presentation of AI analysis reports."
    - "Hybrid SSE / WebSocket real-time communication."
  owned:
    - "Rewrote business components with the Composition API and established the TypeScript type system."
    - "SSE / WebSocket connection management, reconnection and state sync."
    - "ECharts configuration, smart chart recommendations and industrial PAD adaptation."
    - "Progressive data loading and caching for high-frequency queries."
    - "RabbitMQ asynchronous request pipeline, Redis SETNX idempotency and optimistic-lock inventory updates."
  team:
    - "Worked with the back end on model, time-series anomaly detection and work-order APIs."
    - "Migrated and accepted modules with business teams to keep operations continuous."
stack: [Vue3, TypeScript, Vite, Pinia, Ant Design Vue, ECharts, SSE, WebSocket, Spring Boot, RabbitMQ, Redis]
metrics: ["Full Vue 2 → Vue 3 migration", "Dual-channel real-time communication", "Usable offline on weak networks"]
metricsNote: "The migration scope and dual-channel architecture are project facts; \"usable on weak networks\" is a field-test conclusion without quantitative records attached."
media:
  - "Before / after UI comparison (needs anonymization)"
  - "AI analysis reports and charts"
  - "SSE / WebSocket connection state diagram"
  - "Industrial PAD adaptation screenshots"
order: 2
---
