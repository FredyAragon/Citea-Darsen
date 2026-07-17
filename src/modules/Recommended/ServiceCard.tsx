// src/modules/Recommended/ServiceCard.tsx
import { Heart, Star, MapPin, CheckCircle2 } from 'lucide-react';
import type { Service } from '../../types/modules';

interface ServiceCardProps {
  center: Service;
}

export default function ServiceCard({ center }: ServiceCardProps) {
  return (
    <div className="group relative flex flex-col rounded-[32px] bg-white border border-slate-100 p-3 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,74,173,0.06)] hover:-translate-y-1">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-square w-full overflow-hidden rounded-[24px] bg-slate-100">
        <img 
          src={center.image} 
          alt={center.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badge: Recomendado */}
        {center.isRecommended && (
          <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
            Recomendado
          </span>
        )}

        {/* Botón Favorito */}
        <button 
          type="button"
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur text-slate-700 shadow-sm transition hover:scale-110 hover:bg-white hover:text-rose-500"
        >
          <Heart size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Info / Detalles */}
      <div className="flex flex-col flex-1 p-3 pt-4">
        
        {/* Nombre y Puntuación */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-lg text-slate-900 tracking-tight leading-snug flex items-center gap-1.5">
            {center.name}
            {center.isVerified && (
              <CheckCircle2 size={16} className="text-blue-500 fill-blue-500/10 shrink-0" />
            )}
          </h3>
          <div className="flex items-center gap-1 shrink-0 text-sm font-bold text-slate-900 mt-0.5">
            <Star size={15} className="fill-amber-400 text-amber-400" />
            {center.rating.toFixed(1)}
          </div>
        </div>

        {/* Ubicación */}
        <div className="mt-2.5 flex items-center gap-1.5 text-sm text-slate-500">
          <MapPin size={15} className="text-slate-400 shrink-0" />
          <span className="truncate">{center.location}</span>
        </div>

        {/* Categoría y Reseñas */}
        <div className="mt-auto pt-3 flex items-center justify-between text-xs font-medium text-slate-400 border-t border-slate-50">
          <span>{center.category}</span>
          <span className="shrink-0">{center.reviewsCount} reseñas</span>
        </div>

      </div>
    </div>
  );
}