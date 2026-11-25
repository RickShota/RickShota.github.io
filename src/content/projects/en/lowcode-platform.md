---
name: "Unified Low-code Platform"
period: "Apr 2025 — Sep 2025"
role: "Front-end lead · 0 to 1"
audience: "Business operations, implementation staff and front-end developers"
summary: "Page building becomes a visual platform, with component contracts, drag-and-drop composition and data binding connected in one pass."
thesis: "Pages were being rebuilt over and over. Make building a platform, not another set of templates."
category: infra
domain:
  - "Low-code"
  - "Visual building"
  - "Business configuration"
  - "Enterprise digitization"
scenario: "Business operations and implementation staff deliver internal systems, campaign pages, data dashboards and mobile H5 through visual building; the front end owns component contracts and platform capabilities."
complexity: "Components come from multiple libraries with inconsistent properties, events and data models; pages also need API binding, cross-component communication and conditional rendering, with editing and published states staying consistent."
systems:
  - "Multiple component libraries"
  - "Page schema and publishing service"
  - "Business APIs"
  - "Renderer / preview client"
context: "Internal systems, campaign pages, dashboards and mobile H5 pages were expensive to rebuild; business teams needed faster page delivery rather than another template per scenario."
goals:
  - "Let business teams deliver pages quickly through visual building."
  - "Unify registration, property binding and event models across component libraries."
  - "Support API binding, cross-component communication, conditional rendering and publishing."
constraints:
  - "Form, chart, layout and business components come from different libraries with inconsistent property and event models."
  - "Dragging in a thousand-node component tree easily drops frames."
  - "Drag-and-drop alone is not enough; API wiring and conditional rendering still fall back to code."
flow:
  - name: "Component material"
    detail: "Unified registration and contracts across libraries"
  - name: "Visual composition"
    detail: "Drag-and-drop, property panel and page preview"
  - name: "Data and state"
    detail: "API binding, cross-component communication, conditions"
  - name: "Publish and manage"
    detail: "Versions, permissions and resource statistics"
decisions:
  - title: "Unify the component contract before registration"
    problem: "Form, chart, layout and business components come from different libraries with inconsistent property and event models."
    choice: "Use useComponentService with generics and the strategy pattern to unify registration, property binding and event handling."
    benefit: "Integrating a new library only requires adapting the contract; the editor needs no branch per library."
  - title: "Editor performance depends on update granularity"
    problem: "Rerendering a thousand-node tree wholesale causes visible frame drops while dragging."
    choice: "Virtual rendering, incremental updates and lazy component loading, touching only what changed."
    benefit: "60fps interaction at a thousand components, with complex pages still editable."
  - title: "The low-code boundary is the data flow"
    problem: "Solving drag-and-drop alone still sends API wiring and conditional rendering back to code."
    choice: "Design a data-source and state model supporting API binding, static data, cross-component communication and conditional rendering, with reactive dependency tracking to limit updates."
    benefit: "Common business pages close the loop inside the platform, while complex logic keeps an extension path."
checks:
  - "Does integrating a new component library require changing editor core code?"
  - "While dragging a thousand-component page, are frame rate and input latency acceptable?"
  - "After publishing, do data binding and conditional rendering match the editing state?"
outcome: "Multiple business scenarios deliver pages quickly through building, repeated development drops noticeably, and component resources are managed and reused centrally."
responsibility: "Own the 0-to-1 front-end architecture and editor implementation of the low-code platform, including component contracts, visual composition, data flow and the admin console."
contribution:
  led:
    - "Editor front-end architecture and rendering approach."
    - "Design of the component registration and rendering service, useComponentService."
    - "Data sources, state management and conditional rendering."
  owned:
    - "Drag-and-drop composition, property panel, page tree, preview and publishing."
    - "Virtual rendering, incremental updates and lazy component loading."
    - "Admin pages for component management, permissions, resource statistics and error monitoring."
    - "Dockerized builds and CI/CD deployment."
  team:
    - "Adapted component contracts with component libraries and business teams."
    - "Worked with the back end on page publishing, permission and resource APIs."
stack: [React 18, TypeScript, Next.js, Tailwind CSS, Ant Design, Zustand, React Query]
metrics: ["Thousands of components composed smoothly", "Unified multi-library integration", "Visual drag-and-drop building"]
metricsNote: "\"Thousands of components\" and \"60fps\" describe the editor performance test scenario and target frame rate, not measurements of every page."
media:
  - "Visual editor and property panel"
  - "Component contract / rendering flow diagram"
  - "Drag-and-drop composition recording"
  - "Publishing and version management"
order: 5
---
