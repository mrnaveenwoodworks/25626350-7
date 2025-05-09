
import React from "react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center bg-gray-800"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1460627390041-532a28402358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMkJzaXRlJTJCd2l0aCUyQm1vZGVybiUyQmJ1aWxkaW5nJTJCYW5kJTJCY3JhbmVzJTJCYXQlMkJzdW5zZXR8ZW58MHx8fHwxNzQ2Nzg5MzM4fDA&ixlib=rb-4.1.0&q=80&w=1080")`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Building Your <span className="text-yellow-400">Vision</span><br />
          Into Reality
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Quality construction services with over 25 years of excellence in commercial and residential projects.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-yellow-500 text-gray-900 font-bold rounded-md hover:bg-yellow-400 transition-colors duration-300 text-lg flex items-center justify-center"
          >
            Get Free Quote
            <span className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            </span>
          </a>
          
          <a
            href="#projects"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300 text-lg flex items-center justify-center"
          >
            View Our Projects
          </a>
        </div>
        
        <div className="absolute bottom-12 left-0 right-0 flex justify-center animate-bounce">
          <a href="#services" aria-label="Scroll to services section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="36" height="36"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(0 256) rotate(-90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="96 112 96 160 144 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
          </a>
        </div>
        
        <div className="absolute top-0 left-0 right-0 w-full py-4">
          <div className="container mx-auto px-4 md:px-8 flex justify-end gap-4">
            <a 
              href="tel:+1234567890" 
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><line x1="152" y1="56" x2="200" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="200" y1="56" x2="152" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </span>
              (123) 456-7890
            </a>
            <a 
              href="mailto:info@buildright.com" 
              className="flex items-center text-white hover:text-yellow-400 transition-colors"
            >
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><line x1="88" y1="148" x2="64" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="168 144 168 24 200 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              </span>
              info@buildright.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay with company stats */}
      <div className="absolute -bottom-20 left-0 right-0 flex justify-center">
        <div className="bg-white shadow-xl rounded-lg grid grid-cols-1 md:grid-cols-4 gap-8 py-6 px-8 w-11/12 max-w-6xl">
          {[
            { number: "25+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "120+", label: "Expert Workers" },
            { number: "98%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
