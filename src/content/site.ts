/**
 * Single source of truth for homepage copy, shared by /v1, /v2 and /v3.
 *
 * Sources: the recovered robustmanagedit.com homepage (Wayback snapshot
 * 2026-04-13), the old industry and Managed IT pages, and the
 * "RJ Computers Website Content (Combined)" doc. Only real facts go here —
 * no invented stats, client counts or response-time promises.
 */

export const brand = {
  name: "Robust Managed IT",
  short: "Robust",
  legacy: "RJ Computer Networks",
  legalName: "RJ Computer Networks, Inc.",
  descriptor: "IT-Managed Service Provider",
  heritage: "RJ Computer Networks, Inc. · since 1989",
  founded: 1989,
  incorporated: 1995,
  yearsInBusiness: new Date().getFullYear() - 1989,
  tagline: "Secure. Empower. Succeed.",
  mission:
    "We started Robust Managed IT to be the local MSSP partner we knew small businesses deserved: someone as passionate about their success as they are.",
};

export const contact = {
  phone: "(562) 464-3644",
  phoneHref: "tel:+15624643644",
  email: "info@rjcomputers.com",
  emailHref: "mailto:info@rjcomputers.com",
  street: "13215 E Penn St, Suite 210",
  city: "Whittier",
  region: "CA",
  postal: "90602",
  building: "Whittier Square Building",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=13215+E+Penn+St+Suite+210+Whittier+CA+90602",
  serviceArea: "Greater Los Angeles, Orange County and select cities in San Bernardino",
  serviceAreaShort: ["Greater Los Angeles", "Orange County", "San Bernardino"],
  linkedin: "https://www.linkedin.com/company/robustmanagedit",
  instagram: "https://www.instagram.com/robustmanagedit",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "How it works", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export type ServiceId =
  | "cybersecurity"
  | "monitoring"
  | "siem"
  | "managed-it"
  | "cloud"
  | "backup"
  | "compliance";

export type Service = { id: ServiceId; name: string; summary: string };

export type Pillar = {
  id: "protect" | "manage" | "comply";
  name: string;
  promise: string;
  services: Service[];
};

export const pillars: Pillar[] = [
  {
    id: "protect",
    name: "Protect",
    promise: "Stop threats before they become incidents.",
    services: [
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        summary:
          "Advanced threat detection, endpoint security and fast incident response, tailored to your business.",
      },
      {
        id: "monitoring",
        name: "Security Monitoring",
        summary:
          "Continuous threat surveillance, vulnerability scanning, log management and incident response planning.",
      },
      {
        id: "siem",
        name: "SIEM",
        summary:
          "Security Information and Event Management: deployment, continuous monitoring and real-time threat detection.",
      },
    ],
  },
  {
    id: "manage",
    name: "Manage",
    promise: "Technology that just works, so your team can too.",
    services: [
      {
        id: "managed-it",
        name: "Managed IT & Help Desk",
        summary:
          "Proactive monitoring, fast issue resolution and strategic IT planning, remotely or onsite, for one predictable monthly price.",
      },
      {
        id: "cloud",
        name: "Cloud Management",
        summary:
          "Secure Microsoft 365 and cloud environments, from migration through day-to-day management. Microsoft Certified Partner.",
      },
      {
        id: "backup",
        name: "Data Backup & Recovery",
        summary:
          "Automated, secure, offsite backups with tested recovery, so a bad day never becomes a lost business.",
      },
    ],
  },
  {
    id: "comply",
    name: "Comply",
    promise: "Meet the standards your customers and regulators expect.",
    services: [
      {
        id: "compliance",
        name: "Compliance Assistance",
        summary:
          "Risk assessments, audits and controls for HIPAA, Department of Defense requirements and other industry frameworks.",
      },
    ],
  },
];

export const allServices = pillars.flatMap((p) => p.services);

export type Industry = {
  id: "manufacturing" | "nonprofit" | "medical" | "financial";
  name: string;
  headline: string;
  intro: string;
  risks: string[];
  controls: { title: string; body: string }[];
  proof?: string;
};

export const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    headline: "Protect your IP, your supply chain and the line.",
    intro:
      "Connected machines and IIoT devices widen the attack surface. A ransomware hit doesn't just lock files; it stops production.",
    risks: ["Ransomware halting production", "Theft of designs and proprietary processes", "Supply-chain and vendor compromise", "DoD and customer compliance demands"],
    controls: [
      { title: "Intellectual property protection", body: "Safeguard product designs and proprietary processes from theft and espionage." },
      { title: "Supply chain security", body: "Secure the digital handoffs between your partners and vendors." },
      { title: "Smart manufacturing security", body: "Access controls and anomaly monitoring for IoT and connected systems." },
      { title: "Incident response & continuity", body: "A plan to get the line running again fast after an attack or failure." },
    ],
    proof: "Mitchell Laboratories met Department of Defense requirements with us.",
  },
  {
    id: "nonprofit",
    name: "Non-profit",
    headline: "Enterprise-grade protection on a non-profit budget.",
    intro:
      "Donor records, client data and grant requirements, with no in-house IT department. We become that department.",
    risks: ["Donor and client data exposure", "No dedicated IT staff", "HIPAA and funder requirements", "Tight, unpredictable budgets"],
    controls: [
      { title: "Donor data protection", body: "Keep donor and client information confidential to protect trust." },
      { title: "Secure access controls", body: "Multi-factor authentication and role-based access for staff and volunteers." },
      { title: "Regular security audits", body: "Find and fix weaknesses before someone else finds them." },
      { title: "Predictable monthly cost", body: "Proactive support replaces surprise break-fix bills." },
    ],
    proof: "Spiritt has relied on us since 2006 for HIPAA compliance and secure remote work.",
  },
  {
    id: "medical",
    name: "Medical",
    headline: "HIPAA-ready IT so you can focus on patients.",
    intro:
      "Small practices hold the same sensitive records as hospitals, without a hospital's security team.",
    risks: ["HIPAA violations and fines", "Patient record breaches", "Downtime that cancels appointments", "Phishing aimed at front-desk staff"],
    controls: [
      { title: "HIPAA compliance", body: "Safeguards for electronic health records: confidentiality and integrity." },
      { title: "Secure communication", body: "Encrypted email and file transfer for patient information." },
      { title: "Incident response & recovery", body: "Swift response and data recovery to keep care running." },
      { title: "Staff training", body: "Security best practices that cut the risk of accidental breaches." },
    ],
  },
  {
    id: "financial",
    name: "Financial & CPA",
    headline: "Client confidentiality, locked down.",
    intro:
      "Accounting firms and CPAs are trusted with the data attackers want most. Your security has to match that trust.",
    risks: ["Wire fraud and business email compromise", "Client data theft", "Regulatory penalties", "Tax-season downtime"],
    controls: [
      { title: "Data security & privacy", body: "Encryption, access controls and secure storage for financial records." },
      { title: "Secure communication", body: "Protect email and file transfers from interception." },
      { title: "Threat detection", body: "Spot and stop attacks on high-value transactions." },
      { title: "Secure cloud", body: "Flexible cloud access without exposing client files." },
    ],
  },
];

export const process = [
  {
    step: "Free assessment",
    tagline: "Know where you stand.",
    body: "We review your current security and IT setup and show you your vulnerabilities, at no cost.",
  },
  {
    step: "Onboarding",
    tagline: "Your security, your way.",
    body: "A welcome call, a needs review, and a tailored security plan built around your business.",
  },
  {
    step: "Integration",
    tagline: "Seamless security, zero hassle.",
    body: "We roll out tools and protections with simple training resources for your team.",
  },
  {
    step: "Ongoing support",
    tagline: "Always guarded, always ready.",
    body: "Proactive monitoring, regular check-ins and reports on your security, plus a real person when you call.",
  },
];

export type Testimonial = {
  quote: string;
  name?: string;
  role?: string;
  org: string;
  industry?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "RJ Computers is the BEST. Not only is their expertise top notch, their customer service, care, and concern for their clients is exemplary. Our organization has had the privilege of working with RJ for more than 30 years.",
    name: "Deborah Gentry",
    org: "American Baptist Churches",
    industry: "Non-profit",
  },
  {
    quote:
      "The network maintenance program they offer gives us peace of mind that our network is running. We couldn't afford to have our server down. Rodel and his staff are prompt, efficient, knowledgeable, and also happen to be really nice guys!",
    org: "Mitchell Laboratories",
    industry: "Manufacturing",
  },
  {
    quote:
      "RJ Computers' professionalism, customer service and pricing has been far superior to other IT firms we have worked with in the past.",
    name: "Fred Hagg",
    role: "CEO",
    org: "HiTech Products",
    industry: "Manufacturing",
  },
  {
    quote:
      "During emergency situations they have minimized the downtime and provided excellent recommendations to keep our business up and running on a daily basis.",
    name: "Steven Anderson",
    role: "CEO",
    org: "AdIndustries",
    industry: "Manufacturing",
  },
  {
    quote: "I'm confident and have peace of mind that a trusted partner is watching over our computer networks.",
    org: "YMCA Whittier",
    industry: "Non-profit",
  },
  {
    quote:
      "Always someone there to help you when you call. The support desk always makes sure problems are resolved to our satisfaction.",
    name: "Dalisay Aguirre",
    org: "Slome Capital, Inc.",
    industry: "Financial",
  },
  {
    quote:
      "A flexible support team that augments our daily maintenance needs. They offer us the quickest service and the knowledge to remotely connect to our corporate and satellite offices. Maintenance service is the way to go.",
    org: "Spiritt",
    industry: "Non-profit",
  },
];

export const clients = [
  "YMCA Whittier",
  "American Baptist Churches",
  "Mitchell Laboratories",
  "HiTech Products",
  "AdIndustries",
  "Slome Capital",
  "Spiritt",
];

export type CaseStudy = {
  client: string;
  industry: string;
  title: string;
  summary: string;
  since: number;
  outcomes: string[];
  timeline: { year: string; event: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Mitchell Laboratories",
    industry: "Manufacturing",
    title: "From website hosting to Department of Defense-ready security",
    summary:
      "Strategic IT upgrades enabled Mitchell Laboratories to meet Department of Defense requirements, strengthen cybersecurity and support significant growth.",
    since: 2002,
    outcomes: ["Met DoD security requirements", "Secure site-to-site VPN between locations", "Two-factor auth and security awareness training for remote work"],
    timeline: [
      { year: "Pre-2002", event: "Website hosting, firewall replacement, email setup" },
      { year: "2002", event: "Full maintenance contract: onsite support, antivirus, servers" },
      { year: "Growth", event: "New sites joined via site-to-site VPN; hosted VoIP" },
      { year: "2019+", event: "Stricter controls to meet DoD compliance; secure remote work" },
    ],
  },
  {
    client: "Spiritt",
    industry: "Non-profit · Social services",
    title: "HIPAA compliance and secure remote work for a growing non-profit",
    summary:
      "Our IT strategy moved Spiritt from break-fix to proactive management, with HIPAA compliance, cybersecurity and seamless remote work, so they can focus on the people they serve.",
    since: 2006,
    outcomes: ["HIPAA risk assessments and compliance audits", "Encryption, access controls and privacy policies", "Remote device management with remote disable"],
    timeline: [
      { year: "Before", event: "Break-fix repairs and basic antivirus, no IT staff" },
      { year: "2006", event: "Structured maintenance contract: predictable costs" },
      { year: "HIPAA", event: "Risk assessments, audits, encryption and access controls" },
      { year: "Today", event: "Secure VPN access and managed devices from anywhere" },
    ],
  },
];

export type TeamMember = { name: string; role: string; bio: string; initials: string };

export const team: TeamMember[] = [
  {
    name: "Rodelio Cecilia",
    role: "CEO & Founder",
    initials: "RC",
    bio: "Founded RJ Computers in 1989 to bring dependable IT and cybersecurity to small businesses across Southern California.",
  },
  {
    name: "Julieta Saba",
    role: "CFO",
    initials: "JS",
    bio: "Steers the company's financial health and strategic direction, keeping operations efficient, compliant and growth-ready.",
  },
  {
    name: "Michael Cobb",
    role: "Enterprise Systems Engineer",
    initials: "MC",
    bio: "Designs, implements and maintains client infrastructure, solving complex problems with modern technology.",
  },
  {
    name: "Fredegard Ojong",
    role: "Tech Support Engineer",
    initials: "FO",
    bio: "Frontline support: diagnosing issues, implementing fixes and guiding clients on best practices.",
  },
  {
    name: "Julius Cecilia",
    role: "Marketing Manager",
    initials: "JC",
    bio: "Connects Southern California businesses with the cybersecurity and managed IT services they need.",
  },
];

export const reasons = [
  { title: "Keep your business running", body: "We monitor your systems so you can focus on running your business, not worrying about hacks." },
  { title: "Protect your valuable data", body: "Critical information backed up and secured. A cyber attack won't take you offline." },
  { title: "Stay ahead of cyber threats", body: "Industry-leading security practices that evolve as fast as the threats do." },
  { title: "Boost productivity", body: "Proactive maintenance means less downtime and fewer interruptions for your team." },
  { title: "Compliance made easy", body: "We simplify the regulations, so you avoid fines and protect your reputation." },
  { title: "Personal, local support", body: "Friendly technicians in Whittier, a phone call away, who know your systems." },
];

export const guide = {
  title: "16 Questions You Must Ask Before Hiring Any I.T. Company",
  blurb:
    "Our free guide to separating real IT partners from the ones who'll leave you on hold. Know what to ask before you sign anything.",
};

export const faq = [
  {
    q: "What are managed IT services, and why does my organization need them?",
    a: "Managed IT means outsourcing responsibility for your technology to a dedicated team that watches over it, fixes problems and plans ahead, so it runs smoothly and supports your goals. You get a full IT department for one predictable monthly price.",
  },
  {
    q: "We already have an IT person or company. Why switch?",
    a: "Many of our clients came to us after slow response times or surprise bills. We start with a free assessment, so you can see exactly where you stand before you decide anything.",
  },
  {
    q: "Do you support us onsite or only remotely?",
    a: "Both. Many issues are resolved quickly over remote support, and our Whittier-based technicians come onsite when the job calls for it.",
  },
  {
    q: "Can you help us with HIPAA or Department of Defense requirements?",
    a: "Yes. We've guided clients through HIPAA compliance (Spiritt) and Department of Defense requirements (Mitchell Laboratories) with risk assessments, audits, access controls and encryption.",
  },
  {
    q: "What does the free assessment include?",
    a: "A 30–60 minute review of your IT systems and security with one of our consultants. We'll answer questions like whether you're protected from hackers and internal breaches, and whether you're at risk of non-compliance fines.",
  },
  {
    q: "What areas do you serve?",
    a: "We're based in Whittier and serve Greater Los Angeles, Orange County and select cities in San Bernardino. Remote support is available wherever you are.",
  },
];

export const helpOptions = [
  "Free security assessment",
  "Managed IT / help desk",
  "Cybersecurity & monitoring",
  "Compliance (HIPAA, DoD, etc.)",
  "Cloud / Microsoft 365",
  "Backup & disaster recovery",
  "Free guide: 16 Questions",
  "Something's broken right now",
  "Other",
];

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: brand.name,
  alternateName: brand.legacy,
  description:
    "Managed IT, cybersecurity and compliance services for small and mid-sized businesses and non-profits in Southern California since 1989.",
  telephone: "+1-562-464-3644",
  email: contact.email,
  foundingDate: "1989",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    addressLocality: contact.city,
    addressRegion: contact.region,
    postalCode: contact.postal,
    addressCountry: "US",
  },
  areaServed: ["Los Angeles County", "Orange County", "San Bernardino County"],
  sameAs: [contact.linkedin, contact.instagram],
};

/* ------------------------------------------------------------------ */
/* Round 2 additions                                                   */
/* ------------------------------------------------------------------ */

/** Marker for values the business must supply before launch. Grep for "[TBD". */
export const TBD = (label: string) => `[TBD: ${label}]`;

export type Stat = { value: string; suffix?: string; label: string; real: boolean };

/** Big-number stats. `real: false` entries are placeholders to replace. */
export const stats: Stat[] = [
  { value: String(brand.yearsInBusiness), suffix: "yrs", label: `Protecting Southern California businesses since ${brand.founded}`, real: true },
  { value: "[TBD]", suffix: "", label: TBD("number of client organizations protected"), real: false },
  { value: "[TBD]", suffix: "", label: TBD("endpoints / devices under management"), real: false },
  { value: "[TBD]", suffix: "min", label: TBD("average help-desk response time"), real: false },
  { value: "30", suffix: "+ yrs", label: "Our longest client relationship: American Baptist Churches", real: true },
  { value: "[TBD]", suffix: "%", label: TBD("client retention rate"), real: false },
];

/** Vendor / technology partners. Only Microsoft is confirmed from the old site. */
export const partners: { name: string; real: boolean }[] = [
  { name: "Microsoft Certified Partner", real: true },
  { name: TBD("security vendor partner, e.g. endpoint/EDR"), real: false },
  { name: TBD("firewall / network partner"), real: false },
  { name: TBD("backup partner"), real: false },
];

export const images = {
  serverTech: { src: "/img/server-tech.jpg", alt: "IT engineer servicing server hardware under a work lamp" },
  networkTech: { src: "/img/network-tech.jpg", alt: "Technician working on network equipment with hand tools" },
  engineer: { src: "/img/engineer-woman.jpg", alt: "Engineer working at a laptop beside industrial equipment" },
  cables: { src: "/img/cables.jpg", alt: "Server racks with network cabling and status lights in a dark data room" },
  rack: { src: "/img/server-rack.jpg", alt: "Close-up of a server rack in a server room" },
  factory: { src: "/img/factory.jpg", alt: "Automated production line on a manufacturing floor" },
  nonprofit: { src: "/img/nonprofit.jpg", alt: "Two staff members talking in a community care facility hallway" },
  medical: { src: "/img/medical.jpg", alt: "Reception desk in a medical office lobby" },
  finance: { src: "/img/finance.jpg", alt: "Accountant reviewing documents with a calculator and laptop" },
  meeting: { src: "/img/meeting.jpg", alt: "Team meeting around a conference table with laptops" },
  skyline: { src: "/img/skyline.jpg", alt: "Los Angeles skyline at night" },
} as const;

export const industryImages: Record<Industry["id"], (typeof images)[keyof typeof images]> = {
  manufacturing: images.factory,
  nonprofit: images.nonprofit,
  medical: images.medical,
  financial: images.finance,
};

export type EngagementModel = {
  id: string;
  name: string;
  kicker: string;
  summary: string;
  includes: string[];
  featured?: boolean;
  help: string;
};

/** Real offerings, from the old IT Services / Managed IT pages. No prices. */
export const engagementModels: EngagementModel[] = [
  {
    id: "on-demand",
    name: "On-Demand Support",
    kicker: "Pay as you go",
    summary: "Remote or onsite technical help when you need it, billed hourly or by project.",
    includes: ["Remote support for fast fixes", "Onsite visits when hands-on work is needed", "Hourly or project-based billing", "Windows and Microsoft Server expertise"],
    help: "Managed IT / help desk",
  },
  {
    id: "managed-it",
    name: "Managed IT Agreement",
    kicker: "Most popular",
    summary: "Support for your whole team at one predictable monthly price, with proactive monitoring.",
    includes: ["Unlimited help desk for your staff", "Proactive monitoring and maintenance", "Patching, backups and VPNs", "Strategic IT planning"],
    featured: true,
    help: "Managed IT / help desk",
  },
  {
    id: "security",
    name: "Managed Security & Compliance",
    kicker: "For regulated organizations",
    summary: "Continuous security monitoring plus the controls and documentation to pass an audit.",
    includes: ["Security monitoring and SIEM", "Risk assessments and audits", "HIPAA and DoD requirements", "Incident response planning"],
    help: "Compliance (HIPAA, DoD, etc.)",
  },
];

export type NewsItem = { kicker: string; title: string; cta: string; href: string; help?: string; image: (typeof images)[keyof typeof images] };

export const news: NewsItem[] = [
  {
    kicker: "Free assessment",
    title: "Find your security gaps before attackers do: free cyber risk assessment",
    cta: "Book yours",
    href: "#contact",
    help: "Free security assessment",
    image: images.cables,
  },
  {
    kicker: "Free guide",
    title: guide.title,
    cta: "Get the guide",
    href: "#contact",
    help: "Free guide: 16 Questions",
    image: images.meeting,
  },
  {
    kicker: "From the blog",
    title: "From one parent to another: lessons from the LAUSD data breach",
    cta: "Read the post",
    href: "#results",
    image: images.skyline,
  },
  {
    kicker: "Client story",
    title: "How Spiritt achieved HIPAA compliance and secure remote work",
    cta: "Read the story",
    href: "#results",
    image: images.nonprofit,
  },
];

export type DefenseLayer = { id: string; ring: number; name: string; body: string };

/** Data for the V1 "Defense Rings" diagram, innermost ring first. */
export const defenseLayers: DefenseLayer[] = [
  { id: "endpoint", ring: 1, name: "Endpoints", body: "Antivirus and endpoint protection, automated patching and device management on every laptop, desktop and server." },
  { id: "identity", ring: 1, name: "Identity", body: "Multi-factor authentication, role-based access and secure remote access for staff and volunteers." },
  { id: "email", ring: 1, name: "Email", body: "Filtering and phishing protection for Microsoft 365, plus security-awareness training for your team." },
  { id: "network", ring: 2, name: "Network", body: "Firewalls, site-to-site VPNs between locations, and secure Wi-Fi. Includes physical security cameras." },
  { id: "cloud", ring: 2, name: "Cloud", body: "Secure Microsoft 365 and cloud environments, from migration through day-to-day management." },
  { id: "backup", ring: 2, name: "Backup", body: "Automated offsite backups with tested restores, so ransomware never becomes a lost business." },
  { id: "monitoring", ring: 3, name: "Monitoring & SIEM", body: "Continuous monitoring, log management and real-time threat detection across your environment." },
  { id: "compliance", ring: 4, name: "Compliance", body: "Risk assessments, audits, policies and controls for HIPAA, Department of Defense requirements and more." },
  { id: "engineers", ring: 4, name: "Local engineers", body: `Technicians based in ${contact.city}, a phone call away, onsite across LA and Orange County when needed.` },
];

/** Data for the V3 lifecycle wheel. */
export const lifecycle = [
  { id: "assess", name: "Assess", body: "A free risk assessment maps your systems, users and vulnerabilities, and what compliance applies to you." },
  { id: "protect", name: "Protect", body: "We harden endpoints, identity, email, network and cloud, and put tested backups in place." },
  { id: "monitor", name: "Monitor", body: "Continuous monitoring and SIEM watch for threats while proactive maintenance prevents downtime." },
  { id: "respond", name: "Respond", body: "When something happens, our local team contains it fast, remotely or onsite, following your incident plan." },
  { id: "recover", name: "Recover", body: "We restore systems and data from verified backups, then close the gap so it can't happen twice." },
];

export const utilityLinks = [
  { label: "Blog", href: "#results" },
  { label: "Careers", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

/** Mega-menu groups for the header. */
export const megaMenu = {
  services: allServices.map((s) => ({ label: s.name, body: s.summary, href: "#services" })),
  industries: industries.map((i) => ({ label: i.name, body: i.headline, href: "#industries" })),
};
