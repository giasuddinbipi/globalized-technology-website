import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    category: "Software Development",
    icon: "code",
    shortDescription: "Fast, responsive, and secure websites built around your business goals.",
    description:
      "We design and develop modern websites and web applications that communicate your value clearly, perform reliably, and remain easy to maintain.",
    features: [
      "Corporate and business websites",
      "E-commerce stores",
      "Custom web applications",
      "Landing pages and campaign sites",
      "API and third-party integrations",
      "Performance, accessibility, and SEO foundations",
    ],
    deliverables: [
      "Responsive user interface",
      "Content-managed or static architecture",
      "Cross-browser testing",
      "Deployment and handover documentation",
      "Optional maintenance plan",
    ],
    suitableFor: ["New businesses", "Growing companies", "Online retailers", "Organizations replacing legacy websites"],
    faqs: [
      {
        question: "Can you redesign an existing website?",
        answer: "Yes. We can audit the current site, retain valuable content, improve the user experience, and migrate to a modern architecture.",
      },
      {
        question: "Will the website work on mobile devices?",
        answer: "Yes. Every project is designed and tested for mobile, tablet, laptop, and desktop screens.",
      },
    ],
  },
  {
    slug: "app-development",
    title: "App Development",
    category: "Software Development",
    icon: "smartphone",
    shortDescription: "Reliable mobile applications for customers, staff, and business operations.",
    description:
      "We create Android, iOS, and cross-platform applications with scalable architecture, thoughtful interfaces, and secure integrations.",
    features: [
      "Android and iOS applications",
      "Cross-platform development",
      "Customer and employee portals",
      "API integration",
      "Push notifications",
      "Testing and release support",
    ],
    deliverables: [
      "Application architecture",
      "UI implementation",
      "Backend/API integration",
      "Quality assurance",
      "Store submission guidance",
    ],
    suitableFor: ["Startups", "Service businesses", "Retail operations", "Internal business teams"],
    faqs: [
      {
        question: "Can one app support both Android and iOS?",
        answer: "Yes. A cross-platform approach can support both platforms from one codebase when it fits the project requirements.",
      },
      {
        question: "Do you provide maintenance after launch?",
        answer: "Yes. Maintenance can cover updates, issue resolution, monitoring, and future feature development.",
      },
    ],
  },
  {
    slug: "web-hosting",
    title: "Web Hosting",
    category: "Cloud and Hosting",
    icon: "server",
    shortDescription: "Managed hosting designed for speed, uptime, security, and dependable support.",
    description:
      "We help businesses select, configure, migrate, and maintain hosting environments suited to their website, traffic, and operational requirements.",
    features: [
      "Shared and managed hosting",
      "WordPress hosting",
      "SSL configuration",
      "DNS management",
      "Website migration",
      "Backup and monitoring options",
    ],
    deliverables: ["Hosting environment", "Domain and DNS setup", "SSL deployment", "Migration support", "Operational handover"],
    suitableFor: ["Business websites", "WordPress sites", "E-commerce stores", "Agencies and resellers"],
    faqs: [
      {
        question: "Can you migrate my existing website?",
        answer: "Yes. We can plan and complete a controlled migration with DNS, SSL, database, and post-migration checks.",
      },
      {
        question: "Is backup included?",
        answer: "Backup frequency and retention depend on the selected solution and will be defined in your proposal.",
      },
    ],
  },
  {
    slug: "email-hosting",
    title: "Email Hosting",
    category: "Cloud and Hosting",
    icon: "mail",
    shortDescription: "Professional business email with secure setup, migration, and administration.",
    description:
      "We deploy business email solutions using your domain and help with mailboxes, DNS authentication, migration, security, and user onboarding.",
    features: [
      "Custom-domain email",
      "Mailbox migration",
      "SPF, DKIM, and DMARC setup",
      "Mobile and desktop configuration",
      "User and group administration",
      "Spam and security configuration",
    ],
    deliverables: ["Domain verification", "Mailbox setup", "DNS authentication", "Migration assistance", "User setup guide"],
    suitableFor: ["Small businesses", "Distributed teams", "Professional firms", "Organizations upgrading from free email"],
    faqs: [
      {
        question: "Can you migrate old emails?",
        answer: "Yes. Migration options depend on the source and destination platforms, mailbox size, and available access.",
      },
      {
        question: "Can users access email from phones?",
        answer: "Yes. We provide configuration guidance for supported mobile, desktop, and browser-based clients.",
      },
    ],
  },
  {
    slug: "vps-server",
    title: "VPS Server Solutions",
    category: "Cloud and Hosting",
    icon: "cloud",
    shortDescription: "Flexible virtual servers configured for websites, applications, and business workloads.",
    description:
      "We provision and manage VPS environments with operating system hardening, application deployment, monitoring, backup planning, and technical support.",
    features: [
      "Linux and Windows VPS",
      "Server provisioning",
      "Control panel setup",
      "Security hardening",
      "Application deployment",
      "Monitoring and backup planning",
    ],
    deliverables: ["Provisioned server", "Security baseline", "Required runtime or control panel", "Deployment", "Access and documentation"],
    suitableFor: ["Web applications", "High-traffic websites", "Development teams", "Businesses needing more control"],
    faqs: [
      {
        question: "Do you provide managed VPS support?",
        answer: "Yes. Managed support can include updates, monitoring, troubleshooting, backup checks, and application assistance.",
      },
      {
        question: "Can you move an existing server?",
        answer: "Yes. We can assess dependencies and prepare a migration plan designed to minimize service disruption.",
      },
    ],
  },
  {
    slug: "vpn-solutions",
    title: "VPN Solutions",
    category: "Network and Connectivity",
    icon: "shield",
    shortDescription: "Secure remote and site-to-site connectivity for distributed business teams.",
    description:
      "We design and configure business VPN solutions so authorized users and locations can access private systems through protected connections.",
    features: [
      "Remote-access VPN",
      "Site-to-site VPN",
      "User access planning",
      "Firewall integration",
      "Multi-location connectivity",
      "Documentation and support",
    ],
    deliverables: ["Connectivity design", "VPN configuration", "Access policy", "Client setup guide", "Connection testing"],
    suitableFor: ["Remote teams", "Multi-branch businesses", "Private application access", "IT administrators"],
    faqs: [
      {
        question: "Can employees connect from home?",
        answer: "Yes. A remote-access VPN can provide authorized employees with protected access to approved business resources.",
      },
      {
        question: "Can two offices be connected?",
        answer: "Yes. A site-to-site VPN can securely connect compatible networks at multiple locations.",
      },
    ],
  },
  {
    slug: "isp-services",
    title: "ISP Services",
    category: "Network and Connectivity",
    icon: "wifi",
    shortDescription: "Business internet and connectivity solutions aligned with operational requirements.",
    description:
      "We help organizations plan and arrange dependable internet connectivity, network deployment, bandwidth requirements, and ongoing technical coordination.",
    features: [
      "Business internet connectivity",
      "Bandwidth planning",
      "Office network setup",
      "Router and Wi-Fi configuration",
      "Link monitoring options",
      "Technical coordination",
    ],
    deliverables: ["Requirement assessment", "Connectivity proposal", "Network setup", "Performance validation", "Support process"],
    suitableFor: ["Offices", "Retail locations", "Educational organizations", "Multi-branch businesses"],
    faqs: [
      {
        question: "Do you support office Wi-Fi setup?",
        answer: "Yes. We can plan access point placement, segmentation, guest access, and secure configuration.",
      },
      {
        question: "Can you support multiple branches?",
        answer: "Yes. We can help design connectivity and centralized network management for multiple locations.",
      },
    ],
  },
  {
    slug: "it-consultation",
    title: "IT Consultation",
    category: "IT Support and Consulting",
    icon: "briefcase",
    shortDescription: "Practical technology planning for operations, growth, security, and cost control.",
    description:
      "We assess your current environment, identify priorities, compare options, and create a practical technology roadmap aligned with your business objectives.",
    features: [
      "Infrastructure assessment",
      "Technology roadmap",
      "Cloud and hosting guidance",
      "Security review",
      "Vendor and solution evaluation",
      "Implementation planning",
    ],
    deliverables: ["Discovery session", "Current-state assessment", "Recommendations", "Priority roadmap", "Implementation options"],
    suitableFor: ["New companies", "Growing teams", "Businesses modernizing systems", "Organizations with recurring IT issues"],
    faqs: [
      {
        question: "Can you review our existing IT setup?",
        answer: "Yes. We can review infrastructure, software, connectivity, support processes, risks, and improvement opportunities.",
      },
      {
        question: "Will you also implement the recommendations?",
        answer: "Yes. Implementation can be included as a separate project or managed service after the consultation.",
      },
    ],
  },
  {
    slug: "remote-it-support",
    title: "Remote IT Support",
    category: "IT Support and Consulting",
    icon: "headphones",
    shortDescription: "Responsive remote troubleshooting and technical assistance for everyday IT issues.",
    description:
      "Our remote support service helps users and businesses resolve software, access, email, server, network, and configuration issues efficiently.",
    features: [
      "Remote troubleshooting",
      "Email and application support",
      "User account assistance",
      "Server and hosting support",
      "Issue escalation",
      "Support documentation",
    ],
    deliverables: ["Issue diagnosis", "Remote resolution", "Change summary", "Recommendations", "Escalation plan when required"],
    suitableFor: ["Small businesses", "Remote teams", "Organizations without full-time IT staff", "Existing managed clients"],
    faqs: [
      {
        question: "How does remote support work?",
        answer: "After authorization, a technician uses an approved remote-support method or guides the user through the required steps.",
      },
      {
        question: "Can every issue be fixed remotely?",
        answer: "Many software and configuration issues can be resolved remotely. Hardware or physical network issues may require on-site or remote-hands support.",
      },
    ],
  },
  {
    slug: "remote-hands",
    title: "Remote Hands",
    category: "IT Support and Consulting",
    icon: "monitor",
    shortDescription: "On-site technical assistance for remote teams, data centers, and distributed infrastructure.",
    description:
      "We act as your trusted local technical presence for physical checks, equipment installation, cabling, restarts, replacement coordination, and guided tasks.",
    features: [
      "Physical equipment inspection",
      "Cable and port checks",
      "Device installation or replacement",
      "Power-cycle and console assistance",
      "Photo and status reporting",
      "Coordination with remote engineers",
    ],
    deliverables: ["Task confirmation", "On-site execution", "Evidence and status report", "Escalation notes", "Completion summary"],
    suitableFor: ["International IT teams", "Data center customers", "Multi-site businesses", "Managed service providers"],
    faqs: [
      {
        question: "Can you follow instructions from our engineer?",
        answer: "Yes. We can coordinate with an authorized remote engineer and perform approved physical tasks within the agreed scope.",
      },
      {
        question: "Do you provide completion reports?",
        answer: "Yes. Reports can include actions completed, observations, photographs where permitted, and follow-up requirements.",
      },
    ],
  },
  {
    slug: "subscriptions",
    title: "Business Subscriptions",
    category: "Software and Licensing",
    icon: "key",
    shortDescription: "Productivity and cloud subscriptions with setup, migration, and administrative support.",
    description:
      "We help businesses select, acquire through appropriate channels, configure, and manage productivity platforms and other legitimate software subscriptions.",
    features: [
      "Microsoft 365 solutions",
      "Google Workspace solutions",
      "Zoho workplace and business tools",
      "AI productivity tools",
      "License assignment and renewal support",
      "User onboarding and migration",
    ],
    deliverables: ["Needs assessment", "Subscription recommendation", "Tenant or account setup", "User configuration", "Administration guidance"],
    suitableFor: ["Professional teams", "Remote organizations", "Growing businesses", "Companies consolidating software"],
    faqs: [
      {
        question: "Do you provide official subscriptions?",
        answer: "We only recommend legitimate subscription and licensing routes. Product availability, authorization, and terms depend on the relevant vendor and region.",
      },
      {
        question: "Can you migrate our files and email?",
        answer: "Yes. Migration can be scoped based on the source platform, data volume, account structure, and destination service.",
      },
    ],
  },
  {
    slug: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    category: "Cloud and Hosting",
    icon: "database",
    shortDescription: "Structured backup and recovery planning to reduce operational disruption and data loss.",
    description:
      "We help businesses define backup coverage, frequency, retention, off-site storage, recovery procedures, and routine verification.",
    features: [
      "Backup requirement assessment",
      "Server and website backups",
      "Off-site backup planning",
      "Retention policy design",
      "Restore testing",
      "Recovery documentation",
    ],
    deliverables: ["Backup plan", "Configured jobs", "Retention settings", "Restore procedure", "Verification report"],
    suitableFor: ["Business-critical websites", "Server workloads", "Professional firms", "Organizations improving resilience"],
    faqs: [
      {
        question: "Is a backup the same as disaster recovery?",
        answer: "No. A backup preserves data, while disaster recovery also defines how systems, access, and operations will be restored after a disruption.",
      },
      {
        question: "Do you test restores?",
        answer: "Restore testing can be included so the organization can verify that selected backups are usable.",
      },
    ],
  },
  {
    slug: "surveillance-system",
    title: "Surveillance System",
    category: "Security and Communications",
    icon: "camera",
    shortDescription: "CCTV and video surveillance solutions for safer, more visible business operations.",
    description:
      "We design and deploy surveillance systems for offices, shops, buildings, warehouses, and multi-site businesses, with practical camera coverage, recording, monitoring, and secure remote access.",
    features: [
      "IP and HD CCTV camera systems",
      "Indoor and outdoor camera planning",
      "NVR and DVR configuration",
      "Remote viewing from mobile and desktop",
      "Storage and recording design",
      "Network, power, and cabling coordination",
    ],
    deliverables: [
      "Site and coverage assessment",
      "Camera placement plan",
      "Configured recording system",
      "Remote-viewing setup",
      "Testing and user handover",
    ],
    suitableFor: [
      "Corporate offices",
      "Retail stores and showrooms",
      "Warehouses and factories",
      "Residential and commercial buildings",
    ],
    faqs: [
      {
        question: "Can I view the cameras remotely?",
        answer: "Yes. Where the selected equipment and internet connection support it, we can configure secure remote viewing on authorized mobile phones and computers.",
      },
      {
        question: "Do you help determine camera locations?",
        answer: "Yes. We assess entrances, exits, critical areas, lighting, viewing angles, recording requirements, and privacy considerations before proposing placement.",
      },
    ],
  },
  {
    slug: "pbx-system",
    title: "PBX System",
    category: "Security and Communications",
    icon: "phone",
    shortDescription: "Business phone systems that organize extensions, call routing, and internal communication.",
    description:
      "We plan and implement traditional, IP, and cloud-ready PBX solutions that help teams manage internal extensions, incoming calls, call routing, and business communications more efficiently.",
    features: [
      "IP PBX and office intercom solutions",
      "Extension and department configuration",
      "IVR and automated call routing",
      "Call queues, forwarding, and transfer",
      "SIP trunk and gateway integration",
      "Call reporting and recording options",
    ],
    deliverables: [
      "Communication requirement assessment",
      "PBX architecture and extension plan",
      "System and handset configuration",
      "Call-flow testing",
      "Administrator and user handover",
    ],
    suitableFor: [
      "Corporate offices",
      "Customer service teams",
      "Hotels and healthcare facilities",
      "Multi-department organizations",
    ],
    faqs: [
      {
        question: "Can existing phone numbers be used?",
        answer: "Often yes, depending on the service provider, line type, gateway requirements, and the PBX platform selected for the project.",
      },
      {
        question: "Can branches communicate through extensions?",
        answer: "Yes. An IP-based design can connect authorized branches and remote users when the network and security requirements are properly configured.",
      },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    category: "Business Systems",
    icon: "workflow",
    shortDescription: "Connected workflows and software that reduce repetitive work and improve visibility.",
    description:
      "We analyze repetitive business processes and build practical automation using web applications, integrations, approval workflows, notifications, dashboards, and cloud productivity platforms.",
    features: [
      "Workflow and approval automation",
      "CRM and lead-process automation",
      "Form, document, and reporting workflows",
      "Email and notification automation",
      "API and third-party system integration",
      "Operational dashboards and data synchronization",
    ],
    deliverables: [
      "Process discovery and workflow map",
      "Automation design",
      "Configured or custom-built solution",
      "Testing and user acceptance support",
      "Documentation and team training",
    ],
    suitableFor: [
      "Sales and service teams",
      "Finance and administration",
      "Operations and HR departments",
      "Growing businesses replacing manual processes",
    ],
    faqs: [
      {
        question: "Can you automate our existing tools?",
        answer: "Yes. We first assess the available APIs, connectors, permissions, data quality, and security requirements before recommending an integration approach.",
      },
      {
        question: "Do we need completely new software?",
        answer: "Not always. Many projects can improve existing tools through configuration and integration, while others benefit from a focused custom application.",
      },
    ],
  },

];

export const featuredServices = services.slice(0, 6);

export const serviceCategories = Array.from(new Set(services.map((service) => service.category)));

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
