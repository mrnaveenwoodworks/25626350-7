import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "John Builders",
      position: "Founder & CEO",
      bio: "With over 30 years in construction, John founded BuildRight Construction with a vision to deliver quality projects that stand the test of time.",
      image: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMkJoZWFkc2hvdCUyQm9mJTJCbWlkZGxlLWFnZWQlMkJtYW4lMkJpbiUyQmNvbnN0cnVjdGlvbiUyQmF0dGlyZSUyQmFuZCUyQmhhcmQlMkJoYXR8ZW58MHx8fHwxNzQ2Nzg5MzY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Sarah Martinez",
      position: "Chief Operations Officer",
      bio: "Sarah oversees all projects and ensures they're completed to the highest standards of quality, safety, and efficiency.",
      image: "https://images.unsplash.com/photo-1437913135140-944c1ee62782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMkJoZWFkc2hvdCUyQm9mJTJCd29tYW4lMkJpbiUyQmJ1c2luZXNzJTJCY2FzdWFsJTJCd2l0aCUyQnNhZmV0eSUyQnZlc3QlMkJhbmQlMkJoYXJkJTJCaGF0fGVufDB8fHx8MTc0Njc4OTM2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Michael Chen",
      position: "Lead Architect",
      bio: "Michael brings creative vision and technical expertise to every project, specializing in sustainable building designs.",
      image: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMkJoZWFkc2hvdCUyQm9mJTJCbWFuJTJCd2l0aCUyQmdsYXNzZXMlMkJyZXZpZXdpbmclMkJibHVlcHJpbnRzfGVufDB8fHx8MTc0Njc4OTM2OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Rebecca Johnson",
      position: "Project Manager",
      bio: "Rebecca's attention to detail and communication skills ensure that projects stay on schedule and within budget.",
      image: "https://images.unsplash.com/photo-1437913135140-944c1ee62782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMkJoZWFkc2hvdCUyQm9mJTJCd29tYW4lMkJhdCUyQmNvbnN0cnVjdGlvbiUyQnNpdGUlMkJ3aXRoJTJCY2xpcGJvYXJkfGVufDB8fHx8MTc0Njc4OTM2OXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About BuildRight Construction
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Building excellence since 1998, we've established ourselves as a trusted name in construction through quality craftsmanship and client satisfaction.
          </p>
        </div>

        {/* Company History & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our History</h3>
            <p className="text-gray-600 mb-4">
              BuildRight Construction was founded in 1998 by John Builders, a master craftsman with a vision to create a construction company that prioritized quality, integrity, and client satisfaction above all else.
            </p>
            <p className="text-gray-600 mb-4">
              Starting with small residential projects, we've grown steadily over two decades to become a premier construction firm handling major commercial and residential developments across the region.
            </p>
            <p className="text-gray-600">
              Throughout our history, we've maintained our founding principles: delivering exceptional craftsmanship, adhering to timelines, maintaining transparent communication, and building relationships that last as long as our structures.
            </p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-80 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMkJjb21wYW55JTJCb2ZmaWNlJTJCYnVpbGRpbmclMkJ3aXRoJTJCdGVhbSUyQm1lbWJlcnMlMkJhbmQlMkJlcXVpcG1lbnR8ZW58MHx8fHwxNzQ2Nzg5MzgzfDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="BuildRight Construction headquarters" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-gray-100 rounded-lg p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission & Values</h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">Mission Statement</h4>
              <p className="text-gray-700">
                To deliver exceptional construction services that transform our clients' visions into reality, creating spaces that enhance lives and communities while setting new standards in quality, sustainability, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { 
                  title: "Quality", 
                  description: "Unwavering commitment to craftsmanship and excellence in every detail of our work.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><circle cx="128" cy="136" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="68" x2="160" y2="68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M84,187.21a60,60,0,0,1,88,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                },
                { 
                  title: "Integrity", 
                  description: "Honest business practices, transparent communication, and keeping our promises.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><polyline points="76.68 72.63 128 56 179.32 72.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M38.37,62.42,12.85,113.48a8,8,0,0,0,3.57,10.73L44,138,76.68,72.63,49.11,58.85A8,8,0,0,0,38.37,62.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M212,138l27.58-13.79a8,8,0,0,0,3.57-10.73L217.63,62.42a8,8,0,0,0-10.74-3.57L179.32,72.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M177.36,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120l36,34,16-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="196 154 158 192 96 176 44 138" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="106.93 216 80.33 209.13 56 191.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                },
                { 
                  title: "Innovation", 
                  description: "Embracing new technologies and methods to deliver more efficient, sustainable buildings.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="40" height="40"><rect width="256" height="256" fill="none"/><line x1="88" y1="232" x2="168" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v2a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-2A24.11,24.11,0,0,0,78.7,167Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M140,70a36.39,36.39,0,0,1,24,30" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                }
              ].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-yellow-500 mb-3">
                    {value.icon}
                  </div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h5>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-10">Meet Our Leadership Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h4>
                  <p className="text-yellow-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600">
              Supported by a team of over 120 skilled professionals, including project managers, engineers, architects, and skilled tradespeople.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Our Certifications & Memberships</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "Licensed General Contractor",
              "LEED Certified Builder",
              "National Association of Home Builders",
              "Associated General Contractors of America",
              "Better Business Bureau A+ Rating"
            ].map((cert, index) => (
              <div key={index} className="bg-gray-100 rounded-lg py-3 px-6 flex items-center">
                <span className="text-yellow-500 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><line x1="72" y1="140" x2="116" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="72" y1="100" x2="116" y2="100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="196" cy="128" r="44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="168 161.94 168 228 196 212 224 228 224 161.94" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M168,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V94.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
                </span>
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;