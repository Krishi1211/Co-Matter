import { GraduationCap, Mail, Linkedin } from 'lucide-react';
import garyImage from 'figma:asset/a3018ee86ddaeaf88bfad164c14ad148f275b113.png';
import elenaImage from 'figma:asset/09d0a21d77d05296d1ecc134d7cbfe22f8b5efbd.png';
import samjhanaImage from 'figma:asset/9b5cb8700e2192707ed4519a16af5a1930d49c69.png';
import ellieImage from 'figma:asset/a75806b1b5432b607e638bceed7e93a32f413599.png';
import navyaImage from 'figma:asset/823fadad5ae789ab35fcddbb5f5aae44eff1dd3a.png';
import krishiImage from 'figma:asset/dcd7f015d3889e65ff22de9b01fd02a855c6db95.png';

export function Team() {
  const teamMembers = [
    {
      name: 'Gary Wang',
      role: 'Executive Lead',
      major: 'Undergrad Food Science Major',
      image: garyImage,
      bio: 'Leading composition analysis and industry stakeholder engagement.',
    },
    {
      name: 'Elena Nogales',
      role: 'Business Model Lead',
      major: 'Undergrad Business Major',
      image: elenaImage,
      bio: 'Building partnerships and developing the platform business strategy.',
    },
    {
      name: 'Samjhana Khanal',
      role: 'Scientific Analysis Lead',
      major: 'PhD Candidate, Plant Breeding and Genetics',
      image: samjhanaImage,
      bio: 'Conducting advanced research with expertise in biotechnology and plant sciences.',
    },
    {
      name: 'Ellie Yoshikawa',
      role: 'External Relations',
      major: 'Undergrad Food Science Major',
      image: ellieImage,
      bio: 'Contributing to material analysis and food science applications.',
    },
    {
      name: 'Krishi Shah',
      role: 'Technology Lead',
      major: 'Graduate Computer Science',
      image: krishiImage,
      bio: 'Developing the platform infrastructure and data management systems.',
    },
    {
      name: 'Navya Gupta',
      role: 'Technology Lead',
      major: 'Undergrad Computer Science Major',
      image: navyaImage,
      bio: 'Building technical solutions for byproduct verification and tracking.',
    },
  ];

  return (
    <section id="team" className="py-24" style={{ backgroundColor: '#f0efe5' }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Our Team
          </h2>
          <p className="text-xl text-stone-600">
            UC Davis students transforming agricultural waste into material opportunity
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl"
              style={{ borderColor: '#e7e5e4' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#8F662E')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e7e5e4')}
            >
              {/* Profile image */}
              <div className="aspect-square overflow-hidden bg-stone-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Member info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-sm font-semibold mb-1" style={{ color: '#8F662E' }}>
                  {member.role}
                </div>
                <div className="text-sm text-stone-600 mb-3 flex items-center gap-1">
                  <GraduationCap className="w-4 h-4" />
                  {member.major}
                </div>
                <p className="text-sm text-stone-700 leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                {/* Social links placeholder */}
                <div className="flex gap-3">
                  <button 
                    className="p-2 rounded-lg bg-stone-100 text-stone-600 transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F5F2ED';
                      e.currentTarget.style.color = '#8F662E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f5f5f4';
                      e.currentTarget.style.color = '#57534e';
                    }}
                  >
                    <Mail className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 rounded-lg bg-stone-100 text-stone-600 transition-colors"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F5F2ED';
                      e.currentTarget.style.color = '#8F662E';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f5f5f4';
                      e.currentTarget.style.color = '#57534e';
                    }}
                  >
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}