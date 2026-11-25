---
name: "Unified Content Management Platform"
period: "Aug 2025 — Feb 2026"
role: "Front-end lead · 0 to 1"
audience: "Content editors, reviewers, site administrators and operations teams"
summary: "Multiple content scenarios share one editing, versioning and publishing flow, with content assets managed centrally and traceably."
thesis: "Every content scenario had built its own admin. First, unify the content model and publishing flow."
category: business
domain:
  - "Content platform"
  - "Multi-site publishing"
  - "Review flow"
  - "Permissions"
scenario: "The corporate site, help center, blog community and product docs share one content service; editors, reviewers and site administrators collaborate on producing and publishing content."
complexity: "Content moves through editing, review and publishing states, with multiple sites, formats, version history and scheduled publishing coexisting; permissions and storage cost must be balanced at the same time."
systems:
  - "Multiple content sites"
  - "Content service and object storage"
  - "Review and publishing flow"
  - "CDN / site rendering"
context: "The corporate site, help center, blog community and product docs each maintained their own content system, with inconsistent storage, formats and publishing flows and a fragmented editing experience."
goals:
  - "Unify the content model, editing experience and publishing flow."
  - "Support rich text / Markdown, media assets, version history and scheduled publishing."
  - "Let multiple content sites share one content service and permission system."
constraints:
  - "Different sites used different storage and content formats."
  - "Multi-user collaboration, version history and storage cost had to be balanced."
  - "Content lists and the media library hold large datasets; scroll performance directly affects daily work."
flow:
  - name: "Content production"
    detail: "Rich text and Markdown modes"
  - name: "Collaboration and versions"
    detail: "Multi-user editing, drafts and version history"
  - name: "Review and publish"
    detail: "Multi-level review, change comparison, scheduling"
  - name: "Multi-site integration"
    detail: "One content service, permissions and site management"
decisions:
  - title: "A content service layer isolates storage differences"
    problem: "Different sites use different storage and content formats; pages depending directly on back ends would spread switching cost."
    choice: "Wrap useContentService, using generics and the strategy pattern to unify articles, pages, media and categories, with React Query managing cache and refresh."
    benefit: "When storage or content format changes, updates stay in one layer and page components do not need to change."
  - title: "Version management starts with storage cost"
    problem: "Storing a full snapshot on every save grows storage quickly as versions accumulate."
    choice: "Separate drafts from published versions, combining diff algorithms with a snapshot strategy for history."
    benefit: "Version history stays recoverable without unbounded storage growth as content scales."
  - title: "Long-list performance determines the editing experience"
    problem: "Content lists and the media library hold large datasets; scroll jank directly affects daily work."
    choice: "Use react-window and react-virtualized to render only the viewport."
    benefit: "60fps scrolling at ten-thousand-item scale; editing and search are no longer dragged down by lists."
checks:
  - "When the storage back end or content format changes, do page components need to change too?"
  - "Do version history and change comparison cover draft, published and review states?"
  - "When multiple people edit at once, do saves and refreshes overwrite each other?"
outcome: "Multiple content scenarios integrated into one platform, with a better editing experience and publishing efficiency, and content assets managed centrally and traceably."
responsibility: "Own the 0-to-1 front-end architecture and core features of the CMS platform, including editing experience, the content service layer, version and review flows, and the admin console."
contribution:
  led:
    - "React front-end architecture and rendering approach for the platform."
    - "Design of the content service layer, useContentService."
    - "Version management, review flow and multi-site permission model."
  owned:
    - "Rich text / Markdown editing, media management, version comparison and scheduled publishing."
    - "Virtual scrolling for content lists and the media library."
    - "Admin pages for sites, permissions, statistics and error monitoring."
    - "Dockerized builds and CI/CD deployment."
  team:
    - "Worked with the back end on storage, OSS, CDN, permission and publishing APIs."
    - "Aligned editing, review and publishing flows with the content operations team."
stack: [React 18, TypeScript, Next.js, Tailwind CSS, Ant Design, Zustand, React Query, Docker]
metrics: ["10k+ content items managed smoothly", "Multi-user collaborative editing", "Unified multi-site integration"]
metricsNote: "\"10k+ content items\" and \"60fps\" describe the long-list optimization scenario and target frame rate; no production data is attached."
media:
  - "Content editing and media library (needs anonymization)"
  - "Version comparison and review flow"
  - "Multi-site management panel"
  - "Long-list performance comparison notes"
order: 3
---
