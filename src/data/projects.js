const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "commercial",
    description: "A 12-story office building with contemporary design, energy-efficient features, and smart building technology. This landmark project serves as headquarters for multiple tech companies, featuring flexible workspaces, collaborative areas, and state-of-the-art amenities.",
    client: "TechHub Enterprises",
    location: "Downtown Metro Area",
    completionDate: "January 2023",
    projectCost: "$42.5 million",
    scope: [
      "210,000 square feet of office space",
      "4-level underground parking garage",
      "Rooftop garden and event space",
      "LEED Gold certification",
      "Smart building management system"
    ],
    challenges: [
      "Limited construction footprint in dense urban area",
      "Complex foundation requirements due to high water table",
      "Integration of multiple smart building systems"
    ],
    solutions: [
      "Implemented phased construction approach to minimize disruption",
      "Used innovative dewatering system during foundation work",
      "Coordinated with specialized technology vendors for seamless integration"
    ],
    image: ""https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJnbGFzcyUyQm9mZmljZSUyQmJ1aWxkaW5nJTJCd2l0aCUyQmRpc3RpbmN0aXZlJTJCYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc0Njc4OTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    additionalImages: [
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMkJidWlsZGluZyUyQmxvYmJ5JTJCd2l0aCUyQm1vZGVybiUyQnJlY2VwdGlvbiUyQmFyZWF8ZW58MHx8fHwxNzQ2Nzg5NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMkJtZWV0aW5nJTJCcm9vbSUyQndpdGglMkJnbGFzcyUyQndhbGxzJTJCYW5kJTJCY2l0eSUyQnZpZXdzfGVufDB8fHx8MTc0Njc4OTQyMXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyQmdyZWVuJTJCcm9vZiUyQmdhcmRlbiUyQm9uJTJCb2ZmaWNlJTJCYnVpbGRpbmd8ZW58MHx8fHwxNzQ2Nzg5NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTJCcGxhemElMkJ3aXRoJTJCbGFuZHNjYXBpbmclMkJhbmQlMkJzZWF0aW5nJTJCYXJlYXN8ZW58MHx8fHwxNzQ2NzkwMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    testimonial: {
      quote: "BuildRight delivered our vision perfectly, creating a workspace that enhances productivity and showcases our commitment to sustainability.",
      author: "Jennifer Adams",
      position: "COO, TechHub Enterprises"
    },
    featuredProject: true
  },
  {
    id: 2,
    title: "Luxury Residential Development",
    category: "residential",
    description: "A high-end residential community featuring 45 custom homes with premium finishes and smart home integration. This gated community offers residents resort-style amenities including a clubhouse, fitness center, and swimming pool, all designed with sustainability in mind.",
    client: "Elite Living Properties",
    location: "Westside Hills",
    completionDate: "October 2022",
    projectCost: "$28.7 million",
    scope: [
      "45 custom single-family homes",
      "Community clubhouse and fitness center",
      "Resort-style swimming pool and recreational areas",
      "Smart home technology in all residences",
      "Extensive landscaping and walking trails"
    ],
    challenges: [
      "Steep terrain requiring specialized foundation designs",
      "Maintaining architectural consistency while allowing for customization",
      "Integration of sustainable features within luxury design parameters"
    ],
    solutions: [
      "Employed stepped foundation designs and retaining walls",
      "Developed design guidelines with flexible options for homeowners",
      "Partnered with sustainable materials suppliers for eco-friendly luxury finishes"
    ],
    image: "https://images.unsplash.com/photo-1522255272218-7ac5249be344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMkJ2aWV3JTJCb2YlMkJsdXh1cnklMkJyZXNpZGVudGlhbCUyQmNvbW11bml0eSUyQndpdGglMkJzd2ltbWluZyUyQnBvb2x8ZW58MHx8fHwxNzQ2Nzg5NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    additionalImages: [
      "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyQm9mJTJCbHV4dXJ5JTJCaG9tZSUyQndpdGglMkJvcGVuJTJCZmxvb3IlMkJwbGFuJTJCYW5kJTJCaGlnaCUyQmNlaWxpbmdzfGVufDB8fHx8MTc0Njc4OTQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJraXRjaGVuJTJCd2l0aCUyQmlzbGFuZCUyQmFuZCUyQmhpZ2gtZW5kJTJCYXBwbGlhbmNlc3xlbnwwfHx8fDE3NDY3ODk0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxyZXNvcnQtc3R5bGUlMkJjb21tdW5pdHklMkJwb29sJTJCYW5kJTJCb3V0ZG9vciUyQmVudGVydGFpbm1lbnQlMkJhcmVhfGVufDB8fHx8MTc0Njc4OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1522543558187-768b6df7c25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMkJjbHViaG91c2UlMkJleHRlcmlvciUyQndpdGglMkJsYW5kc2NhcGVkJTJCZW50cmFuY2V8ZW58MHx8fHwxNzQ2NzkwMDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    testimonial: {
      quote: "BuildRight transformed challenging terrain into a stunning community. Their attention to detail and commitment to quality is evident in every home.",
      author: "Richard Thompson",
      position: "President, Elite Living Properties"
    },
    featuredProject: true
  },
  {
    id: 3,
    title: "City Center Shopping Mall",
    category: "commercial",
    description: "A 200,000 sq ft multi-level shopping center featuring over 60 retail spaces, dining options, and entertainment venues. This urban renewal project transformed a formerly underutilized area into a vibrant commercial hub, creating hundreds of jobs and revitalizing the downtown area.",
    client: "Urban Retail Developers",
    location: "City Center",
    completionDate: "May 2022",
    projectCost: "$35.2 million",
    scope: [
      "200,000 square feet of retail and entertainment space",
      "Multi-level design with central atrium",
      "Underground parking for 450 vehicles",
      "Food court with 12 restaurant spaces",
      "Cinema complex and entertainment zone"
    ],
    challenges: [
      "Brownfield site requiring environmental remediation",
      "Coordination of multiple tenant build-outs simultaneously",
      "Maintaining construction schedule while accommodating tenant design changes"
    ],
    solutions: [
      "Partnered with environmental specialists for site remediation",
      "Implemented phased tenant improvement schedule",
      "Established dedicated tenant coordination team"
    ],
    image: "https://images.unsplash.com/photo-1531506527841-6befe8901440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxsYXJnZSUyQm1vZGVybiUyQnNob3BwaW5nJTJCbWFsbCUyQndpdGglMkJnbGFzcyUyQmZhY2FkZSUyQmFuZCUyQm1haW4lMkJlbnRyYW5jZXxlbnwwfHx8fDE3NDY3ODk0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"",
    additionalImages: [
      "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyQm9mJTJCc2hvcHBpbmclMkJtYWxsJTJCd2l0aCUyQm11bHRpcGxlJTJCbGV2ZWxzJTJCYW5kJTJCc2t5bGlnaHRzfGVufDB8fHx8MTc0Njc4OTQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
      ""https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxmb29kJTJCY291cnQlMkJhcmVhJTJCd2l0aCUyQnZhcmlvdXMlMkJkaW5pbmclMkJvcHRpb25zfGVufDB8fHx8MTc0Njc4OTQyOHww&ixlib=rb-4.1.0&q=80&w=1080"",
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyQm5pZ2h0JTJCdmlldyUyQm9mJTJCbWFsbCUyQndpdGglMkJsaWdodGluZyUyQmZlYXR1cmVzfGVufDB8fHx8MTc0Njc4OTQyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxjaW5lbWElMkJhbmQlMkJlbnRlcnRhaW5tZW50JTJCem9uZSUyQmVudHJhbmNlJTJCd2l0aCUyQmRpZ2l0YWwlMkJkaXNwbGF5c3xlbnwwfHx8fDE3NDY3OTAyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    testimonial: {
      quote: "From remediation to ribbon-cutting, BuildRight managed this complex project with exceptional professionalism. The mall has exceeded our expectations in both design and functionality.",
      author: "Carlos Rodriguez",
      position: "Development Director, Urban Retail Developers"
    },
    featuredProject: true
  },
  {
    id: 4,
    title: "Harbor View Apartments",
    category: "residential",
    description: "A waterfront apartment complex featuring 120 luxury units with premium amenities and stunning harbor views. This mixed-use development includes ground-floor retail spaces, creating a vibrant community atmosphere where residents can live, shop, and dine without leaving the property.",
    client: "Coastal Living Investments",
    location: "Harbor District",
    completionDate: "August 2021",
    projectCost: "$31.5 million",
    scope: [
      "120 luxury apartment units",
      "15,000 sq ft of ground-floor retail space",
      "Rooftop deck and lounge areas",
      "Fitness center and spa facilities",
      "Private marina with boat slips for residents"
    ],
    challenges: [
      "Waterfront construction requiring specialized foundation work",
      "Compliance with stringent coastal development regulations",
      "Maximizing harbor views while ensuring privacy between units"
    ],
    solutions: [
      "Utilized deep pile foundations and seawall reinforcement",
      "Worked closely with coastal authorities throughout design and construction",
      "Implemented innovative floor plan designs and strategic window placement"
    ],
    image: "https://images.unsplash.com/photo-1480098892944-59bed1f90f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx3YXRlcmZyb250JTJCYXBhcnRtZW50JTJCY29tcGxleCUyQndpdGglMkJiYWxjb25pZXMlMkJvdmVybG9va2luZyUyQmhhcmJvcnxlbnwwfHx8fDE3NDY3ODk0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    additionalImages: [
      "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMkJpbnRlcmlvciUyQndpdGglMkJmbG9vci10by1jZWlsaW5nJTJCd2luZG93cyUyQmFuZCUyQndhdGVyJTJCdmlld3xlbnwwfHx8fDE3NDY3ODk0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1496483353456-90997957cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTJCZGVjayUyQndpdGglMkJsb3VuZ2UlMkJhcmVhcyUyQmFuZCUyQmZpcmUlMkJwaXRzfGVufDB8fHx8MTc0Njc4OTQzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      ""https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJsb2JieSUyQndpdGglMkJjb25jaWVyZ2UlMkJkZXNrJTJCYW5kJTJCc2VhdGluZyUyQmFyZWF8ZW58MHx8fHwxNzQ2Nzg5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1506630525117-569864448381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTJCbWFyaW5hJTJCd2l0aCUyQnJlc2lkZW50JTJCYm9hdCUyQnNsaXBzJTJCYW5kJTJCYm9hcmR3YWxrfGVufDB8fHx8MTc0Njc5MDIzMHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    testimonial: {
      quote: "BuildRight's expertise in waterfront construction was evident from day one. They delivered a stunning property that perfectly captures the essence of harbor living.",
      author: "Monica Chen",
      position: "CEO, Coastal Living Investments"
    },
    featuredProject: false
  },
  {
    id: 5,
    title: "University Science Center",
    category: "institutional",
    description: "A state-of-the-art research and education facility with laboratories, lecture halls, and collaborative spaces. This 90,000 square foot facility supports advanced research in biology, chemistry, and physics, featuring specialized labs, lecture theaters, and student collaboration spaces designed to foster innovation and discovery.",
    client: "State University",
    location: "University Campus",
    completionDate: "February 2022",
    projectCost: "$48.3 million",
    scope: [
      "90,000 square feet of academic and research space",
      "24 specialized research laboratories",
      "6 lecture theaters with advanced A/V capabilities",
      "Student collaboration zones and study areas",
      "Sustainable design features for LEED Platinum certification"
    ],
    challenges: [
      "Complex mechanical, electrical, and plumbing systems for laboratory spaces",
      "Maintaining campus operations during construction",
      "Coordinating specialized laboratory equipment installation"
    ],
    solutions: [
      "Utilized BIM modeling for MEP coordination",
      "Implemented phased construction schedule around academic calendar",
      "Coordinated closely with equipment vendors for pre-installation requirements"
    ],
    image: ""https://images.unsplash.com/photo-1466442929976-97f336a657be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJ1bml2ZXJzaXR5JTJCYnVpbGRpbmclMkJ3aXRoJTJCZGlzdGluY3RpdmUlMkJhcmNoaXRlY3R1cmFsJTJCZWxlbWVudHN8ZW58MHx8fHwxNzQ2Nzg5NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    additionalImages: [
      "https://images.unsplash.com/photo-1615631648086-325025c9e51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyQnJlc2VhcmNoJTJCbGFib3JhdG9yeSUyQndpdGglMkJzY2llbnRpZmljJTJCZXF1aXBtZW50fGVufDB8fHx8MTc0Njc4OTQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
      ""https://images.unsplash.com/photo-1549842005-67367315b045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxsYXJnZSUyQmxlY3R1cmUlMkJoYWxsJTJCd2l0aCUyQnRpZXJlZCUyQnNlYXRpbmd8ZW58MHx8fHwxNzQ2Nzg5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTJCY29sbGFib3JhdGlvbiUyQnNwYWNlJTJCd2l0aCUyQm1vZHVsYXIlMkJmdXJuaXR1cmV8ZW58MHx8fHwxNzQ2Nzg5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1547044559-1a026579b82b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyQmNvdXJ0eWFyZCUyQndpdGglMkJzZWF0aW5nJTJCYW5kJTJCbGFuZHNjYXBpbmclMkJiZXR3ZWVuJTJCYWNhZGVtaWMlMkJidWlsZGluZ3N8ZW58MHx8fHwxNzQ2NzkwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    testimonial: {
      quote: "BuildRight showed exceptional skill managing the complex requirements of our science facility. The building has transformed our research capabilities and student experience.",
      author: "Dr. Elizabeth Murray",
      position: "Dean of Sciences, State University"
    },
    featuredProject: false
  },
  {
    id: 6,
    title: "Industrial Manufacturing Facility",
    category: "industrial",
    description: "A 150,000 sq ft manufacturing plant designed for efficiency, safety, and sustainability. This state-of-the-art facility houses production lines, warehousing, and office space for a leading automotive parts manufacturer, featuring energy-efficient systems and advanced robotics integration.",
    client: "NextGen Manufacturing",
    location: "Industrial Park",
    completionDate: "December 2021",
    projectCost: "$27.8 million",
    scope: [
      "150,000 square feet of manufacturing and warehouse space",
      "15,000 square feet of office and administrative areas",
      "Specialized production lines with robotics integration",
      "Solar array providing 40% of facility power needs",
      "Employee amenities including cafeteria and fitness center"
    ],
    challenges: [
      "Fast-track construction schedule to meet production deadlines",
      "Heavy mechanical requirements for manufacturing equipment",
      "Integration of advanced automation systems"
    ],
    solutions: [
      "Implemented design-build approach to accelerate schedule",
      "Pre-fabricated building components where possible",
      "Collaborated with automation vendors early in design phase"
    ],
    image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJpbmR1c3RyaWFsJTJCbWFudWZhY3R1cmluZyUyQmZhY2lsaXR5JTJCd2l0aCUyQmNsZWFuJTJCYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc0Njc4OTQzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    additionalImages: [
      "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTJCZmxvb3IlMkJ3aXRoJTJCYWR2YW5jZWQlMkJtYWNoaW5lcnklMkJhbmQlMkJlcXVpcG1lbnR8ZW58MHx8fHwxNzQ2Nzg5NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxzb2xhciUyQnBhbmVsJTJCYXJyYXklMkJvbiUyQmluZHVzdHJpYWwlMkJidWlsZGluZyUyQnJvb2Z8ZW58MHx8fHwxNzQ2Nzg5NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyQmFtZW5pdGllcyUyQmFyZWElMkJ3aXRoJTJCYnJlYWslMkJyb29tJTJCYW5kJTJCb3V0ZG9vciUyQnNwYWNlfGVufDB8fHx8MTc0Njc4OTQzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1551158025-928b72fc6b96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxsb2FkaW5nJTJCZG9jayUyQmFyZWElMkJ3aXRoJTJCbXVsdGlwbGUlMkJiYXlzJTJCYW5kJTJCbG9naXN0aWNzJTJCZXF1aXBtZW50fGVufDB8fHx8MTc0Njc5MDIzMXww&ixlib=rb-4.1.0&q=80&w=1080""
    ],
    testimonial: {
      quote: "BuildRight's industrial expertise helped us create a facility that optimizes our production capabilities while prioritizing worker safety and comfort.",
      author: "Robert Jackson",
      position: "Operations Director, NextGen Manufacturing"
    },
    featuredProject: false
  },
  {
    id: 7,
    title: "Community Medical Center",
    category: "healthcare",
    description: "A 75,000 sq ft medical facility providing comprehensive healthcare services to an underserved community. This outpatient center includes primary care clinics, specialty services, diagnostic imaging, and emergency care, designed with patient comfort and staff efficiency as guiding principles.",
    client: "Regional Healthcare Network",
    location: "Eastside Community",
    completionDate: "April 2022",
    projectCost: "$32.4 million",
    scope: [
      "75,000 square feet of healthcare space",
      "24-hour urgent care center",
      "Diagnostic imaging suite with MRI and CT capabilities",
      "12 primary care exam rooms and 15 specialty care rooms",
      "Laboratory and pharmacy services"
    ],
    challenges: [
      "Strict healthcare building codes and regulations",
      "Complex medical gas and emergency power systems",
      "Creating a welcoming environment while maintaining clinical functionality"
    ],
    solutions: [
      "Partnered with healthcare design specialists",
      "Implemented advanced MEP systems with redundancy",
      "Used evidence-based design principles for patient experience"
    ],
    image: ""https://images.unsplash.com/photo-1486825586573-7131f7991bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJjb21tdW5pdHklMkJtZWRpY2FsJTJCY2VudGVyJTJCYnVpbGRpbmclMkJ3aXRoJTJCY292ZXJlZCUyQmVudHJhbmNlfGVufDB8fHx8MTc0Njc5MDIzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    additionalImages: [
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"",
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
    ],
    testimonial: {
      quote: "BuildRight understood the unique challenges of healthcare construction. Their attention to detail has created a facility that serves our patients well while giving our staff an efficient workspace.",
      author: "Dr. Sarah Johnson",
      position: "Medical Director, Regional Healthcare Network"
    },
    featuredProject: false
  },
  {
    id: 8,
    title: "Mixed-Use Urban Development",
    category: "mixed-use",
    description: "A vibrant mixed-use project combining retail, office, and residential spaces in a pedestrian-friendly urban setting. This transit-oriented development revitalized a former industrial area, creating a live-work-play environment that has become a model for sustainable urban planning.",
    client: "Urban Revival Partners",
    location: "Central District",
    completionDate: "September 2022",
    projectCost: "$56.7 million",
    scope: [
      "85 residential apartments",
      "30,000 square feet of retail space",
      "40,000 square feet of office space",
      "Public plaza and green spaces",
      "Underground parking for 200 vehicles"
    ],
    challenges: [
      "Contaminated brownfield site requiring remediation",
      "Balancing diverse requirements of multiple space types",
      "Creating cohesive design while distinguishing between uses"
    ],
    solutions: [
      "Comprehensive site remediation before construction",
      "Engaged specialists for each space type during design phase",
      "Used architectural elements to create visual identity for different areas"
    ],
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    additionalImages: [
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
      "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
    ],
    testimonial: {
      quote: "This project transformed a neglected area into a thriving community hub. BuildRight navigated the complexities of mixed-use development with impressive skill and vision.",
      author: "Maria Gonzalez",
      position: "Principal, Urban Revival Partners"
    },
    featuredProject: true
  }
];

export default projects;