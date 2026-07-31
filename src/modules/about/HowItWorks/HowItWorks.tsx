import {
  CalendarDays,
  Search,
  UserRoundCheck,
} from 'lucide-react';

import { Reveal } from '../../../components/ui/Reveal';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Explora',
    description:
      'Busca servicios de belleza, bienestar y cuidado personal.',
  },
  {
    number: '02',
    icon: UserRoundCheck,
    title: 'Elige',
    description:
      'Revisa profesionales, ubicaciones, horarios y opiniones.',
  },
  {
    number: '03',
    icon: CalendarDays,
    title: 'Reserva',
    description:
      'Selecciona la alternativa que prefieras y agenda tu cita.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-b from-[#f5fbfe] to-white
        py-24 lg:py-32
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute left-1/2 top-0 h-64 w-[70%]
          -translate-x-1/2 rounded-full
          bg-citea-sky/20 blur-3xl
        "
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span
            className="
              text-sm font-bold uppercase tracking-[0.18em]
              text-citea-cobalt
            "
          >
            Cómo funciona
          </span>

          <h2
            className="
              mt-5 text-4xl font-bold tracking-[-0.035em]
              text-slate-900 sm:text-5xl
            "
          >
            Tu cita en tres pasos
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Diseñamos una experiencia sencilla para que puedas dedicar más
            tiempo a tu bienestar.
          </p>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="
              absolute left-[17%] right-[17%] top-12
              hidden h-px bg-gradient-to-r
              from-transparent via-citea-sky to-transparent
              md:block
            "
          />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal
                key={step.number}
                direction="up"
                delay={index * 140}
              >
                <article
                  className="
                    group relative h-full rounded-[30px]
                    border border-white/80 bg-white/85
                    p-7 text-center
                    shadow-[0_18px_55px_rgba(0,74,173,0.08)]
                    backdrop-blur transition duration-300
                    hover:-translate-y-2
                    hover:shadow-[0_26px_65px_rgba(0,74,173,0.14)]
                  "
                >
                  <span
                    className="
                      absolute right-5 top-4
                      text-5xl font-bold text-citea-cobalt/5
                    "
                  >
                    {step.number}
                  </span>

                  <div
                    className="
                      relative mx-auto grid size-20 place-items-center
                      rounded-full bg-citea-cobalt text-white
                      shadow-[0_14px_35px_rgba(0,74,173,0.23)]
                      transition duration-300
                      group-hover:scale-110 group-hover:rotate-3
                    "
                  >
                    <Icon className="size-8" strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
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