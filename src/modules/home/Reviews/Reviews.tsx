// src/modules/Reviews/Reviews.tsx
import { ChevronRight } from 'lucide-react';
import ReviewCard from './ReviewCard';
import type { Review } from '../../../types/modules';

const REVIEWS_DATA: Review[] = [
  {
    id: 'r1',
    title: 'El mejor sistema de reservas',
    comment: 'Una experiencia increíble y fácil de reservar. Pagar los tratamientos es muy sencillo: no se necesita efectivo ni tarjetas.',
    rating: 5,
    userName: 'Lucy',
    userLocation: 'Londres, Reino Unido',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 'r2',
    title: 'Es fácil de usar y de explorar',
    comment: 'Los recordatorios de Citea te hacen la vida mucho más fácil. Además, he descubierto barberías estupendas que no sabía que existían.',
    rating: 5,
    userName: 'Dan',
    userLocation: 'Nueva York, Estados Unidos',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 'r3',
    title: 'Es perfecta para encontrar barberos',
    comment: 'Llevo dos años utilizando Citea, y es, con diferencia, la mejor plataforma de reservas que he utilizado hasta ahora. ¡Totalmente recomendable!',
    rating: 5,
    userName: 'Dale',
    userLocation: 'Sídney, Australia',
    userAvatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 'r4',
    title: 'Mi opción preferida para cuidarme',
    comment: 'Citea es mi aplicación favorita para masajes y tratamientos faciales. Puedo encontrar establecimientos cerca de mí y hacer reservas fácilmente. ¡Me encanta!',
    rating: 5,
    userName: 'Cameron',
    userLocation: 'Edimburgo, Reino Unido',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

export default function Reviews() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Título del Módulo */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl text-left">
            Reseñas
          </h2>
        </div>

        {/* Carrusel / Grid de Reseñas */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS_DATA.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Flecha Flotante Derecha del Carrusel */}
          <button 
            type="button"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden xl:flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition hover:scale-110 hover:bg-slate-50"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}