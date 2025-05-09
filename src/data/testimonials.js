const testimonials = [
  {
    id: 1,
    client: "Jennifer Adams",
    position: "COO, TechHub Enterprises",
    company: "TechHub Enterprises",
    testimonial: "BuildRight delivered our vision perfectly, creating a workspace that enhances productivity and showcases our commitment to sustainability. Their attention to detail and project management made the entire process smooth from design to completion.",
    rating: 5,
    projectType: "Commercial Office Building",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJnbGFzcyUyQm9mZmljZSUyQmJ1aWxkaW5nJTJCd2l0aCUyQmRpc3RpbmN0aXZlJTJCYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc0Njc4OTQxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    id: 2,
    client: "Richard Thompson",
    position: "President, Elite Living Properties",
    company: "Elite Living Properties",
    testimonial: "BuildRight transformed challenging terrain into a stunning residential community. Their attention to detail and commitment to quality is evident in every home they constructed for our development. The team was responsive, professional, and delivered on schedule despite several unexpected challenges.",
    rating: 5,
    projectType: "Luxury Residential Development",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"",
    projectImage: "https://images.unsplash.com/photo-1522255272218-7ac5249be344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMkJ2aWV3JTJCb2YlMkJsdXh1cnklMkJyZXNpZGVudGlhbCUyQmNvbW11bml0eSUyQndpdGglMkJzd2ltbWluZyUyQnBvb2x8ZW58MHx8fHwxNzQ2Nzg5NDIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    id: 3,
    client: "Carlos Rodriguez",
    position: "Development Director, Urban Retail Developers",
    company: "Urban Retail Developers",
    testimonial: "From remediation to ribbon-cutting, BuildRight managed this complex project with exceptional professionalism. The mall has exceeded our expectations in both design and functionality. Their innovative solutions to unexpected site challenges saved us both time and money during construction.",
    rating: 5,
    projectType: "Shopping Mall Development",
    image: ""https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/photo-1531506527841-6befe8901440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxsYXJnZSUyQm1vZGVybiUyQnNob3BwaW5nJTJCbWFsbCUyQndpdGglMkJnbGFzcyUyQmZhY2FkZSUyQmFuZCUyQm1haW4lMkJlbnRyYW5jZXxlbnwwfHx8fDE3NDY3ODk0Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: true
  },
  {
    id: 4,
    client: "Monica Chen",
    position: "CEO, Coastal Living Investments",
    company: "Coastal Living Investments",
    testimonial: "BuildRight's expertise in waterfront construction was evident from day one. They delivered a stunning property that perfectly captures the essence of harbor living. Their understanding of the complex regulations and environmental considerations involved in waterfront development was invaluable to our project's success.",
    rating: 5,
    projectType: "Waterfront Apartment Complex",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/photo-1480098892944-59bed1f90f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHx3YXRlcmZyb250JTJCYXBhcnRtZW50JTJCY29tcGxleCUyQndpdGglMkJiYWxjb25pZXMlMkJvdmVybG9va2luZyUyQmhhcmJvcnxlbnwwfHx8fDE3NDY3ODk0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    id: 5,
    client: "Dr. Elizabeth Murray",
    position: "Dean of Sciences, State University",
    company: "State University",
    testimonial: "BuildRight showed exceptional skill managing the complex requirements of our science facility. The building has transformed our research capabilities and student experience. Their team collaborated seamlessly with our faculty to ensure specialized laboratory spaces met exact specifications for our research programs.",
    rating: 5,
    projectType: "University Science Center",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/photo-1466442929976-97f336a657be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJ1bml2ZXJzaXR5JTJCYnVpbGRpbmclMkJ3aXRoJTJCZGlzdGluY3RpdmUlMkJhcmNoaXRlY3R1cmFsJTJCZWxlbWVudHN8ZW58MHx8fHwxNzQ2Nzg5NDM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    id: 6,
    client: "Robert Jackson",
    position: "Operations Director, NextGen Manufacturing",
    company: "NextGen Manufacturing",
    testimonial: "BuildRight's industrial expertise helped us create a facility that optimizes our production capabilities while prioritizing worker safety and comfort. They understood our specialized requirements and delivered a building that perfectly supports our manufacturing processes and future expansion plans.",
    rating: 4,
    projectType: "Industrial Manufacturing Facility",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJpbmR1c3RyaWFsJTJCbWFudWZhY3R1cmluZyUyQmZhY2lsaXR5JTJCd2l0aCUyQmNsZWFuJTJCYXJjaGl0ZWN0dXJlfGVufDB8fHx8MTc0Njc4OTQzOHww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    id: 7,
    client: "Dr. Sarah Johnson",
    position: "Medical Director, Regional Healthcare Network",
    company: "Regional Healthcare Network",
    testimonial: "BuildRight understood the unique challenges of healthcare construction. Their attention to detail has created a facility that serves our patients well while giving our staff an efficient workspace. The team's ability to maintain strict infection control and minimize disruption during construction was particularly impressive.",
    rating: 5,
    projectType: "Community Medical Center",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/photo-1486825586573-7131f7991bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMkJjb21tdW5pdHklMkJtZWRpY2FsJTJCY2VudGVyJTJCYnVpbGRpbmclMkJ3aXRoJTJCY292ZXJlZCUyQmVudHJhbmNlfGVufDB8fHx8MTc0Njc5MDIzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    featured: false
  },
  {
    id: 8,
    client: "Maria Gonzalez",
    position: "Principal, Urban Revival Partners",
    company: "Urban Revival Partners",
    testimonial: "This mixed-use project transformed a neglected area into a thriving community hub. BuildRight navigated the complexities of mixed-use development with impressive skill and vision. Their ability to coordinate the diverse requirements of retail, office, and residential spaces within a single harmonious development exceeded our expectations.",
    rating: 5,
    projectType: "Mixed-Use Urban Development",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"",
    featured: true
  },
  {
    id: 9,
    client: "Thomas Wright",
    position: "Facilities Director, Parkview School District",
    company: "Parkview School District",
    testimonial: "Our new elementary school is everything we hoped for and more. BuildRight's team understood that they weren't just building classrooms but creating environments where children would learn and grow. Their attention to safety, accessibility, and creating inspiring spaces has made this project a tremendous success for our community.",
    rating: 5,
    projectType: "Elementary School Construction",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    featured: false
  },
  {
    id: 10,
    client: "Amanda Peterson",
    position: "Owner, Lakeview Restaurant",
    company: "Lakeview Restaurant",
    testimonial: "As a small business owner, I was worried about the construction process disrupting my neighboring businesses. BuildRight was incredibly considerate and professional, completing our renovation on time and with minimal disruption. The result is a beautiful dining space that has helped us double our capacity and revenue.",
    rating: 5,
    projectType: "Restaurant Renovation",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    featured: false
  },
  {
    id: 11,
    client: "Daniel Kim",
    position: "Hotel General Manager, Oceanside Resort",
    company: "Oceanside Resort",
    testimonial: "The renovation of our 200-room resort was a massive undertaking that BuildRight executed flawlessly, all while allowing us to remain partially operational. Their team's coordination and problem-solving abilities were exceptional, resulting in a stunning property that has received rave reviews from our guests.",
    rating: 5,
    projectType: "Hotel Renovation",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"",
    projectImage: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    featured: false
  },
  {
    id: 12,
    client: "Rebecca and Michael Carter",
    position: "Homeowners",
    company: "Residential Client",
    testimonial: "BuildRight turned our dream home into reality. From the initial design consultation to the final walkthrough, their team was professional, communicative, and detail-oriented. The craftsmanship in our custom home is extraordinary, and they finished on time and within our budget. We couldn't be happier.",
    rating: 5,
    projectType: "Custom Home Construction",
    image: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    projectImage: "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200",
    featured: false
  }
];

export default testimonials;