const services = [
  {
    id: 1,
    title: "Commercial Construction",
    shortDescription: "Building spaces for business success",
    fullDescription: "From office buildings to retail centers and industrial facilities, our commercial construction services deliver high-quality spaces built for efficiency, compliance, and long-term value. We handle every aspect of your commercial project, from pre-construction planning to final inspection.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="24" y1="216" x2="244" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="84" y1="80" x2="92" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="132" y1="80" x2="140" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="84" y1="120" x2="92" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="132" y1="120" x2="140" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="88 216 88 160 136 160 136 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="48" y1="40" x2="48" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="216" x2="176" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="40" x2="184" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="220" y1="216" x2="220" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="88" x2="228" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJnbGFzcyUyQm9mZmljZSUyQmJ1aWxkaW5nJTJCdW5kZXIlMkJjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzQ2Nzg5NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Corporate offices and headquarters",
      "Retail and shopping centers",
      "Hotels and hospitality venues",
      "Industrial and manufacturing facilities",
      "Medical and healthcare buildings"
    ],
    benefits: [
      "Custom designs optimized for your business needs",
      "Energy-efficient building systems",
      "ADA-compliant accessibility features",
      "Durable materials for reduced maintenance costs",
      "Fast-track construction options available"
    ]
  },
  {
    id: 2,
    title: "Residential Construction",
    shortDescription: "Crafting dream homes with precision",
    fullDescription: "Our residential construction team specializes in building custom homes, multi-family housing, and renovation projects that combine aesthetic appeal with functional living spaces. We work closely with homeowners to bring their vision to life while ensuring structural integrity and quality craftsmanship.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><polyline points="240 128 96 128 56 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="144" y1="128" x2="104" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="48" x2="192" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="128" x2="96" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M240,128v56a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V128L56,48H200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="76" y1="88" x2="220" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJyZXNpZGVudGlhbCUyQmhvbWUlMkJjb25zdHJ1Y3Rpb24lMkJ3aXRoJTJCd29ya2VycyUyQm9uJTJCc2l0ZXxlbnwwfHx8fDE3NDY3ODk1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Custom luxury homes",
      "Multi-family housing developments",
      "Townhouses and condominiums",
      "Residential subdivisions",
      "High-end renovations and additions"
    ],
    benefits: [
      "Personalized design consultations",
      "Quality materials and superior craftsmanship",
      "Energy-efficient home systems",
      "Smart home technology integration",
      "Thorough quality control inspections"
    ]
  },
  {
    id: 3,
    title: "Renovation & Remodeling",
    shortDescription: "Transforming existing spaces",
    fullDescription: "Breathe new life into existing structures with our renovation and remodeling services. Whether you're looking to update a commercial space or transform your residential property, our team delivers stunning results while minimizing disruption to your daily operations or living arrangements.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><path d="M73,217A24,24,0,0,1,39,183l63.77-58.28A64,64,0,0,1,184,36.65L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-88.1,81.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyQnJlbm92YXRpb24lMkJpbiUyQnByb2dyZXNzJTJCd2l0aCUyQmV4cG9zZWQlMkJ3YWxscyUyQmFuZCUyQm5ldyUyQmZpeHR1cmVzfGVufDB8fHx8MTc0Njc4OTUxNXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Commercial space renovations",
      "Home remodeling and additions",
      "Historic building restoration",
      "Interior space reconfiguration",
      "Façade improvements and upgrades"
    ],
    benefits: [
      "Minimal disruption to ongoing operations",
      "Creative solutions for challenging spaces",
      "Modern upgrades for increased functionality",
      "Cost-effective alternatives to new construction",
      "Phased approaches for budget management"
    ]
  },
  {
    id: 4,
    title: "Civil Engineering & Infrastructure",
    shortDescription: "Building foundations for communities",
    fullDescription: "Our civil engineering and infrastructure projects help communities thrive through well-designed roads, bridges, water systems, and public facilities. We combine technical expertise with sustainable practices to create infrastructure that stands the test of time while minimizing environmental impact.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="64" y1="56" x2="64" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="192" y1="56" x2="192" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,115.35A64,64,0,0,0,64,56a64,64,0,0,0,128,0,64,64,0,0,0,40,59.35" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="115.35" x2="152" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="115.35" x2="104" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="24" y1="168" x2="232" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: ""https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxyb2FkJTJCY29uc3RydWN0aW9uJTJCd2l0aCUyQmhlYXZ5JTJCbWFjaGluZXJ5JTJCYW5kJTJCd29ya2Vyc3xlbnwwfHx8fDE3NDY3ODk1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"",
    features: [
      "Road and highway construction",
      "Bridge and overpass projects",
      "Water and sewage systems",
      "Public facilities and parks",
      "Earthwork and site preparation"
    ],
    benefits: [
      "Comprehensive engineering and planning services",
      "Compliance with all regulatory requirements",
      "Environmentally conscious construction methods",
      "Durable infrastructure designed for longevity",
      "Effective stormwater management solutions"
    ]
  },
  {
    id: 5,
    title: "Green Building & Sustainability",
    shortDescription: "Eco-friendly construction solutions",
    fullDescription: "Our green building services incorporate sustainable materials, energy-efficient systems, and environmentally responsible practices. We help clients achieve LEED certification while reducing operational costs and environmental impact through thoughtful design and construction methods.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><path d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="40" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxlY28tZnJpZW5kbHklMkJidWlsZGluZyUyQndpdGglMkJzb2xhciUyQnBhbmVscyUyQmFuZCUyQmdyZWVuJTJCcm9vZnxlbnwwfHx8fDE3NDY3ODk1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "LEED certified building projects",
      "Solar and renewable energy integration",
      "Energy-efficient systems installation",
      "Sustainable material sourcing",
      "Green roof and rainwater harvesting systems"
    ],
    benefits: [
      "Reduced energy consumption and utility costs",
      "Healthier indoor air quality for occupants",
      "Lower environmental impact and carbon footprint",
      "Potential tax incentives and rebates",
      "Enhanced property value and marketability"
    ]
  },
  {
    id: 6,
    title: "Project Management",
    shortDescription: "Expert oversight from concept to completion",
    fullDescription: "Our comprehensive project management services ensure your construction project stays on schedule and within budget. From initial planning and design coordination to final inspection and handover, our experienced project managers handle every detail while keeping you informed at every stage.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: ""https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTJCbWFuYWdlciUyQndpdGglMkJibHVlcHJpbnQlMkJyZXZpZXdpbmclMkJjb25zdHJ1Y3Rpb24lMkJzaXRlfGVufDB8fHx8MTc0Njc4OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Budget development and cost control",
      "Schedule creation and management",
      "Vendor and subcontractor coordination",
      "Quality assurance and inspection",
      "Regulatory compliance and permitting"
    ],
    benefits: [
      "Single point of contact throughout your project",
      "Proactive problem-solving and risk management",
      "Transparent communication and regular updates",
      "Efficient resource allocation and scheduling",
      "Consistent quality control standards"
    ]
  },
  {
    id: 7,
    title: "Design-Build Services",
    shortDescription: "Seamless integration of design and construction",
    fullDescription: "Our design-build approach combines architectural design and construction services under one contract, streamlining the project delivery process. This integrated method reduces costs, accelerates timelines, and improves communication while maintaining high-quality standards throughout your project.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><rect x="152" y="40" width="64" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="88" x2="180" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="128" x2="180" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="168" x2="180" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M40,64,72,32l32,32V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="80" x2="40" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="176" x2="40" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMkJhbmQlMkJjb25zdHJ1Y3Rpb24lMkJtYW5hZ2VyJTJCcmV2aWV3aW5nJTJCcGxhbnMlMkJ0b2dldGhlciUyQm9uJTJCc2l0ZXxlbnwwfHx8fDE3NDY3OTAwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"",
    features: [
      "Unified design and construction teams",
      "Fast-track project delivery",
      "Value engineering opportunities",
      "Collaborative problem-solving",
      "Streamlined approval processes"
    ],
    benefits: [
      "Single point of responsibility for design and construction",
      "Reduced project timeline by overlapping phases",
      "Early cost certainty and budget optimization",
      "Fewer change orders and design conflicts",
      "Improved communication between all project stakeholders"
    ]
  },
  {
    id: 8,
    title: "Preconstruction Services",
    shortDescription: "Setting projects up for success from day one",
    fullDescription: "Our preconstruction services provide vital planning and analysis before breaking ground. We conduct thorough site assessments, develop accurate cost estimates, create detailed schedules, and identify potential challenges early to ensure smooth project execution and minimize costly surprises.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx0ZWFtJTJCcmV2aWV3aW5nJTJCY29uc3RydWN0aW9uJTJCcGxhbnMlMkJhbmQlMkJtb2RlbHMlMkJpbiUyQm9mZmljZSUyQnNldHRpbmd8ZW58MHx8fHwxNzQ2NzkwMDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Site evaluation and feasibility studies",
      "Constructability reviews",
      "Value engineering sessions",
      "Detailed cost estimation",
      "Procurement strategy development"
    ],
    benefits: [
      "Early identification of potential challenges",
      "More accurate budgeting and timeline planning",
      "Optimized design for constructability",
      "Reduced change orders during construction",
      "Strategic material and vendor selections"
    ]
  }
];

export default services;