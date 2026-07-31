import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Reveal } from '../../../components/ui/Reveal';

export default function AboutCTA() {
  return (
    <section className="bg-white px-5 pb-24 pt-4 sm:px-8 lg:px-12 lg:pb-32">
      <Reveal direction="scale">
        <div
          className="
            relative mx-auto max-w-[1280px]
            overflow-hidden rounded-[42px]
            bg-citea-cobalt px-6 py-16
            text-center shadow-[0_30px_80px_rgba(0,74,173,0.22)]
            sm:px-10 lg:py-20
          "
        >
          <div
            aria-hidden="true"
            className="
              absolute -left-20 -top-28 size-80
              rounded-full bg-citea-mint/20 blur-3xl
              animate-citea-pulse-soft
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute -bottom-32 -right-20 size-96
              rounded-full bg-citea-sky/25 blur-3xl
              animate-citea-drift
            "
          />

          <div className="relative mx-auto max-w-3xl">
            <Sparkles
              className="
                mx-auto size-8 text-citea-mint
                animate-citea-float
              "
            />

            <h2
              className="
                mt-5 text-4xl font-bold tracking-[-0.035em]
                text-white sm:text-5xl
              "
            >
              Tu próximo momento de bienestar está más cerca
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Explora servicios de cuidado personal y encuentra una
              alternativa pensada para ti.
            </p>

            <Link
              to="/servicios"
              className="
                group mt-9 inline-flex items-center gap-3
                rounded-full bg-white px-7 py-3.5
                font-bold text-citea-cobalt
                shadow-xl transition duration-300
                hover:-translate-y-1 hover:shadow-2xl
                active:scale-[0.98]
              "
            >
              Explorar servicios

              <ArrowRight
                className="
                  size-5 transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}