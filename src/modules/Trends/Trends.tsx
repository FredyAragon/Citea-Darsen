// src/modules/Trends/Trends.tsx
import { Heart, Star, ChevronRight } from 'lucide-react';
import type { Service } from '../../types/modules';

const TRENDING_SERVICES: Service[] = [
  {
    id: 't1',
    name: 'Essence Sauna & Spa',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    location: 'Urb. Jardines de Villa J1, Moquegua',
    rating: 5.0,
    reviewsCount: 94,
    category: 'Peluquería',
  },
  {
    id: 't2',
    name: 'La Mafia - Santos Dumont',
    image: 'https://images.unsplash.com/photo-1512690118275-1100023f50ea?auto=format&fit=crop&w=600&q=80',
    location: 'El Pari, Santa Cruz De La Sierra',
    rating: 4.9,
    reviewsCount: 2091,
    category: 'Barbería',
  },
  {
    id: 't3',
    name: 'Spabar - Schell',
    image: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&w=600&q=80',
    location: 'Calle Schell 377, Miraflores',
    rating: 4.8,
    reviewsCount: 948,
    category: 'Salones de uñas',
  },
  {
    id: 't4',
    name: 'MIRANDAS Hair Salon',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
    location: 'Teniente Manuel Orella 610, Antofagasta',
    rating: 5.0,
    reviewsCount: 1442,
    category: 'Salón de belleza',
  },
];

export default function Trends() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Encabezado del Módulo */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl text-left">
            Tendencia
          </h2>
        </div>

        {/* Contenedor del Carrusel / Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRENDING_SERVICES.map((item) => (
              <div key={item.id} className="group relative flex flex-col rounded-3xl bg-white overflow-hidden transition-all duration-300">
                
                {/* Contenedor de Imagen */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Botón Favorito */}
                  <button 
                    type="button"
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur text-slate-800 shadow-sm transition hover:scale-110 hover:bg-white hover:text-rose-500"
                  >
                    <Heart size={16} />
                  </button>
                </div>

                {/* Información del Servicio */}
                <div className="flex flex-col pt-3 text-left">
                  
                  {/* Fila superior: Nombre y Estrellas */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-base text-slate-900 truncate tracking-tight">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-0.5 shrink-0 text-sm font-bold text-slate-900">
                      <Star size={14} className="fill-amber-400 text-amber-400" />
                      {item.rating.toFixed(1)}
                    </div>
                  </div>

                  {/* Ubicación */}
                  <p className="text-xs text-slate-500 mt-0.5 truncate">
                    {item.location}
                  </p>

                  {/* Categoría y Reseñas */}
                  <p className="text-xs text-slate-400 mt-1">
                    {item.category} • {item.reviewsCount} reseñas
                  </p>

                </div>
              </div>
            ))}
          </div>

          {/* Flecha Flotante Derecha */}
          <button 
            type="button"
            className="absolute -right-5 top-1/3 -translate-y-1/2 z-10 hidden xl:flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition hover:scale-110 hover:bg-slate-50"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}