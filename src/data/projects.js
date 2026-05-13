export const projects = [
  {
    title: "Northline Treasury Cloud",
    industry: "Fintech",
    description:
      "A unified operations console for treasury teams with real-time risk signals and audit trails.",
    tech: ["React", "Node", "PostgreSQL", "Kafka"],
    coverSrc: "/projects/fintech.jpg",
    coverAlt: "Analytics dashboard and financial data visualization on monitors",
  },
  {
    title: "AgriPulse Network",
    industry: "Agriculture",
    description:
      "Sensor ingestion, forecasting, and supplier coordination across regional co-ops.",
    tech: ["Next.js", "Python", "Timescale", "GCP"],
    coverSrc: "/projects/agriculture.jpg",
    coverAlt: "Vegetable farming rows in a green agricultural field",
  },
  {
    title: "Helix Patient Hub",
    industry: "Healthcare",
    description:
      "A calm, accessible care journey with integrations to EHR workflows and messaging.",
    tech: ["React", "GraphQL", "FHIR", "AWS"],
    coverSrc: "/projects/healthcare.jpg",
    coverAlt: "Bright hospital corridor and clinical care environment",
  },
  {
    title: "Harbor Freight Desk",
    industry: "Logistics",
    description:
      "Dispatch orchestration, carrier scorecards, and exception workflows for port-adjacent fleets.",
    tech: ["React", "Go", "Redis", "Kubernetes"],
    coverSrc: "/projects/logistics.jpg",
    coverAlt: "Shipping containers and port logistics at dusk",
  },
  {
    title: "Lumen Retail OS",
    industry: "Retail",
    description:
      "Omnichannel inventory, POS integrations, and margin analytics for multi-store operators.",
    tech: ["Next.js", "tRPC", "PostgreSQL", "Stripe"],
    coverSrc: "/projects/retail.jpg",
    coverAlt: "Modern retail store interior with displays",
  },
  {
    title: "Atlas Learn Studio",
    industry: "Education",
    description:
      "Creator-led courses, cohort scheduling, and progress insights for online academies.",
    tech: ["React", "Supabase", "Mux", "Vercel"],
    coverSrc: "/projects/education.jpg",
    coverAlt: "Students learning with laptops in a bright classroom",
  },
  {
    title: "Vertex Compliance Graph",
    industry: "Fintech",
    description:
      "Entity resolution and policy simulation for AML teams across fragmented data sources.",
    tech: ["Python", "Neo4j", "Airflow", "Snowflake"],
    coverSrc: "/projects/compliance.jpg",
    coverAlt: "Network graph visualization on a dark screen",
  },
  {
    title: "Gridline Energy Monitor",
    industry: "Energy",
    description:
      "Field telemetry dashboards and outage prediction for distributed solar and storage assets.",
    tech: ["Vue", "Rust", "MQTT", "Azure"],
    coverSrc: "/projects/energy.jpg",
    coverAlt: "Solar panels and power infrastructure under blue sky",
  },
]

/** Sorted unique industries for filters and nav. */
export function getProjectIndustries(list = projects) {
  return [...new Set(list.map((p) => p.industry))].sort((a, b) =>
    a.localeCompare(b),
  )
}
