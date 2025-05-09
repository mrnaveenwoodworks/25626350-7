import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Michael Johnson",
      position: "Property Developer",
      company: "Johnson Estates",
      quote: "BuildRight Construction delivered our office complex ahead of schedule and within budget. Their attention to detail and commitment to quality workmanship is unmatched in the industry.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxoZWFkc2hvdCUyQm9mJTJCTWljaGFlbCUyQkpvaG5zb24lMjUyQyUyQm1pZGRsZS1hZ2VkJTJCbWFuJTJCaW4lMkJidXNpbmVzcyUyQmF0dGlyZXxlbnwwfHx8fDE3NDY3ODkzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "CEO",
      company: "Urban Living Inc.",
      quote: "We've worked with many construction companies over the years, but none have demonstrated the level of professionalism and expertise that BuildRight brings to every project. They're now our exclusive construction partner.",
      image: "https://images.unsplash.com/photo-1437913135140-944c1ee62782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxoZWFkc2hvdCUyQm9mJTJCU2FyYWglMkJXaWxsaWFtcyUyNTJDJTJCcHJvZmVzc2lvbmFsJTJCd29tYW4lMkJ3aXRoJTJCZ2xhc3Nlc3xlbnwwfHx8fDE3NDY3ODkzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "David Chen",
      position: "Homeowner",
      company: "",
      quote: "Our home renovation was a complex project with many custom elements. The BuildRight team listened to our needs and turned our vision into reality. We couldn't be happier with the results.",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxoZWFkc2hvdCUyQm9mJTJCRGF2aWQlMkJDaGVuJTI1MkMlMkJzbWlsaW5nJTJCbWFuJTJCaW4lMkJjYXN1YWwlMkJjbG90aGluZ3xlbnwwfHx8fDE3NDY3ODkzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "Rebecca Torres",
      position: "Facilities Director",
      company: "Westside School District",
      quote: "BuildRight handled our school expansion project with incredible care and attention. They worked around our schedule to minimize disruption and delivered a beautiful, functional space for our students.",
      image: "https://images.unsplash.com/photo-1498982261566-1c28c9cf4c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxoZWFkc2hvdCUyQm9mJTJCUmViZWNjYSUyQlRvcnJlcyUyNTJDJTJCcHJvZmVzc2lvbmFsJTJCd29tYW4lMkJ3aXRoJTJCZGFyayUyQmhhaXJ8ZW58MHx8fHwxNzQ2Nzg5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our construction services and project delivery.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 shadow-md">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-8">
                <div className="text-yellow-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="36" height="36"><rect width="256" height="256" fill="none"/><path d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentIndex].position}
                  {testimonials[currentIndex].company && 
                    <span>, {testimonials[currentIndex].company}</span>
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="mx-2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            </button>
            
            <div className="flex space-x-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="mx-2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" transform="translate(256 0) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="144 96 96 96 96 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="160" x2="96" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;