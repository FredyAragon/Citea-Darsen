import { useState } from 'react';
import {
  ArrowRight,
  ImageOff,
  Sparkles,
  UserRound,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import type { Service } from '../../../data/services';

interface ServiceCardProps {
  service: Service;
  categoryName: string;
  providerCount: number;
  startingPrice: number | null;
}

function formatPrice(value: number): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 0,
  }).format(value);
}

export default function ServiceCard({
  service,
  categoryName,
  providerCount,
  startingPrice,
}: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="
        group flex h-full flex-col overflow-hidden
        rounded-[28px] border border-slate-200/80
        bg-white
        shadow-[0_12px_40px_rgba(0,74,173,0.06)]
        transition duration-300
        hover:-translate-y-2
        hover:border-citea-sky
        hover:shadow-[0_24px_65px_rgba(0,74,173,0.14)]
      "
    >
      <div
        className="
          relative aspect-[16/10] overflow-hidden
          bg-gradient-to-br
          from-citea-mint/60 via-white to-citea-sky/50
        "
      >
        {!imageError ? (
          <img
            src={service.image}
            alt={service.name}
            onError={() => setImageError(true)}
            className="
              h-full w-full object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />
        ) : (
          <div className="grid h-full place-items-center">
            <div className="text-center text-citea-cobalt/60">
              <ImageOff
                className="mx-auto size-9"
                strokeWidth={1.5}
              />

              <span className="mt-2 block text-sm font-semibold">
                Imagen próximamente
              </span>
            </div>
          </div>
        )}

        <span
          className="
            absolute left-4 top-4
            rounded-full border border-white/70
            bg-white/85 px-3 py-1.5
            text-xs font-bold text-citea-cobalt
            shadow-sm backdrop-blur
          "
        >
          {categoryName}
        </span>

        {service.featured && (
          <span
            className="
              absolute right-4 top-4
              inline-flex items-center gap-1.5
              rounded-full bg-citea-mint/90
              px-3 py-1.5 text-xs font-bold
              text-emerald-800 shadow-sm
            "
          >
            <Sparkles className="size-3.5" />
            Destacado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h2
          className="
            text-xl font-bold text-slate-900
            transition-colors duration-300
            group-hover:text-citea-cobalt
          "
        >
          {service.name}
        </h2>

        <p
          className="
            mt-3 line-clamp-3
            text-sm leading-6 text-slate-600
          "
        >
          {service.shortDescription}
        </p>

        <div
          className="
            mt-5 flex items-center justify-between
            border-t border-slate-100 pt-4
          "
        >
          <div>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <UserRound className="size-4 text-citea-cobalt" />

              {providerCount > 0 ? (
                <span>
                  {providerCount}{' '}
                  {providerCount === 1
                    ? 'profesional'
                    : 'profesionales'}
                </span>
              ) : (
                <span>Próximamente</span>
              )}
            </div>

            {startingPrice !== null && (
              <p className="mt-1 text-sm text-slate-500">
                Desde{' '}
                <strong className="text-base text-slate-900">
                  {formatPrice(startingPrice)}
                </strong>
              </p>
            )}
          </div>

          <Link
            to={`/profesionales?servicio=${service.id}`}
            aria-label={`Ver profesionales para ${service.name}`}
            className="
              grid size-11 place-items-center
              rounded-full bg-citea-cobalt
              text-white shadow-md
              transition duration-300
              hover:scale-110 hover:bg-[#003d91]
              active:scale-95
            "
          >
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </article>
  );
}