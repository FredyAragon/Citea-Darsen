// src/modules/NewArrivals/NewArrivals.tsx
import { Heart, Star, ChevronRight } from 'lucide-react';
import type { Service } from '../../types/modules';

const NEW_ARRIVALS: Service[] = [
  {
    id: 'n1',
    name: 'La Dinastia Barber Club',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    location: 'Sopocachi, La Paz',
    rating: 4.8,
    reviewsCount: 732,
    category: 'Barbería',
  },
  {
    id: 'n2',
    name: "Valencia's Barber Club",
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    location: 'San José 1 Etapa, San Bartolo',
    rating: 4.8,
    reviewsCount: 8,
    category: 'Barbería',
  },
  {
    id: 'n3',
    name: 'BARBERIA CORTESIA',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    location: 'Avenida Los Ruiseñores 578, Santa Anita',
    rating: 4.8,
    reviewsCount: 40,
    category: 'Barbería',
  },
  {
    id: 'n4',
    name: 'Velhair Barbería',
    image: 'https://images.unsplash.com/photo-1517832606589-7a598b647192?auto=format&fit=crop&w=600&q=80',
    location: 'Zárate, San Juan De Lurigancho',
    rating: 5.0,
    reviewsCount: 7,
    category: 'Barbería',
  },
];

export default function NewArrivals() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Encabezado del Módulo */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl text-left">
            Nuevo en Citea
          </h2>
        </div>

        {/* Contenedor del Carrusel / Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEW_ARRIVALS.map((item) => (
              <div key={item.id} className="group relative flex flex-col rounded-3xl bg-white overflow-hidden transition-all duration-300">
                
                {/* Contenedor de Imagen */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badge: Nuevo */}
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                    Nuevo
                  </span>

                  {/* Botón Favorito */}
                  <button 
                    type="button"
                    className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur text-slate-800 shadow-sm transition hover:scale-110 hover:bg-white hover:text-rose-500"
                  >
                    <Heart size={16} />
                  </button>
                </div>

                {/* Información de la Barbería */}
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

                  {/* Ubicación (Fiel al mockup, dos líneas o detallado) */}
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