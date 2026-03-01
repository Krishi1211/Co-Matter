import { FileText, BookOpen, BarChart3, ExternalLink, FlaskConical, Layers } from 'lucide-react';

export function ScientificValidation() {
  const researchAreas = [
    {
      icon: BarChart3,
      title: 'Composition Data',
      description: 'Detailed chemical analysis of fiber content, silica, moisture, and functional compounds',
    },
    {
      icon: FileText,
      title: 'Material Behavior',
      description: 'Thermal stability, mechanical properties, and processing characteristics',
    },
    {
      icon: BookOpen,
      title: 'Relevant Studies',
      description: 'Peer-reviewed research on byproduct valorization and circular material pathways',
    },
  ];

  return (
    <section id="science" className="py-24" style={{ backgroundColor: '#f0efe5' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Scientific Validation
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto mb-4">
              Our platform is grounded in scientific literature and rigorous composition analysis. 
              Every insight is backed by data, research, and evidence-based methodology.
            </p>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We collaborate with <span className="font-semibold text-stone-900">trusted third-party testing facilities</span> to ensure accuracy and credibility.
            </p>
          </div>

          {/* Research areas */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 transition-all duration-300 hover:shadow-lg"
                  style={{ borderColor: '#e7e5e4' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#394732')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e7e5e4')}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#E8EDE7' }}>
                    <Icon className="w-6 h-6" style={{ color: '#394732' }} />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mockup of research cards */}
          <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-stone-900">Research Database Preview</h3>
              <button 
                className="flex items-center gap-2 font-semibold text-sm"
                style={{ color: '#8F662E' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#7A5626')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8F662E')}
              >
                View All Sources
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Sample research cards */}
              <div className="rounded-r-lg p-4" style={{ borderLeft: '4px solid #394732', backgroundColor: '#E8EDE7' }}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-stone-900">Rice Hull Silica Content and Extraction Methods</h4>
                  <span className="text-xs px-2 py-1 rounded font-medium" style={{ backgroundColor: '#C5D1C0', color: '#394732' }}>
                    Composition
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-2">
                  Analysis of silica content variability across rice varieties and processing methods...
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500">
                  <span>📄 Journal Source</span>
                  <span>•</span>
                  <span>2023</span>
                  <span>•</span>
                  <span 
                    className="hover:underline cursor-pointer"
                    style={{ color: '#8F662E' }}
                  >Link →</span>
                </div>
              </div>

              <div className="rounded-r-lg p-4" style={{ borderLeft: '4px solid #8F662E', backgroundColor: '#F5F2ED' }}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-stone-900">Almond Hull Fiber Composites: Mechanical Testing</h4>
                  <span className="text-xs px-2 py-1 rounded font-medium" style={{ backgroundColor: '#E8DCC8', color: '#8F662E' }}>
                    Material Behavior
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-2">
                  Tensile strength and biodegradability assessment of almond hull-reinforced biopolymers...
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500">
                  <span>📄 Conference Paper</span>
                  <span>•</span>
                  <span>2024</span>
                  <span>•</span>
                  <span 
                    className="hover:underline cursor-pointer"
                    style={{ color: '#8F662E' }}
                  >Link →</span>
                </div>
              </div>

              <div className="border-l-4 border-stone-600 bg-stone-50 rounded-r-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-stone-900">Agricultural Byproduct Valorization: Industry Benchmarks</h4>
                  <span className="text-xs bg-stone-200 text-stone-800 px-2 py-1 rounded font-medium">
                    Industry
                  </span>
                </div>
                <p className="text-sm text-stone-600 mb-2">
                  Comparative analysis of byproduct processing economics and market pathways...
                </p>
                <div className="flex items-center gap-4 text-xs text-stone-500">
                  <span>📄 Industry Report</span>
                  <span>•</span>
                  <span>2025</span>
                  <span>•</span>
                  <span 
                    className="hover:underline cursor-pointer"
                    style={{ color: '#8F662E' }}
                  >Link →</span>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <div className="mt-6 bg-stone-50 border border-stone-200 rounded-lg p-4 text-center">
              <p className="text-sm text-stone-600">
                <span className="font-semibold text-stone-900">Platform users will have access to:</span> 
                {' '}Full scientific sources, composition datasets, and industry benchmarks for each byproduct.
              </p>
            </div>
          </div>

          {/* Innovative Material Combinations Section */}
          <div className="mt-12 bg-white rounded-2xl p-8 border-2 shadow-lg" style={{ borderColor: '#8F662E' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F5F2ED' }}>
                <Layers className="w-6 h-6" style={{ color: '#8F662E' }} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">Innovative Material Combinations</h3>
                <p className="text-sm text-stone-600">Exploring synergistic byproduct blends for enhanced performance</p>
              </div>
            </div>

            {/* Example combination */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left side - The concept */}
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#F5F2ED', color: '#8F662E' }}>
                  <FlaskConical className="w-3 h-3 inline mr-1" />
                  Creative Research Approach
                </div>
                <h4 className="text-lg font-bold text-stone-900">Hybrid Composite Formulations</h4>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Our research explores how <span className="font-semibold text-stone-900">different co-product combinations</span> can 
                  potentially create superior material properties compared to single-source materials. By blending complementary byproducts, 
                  we can optimize for specific applications.
                </p>
                <div className="bg-stone-50 border-2 border-stone-200 rounded-lg p-4">
                  <p className="text-xs text-stone-600 mb-3 font-semibold">Example Blend Under Investigation:</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 h-8 rounded flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#394732' }}>
                      50% Almond Hulls
                    </div>
                    <span className="text-stone-400 font-bold">+</span>
                    <div className="flex-1 h-8 rounded flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#8F662E' }}>
                      50% Rice Hull Silica
                    </div>
                  </div>
                  <p className="text-xs text-stone-600 mt-3">
                    <span className="font-semibold" style={{ color: '#394732' }}>Fiber + Silica</span> synergy may enhance 
                    mechanical strength while maintaining biodegradability
                  </p>
                </div>
              </div>

              {/* Right side - The benefits */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-stone-900 mt-8">Potential Advantages</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#E8EDE7' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#394732' }}>
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-stone-900 mb-1">Enhanced Supply Stability</h5>
                      <p className="text-xs text-stone-600">
                        Dual-source materials reduce dependency on single crop seasonality and regional availability
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F5F2ED' }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#8F662E' }}>
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-stone-900 mb-1">Optimized Material Properties</h5>
                      <p className="text-xs text-stone-600">
                        Blending high-fiber and high-silica sources can create composites with balanced performance characteristics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-stone-50">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-stone-700">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-stone-900 mb-1">Cost-Effective Solutions</h5>
                      <p className="text-xs text-stone-600">
                        Strategic blending can leverage regional abundance and pricing advantages of different byproducts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg border-2" style={{ borderColor: '#D8CCB0', backgroundColor: '#FEFCF8' }}>
                  <p className="text-xs text-stone-600">
                    <span className="font-semibold text-stone-900">Compared to 100% almond hulls:</span> Hybrid formulations 
                    may offer improved supply chain resilience and performance versatility while maintaining sustainability goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}