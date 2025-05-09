import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Modern Office Complex",
      category: "commercial",
      description: "A 12-story office building with contemporary design, energy-efficient features, and smart building technology.",
      client: "TechHub Enterprises",
      location: "Downtown Metro Area",
      completionDate: "January 2023",
      image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJnbGFzcyUyQm9mZmljZSUyQmJ1aWxkaW5nJTJCd2l0aCUyQmRpc3RpbmN0aXZlJTJCYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc0Njc4OTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
      additionalImages: [
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMkJidWlsZGluZyUyQmxvYmJ5JTJCd2l0aCUyQm1vZGVybiUyQnJlY2VwdGlvbiUyQmFyZWF8ZW58MHx8fHwxNzQ2Nzg5NDIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMkJtZWV0aW5nJTJCcm9vbSUyQndpdGglMkJnbGFzcyUyQndhbGxzJTJCYW5kJTJCY2l0eSUyQnZpZXdzfGVufDB8fHx8MTc0Njc4OTQyMXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1577451581377-523b0a03bb6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyQmdyZWVuJTJCcm9vZiUyQmdhcmRlbiUyQm9uJTJCb2ZmaWNlJTJCYnVpbGRpbmd8ZW58MHx8fHwxNzQ2Nzg5NDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      id: 2,
      title: "Luxury Residential Development",
      category: "residential",
      description: "A high-end residential community featuring 45 custom homes with premium finishes and smart home integration.",
      client: "Elite Living Properties",
      location: "Westside Hills",
      completionDate: "October 2022",
      image: "https://images.unsplash.com/photo-1522255272218-7ac5249be344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMkJ2aWV3JTJCb2YlMkJsdXh1cnklMkJyZXNpZGVudGlhbCUyQmNvbW11bml0eSUyQndpdGglMkJzd2ltbWluZyUyQnBvb2x8ZW58MHx8fHwxNzQ2Nzg5NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      additionalImages: [
        "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyQm9mJTJCbHV4dXJ5JTJCaG9tZSUyQndpdGglMkJvcGVuJTJCZmxvb3IlMkJwbGFuJTJCYW5kJTJCaGlnaCUyQmNlaWxpbmdzfGVufDB8fHx8MTc0Njc4OTQyNHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJraXRjaGVuJTJCd2l0aCUyQmlzbGFuZCUyQmFuZCUyQmhpZ2gtZW5kJTJCYXBwbGlhbmNlc3xlbnwwfHx8fDE3NDY3ODk0MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxyZXNvcnQtc3R5bGUlMkJjb21tdW5pdHklMkJwb29sJTJCYW5kJTJCb3V0ZG9vciUyQmVudGVydGFpbm1lbnQlMkJhcmVhfGVufDB8fHx8MTc0Njc4OTQyNXww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      id: 3,
      title: "City Center Shopping Mall",
      category: "commercial",
      description: "A 200,000 sq ft multi-level shopping center featuring over 60 retail spaces, dining options, and entertainment venues.",
      client: "Urban Retail Developers",
      location: "City Center",
      completionDate: "May 2022",
      image: "https://images.unsplash.com/photo-1531506527841-6befe8901440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxsYXJnZSUyQm1vZGVybiUyQnNob3BwaW5nJTJCbWFsbCUyQndpdGglMkJnbGFzcyUyQmZhY2FkZSUyQmFuZCUyQm1haW4lMkJlbnRyYW5jZXxlbnwwfHx8fDE3NDY3ODk0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      additionalImages: [
        "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyQm9mJTJCc2hvcHBpbmclMkJtYWxsJTJCd2l0aCUyQm11bHRpcGxlJTJCbGV2ZWxzJTJCYW5kJTJCc2t5bGlnaHRzfGVufDB8fHx8MTc0Njc4OTQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxmb29kJTJCY291cnQlMkJhcmVhJTJCd2l0aCUyQnZhcmlvdXMlMkJkaW5pbmclMkJvcHRpb25zfGVufDB8fHx8MTc0Njc4OTQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyQm5pZ2h0JTJCdmlldyUyQm9mJTJCbWFsbCUyQndpdGglMkJsaWdodGluZyUyQmZlYXR1cmVzfGVufDB8fHx8MTc0Njc4OTQyOXww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      id: 4,
      title: "Harbor View Apartments",
      category: "residential",
      description: "A waterfront apartment complex featuring 120 luxury units with premium amenities and stunning harbor views.",
      client: "Coastal Living Investments",
      location: "Harbor District",
      completionDate: "August 2021",
      image: "https://images.unsplash.com/photo-1480098892944-59bed1f90f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx3YXRlcmZyb250JTJCYXBhcnRtZW50JTJCY29tcGxleCUyQndpdGglMkJiYWxjb25pZXMlMkJvdmVybG9va2luZyUyQmhhcmJvcnxlbnwwfHx8fDE3NDY3ODk0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      additionalImages: [
        "https://images.unsplash.com/photo-1483004406427-6acb078d1f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMkJpbnRlcmlvciUyQndpdGglMkJmbG9vci10by1jZWlsaW5nJTJCd2luZG93cyUyQmFuZCUyQndhdGVyJTJCdmlld3xlbnwwfHx8fDE3NDY3ODk0MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1496483353456-90997957cf99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTJCZGVjayUyQndpdGglMkJsb3VuZ2UlMkJhcmVhcyUyQmFuZCUyQmZpcmUlMkJwaXRzfGVufDB8fHx8MTc0Njc4OTQzMnww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJsb2JieSUyQndpdGglMkJjb25jaWVyZ2UlMkJkZXNrJTJCYW5kJTJCc2VhdGluZyUyQmFyZWF8ZW58MHx8fHwxNzQ2Nzg5NDMyfDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      id: 5,
      title: "University Science Center",
      category: "institutional",
      description: "A state-of-the-art research and education facility with laboratories, lecture halls, and collaborative spaces.",
      client: "State University",
      location: "University Campus",
      completionDate: "February 2022",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJ1bml2ZXJzaXR5JTJCYnVpbGRpbmclMkJ3aXRoJTJCZGlzdGluY3RpdmUlMkJhcmNoaXRlY3R1cmFsJTJCZWxlbWVudHN8ZW58MHx8fHwxNzQ2Nzg5NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      additionalImages: [
        "https://images.unsplash.com/photo-1615631648086-325025c9e51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyQnJlc2VhcmNoJTJCbGFib3JhdG9yeSUyQndpdGglMkJzY2llbnRpZmljJTJCZXF1aXBtZW50fGVufDB8fHx8MTc0Njc4OTQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1549842005-67367315b045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxsYXJnZSUyQmxlY3R1cmUlMkJoYWxsJTJCd2l0aCUyQnRpZXJlZCUyQnNlYXRpbmd8ZW58MHx8fHwxNzQ2Nzg5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTJCY29sbGFib3JhdGlvbiUyQnNwYWNlJTJCd2l0aCUyQm1vZHVsYXIlMkJmdXJuaXR1cmV8ZW58MHx8fHwxNzQ2Nzg5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    },
    {
      id: 6,
      title: "Industrial Manufacturing Facility",
      category: "industrial",
      description: "A 150,000 sq ft manufacturing plant designed for efficiency, safety, and sustainability.",
      client: "NextGen Manufacturing",
      location: "Industrial Park",
      completionDate: "December 2021",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJpbmR1c3RyaWFsJTJCbWFudWZhY3R1cmluZyUyQmZhY2lsaXR5JTJCd2l0aCUyQmNsZWFuJTJCYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc0Njc4OTQzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      additionalImages: [
        "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTJCZmxvb3IlMkJ3aXRoJTJCYWR2YW5jZWQlMkJtYWNoaW5lcnklMkJhbmQlMkJlcXVpcG1lbnR8ZW58MHx8fHwxNzQ2Nzg5NDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1481026469463-66327c86e544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxzb2xhciUyQnBhbmVsJTJCYXJyYXklMkJvbiUyQmluZHVzdHJpYWwlMkJidWlsZGluZyUyQnJvb2Z8ZW58MHx8fHwxNzQ2Nzg5NDM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
        "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyQmFtZW5pdGllcyUyQmFyZWElMkJ3aXRoJTJCYnJlYWslMkJyb29tJTJCYW5kJTJCb3V0ZG9vciUyQnNwYWNlfGVufDB8fHx8MTc0Njc4OTQzOXww&ixlib=rb-4.1.0&q=80&w=1080"
      ]
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProjectModal = (project) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Featured Projects
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our portfolio of completed construction projects showcasing our expertise across commercial, residential, and institutional sectors.
          </p>
        </div>

        {/* Project Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {["all", "commercial", "residential", "industrial", "institutional"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === category
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105 cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-white font-semibold bg-yellow-500 py-1 px-3 rounded-full uppercase">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {project.completionDate}
                  </span>
                  <span className="text-yellow-600 flex items-center">
                    View Details
                    <span className="ml-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="16" height="16"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View All Projects" button */}
        {filteredProjects.length < projects.length && filter !== "all" && (
          <div className="text-center mt-10">
            <button
              onClick={() => setFilter("all")}
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
        
        {/* Project Modal */}
        {showModal && currentProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-90vh overflow-y-auto">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
                  onClick={closeModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="24" height="24"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="88" y="88" width="80" height="80" rx="12"/></svg>
                </button>
                <div className="h-72 md:h-96 overflow-hidden">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs text-white font-semibold bg-yellow-500 py-1 px-3 rounded-full uppercase">
                    {currentProject.category}
                  </span>
                  <span className="text-xs text-white font-semibold bg-gray-700 py-1 px-3 rounded-full">
                    Completed: {currentProject.completionDate}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  {currentProject.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {currentProject.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-500 font-medium">Client</p>
                    <p className="text-gray-800">{currentProject.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-medium">Location</p>
                    <p className="text-gray-800">{currentProject.location}</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Project Gallery
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {currentProject.additionalImages.map((image, idx) => (
                    <div key={idx} className="h-40 overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${currentProject.title} - view ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform hover:transform hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors"
                    onClick={closeModal}
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;