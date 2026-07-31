import { ArrowDown, Heart, Leaf, Sparkles } from 'lucide-react';
import { Reveal } from '../../../components/ui/Reveal';

export default function AboutHero() {
  const scrollToPurpose = () => {
    document
      .getElementById('nuestro-proposito')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="
        relative isolate flex min-h-[680px] items-center
        overflow-hidden bg-gradient-to-br
        from-[#f4fff7] via-white to-[#edf8fc]
        pb-20 pt-32 lg:min-h-[760px] lg:pt-36
      "
    >
      {/* Decoración */}
      <div
        aria-hidden="true"
        className="
          absolute -left-32 top-12 size-[420px]
          rounded-full bg-citea-mint/50 blur-3xl
          animate-citea-pulse-soft
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -right-24 top-24 size-[380px]
          rounded-full bg-citea-sky/35 blur-3xl
          animate-citea-drift
        "
      />

      <Leaf
        aria-hidden="true"
        strokeWidth={1}
        className="
          absolute -left-10 bottom-10 size-64
          -rotate-12 text-emerald-600/10
          animate-citea-float
        "
      />

      <div
        className="
          relative mx-auto grid w-full max-w-[1380px]
          items-center gap-14 px-5
          sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12
        "
      >
        <div className="max-w-2xl">
          <Reveal direction="up">
            <span
              className="
                inline-flex items-center gap-2 rounded-full
                border border-citea-cobalt/10 bg-white/75
                px-4 py-2 text-sm font-semibold
                text-citea-cobalt shadow-sm backdrop-blur
              "
            >
              <Heart className="size-4" />
              Sobre Citea
            </span>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <h1
              className="
                mt-6 text-5xl font-bold leading-[1.04]
                tracking-[-0.045em] text-slate-900
                sm:text-6xl lg:text-7xl
              "
            >
              Cuidar de ti debería ser{' '}
              <span className="text-citea-cobalt">sencillo</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={220}>
            <p
              className="
                mt-7 max-w-xl text-lg leading-8
                text-slate-600
              "
            >
              En Citea reunimos servicios y profesionales de cuidado
              personal para que puedas descubrir, comparar y reservar desde
              un solo lugar.
            </p>
          </Reveal>

          <Reveal direction="up" delay={320}>
            <button
              type="button"
              onClick={scrollToPurpose}
              className="
                group mt-9 inline-flex items-center gap-3
                rounded-full border border-citea-cobalt/15
                bg-white/80 px-5 py-3
                text-sm font-semibold text-citea-cobalt
                shadow-[0_12px_30px_rgba(0,74,173,0.1)]
                backdrop-blur transition duration-300
                hover:-translate-y-1 hover:bg-white
              "
            >
              Conoce nuestro propósito

              <ArrowDown
                className="
                  size-4 transition-transform duration-300
                  group-hover:translate-y-1
                "
              />
            </button>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={180}>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div
              className="
                relative overflow-hidden rounded-[48px]
                border border-white/80
                bg-gradient-to-br from-citea-mint/80
                via-white to-citea-sky/50
                p-8 shadow-[0_30px_80px_rgba(0,74,173,0.14)]
              "
            >
              <div
                className="
                  grid min-h-[400px] place-items-center
                  rounded-[36px] border border-white/80
                  bg-white/55 p-10 backdrop-blur
                "
              >
                <div className="text-center">
                  <div
                    className="
                      mx-auto grid size-24 place-items-center
                      rounded-full bg-citea-cobalt text-white
                      shadow-[0_18px_40px_rgba(0,74,173,0.25)]
                      animate-citea-float
                    "
                  >
                    <Heart className="size-11" strokeWidth={1.6} />
                  </div>

                  <p
                    className="
                      mt-7 text-2xl font-bold
                      text-slate-800
                    "
                  >
                    Tu bienestar, más cerca
                  </p>

                  <p className="mx-auto mt-3 max-w-xs text-slate-600">
                    Una experiencia diseñada para encontrar el cuidado que
                    necesitas.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                absolute -left-6 top-14 flex items-center gap-2
                rounded-2xl bg-white/90 px-4 py-3
                text-sm font-semibold text-citea-cobalt
                shadow-xl backdrop-blur
                animate-citea-float
              "
            >
              <Sparkles className="size-4" />
              Descubre
            </div>

            <div
              className="
                absolute -bottom-5 right-5 flex items-center gap-2
                rounded-2xl bg-white/90 px-4 py-3
                text-sm font-semibold text-emerald-700
                shadow-xl backdrop-blur
                animate-citea-float
              "
              style={{ animationDelay: '1.2s' }}
            >
              <Leaf className="size-4" />
              Bienestar
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}