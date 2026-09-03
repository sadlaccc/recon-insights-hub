export type Service = {
  slug: string;
  code: string;
  title: string;
  desc: string;
  summary: string;
  scope: string[];
  deliverables: string[];
  response: string;
};

export const services: Service[] = [
  {
    slug: "executive-protection",
    code: "RP-01",
    title: "Executive Protection",
    desc: "Discreet safeguarding for principals, with layered route and venue planning.",
    summary:
      "A protective envelope built around the principal's real routine — travel, residence, workplace and public exposure — staffed by vetted operators who stay invisible until they are needed.",
    scope: [
      "Principal and family risk profiling",
      "Advance route, venue and residence surveys",
      "Secure transport coordination and driver vetting",
      "Travel support across 40+ jurisdictions",
    ],
    deliverables: [
      "Protective operations plan",
      "Daily movement schedule with contingencies",
      "Incident and escalation protocol",
      "Post-engagement debrief",
    ],
    response: "Team on station within 24 hours; emergency cover under 60 minutes.",
  },
  {
    slug: "threat-and-risk-assessment",
    code: "RP-02",
    title: "Threat & Risk Assessment",
    desc: "Structured exposure analysis across people, places and digital surfaces.",
    summary:
      "A structured read of where you are exposed and what it would take to reach you — scored, prioritised and paired with remediation you can actually resource.",
    scope: [
      "Person, premises and digital footprint review",
      "Adversary capability and intent modelling",
      "Insider and supply-chain exposure mapping",
      "Scenario stress-testing",
    ],
    deliverables: [
      "Scored risk register",
      "Prioritised remediation roadmap",
      "Executive briefing pack",
      "90-day review checkpoint",
    ],
    response: "Initial findings in 5 working days; full report in 15.",
  },
  {
    slug: "surveillance-and-counter-surveillance",
    code: "RP-03",
    title: "Surveillance & Counter-Surveillance",
    desc: "Detection, verification and mitigation of unwanted observation.",
    summary:
      "Establishing whether you are being watched, by whom, and with what capability — then removing the observation without alerting the party responsible.",
    scope: [
      "Covert static and mobile observation",
      "Counter-surveillance detection routes",
      "Technical sweep coordination",
      "Evidence capture to an admissible standard",
    ],
    deliverables: [
      "Observation logs with timestamps",
      "Photographic and video evidence",
      "Attribution assessment",
      "Mitigation recommendations",
    ],
    response: "Deployment within 48 hours of tasking.",
  },
  {
    slug: "security-consulting",
    code: "RP-04",
    title: "Security Consulting",
    desc: "Advisory on policy, posture and resourcing for evolving threat environments.",
    summary:
      "Senior advisory for organisations that need a security function that matches their risk — right-sized policy, staffing and spend, reviewed against how threats are actually moving.",
    scope: [
      "Security policy and governance review",
      "Physical and procedural posture audit",
      "Vendor and guarding contract assessment",
      "Programme design and budget modelling",
    ],
    deliverables: [
      "Posture gap analysis",
      "Policy set aligned to ISO 18788",
      "Staffing and budget model",
      "Board-ready summary",
    ],
    response: "Engagement scoped within 3 working days.",
  },
  {
    slug: "close-protection",
    code: "RP-05",
    title: "Close Protection",
    desc: "Trained operators embedded alongside principals for high-visibility events.",
    summary:
      "Uniformed or low-profile officers working at arm's length during events, appearances and high-exposure movements, with crowd, media and access control handled in advance.",
    scope: [
      "Event and venue access control",
      "Crowd and media line management",
      "Embedded single- or multi-officer details",
      "Liaison with venue and local authorities",
    ],
    deliverables: [
      "Event security plan",
      "Access and credentialing matrix",
      "Officer brief and rules of engagement",
      "Event after-action report",
    ],
    response: "Detail confirmed within 12 hours for scheduled events.",
  },
  {
    slug: "crisis-response",
    code: "RP-06",
    title: "Crisis Response",
    desc: "Rapid mobilisation and coordinated recovery when a situation escalates.",
    summary:
      "A standing response capability for the moment things go wrong — one number, one commander, and a coordinated route back to normal operations.",
    scope: [
      "24/7 activation desk",
      "On-ground incident command",
      "Extraction and relocation support",
      "Stakeholder and media coordination",
    ],
    deliverables: [
      "Crisis playbook and call tree",
      "Live incident log",
      "Recovery and continuity plan",
      "Formal incident review",
    ],
    response: "Desk answers immediately; mobilisation under 60 minutes.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
