import { Store, ShieldCheck, TrendingUp, DollarSign, Database, AlertTriangle, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyNow() {
  const factors = [
    {
      icon: Store,
      title: 'Market Infrastructure',
      before: 'No centralized digital platform',
      after: 'Digital marketplace tools are mature',
      backgroundImage: 'https://images.unsplash.com/photo-1505216980056-a7b7b1c6e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwaHVzayUyMHRleHR1cmUlMjBtYWNyb3xlbnwxfHx8fDE3NzIyNTEzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: ShieldCheck,
      title: 'Verification Standards',
      before: 'No standardized coproduct grading',
      after: 'Standardized lab testing & certification models exist',
      backgroundImage: 'https://images.unsplash.com/photo-1673158191177-aa03f8aa57de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG1vbmQlMjBzaGVsbCUyMHRleHR1cmUlMjBjbG9zZXxlbnwxfHx8fDE3NzIyNTEzMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: TrendingUp,
      title: 'Buyer Demand',
      before: 'Limited demand for sustainable inputs',
      after: 'Strong ESG & sustainability-driven sourcing',
      backgroundImage: 'https://images.unsplash.com/photo-1591001305902-fc76b59e0506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWluJTIwdGV4dHVyZSUyMG1hY3JvfGVufDF8fHx8MTc3MjI1MTMxMXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: DollarSign,
      title: 'Processor Incentives',
      before: 'Feed markets were sufficient',
      after: 'Margin pressure demands revenue optimization',
      backgroundImage: 'https://images.unsplash.com/photo-1726502191689-4bfdb907e81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjB3YXN0ZSUyMGJpb21hc3M8ZW58MXx8fHwxNzcyMjUxMzExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Database,
      title: 'Data Availability',
      before: 'Compositional data fragmented & offline',
      after: 'Digitized data & analytics enable matching',
      backgroundImage: 'https://images.unsplash.com/photo-1769985136133-00684ec4a1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmliZXIlMjB0ZXh0dXJlJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzIyNTEzMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: AlertTriangle,
      title: 'Transaction Risk',
      before: 'High variability, unclear specs',
      after: 'Structured verification reduces risk',
      backgroundImage: 'https://images.unsplash.com/photo-1612878010062-74c2371fbf78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY2hpcCUyMGJpb21hc3MlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjI1MTMxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#f0efe5' }}>
      <div className="container mx-auto px-6">
        {/* Section header - Matching Waste Landscape style */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Why Now? Why Us?
          </h2>
          <p className="text-xl text-stone-600">
            Six market forces have aligned to make agricultural co-products viable
          </p>
        </div>

        {/* 2x3 Bento Box Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {factors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div
                key={index}
                className="relative h-[500px] overflow-hidden group"
                style={{
                  borderRadius: '32px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* High-resolution macro photography background */}
                <ImageWithFallback
                  src={factor.backgroundImage}
                  alt={factor.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark semi-transparent glassmorphism overlay */}
                <div 
                  className="absolute inset-0 backdrop-blur-[2px]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.75) 100%)',
                  }}
                />

                {/* Content overlay with CSS Grid for alignment */}
                <div className="absolute inset-0 p-8 flex flex-col">
                  {/* Top: Icon - Fixed height */}
                  <div className="flex justify-start mb-6" style={{ height: '48px' }}>
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(212, 175, 55, 0.25)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#D4AF37' }} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title - Fixed height with alignment */}
                  <div className="mb-6" style={{ height: '64px', display: 'flex', alignItems: 'center' }}>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {factor.title}
                    </h3>
                  </div>

                  {/* Flexible spacer to push content down */}
                  <div className="flex-1" />

                  {/* Bottom section - Fixed layout */}
                  <div>
                    {/* Historical State */}
                    <div className="mb-4" style={{ minHeight: '80px' }}>
                      <div 
                        className="text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                      >
                        Historical State
                      </div>
                      <p 
                        className="text-base leading-relaxed"
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                      >
                        {factor.before}
                      </p>
                    </div>

                    {/* Elegant lime-green arrow - Aligned height */}
                    <div className="flex items-center my-4" style={{ height: '24px' }}>
                      <div 
                        className="h-[1px] flex-grow"
                        style={{ backgroundColor: 'rgba(132, 204, 22, 0.4)' }}
                      />
                      <ArrowRight 
                        className="mx-2 w-6 h-6" 
                        style={{ color: '#84CC16' }}
                        strokeWidth={1.5}
                      />
                      <div 
                        className="h-[1px] flex-grow"
                        style={{ backgroundColor: 'rgba(132, 204, 22, 0.4)' }}
                      />
                    </div>

                    {/* Modern Capability */}
                    <div style={{ minHeight: '80px' }}>
                      <div 
                        className="text-xs font-semibold uppercase tracking-wider mb-2"
                        style={{ color: '#A3E635' }}
                      >
                        Modern Capability
                      </div>
                      <p 
                        className="text-base font-semibold leading-relaxed"
                        style={{ color: '#FFFFFF' }}
                      >
                        {factor.after}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom emphasis - matching Waste Landscape style */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div 
            className="rounded-2xl p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(139, 102, 46, 0.08) 0%, rgba(57, 71, 50, 0.08) 100%)',
              border: '1px solid rgba(139, 102, 46, 0.2)',
            }}
          >
            <p className="text-xl text-stone-700 leading-relaxed mb-3">
              The opportunity didn't exist before because the enabling infrastructure and economic pressure weren't aligned.
            </p>
            <p className="text-2xl font-bold mb-4" style={{ color: '#394732' }}>
              Today, they are.
            </p>
            <p className="text-lg text-stone-600">
              <strong style={{ color: '#8F662E' }}>Co▪Matter</strong> provides the infrastructure to transform agricultural byproducts into verified, tradeable co-products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}