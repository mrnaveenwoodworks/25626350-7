import React, { useState } from "react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Commercial Construction",
      shortDesc: "Building spaces for business success",
      description: "From office buildings to retail centers and industrial facilities, our commercial construction services deliver high-quality spaces built for efficiency, compliance, and long-term value. We handle every aspect of your commercial project, from pre-construction planning to final inspection.",
      features: [
        "Corporate offices and headquarters",
        "Retail and shopping centers",
        "Hotels and hospitality venues",
        "Industrial and manufacturing facilities",
        "Medical and healthcare buildings"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="24" y1="216" x2="244" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="84" y1="80" x2="92" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="132" y1="80" x2="140" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="84" y1="120" x2="92" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="132" y1="120" x2="140" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="88 216 88 160 136 160 136 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="48" y1="40" x2="48" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="216" x2="176" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="40" x2="184" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="220" y1="216" x2="220" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="88" x2="228" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJnbGFzcyUyQm9mZmljZSUyQmJ1aWxkaW5nJTJCdW5kZXIlMkJjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNzQ2Nzg5NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Residential Construction",
      shortDesc: "Crafting dream homes with precision",
      description: "Our residential construction team specializes in building custom homes, multi-family housing, and renovation projects that combine aesthetic appeal with functional living spaces. We work closely with homeowners to bring their vision to life while ensuring structural integrity and quality craftsmanship.",
      features: [
        "Custom luxury homes",
        "Multi-family housing developments",
        "Townhouses and condominiums",
        "Residential subdivisions",
        "High-end renovations and additions"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><polyline points="240 128 96 128 56 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="144" y1="128" x2="104" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="48" x2="192" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="128" x2="96" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M240,128v56a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V128L56,48H200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="76" y1="88" x2="220" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJyZXNpZGVudGlhbCUyQmhvbWUlMkJjb25zdHJ1Y3Rpb24lMkJ3aXRoJTJCd29ya2VycyUyQm9uJTJCc2l0ZXxlbnwwfHx8fDE3NDY3ODk1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      shortDesc: "Transforming existing spaces",
      description: "Breathe new life into existing structures with our renovation and remodeling services. Whether you're looking to update a commercial space or transform your residential property, our team delivers stunning results while minimizing disruption to your daily operations or living arrangements.",
      features: [
        "Commercial space renovations",
        "Home remodeling and additions",
        "Historic building restoration",
        "Interior space reconfiguration",
        "Façade improvements and upgrades"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><path d="M73,217A24,24,0,0,1,39,183l63.77-58.28A64,64,0,0,1,184,36.65L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-88.1,81.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyQnJlbm92YXRpb24lMkJpbiUyQnByb2dyZXNzJTJCd2l0aCUyQmV4cG9zZWQlMkJ3YWxscyUyQmFuZCUyQm5ldyUyQmZpeHR1cmVzfGVufDB8fHx8MTc0Njc4OTUxNXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Civil Engineering & Infrastructure",
      shortDesc: "Building foundations for communities",
      description: "Our civil engineering and infrastructure projects help communities thrive through well-designed roads, bridges, water systems, and public facilities. We combine technical expertise with sustainable practices to create infrastructure that stands the test of time while minimizing environmental impact.",
      features: [
        "Road and highway construction",
        "Bridge and overpass projects",
        "Water and sewage systems",
        "Public facilities and parks",
        "Earthwork and site preparation"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="64" y1="56" x2="64" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="192" y1="56" x2="192" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,115.35A64,64,0,0,0,64,56a64,64,0,0,0,128,0,64,64,0,0,0,40,59.35" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="152" y1="115.35" x2="152" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="115.35" x2="104" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="24" y1="168" x2="232" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxyb2FkJTJCY29uc3RydWN0aW9uJTJCd2l0aCUyQmhlYXZ5JTJCbWFjaGluZXJ5JTJCYW5kJTJCd29ya2Vyc3xlbnwwfHx8fDE3NDY3ODk1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      title: "Green Building & Sustainability",
      shortDesc: "Eco-friendly construction solutions",
      description: "Our green building services incorporate sustainable materials, energy-efficient systems, and environmentally responsible practices. We help clients achieve LEED certification while reducing operational costs and environmental impact through thoughtful design and construction methods.",
      features: [
        "LEED certified building projects",
        "Solar and renewable energy integration",
        "Energy-efficient systems installation",
        "Sustainable material sourcing",
        "Green roof and rainwater harvesting systems"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><path d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="40" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxlY28tZnJpZW5kbHklMkJidWlsZGluZyUyQndpdGglMkJzb2xhciUyQnBhbmVscyUyQmFuZCUyQmdyZWVuJTJCcm9vZnxlbnwwfHx8fDE3NDY3ODk1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      title: "Project Management",
      shortDesc: "Expert oversight from concept to completion",
      description: "Our comprehensive project management services ensure your construction project stays on schedule and within budget. From initial planning and design coordination to final inspection and handover, our experienced project managers handle every detail while keeping you informed at every stage.",
      features: [
        "Budget development and cost control",
        "Schedule creation and management",
        "Vendor and subcontractor coordination",
        "Quality assurance and inspection",
        "Regulatory compliance and permitting"
      ],
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTJCbWFuYWdlciUyQndpdGglMkJibHVlcHJpbnQlMkJyZXZpZXdpbmclMkJjb25zdHJ1Y3Rpb24lMkJzaXRlfGVufDB8fHx8MTc0Njc4OTUyOXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const openServiceDetails = (serviceId) => {
    setSelectedService(
      selectedService === serviceId ? null : serviceId
    );
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Construction Services
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of construction and building services tailored to meet your specific project needs. From commercial buildings to residential homes, our experienced team delivers quality results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="text-yellow-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-5">
                  {service.shortDesc}
                </p>
                <button
                  onClick={() => openServiceDetails(service.id)}
                  className="text-yellow-600 font-medium flex items-center hover:text-yellow-800"
                >
                  Learn More
                  <span className="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  </span>
                </button>
              </div>

              {/* Expanded Content */}
              {selectedService === service.id && (
                <div className="bg-gray-50 p-6 border-t border-gray-200 animate-fadeIn">
                  <div className="h-48 mb-4 overflow-hidden rounded">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700 mb-4">
                    {service.description}
                  </p>
                  <h4 className="font-semibold text-gray-800 mb-2">What we offer:</h4>
                  <ul className="text-gray-600 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-500 mr-2 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="48" y="120" width="88" height="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,188v12a8,8,0,0,1-8,8H180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="208" y1="116" x2="208" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M184,48h16a8,8,0,0,1,8,8V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="116" y1="48" x2="140" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,76V56a8,8,0,0,1,8-8H68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-gray-600 font-medium flex items-center hover:text-gray-800"
                    >
                      Close Details
                      <span className="ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTJCYmx1ZXByaW50JTJCb3IlMkJjb25zdHJ1Y3Rpb24lMkJkcmF3aW5nfGVufDB8fHx8MTc0Njc4OTU0OXww&ixlib=rb-4.1.0&q=80&w=1080" alt="architectural blueprint or construction drawing" />
          </div>
          <div className="relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Start Your Construction Project?</h3>
              <p className="text-gray-300">
                Contact us today for a free consultation and estimate for your next project
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors"
              >
                Request a Quote
              </a>
              <a 
                href="#projects" 
                className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors"
              >
                View Our Projects
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Construction Process
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We follow a thorough, transparent process to ensure your project is completed efficiently, on time, and to your exact specifications.
            </p>
          </div>

          <div className="relative">
            {/* Process Steps - Desktop */}
            <div className="hidden md:block">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-yellow-500 -translate-y-1/2"></div>
              
              <div className="grid grid-cols-4 gap-8 relative">
                {[
                  {
                    title: "Consultation & Planning",
                    description: "We meet to discuss your vision, requirements, budget and timeline to develop a comprehensive project plan.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v2a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-2A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M140,70a36.39,36.39,0,0,1,24,30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  },
                  {
                    title: "Design & Engineering",
                    description: "Our team creates detailed designs and engineering specifications for your project.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="168 88 112 112 88 168 144 144 168 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  },
                  {
                    title: "Construction",
                    description: "We build your project with skilled craftsmen using quality materials and best practices.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><line x1="24" y1="232" x2="232" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="56" y1="24" x2="56" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="200" y1="232" x2="200" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="104 232 104 184 152 184 152 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="24" x2="216" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="64" x2="108" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="64" x2="160" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="104" x2="108" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="104" x2="160" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="144" x2="108" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  },
                  {
                    title: "Completion & Handover",
                    description: "Final inspections ensure everything meets our quality standards before project delivery.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="32" height="32"><rect width="256" height="256" fill="none"/><polyline points="76.68 72.63 128 56 179.32 72.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M38.37,62.42,12.85,113.48a8,8,0,0,0,3.57,10.73L44,138,76.68,72.63,49.11,58.85A8,8,0,0,0,38.37,62.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M212,138l27.58-13.79a8,8,0,0,0,3.57-10.73L217.63,62.42a8,8,0,0,0-10.74-3.57L179.32,72.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M177.36,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120l36,34,16-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="196 154 158 192 96 176 44 138" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="106.93 216 80.33 209.13 56 191.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-full w-16 h-16 mx-auto border-4 border-yellow-500 flex items-center justify-center relative z-10 shadow-md">
                      <div className="text-yellow-500">
                        {step.icon}
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg mt-6 shadow text-center">
                      <h3 className="font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps - Mobile */}
            <div className="md:hidden">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-yellow-500"></div>
              
              <div className="space-y-12">
                {[
                  {
                    title: "Consultation & Planning",
                    description: "We meet to discuss your vision, requirements, budget and timeline to develop a comprehensive project plan.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v2a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-2A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M140,70a36.39,36.39,0,0,1,24,30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  },
                  {
                    title: "Design & Engineering",
                    description: "Our team creates detailed designs and engineering specifications for your project.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polygon points="168 88 112 112 88 168 144 144 168 88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  },
                  {
                    title: "Construction",
                    description: "We build your project with skilled craftsmen using quality materials and best practices.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><line x1="24" y1="232" x2="232" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="56" y1="24" x2="56" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="200" y1="232" x2="200" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="104 232 104 184 152 184 152 232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="24" x2="216" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="64" x2="108" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="64" x2="160" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="104" x2="108" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="104" x2="160" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="144" x2="108" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="144" x2="160" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  },
                  {
                    title: "Completion & Handover",
                    description: "Final inspections ensure everything meets our quality standards before project delivery.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><polyline points="76.68 72.63 128 56 179.32 72.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M38.37,62.42,12.85,113.48a8,8,0,0,0,3.57,10.73L44,138,76.68,72.63,49.11,58.85A8,8,0,0,0,38.37,62.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M212,138l27.58-13.79a8,8,0,0,0,3.57-10.73L217.63,62.42a8,8,0,0,0-10.74-3.57L179.32,72.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M177.36,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120l36,34,16-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="196 154 158 192 96 176 44 138" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="106.93 216 80.33 209.13 56 191.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                  }
                ].map((step, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="bg-white rounded-full w-12 h-12 absolute left-4 transform -translate-x-1/2 border-4 border-yellow-500 flex items-center justify-center z-10 shadow-md">
                      <div className="text-yellow-500">
                        {step.icon}
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                      <h3 className="font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;