import { Search, SlidersHorizontal, MapPin, TrendingUp, FileText, DollarSign, AlertCircle, Lightbulb } from 'lucide-react';
import supplierToBuyerMap from '@/assets/f061986e163e3cef3c65e55444839d722d71b185.png';

export function PrototypePreview() {
  return (
    <section className="py-24" style={{ backgroundColor: '#f0efe5' }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#F5F2ED', color: '#8F662E' }}>
            Coming Soon
          </div>
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            What Our Platform Does
          </h2>
          <p className="text-xl text-stone-600 mb-12">
            A systematic approach to transforming agricultural waste into material opportunity
          </p>

          {/* Three-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="bg-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-shadow" style={{ borderColor: '#8F662E' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-2xl text-white" style={{ backgroundColor: '#8F662E' }}>
                1
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Map Byproducts</h3>
              <p className="text-stone-600 leading-relaxed">
                Identify volumes, locations, and current disposal pathways across California's agricultural regions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-shadow" style={{ borderColor: '#394732' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-2xl text-white" style={{ backgroundColor: '#394732' }}>
                2
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Analyze Material Properties</h3>
              <p className="text-stone-600 leading-relaxed">
                Fiber, silica, moisture, composition, and functional traits. Deep-dive into what makes each byproduct valuable.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 shadow-lg hover:shadow-xl transition-shadow border-stone-300">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-2xl text-white bg-stone-700">
                3
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Match to Industry Needs</h3>
              <p className="text-stone-600 leading-relaxed">
                Packaging, composites, fillers, biopolymers, and more. Connect material properties to real-world applications.
              </p>
            </div>
          </div>
        </div>

        {/* Platform mockup */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-2xl border-2 border-stone-300 overflow-hidden shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-stone-200 px-6 py-3 flex items-center gap-2 border-b border-stone-300">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 ml-4 bg-white rounded px-4 py-1 text-sm text-stone-500">
                platform.legumelegends.com/database
              </div>
            </div>

            {/* Main interface */}
            <div className="p-8">
              {/* Search and filters */}
              <div className="bg-white rounded-xl shadow-md border border-stone-200 p-6 mb-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 flex items-center gap-3 bg-stone-50 rounded-lg px-4 py-3 border border-stone-200">
                    <Search className="w-5 h-5 text-stone-400" />
                    <input
                      type="text"
                      placeholder="Search byproducts by name, property, or application..."
                      className="flex-1 bg-transparent outline-none text-stone-700 placeholder:text-stone-400"
                      disabled
                    />
                  </div>
                  <button 
                    className="flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    style={{ backgroundColor: '#8F662E' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7A5626')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8F662E')}
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                  </button>
                </div>

                {/* Filter tags */}
                <div className="flex flex-wrap gap-2">
                  <button 
                    className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                    style={{ backgroundColor: '#F5F2ED', color: '#8F662E' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E8DCC8')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F5F2ED')}
                  >
                    Fiber Content
                  </button>
                  <button 
                    className="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
                    style={{ backgroundColor: '#E8EDE7', color: '#394732' }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#D8E3D7')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E8EDE7')}
                  >
                    Silica
                  </button>
                  <button className="px-3 py-1.5 bg-stone-200 text-stone-800 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors">
                    Moisture
                  </button>
                  <button className="px-3 py-1.5 bg-stone-200 text-stone-800 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors">
                    Applications
                  </button>
                  <button className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors">
                    + More
                  </button>
                </div>
              </div>

              {/* Results grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Rice Hull Card */}
                <div 
                  className="bg-white rounded-xl border-2 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ borderColor: '#e7e5e4' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#8F662E')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e7e5e4')}
                >
                  <div className="p-4 text-white" style={{ background: 'linear-gradient(to right, #8F662E, #6B4E23)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Rice Hull & Bran</h3>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>California Central Valley</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Annual Volume:</span>
                      <span className="font-semibold text-stone-900">1.3M+ tons/year</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Silica Content:</span>
                      <span className="font-semibold text-stone-900">15-20%</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: '#F5F2ED', color: '#8F662E' }}>High Silica</span>
                      <span className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: '#F5F2ED', color: '#8F662E' }}>Thermal Stable</span>
                      <span className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: '#F5F2ED', color: '#8F662E' }}>Composites</span>
                    </div>
                    <button 
                      className="w-full mt-3 py-2 bg-stone-100 text-stone-900 rounded-lg text-sm font-semibold transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F2ED')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f4')}
                    >
                      View Full Profile →
                    </button>
                  </div>
                </div>

                {/* Almond Hull Card */}
                <div 
                  className="bg-white rounded-xl border-2 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  style={{ borderColor: '#e7e5e4' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#394732')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#e7e5e4')}
                >
                  <div className="p-4 text-white" style={{ background: 'linear-gradient(to right, #394732, #2B3625)' }}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">Almond Hull + Shell</h3>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>California Central Valley</p>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Annual Volume:</span>
                      <span className="font-semibold text-stone-900">2.2M+ tons/year</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-600">Fiber Content:</span>
                      <span className="font-semibold text-stone-900">25-30%</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: '#E8EDE7', color: '#394732' }}>High Fiber</span>
                      <span className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: '#E8EDE7', color: '#394732' }}>Biopolymer</span>
                      <span className="px-2 py-1 text-xs font-medium rounded" style={{ backgroundColor: '#E8EDE7', color: '#394732' }}>Packaging</span>
                    </div>
                    <button 
                      className="w-full mt-3 py-2 bg-stone-100 text-stone-900 rounded-lg text-sm font-semibold transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E8EDE7')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f4')}
                    >
                      View Full Profile →
                    </button>
                  </div>
                </div>
              </div>

              {/* Map preview */}
              <div className="bg-white rounded-xl border-2 border-stone-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" style={{ color: '#8F662E' }} />
                    <h3 className="font-bold text-stone-900">Supplier to Buyer Network</h3>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: '#F5F2ED', color: '#8F662E' }}>
                    Live Mapping
                  </span>
                </div>
                <div className="rounded-lg overflow-hidden border-2 border-stone-200">
                  <img 
                    src={supplierToBuyerMap} 
                    alt="Map showing supplier to buyer connection from Almond Processor to Industry Buyer in California" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-sm text-stone-600 mt-3 text-center">
                  Real-time visualization of supply chain connections across California
                </p>
              </div>

              {/* Platform Offerings Section */}
              <div className="bg-white rounded-xl border-2 border-stone-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5" style={{ color: '#8F662E' }} />
                  <h3 className="font-bold text-stone-900">Platform Offerings</h3>
                </div>
                
                {/* Report Template Preview */}
                <div className="border-2 rounded-lg overflow-hidden" style={{ borderColor: '#D8CCB0' }}>
                  {/* Report Header */}
                  <div className="px-6 py-4 text-white" style={{ background: 'linear-gradient(to right, #394732, #2B3625)' }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold mb-1">Co▪Matter Monthly Report</h4>
                        <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>February 2026 • Agricultural Byproduct Intelligence</p>
                      </div>
                      <FileText className="w-8 h-8" style={{ opacity: 0.5 }} />
                    </div>
                  </div>

                  {/* Report Content Grid */}
                  <div className="grid md:grid-cols-2 gap-4 p-6 bg-stone-50">
                    {/* Monthly Coproduct Value Reports */}
                    <div className="bg-white rounded-lg p-4 border-2 hover:shadow-md transition-shadow" style={{ borderColor: '#F5F2ED' }}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F2ED' }}>
                          <FileText className="w-5 h-5" style={{ color: '#8F662E' }} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-stone-900 mb-1">Monthly Coproduct Value Reports</h5>
                          <p className="text-xs text-stone-600 mb-2">Comprehensive market analysis</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-stone-700">
                        <div className="flex justify-between items-center py-1 border-b border-stone-200">
                          <span>Rice Hull Index</span>
                          <span className="font-semibold" style={{ color: '#8F662E' }}>+12.3%</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-stone-200">
                          <span>Almond Hull Index</span>
                          <span className="font-semibold" style={{ color: '#394732' }}>+8.7%</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span>Market Volume</span>
                          <span className="font-semibold">2.7M tons</span>
                        </div>
                      </div>
                    </div>

                    {/* Real-time Market Pricing */}
                    <div className="bg-white rounded-lg p-4 border-2 hover:shadow-md transition-shadow" style={{ borderColor: '#F5F2ED' }}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F2ED' }}>
                          <DollarSign className="w-5 h-5" style={{ color: '#8F662E' }} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-stone-900 mb-1">Real-time Market Pricing</h5>
                          <p className="text-xs text-stone-600 mb-2">Live pricing data streams</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-stone-700">
                        <div className="flex justify-between items-center py-1 border-b border-stone-200">
                          <span>Rice Hull/Bran</span>
                          <span className="font-semibold">$45-65/ton</span>
                        </div>
                        <div className="flex justify-between items-center py-1 border-b border-stone-200">
                          <span>Almond Hull</span>
                          <span className="font-semibold">$80-120/ton</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span>Last Updated</span>
                          <span className="font-semibold text-green-600">Live</span>
                        </div>
                      </div>
                    </div>

                    {/* Regulatory Updates */}
                    <div className="bg-white rounded-lg p-4 border-2 hover:shadow-md transition-shadow" style={{ borderColor: '#F5F2ED' }}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F2ED' }}>
                          <AlertCircle className="w-5 h-5" style={{ color: '#8F662E' }} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-stone-900 mb-1">Regulatory Updates</h5>
                          <p className="text-xs text-stone-600 mb-2">Policy & compliance tracking</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-stone-700">
                        <div className="py-1 border-b border-stone-200">
                          <p className="font-semibold mb-1">CA SB 1383 Compliance</p>
                          <p className="text-stone-600">Organic waste diversion targets updated</p>
                        </div>
                        <div className="py-1">
                          <p className="font-semibold mb-1">EPA Biofuel Standards</p>
                          <p className="text-stone-600">New biomass pathways approved</p>
                        </div>
                      </div>
                    </div>

                    {/* Emerging Industry Opportunities */}
                    <div className="bg-white rounded-lg p-4 border-2 hover:shadow-md transition-shadow" style={{ borderColor: '#F5F2ED' }}>
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: '#F5F2ED' }}>
                          <Lightbulb className="w-5 h-5" style={{ color: '#8F662E' }} />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-stone-900 mb-1">Emerging Industry Opportunities</h5>
                          <p className="text-xs text-stone-600 mb-2">Innovation & market trends</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-xs text-stone-700">
                        <div className="py-1 border-b border-stone-200">
                          <p className="font-semibold mb-1">Bioplastic Packaging Demand</p>
                          <p className="text-stone-600">35% YoY growth in alt-fiber demand</p>
                        </div>
                        <div className="py-1">
                          <p className="font-semibold mb-1">Silica Extraction Tech</p>
                          <p className="text-stone-600">3 new startups in development</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Report Footer */}
                  <div className="px-6 py-3 bg-stone-100 border-t-2" style={{ borderColor: '#D8CCB0' }}>
                    <div className="flex items-center justify-between text-xs text-stone-600">
                      <span>Subscribers receive monthly insights + quarterly deep-dives</span>
                      <button 
                        className="px-4 py-2 rounded-lg font-semibold text-white text-xs transition-colors"
                        style={{ backgroundColor: '#8F662E' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7A5626')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8F662E')}
                      >
                        Subscribe to Reports
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 text-center">
            <p className="text-stone-600 mb-4">
              <span className="font-semibold text-stone-900">Platform in development:</span> This is a 
              preview of our searchable database concept.
            </p>
            <button className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-lg font-semibold transition-colors">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}