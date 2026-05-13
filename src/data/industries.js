import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Leaf,
  Radio,
  ShoppingBag,
  Truck,
} from "lucide-react"

export const industries = [
  {
    slug: "fintech",
    title: "Fintech",
    description:
      "Payments, lending, and compliance-ready platforms engineered for scale and trust.",
    icon: Landmark,
  },
  {
    slug: "agriculture",
    title: "Agriculture",
    description:
      "Telemetry, supply chain visibility, and decision tools for modern ag operations.",
    icon: Leaf,
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description:
      "Portals, marketplaces, and internal tools that streamline discovery and closings.",
    icon: Building2,
  },
  {
    slug: "telecom",
    title: "Telecom",
    description:
      "Customer experience, provisioning workflows, and analytics for network teams.",
    icon: Radio,
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Secure patient journeys, integrations, and clinician-first interfaces.",
    icon: HeartPulse,
  },
  {
    slug: "logistics",
    title: "Logistics",
    description:
      "Routing intelligence, fleet visibility, and partner ecosystems built for speed.",
    icon: Truck,
  },
  {
    slug: "education",
    title: "Education",
    description:
      "Learning platforms, cohort tooling, and content systems students actually use.",
    icon: GraduationCap,
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    description:
      "Conversion-focused storefronts, subscriptions, and operations automation.",
    icon: ShoppingBag,
  },
]

export function getIndustryBySlug(slug) {
  return industries.find((i) => i.slug === slug) ?? null
}
