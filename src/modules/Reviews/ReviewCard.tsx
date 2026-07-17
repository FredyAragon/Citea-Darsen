// src/modules/Reviews/ReviewCard.tsx
import { Star } from 'lucide-react';
import type { Review } from '../../types/modules';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="flex flex-col rounded-[24px] bg-[#f4f4f5] p-8 text-left h-full justify-between">
      <div>
        {/* Estrellas de Calificación (5 por defecto) */}
        <div className="flex gap-0.5 mb-4 text-amber-400">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={18} className="fill-current" />
          ))}
        </div>

        {/* Título de la reseña */}
        <h3 className="font-bold text-lg text-slate-900 mb-3 tracking-tight leading-snug">
          {review.title}
        </h3>

        {/* Comentario/Cuerpo */}
        <p className="text-sm text-slate-700 leading-relaxed font-normal">
          {review.comment}
        </p>
      </div>

      {/* Perfil del Usuario */}
      <div className="flex items-center gap-3 mt-8">
        <img 
          src={review.userAvatar} 
          alt={review.userName}
          className="h-12 w-12 rounded-full object-cover bg-slate-200"
        />
        <div>
          <h4 className="font-bold text-sm text-slate-900">
            {review.userName}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            {review.userLocation}
          </p>
        </div>
      </div>
    </div>
  );
}