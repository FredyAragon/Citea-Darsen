import {
  CalendarCheck,
  MapPinned,
  SearchCheck,
} from 'lucide-react';

import { Reveal } from '../../../components/ui/Reveal';

const benefits = [
  {
    icon: MapPinned,
    title: 'Descubre servicios cercanos',
    description:
      'Encuentra alternativas de cuidado personal disponibles en tu zona.',
  },
  {
    icon: SearchCheck,
    title: 'Compara fácilmente',
    description:
      'Revisa servicios, profesionales, ubicaciones y opiniones.',
  },
  {
    icon: CalendarCheck,
    title: 'Reserva con confianza',
    description:
      'Elige el horario y la alternativa que mejor se adapten a ti.',
  },
];

export default function OurPurpose() {
  return (
    <section
      id="nuestro-proposito"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal direction="left">
            <div className="lg:sticky lg:top-28">
              <span
                className="
                  text-sm font-bold uppercase tracking-[0.18em]
                  text-citea-cobalt
                "
              >
                Nuestro propósito
              </span>

              <h2
                className="
                  mt-5 text-4xl font-bold leading-tight
                  tracking-[-0.035em] text-slate-900
                  sm:text-5xl
                "
              >
                Acercarte al cuidado que necesitas
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Encontrar un servicio confiable puede tomar tiempo. Citea
                nace para simplificar esa búsqueda y ayudarte a tomar una
                mejor decisión.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <Reveal
                  key={benefit.title}
                  direction="right"
                  delay={index * 120}
                >
                  <article
                    className="
                      group flex gap-5 rounded-[28px]
                      border border-slate-200/80 bg-white
                      p-6 shadow-[0_12px_40px_rgba(0,74,173,0.06)]
                      transition duration-300
                      hover:-translate-y-1
                      hover:border-citea-sky
                      hover:shadow-[0_20px_50px_rgba(0,74,173,0.12)]
                      sm:p-8
                    "
                  >
                    <div
                      className="
                        grid size-14 shrink-0 place-items-center
                        rounded-2xl bg-citea-mint/55
                        text-citea-cobalt
                        transition duration-300
                        group-hover:rotate-3 group-hover:scale-110
                      "
                    >
                      <Icon className="size-6" strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}