---
name: "Smart Warehousing Mobile App"
period: "Aug 2024 — Mar 2025"
role: "Cross-platform app lead"
audience: "Warehouse field staff, drivers and the dispatch center"
summary: "A uni-app cross-platform app for warehouse floors where scanning, offline work and transport tracking remain usable on weak networks."
thesis: "Warehouse floors have no stable network. The app has to assume it will go offline."
category: cross-platform
domain:
  - "Warehouse operations"
  - "Field work"
  - "Logistics"
  - "Offline work"
scenario: "Warehouse staff, drivers and the dispatch center use handheld devices for receiving, picking, stocktaking and handover, tracking status in transit and handling exceptions."
complexity: "Receiving, picking, stocktaking and handover span field staff, drivers and dispatch; weak or no networks, worn barcodes and platform differences stack up, and work cannot stop because a request fails."
systems:
  - "Warehouse back end"
  - "Handheld terminals / H5"
  - "Map and location services"
  - "Offline cache and sync"
  - "Message push"
context: "Logistics field work relied on paper documents and desktop systems, which was slow and left information stale; networks in warehouses and in transit are unstable, and field staff needed handheld devices to get work done."
goals:
  - "A field app covering Android / iOS / H5."
  - "Keep receiving, picking, stocktaking and handover continuous on weak or no networks."
  - "Provide scanning, transport tracking and exception handling."
constraints:
  - "Networks in warehouses and in transit are unstable; online-only requests would interrupt work."
  - "Worn barcodes, hand shake and repeated scans produce bad data."
  - "Camera, location and file capabilities differ across Android, iOS and H5."
flow:
  - name: "Field work"
    detail: "Receiving, picking, stocktaking and handover"
  - name: "Scanning"
    detail: "Camera and Bluetooth scanner modes"
  - name: "Offline and sync"
    detail: "Local cache, offline use, incremental sync"
  - name: "Transport tracking"
    detail: "Live location, route replay and geofencing"
decisions:
  - title: "Offline is the default path, not a fallback"
    problem: "Networks in warehouses and in transit are unstable; depending on online requests would interrupt critical work."
    choice: "Cache business data and operation records in IndexedDB and SQLite; scanning and handover keep working offline, then sync incrementally on recovery."
    benefit: "Receiving, picking and stocktaking are no longer blocked by network state, and data is reconciled after recovery."
  - title: "Scan accuracy comes from layered validation"
    problem: "Worn barcodes, hand shake and repeated scans all produce bad data in the field."
    choice: "Provide camera and Bluetooth scanner modes with scan debouncing, local validation and automatic correction."
    benefit: "Scan accuracy reaches 99.8%, supporting more than 50k scan operations per day."
  - title: "Consistency across platforms is not sameness"
    problem: "Camera, location and file capabilities differ across Android, iOS and H5; one code path would be full of exceptions."
    choice: "Use uni-app conditional compilation for platform differences, adapt performance and interaction per platform, and keep H5 first paint within 2 seconds."
    benefit: "One codebase ships to three platforms while preserving native behavior on each."
checks:
  - "Do operations completed offline sync completely and without duplicates after recovery?"
  - "Are scan results reliable under low light, worn barcodes and continuous scanning?"
  - "On low-end devices, do scanning, maps and lists still keep a usable frame rate?"
outcome: "Field efficiency improved by more than 50%, supporting over 50k scans per day, and the app remains usable on weak and offline networks."
responsibility: "Led the uni-app cross-platform architecture and core field modules, owning the offline system, scanning pipeline, transport tracking and performance."
contribution:
  led:
    - "uni-app cross-platform architecture and platform-difference strategy."
    - "Offline cache, incremental sync and conflict handling."
    - "Scanning pipeline and transport tracking."
  owned:
    - "Core field modules for receiving, picking, stocktaking and handover."
    - "IndexedDB / SQLite cache and offline recovery."
    - "Camera and Bluetooth scanner modes, scan debouncing and local validation."
    - "AMap location, route replay, geofencing and performance optimization."
  team:
    - "Worked with back-end, dispatch and driver teams on APIs and workflows."
    - "Validated exception scenarios and operation paths with warehouse staff."
stack: [uni-app, Vue3, TypeScript, Pinia, uView UI, ECharts, AMap SDK, WebSocket]
metrics: ["+50% field efficiency", "50k+ scans per day", "99.8% scan accuracy"]
metricsNote: "Scan accuracy, daily scan volume and efficiency gains come from internal business statistics that cannot be independently verified from the public site; the calculation method can be explained in interviews."
media:
  - "Mobile field screens (need anonymization)"
  - "Scanning flow and exception prompts"
  - "Offline sync state and conflict handling"
  - "Transport route and geofencing"
order: 6
---
