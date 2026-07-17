// src/modules/Recommended/Recommended.tsx
import { ChevronRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import type { Service } from '../../types/modules';

// Mocks estéticos usando Unsplash
const RECOMMENDED_CENTERS: Service[] = [
  {
    id: '1',
    name: 'Serena Wellness Spa',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=600&q=80',
    location: 'Cayma, Arequipa',
    rating: 4.9,
    reviewsCount: 365,
    category: 'Masajes y bienestar',
    isRecommended: true,
  },
  {
    id: '2',
    name: 'Aura Estética Natural',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    location: 'Yanahuara, Arequipa',
    rating: 4.8,
    reviewsCount: 218,
    category: 'Faciales y skincare',
    isRecommended: true,
    isVerified: true,
  },
  {
    id: '3',
    name: 'Lúmina Hair Studio',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    location: 'Cercado, Arequipa',
    rating: 5.0,
    reviewsCount: 406,
    category: 'Peluquería y color',
    isRecommended: true,
    isVerified: true,
  },
  {
    id: '4',
    name: 'Nativa Nail Bar',
    image: 'https://images.unsplash.com/photo-1604654894610-df490688a50e?auto=format&fit=crop&w=600&q=80',
    location: 'José Luis Bustamante y Rivero',
    rating: 4.9,
    reviewsCount: 126,
    category: 'Manicure y pedicure',
    isRecommended: true,
  },
];

export default function Recommended() {
  return (
    <section className="py-16 bg-white/50 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Encabezado */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Recomendados para ti
            </h2>
            <p className="mt-3 text-base text-slate-500 sm:text-lg">
              Descubre espacios de cuidado personal cerca de ti
            </p>
          </div>
          
          <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-citea-cobalt hover:underline group">
            Ver todos 
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Grid llamando a ServiceCard */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RECOMMENDED_CENTERS.map((center) => (
              <ServiceCard key={center.id} center={center} />
            ))}
          </div>

          {/* Flecha del Carrusel */}
          <button 
            type="button"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden xl:flex h-12 w-12 items-center justify-center rounded-full border border-slate-100 bg-white text-citea-cobalt shadow-lg shadow-slate-200/50 transition hover:scale-110 hover:bg-slate-50"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-citea-cobalt" />
          <span className="h-2 w-2 rounded-full bg-citea-sky/40" />
          <span className="h-2 w-2 rounded-full bg-citea-sky/40" />
          <span className="h-2 w-2 rounded-full bg-citea-sky/40" />
        </div>

      </div>
    </section>
  );
}