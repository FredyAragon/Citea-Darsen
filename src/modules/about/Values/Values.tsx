import {
  HeartHandshake,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

import { Reveal } from '../../../components/ui/Reveal';

const values = [
  {
    icon: MapPin,
    title: 'Cercanía',
    description:
      'Facilitamos el acceso a servicios y profesionales próximos a ti.',
    background: 'bg-citea-mint/45',
  },
  {
    icon: ShieldCheck,
    title: 'Confianza',
    description:
      'Presentamos información clara para ayudarte a elegir mejor.',
    background: 'bg-citea-sky/35',
  },
  {
    icon: HeartHandshake,
    title: 'Bienestar',
    description:
      'Diseñamos cada experiencia pensando en tu cuidado personal.',
    background: 'bg-[#eaf8ef]',
  },
];

export default function Values() {
  return (
    <section className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="
              text-sm font-bold uppercase tracking-[0.18em]
              text-citea-cobalt
            "
          >
            Lo que nos guía
          </span>

          <h2
            className="
              mt-5 text-4xl font-bold tracking-[-0.035em]
              text-slate-900 sm:text-5xl
            "
          >
            Valores que forman parte de Citea
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal
                key={value.title}
                direction="up"
                delay={index * 130}
              >
                <article
                  className="
                    group h-full rounded-[32px]
                    border border-slate-200/70 bg-white
                    p-8 transition duration-300
                    hover:-translate-y-2
                    hover:border-citea-sky
                    hover:shadow-[0_24px_65px_rgba(0,74,173,0.12)]
                  "
                >
                  <div
                    className={`
                      grid size-16 place-items-center
                      rounded-2xl text-citea-cobalt
                      transition duration-300
                      group-hover:scale-110 group-hover:-rotate-3
                      ${value.background}
                    `}
                  >
                    <Icon className="size-7" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}