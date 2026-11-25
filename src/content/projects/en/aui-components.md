---
name: "AUI Enterprise Component Library"
period: "Apr 2025 — Aug 2025"
role: "Component library lead"
audience: "Front-end teams across 10+ internal product lines"
summary: "A Vue 3 component library shared by 10+ product lines, from the Monorepo engineering system to a testing and documentation ecosystem for 50+ components."
thesis: "Ten product lines were each building their own wheels. First, gather components and engineering standards into one repository."
category: infra
domain:
  - "Enterprise components"
  - "Multi-product reuse"
  - "Design standards"
  - "Front-end engineering"
scenario: "Serves front-end teams across 10+ internal product lines, letting each business import shared components, docs and toolkits on demand and reducing duplicated work."
complexity: "Product lines differ in business scenarios and visual standards, while components must also cover docs, examples, tests and multiple output formats; once the component count grows, manual regression is not enough."
systems:
  - "Business product lines"
  - "Private NPM and Monorepo"
  - "Storybook documentation site"
  - "CI release pipeline"
context: "Product lines duplicated components with inconsistent interaction and visuals; components, docs, examples and toolkits lived in separate repositories, making versions and dependencies hard to align."
goals:
  - "Unify the stack and design language across 10+ product lines."
  - "Build development, testing, documentation and release for 50+ components."
  - "Let business teams import on demand and self-serve from the docs."
constraints:
  - "Product lines vary widely; components cannot serve only one visual standard."
  - "Components, docs, examples and toolkits were originally separate repositories."
  - "As the component count grows, manual regression cannot guarantee quality."
flow:
  - name: "Monorepo"
    detail: "Source, docs, examples and toolkits managed together"
  - name: "Component development"
    detail: "Vue 3 + TypeScript base components"
  - name: "Quality"
    detail: "Vitest tests and Storybook docs"
  - name: "Release and adoption"
    detail: "Multiple formats, tree-shaking and versioning"
decisions:
  - title: "Build the engineering system before the component count"
    problem: "Components, docs, examples and tooling each lived in their own repository, making versions and dependencies hard to align."
    choice: "Organize a Monorepo with Lerna and pnpm workspace, managing component source, the docs site, example projects and toolkits together."
    benefit: "One change can build, document and release under one dependency set; build speed improved by roughly 40%."
  - title: "Decouple logic from UI so components can be reused"
    problem: "Business scenarios vary widely; hard-coding logic in templates forces each product line to fork a copy."
    choice: "Use the Renderless pattern to separate component logic from UI, with theme tokens for visual customization."
    benefit: "One behavior layer serves different visual standards; customization does not require copying components."
  - title: "Tests and docs are part of the component library"
    problem: "As components grow, manual regression cannot guarantee quality, and adopters lack trustworthy usage guidance."
    choice: "Use Vitest and Testing Library for rendering, interaction and accessibility, and Storybook for per-component API docs, examples and test stories."
    benefit: "Core component test coverage exceeds 90%, and adopters can self-serve from the docs, reducing ad-hoc support."
checks:
  - "Does every new component ship with types, docs, examples and tests?"
  - "When business teams import on demand, are artifacts actually tree-shaken?"
  - "Do theme and i18n switches cover every base component?"
outcome: "The component library serves 10+ core product lines, unifying the stack and design language while improving component quality and development efficiency together."
responsibility: "Led the engineering system, core component development, testing and documentation platform, and drove adoption across product lines."
contribution:
  led:
    - "Lerna + pnpm workspace Monorepo engineering system."
    - "Component contracts, Renderless pattern and theme tokens."
    - "Testing, documentation and release process."
  owned:
    - "Core base components for forms, data display, navigation and feedback."
    - "Vite multi-format builds, tree-shaking and on-demand loading."
    - "Storybook docs site, Vitest test system and contribution guidelines."
    - "Theming and internationalization."
  team:
    - "Drove adoption across product lines, collected feedback and iterated components."
    - "Organized component reviews, training and documentation maintenance."
stack: [Vue3, TypeScript, Vite, Vitest, Lerna, pnpm, Storybook]
metrics: ["50+ components", "10+ product lines", "90%+ test coverage"]
metricsNote: "\"50+ components\" and \"90%+ coverage\" come from repository and test-report statistics; \"~40% faster builds\" is an internal team comparison whose raw records are not public."
media:
  - "Storybook component documentation site"
  - "Core component examples and API tables"
  - "Vitest test report"
  - "Monorepo directory structure diagram"
order: 4
---
