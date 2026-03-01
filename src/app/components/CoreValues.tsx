import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function CoreValues() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1761839257961-4dce65b72d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MjI1Mzc5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Agricultural farming"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {/* Main Headline with Strikethrough */}
            <div className="mb-8">
              <motion.div 
                className="text-3xl md:text-4xl font-semibold text-white/70 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transforming Agricultural
              </motion.div>
              
              <motion.h1 
                className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="relative inline-block">
                  <span className="relative text-stone-400">
                    Byproducts
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 1 }}
                    >
                      <span 
                        className="block h-2 w-full"
                        style={{ 
                          backgroundColor: '#ff4444',
                          transform: 'rotate(-3deg)',
                          boxShadow: '0 0 10px rgba(255, 68, 68, 0.5)'
                        }}
                      />
                    </motion.span>
                  </span>
                </span>
              </motion.h1>

              <motion.div 
                className="text-3xl md:text-4xl font-semibold text-white/70 my-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                into
              </motion.div>

              <motion.h1 
                className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                style={{ 
                  color: '#FFB84D',
                  textShadow: '0 0 30px rgba(255, 184, 77, 0.5), 0 0 60px rgba(255, 184, 77, 0.3)'
                }}
              >
                Co-Products
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              Co▪Matter's platform bridges agricultural processors with high-value material 
              industries—moving beyond the oversaturated animal feed market to unlock 
              ESG-aligned circular economy opportunities.
            </motion.p>

            {/* Animated Accent */}
            <motion.div
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 backdrop-blur-sm"
              style={{ 
                borderColor: '#FFB84D',
                backgroundColor: 'rgba(255, 184, 77, 0.2)'
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5" style={{ color: '#FFB84D' }} />
              <span className="text-white font-semibold">Science-Driven • ESG-Aligned • Industry-Forward</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}