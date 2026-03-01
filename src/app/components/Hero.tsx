import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1686820740687-426a7b9b2043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwaHVsbHMlMjB0ZXh0dXJlJTIwY2xvc2V1cHxlbnwxfHx8fDE3NzE4MDY2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Agricultural byproduct material texture"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/60 to-white/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main brand/logo style heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-stone-900">
            Co<span style={{ color: '#8F662E' }}>▪</span>Matter
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-stone-700 -mt-4">
            waste reimagined
          </p>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-stone-700 max-w-3xl mx-auto font-medium">
            We are the broker for trusted coproduct sourcing from verified specs to industry applications.
          </p>

          {/* Progressive messaging */}
          <div className="space-y-4 text-lg md:text-xl text-stone-700 max-w-2xl mx-auto pt-4">
            <p className="font-medium">
              Agricultural byproducts aren't waste. The system is.
            </p>
            <p className="text-stone-600">
              The value is hidden.
              <br />
              <strong>The supply chains exist.</strong>
            </p>
          </div>

          {/* Single CTA */}
          <div className="pt-6">
            <button
              onClick={() => scrollToSection('problem')}
              className="group inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              style={{ backgroundColor: '#8F662E' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7A5626')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8F662E')}
            >
              Discover the Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}