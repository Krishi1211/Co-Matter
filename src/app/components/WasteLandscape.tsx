import { BarChart3 } from 'lucide-react';
import { useState } from 'react';
import riceHullImage from '@/assets/778ce8d7e7458b29c8b7b6338849ea9eb2bc2b62.png';
import almondHullImage from '@/assets/3ce99955368dc43f6157b6afac5a5c0e70bd8753.png';
import legumeImage from '@/assets/a62077d60c42b8135b9d4c9538422c728dfac4f0.png';
import pistachioShellImage from '@/assets/a76fb365fb93eeec8b52d2dccbe4a97f87fb404a.png';

export function WasteLandscape() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const byproducts = [
    {
      name: 'Rice Hull & Bran',
      image: riceHullImage,
      citation: 'https://www.feedipedia.org/node/750',
      properties: 'Rice hulls contain high silica content (15–20%), providing excellent thermal insulation and biocomposite reinforcement properties. Rice bran is rich in cellulose (structural functions), γ‑oryzanol and ferulic acid, offering strong antioxidant and UV‑protective properties.',
      color: '#8F662E',
    },
    {
      name: 'Almond Hull & Shell',
      image: almondHullImage,
      citation: 'https://www.feedipedia.org/node/27',
      properties: 'Almond hulls contain high fermentable sugar content (30–60%). Almond shells are high in lignin (20–50%) and naturally porous, providing excellent structural reinforcement.',
      color: '#394732',
    },
    {
      name: 'Legume Hull',
      image: legumeImage,
      citation: 'https://www.feedipedia.org/content/chickpea-cicer-arietinum-pods-and-seeds',
      properties: 'High fiber and phenolic content, offering natural antioxidant and barrier properties, functional packaging materials.',
      color: '#8F662E',
    },
    {
      name: 'Pistachio Shell',
      image: pistachioShellImage,
      citation: 'https://ayoubs.ca/blogs/news/four-things-to-do-with-pistachio-shells?srsltid=AfmBOoo_9bzEpljK7HKYmxtFDfKtLEguVyyuyps1y1kXJsEb8zt2YzlU',
      properties: 'Rich in lignocellulosic fiber (cellulose 30–35%, lignin 25–35%), activated carbon precursor, filtration media, and biocomposite reinforcement.',
      color: '#394732',
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#f0efe5' }}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-sm font-medium mb-6">
            <BarChart3 className="w-4 h-4" />
            Agricultural Byproducts
          </div>
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Waste Landscape
          </h2>
          <p className="text-xl text-stone-600">
            Explore the agricultural byproducts we're transforming into valuable materials
          </p>
        </div>

        {/* Byproduct grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {byproducts.map((byproduct, index) => (
            <div
              key={index}
              className="relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background image */}
              <img
                src={byproduct.image}
                alt={byproduct.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay for almond card to improve text contrast */}
              {byproduct.name === 'Almond Hull & Shell' && (
                <div className="absolute inset-0 bg-black/30" />
              )}

              {/* Overlay gradient */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredCard === index
                    ? 'bg-gradient-to-br opacity-95'
                    : 'bg-gradient-to-br opacity-0'
                }`}
                style={{
                  background: hoveredCard === index
                    ? `linear-gradient(135deg, ${byproduct.color} 0%, ${byproduct.color}dd 100%)`
                    : 'transparent',
                }}
              />

              {/* Title - Always visible */}
              <div className="absolute top-6 left-6 right-6 z-10">
                <h3 className="text-3xl font-bold text-white drop-shadow-lg">
                  {byproduct.name}
                </h3>
              </div>

              {/* Properties - Visible on hover */}
              <div
                className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-white text-lg leading-relaxed">
                  {byproduct.properties}
                </p>
              </div>

              {/* Hover indicator icon */}
              <div
                className={`absolute top-6 right-6 w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Citation - Always visible at bottom */}
              {byproduct.citation && (
                <div className="absolute bottom-3 left-3 right-3 z-10">
                  <a
                    href={byproduct.citation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/80 hover:text-white transition-colors drop-shadow-md block truncate"
                  >
                    Image: {byproduct.citation}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA or note */}
        <div className="mt-16 text-center">
          <p className="text-stone-600 text-lg">
            Each byproduct represents untapped material potential waiting to be unlocked
          </p>
        </div>
      </div>
    </section>
  );
}