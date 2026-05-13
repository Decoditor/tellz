/**
 * Per-sector workflow copy for /solutions/:slug/workflow.
 * Keys must match `slug` on each entry in `industries.js`.
 */
export const sectorWorkflows = {
  fintech: {
    intro:
      "Regulated products need traceability from day one. We align engineering, risk, and UX so you can pass scrutiny without slowing delivery.",
    phases: [
      {
        name: "Regulatory & risk framing",
        summary:
          "Map data flows, controls, and audit requirements alongside your product narrative.",
        detail: "Joint sessions with compliance stakeholders; threat modeling for money movement.",
      },
      {
        name: "Experience & API design",
        summary:
          "Design journeys that make complex money operations feel simple and defensible.",
        detail: "OpenAPI contracts, idempotency patterns, and clear customer-facing states.",
      },
      {
        name: "Hardened build",
        summary:
          "Implement with encryption, least-privilege access, and observability baked in.",
        detail: "Automated checks, immutable logs, and staging environments that mirror production controls.",
      },
      {
        name: "Launch & attestations",
        summary:
          "Run parallel UAT with ops; package evidence for partners and regulators where needed.",
        detail: "Runbooks, rollback paths, and post-launch monitoring dashboards.",
      },
      {
        name: "Operate & iterate",
        summary:
          "Tune limits, alerts, and product surfaces as volumes and fraud patterns evolve.",
        detail: "Quarterly control reviews and backlog grooming with your risk owners.",
      },
    ],
    outcomes: [
      "Audit-ready change history across services",
      "Latency-aware payment and ledger paths",
      "Playbooks for incidents and partner escalations",
    ],
  },
  agriculture: {
    intro:
      "Field reality drives the stack: intermittent connectivity, seasonal peaks, and many stakeholders. We design workflows that stay usable offline and scale at harvest.",
    phases: [
      {
        name: "Field & supply mapping",
        summary:
          "Interview growers, aggregators, and logistics partners to map real constraints.",
        detail: "Device inventory, connectivity profiles, and data ownership per node.",
      },
      {
        name: "Telemetry & ingestion",
        summary:
          "Define schemas for sensors, batches, and quality checks with sync strategies.",
        detail: "Edge buffering, conflict resolution, and validation at ingest.",
      },
      {
        name: "Forecasting & coordination",
        summary:
          "Build dashboards and alerts that tie weather, inventory, and contracts together.",
        detail: "Scenario planning views and exception queues for procurement teams.",
      },
      {
        name: "Pilot harvest",
        summary:
          "Run a constrained pilot with one region or crop class before broader rollout.",
        detail: "Training kits for field staff and escalation paths for bad reads.",
      },
      {
        name: "Scale & integrations",
        summary:
          "Connect ERP, financing, and buyer systems as volumes and partners grow.",
        detail: "SLA-backed integrations and seasonal capacity planning for infra.",
      },
    ],
    outcomes: [
      "Offline-first mobile flows where it matters",
      "Traceability from plot to buyer",
      "Operational dashboards tuned to agronomic cycles",
    ],
  },
  "real-estate": {
    intro:
      "Real estate products sit between buyers, agents, and internal ops. We choreograph listings, verification, and closings so nothing falls through the cracks.",
    phases: [
      {
        name: "Journey mapping",
        summary:
          "Align search, tours, offers, and handover across web, mobile, and CRM touchpoints.",
        detail: "Role-based permissions for brokers, admins, and partners.",
      },
      {
        name: "Listing & media pipeline",
        summary:
          "Standardize ingestion, media processing, and SEO-ready publication workflows.",
        detail: "Moderation queues, duplicate detection, and rich media CDN strategy.",
      },
      {
        name: "Transactions & documents",
        summary:
          "Digitize offer, counter, and document exchange with clear status timelines.",
        detail: "E-sign hooks, versioned PDFs, and notifications tuned to time zones.",
      },
      {
        name: "Go-live with partners",
        summary:
          "Onboard a pilot brokerage or developer with white-label options if required.",
        detail: "Support playbooks and analytics on funnel drop-offs.",
      },
      {
        name: "Optimize conversion",
        summary:
          "Iterate on search relevance, saved searches, and agent productivity tools.",
        detail: "A/B testing framework and CRM sync health monitoring.",
      },
    ],
    outcomes: [
      "Unified listing lifecycle from draft to live",
      "Transparent offer timelines for all parties",
      "Broker tooling that reduces repetitive admin",
    ],
  },
  telecom: {
    intro:
      "Telecom workflows span provisioning, billing disputes, and network visibility. We build interfaces and orchestration that reduce mean-time-to-resolution.",
    phases: [
      {
        name: "Service catalog & journeys",
        summary:
          "Model plans, add-ons, and self-service paths against OSS/BSS constraints.",
        detail: "API inventory from legacy stacks; customer-visible status vocabulary.",
      },
      {
        name: "Provisioning orchestration",
        summary:
          "Design state machines for activate, suspend, migrate, and recover flows.",
        detail: "Saga patterns, compensating transactions, and operator override paths.",
      },
      {
        name: "Care & operations consoles",
        summary:
          "Give agents a single pane with customer context and safe remediation actions.",
        detail: "Role-based actions, notes, and integration to ticketing.",
      },
      {
        name: "Observability rollout",
        summary:
          "Wire metrics and traces across gateways and downstream dependencies.",
        detail: "SLO dashboards and alert routing by severity and team.",
      },
      {
        name: "Continuous hardening",
        summary:
          "Load-test peak events; refine rate limits and circuit breakers.",
        detail: "Chaos drills for partial dependency failures.",
      },
    ],
    outcomes: [
      "Predictable provisioning with clear customer messaging",
      "Agent consoles that shorten handle time",
      "Health signals across critical integration paths",
    ],
  },
  healthcare: {
    intro:
      "Clinical workflows demand accessibility, privacy, and calm UX under pressure. We embed HIPAA-minded patterns without turning the product into paperwork.",
    phases: [
      {
        name: "Clinical & compliance discovery",
        summary:
          "Shadow workflows with clinicians and map PHI boundaries early.",
        detail: "Data classification, BAA touchpoints, and consent capture patterns.",
      },
      {
        name: "Accessible IA & prototypes",
        summary:
          "Test critical paths with real users; validate WCAG targets for your audience.",
        detail: "Readable typography, error recovery, and assistive tech checks.",
      },
      {
        name: "Integrations & interoperability",
        summary:
          "Connect EHR, labs, and messaging with scoped APIs and webhooks.",
        detail: "FHIR where applicable; fallback flows when systems are slow.",
      },
      {
        name: "Secure implementation",
        summary:
          "Encrypt in transit and at rest; enforce session policies and device posture where needed.",
        detail: "Audit logs for access to sensitive records.",
      },
      {
        name: "Pilot & training",
        summary:
          "Roll out to a department or cohort with in-app guidance and support channels.",
        detail: "Feedback loops into backlog for fast iteration post-launch.",
      },
    ],
    outcomes: [
      "PHI-safe flows with clear consent and retention",
      "Integration surfaces that degrade gracefully",
      "Training-friendly UX for busy clinical staff",
    ],
  },
  logistics: {
    intro:
      "Logistics is exception-heavy: weather, customs, and carrier variance. We build workflows that surface what matters and automate the rest.",
    phases: [
      {
        name: "Network & exception mapping",
        summary:
          "Document lanes, hubs, partners, and the top failure modes you see today.",
        detail: "SLA definitions and escalation trees by exception type.",
      },
      {
        name: "Dispatch & visibility core",
        summary:
          "Ship tracking, ETA, and milestone events with a single source of truth.",
        detail: "Event streaming, deduplication, and customer notifications.",
      },
      {
        name: "Partner & carrier integrations",
        summary:
          "Normalize status codes and attach proof-of-delivery where required.",
        detail: "Retry policies, idempotent webhooks, and partner sandboxes.",
      },
      {
        name: "Control tower rollout",
        summary:
          "Give ops teams filters, bulk actions, and drill-down to shipment detail.",
        detail: "Saved views and keyboard-first actions for high-volume desks.",
      },
      {
        name: "Optimize & automate",
        summary:
          "Introduce routing suggestions and auto-resolution for known patterns.",
        detail: "ML-assisted triage only where data quality supports it.",
      },
    ],
    outcomes: [
      "End-to-end shipment timelines with fewer blind spots",
      "Partner integrations that survive noisy data",
      "Ops tooling tuned for exception handling at scale",
    ],
  },
  education: {
    intro:
      "Learners drop off when friction wins. We design cohort schedules, payments, and content delivery as one coherent workflow—not a patchwork of tools.",
    phases: [
      {
        name: "Program & persona discovery",
        summary:
          "Define learner segments, pacing, and success metrics with your educators.",
        detail: "Content formats, live vs async mix, and accessibility needs.",
      },
      {
        name: "Learning architecture",
        summary:
          "Structure modules, assessments, and progress signals for motivation and support.",
        detail: "Prerequisites, unlock rules, and coach interventions.",
      },
      {
        name: "Platform build",
        summary:
          "Implement video, chat, billing, and admin in a cohesive experience.",
        detail: "Role dashboards for students, instructors, and ops.",
      },
      {
        name: "Cohort pilot",
        summary:
          "Run a bounded cohort with instrumentation on completion and satisfaction.",
        detail: "Office hours tooling and help center content.",
      },
      {
        name: "Grow & localize",
        summary:
          "Add languages, payment methods, and partnerships as you expand.",
        detail: "Content ops pipelines and moderation where community exists.",
      },
    ],
    outcomes: [
      "Clear learner journeys from signup to completion",
      "Instructor tools that reduce manual coordination",
      "Analytics on engagement without surveillance creep",
    ],
  },
  "e-commerce": {
    intro:
      "Commerce workflows fuse catalog, promotions, checkout, and fulfillment. We tighten the loop so merchandising moves at the speed of the market.",
    phases: [
      {
        name: "Merchandising & catalog",
        summary:
          "Model variants, bundles, and promotions with guardrails against conflicts.",
        detail: "Bulk edit flows and preview before publish.",
      },
      {
        name: "Checkout & payments",
        summary:
          "Optimize conversion with trust signals, retries, and localized payment methods.",
        detail: "Fraud rules, 3DS where needed, and clear error recovery.",
      },
      {
        name: "Order & fulfillment orchestration",
        summary:
          "Connect OMS, 3PL, and customer notifications with consistent statuses.",
        detail: "Split shipments, partial refunds, and return initiation.",
      },
      {
        name: "Ops & support surfaces",
        summary:
          "Give support agents order history, refunds, and safe overrides.",
        detail: "Audit trails for financial adjustments.",
      },
      {
        name: "Experimentation loop",
        summary:
          "Instrument funnels; ship A/B tests on PDP, cart, and lifecycle messaging.",
        detail: "Feature flags and performance budgets for storefront speed.",
      },
    ],
    outcomes: [
      "Faster catalog updates with fewer pricing mistakes",
      "Checkout flows tuned for mobile and international buyers",
      "Fulfillment visibility that reduces “where is my order?” load",
    ],
  },
}

export function getSectorWorkflow(slug) {
  return sectorWorkflows[slug] ?? null
}
