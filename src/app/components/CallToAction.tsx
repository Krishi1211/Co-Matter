import { Mail, MessageSquare, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CallToAction() {
  const navigate = useNavigate();

  const contactOptions = [
    {
      icon: Mail,
      title: 'General Inquiries',
      description: 'Questions about the project or research findings',
      action: 'Email Us',
      bgColor: '#F5F2ED',
      textColor: '#8F662E',
    },
    {
      icon: MessageSquare,
      title: 'Partnership Opportunities',
      description: 'Interested in collaborating or piloting solutions',
      action: 'Schedule a Meeting',
      bgColor: '#E8EDE7',
      textColor: '#394732',
    },
    {
      icon: FileText,
      title: 'Request Platform Access',
      description: 'Get early access to our byproduct database',
      action: 'Join Waitlist',
      bgColor: '#e7e5e4',
      textColor: '#57534e',
    },
  ];

  return (
    <section id="connect" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, #292524, #44403c, #78593A)' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#8F662E' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#394732' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Build the Future of Agricultural Materials
          </h2>
          <p className="text-xl text-stone-300 mb-8 leading-relaxed">
            We're seeking partners, mentors, and innovators. Whether you're a processor 
            with byproduct streams, a startup exploring sustainable materials, or a researcher 
            in this space—let's connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="group px-8 py-4 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#8F662E' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7A5626')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8F662E')}
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold transition-all duration-300 border-2 border-white/20"
            >
              Collaborate With Us
            </button>
          </div>
        </div>

        {/* Contact options */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:shadow-xl"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: option.bgColor, color: option.textColor }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {option.title}
                </h3>
                
                <p className="text-sm text-stone-600 mb-4">
                  {option.description}
                </p>
                
                <button 
                  onClick={() => navigate('/contact')}
                  className="text-sm font-semibold transition-colors"
                  style={{ color: '#8F662E' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#7A5626')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8F662E')}
                >
                  {option.action} →
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
            <p className="text-stone-200 text-sm">
              🌾 <span className="font-semibold">Agricultural Byproduct Platform</span> • UC Davis ENG 198 • 
              Transforming Waste into Value • 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}