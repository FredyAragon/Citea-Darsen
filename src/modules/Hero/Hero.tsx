import { CalendarDays, Hand, Leaf, Sparkles } from "lucide-react";
import type { CSSProperties } from "react";
import heroBackground from "../../assets/Hero_Fondo.webp";
import { useRevealOnMount } from "../../hooks/useRevealOnMount";
import { Header } from "../../components/layout/Header";
import { Card } from "../../components/ui/Card";
import { SearchBar } from "./SearchBar";

const popularServices = [
  { label: "Masajes", icon: Leaf, color: "bg-[#effff1] text-[#61a82d]" },
  { label: "Faciales", icon: Sparkles, color: "bg-[#eef7ff] text-[#3979d4]" },
  { label: "Manicure", icon: Hand, color: "bg-[#fff1f3] text-[#e56b96]" },
];

function reveal(visible: boolean) {
  return `transition-all duration-700 ease-out ${
    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
  }`;
}

function LeafDecor({
  className = "",
  style,
  color = "#cdffd8",
  size = 48,
}: {
  className?: string;
  style?: CSSProperties;
  color?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      aria-hidden="true"
      className={`pointer-events-none absolute animate-citea-float ${className}`}
      style={style}
    >
      <path
        d="M32 4C14 12 6 28 10 46c2 9 10 14 20 14 14 0 24-12 24-28C54 16 44 6 32 4Z"
        fill={color}
        opacity="0.5"
      />
      <path d="M32 8C24 22 22 40 30 58" stroke="#ffffff" strokeWidth="1.4" fill="none" opacity="0.4" />
    </svg>
  );
}

function AvailabilityCard() {
  return (
    <Card className="flex w-full max-w-[320px] items-center gap-3 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(24,70,98,0.22)] sm:p-3.5 lg:w-[330px]">
      <div
        className="relative size-[58px] shrink-0 rounded-[16px] bg-cover bg-[position:72%_center]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <span className="absolute bottom-1 right-1 size-2.5 rounded-full border-2 border-white bg-[#14b86e]" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-[14px] font-bold text-[#138d55]">
          <span className="size-1.5 rounded-full bg-[#18b86d]" />
          Disponible hoy
        </div>
        <p className="mt-0.5 text-[14px] font-semibold text-[#183c68]">4:30 p. m.</p>
      </div>

      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#e5f8eb] text-[#15955b]">
        <CalendarDays className="size-5" strokeWidth={1.8} />
      </span>
    </Card>
  );
}

export function Hero() {
  const titleVisible = useRevealOnMount(60);
  const subtitleVisible = useRevealOnMount(190);
  const searchVisible = useRevealOnMount(320);
  const chipsVisible = useRevealOnMount(450);
  const cardVisible = useRevealOnMount(580);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden rounded-b-[28px] bg-[#eefcf5] lg:h-[clamp(680px,calc(100svh-16px),840px)]"
    >
      <div
        aria-hidden="true"
        className="hero-background absolute inset-0 -z-30 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(238,255,246,0.78)_0%,rgba(239,250,252,0.50)_38%,rgba(255,255,255,0.05)_66%)]"
      />

      <LeafDecor className="left-[4%] top-[16%] -z-10" color="#cdffd8" size={46} style={{ animationDelay: "0s" }} />
      <LeafDecor
        className="left-[13%] top-[60%] -z-10"
        color="#9ccde1"
        size={34}
        style={{ animationDelay: "1.4s", ["--leaf-rot" as string]: "-18deg" }}
      />
      <LeafDecor
        className="left-[45%] top-[8%] -z-10 hidden lg:block"
        color="#cdffd8"
        size={28}
        style={{ animationDelay: "2.6s", ["--leaf-rot" as string]: "12deg" }}
      />
      <LeafDecor
        className="left-[37%] top-[76%] -z-10 hidden lg:block"
        color="#9ccde1"
        size={36}
        style={{ animationDelay: "0.8s", ["--leaf-rot" as string]: "-8deg" }}
      />

      <Header />

      <div className="mx-auto flex min-h-[720px] max-w-[1560px] items-center px-5 pb-10 pt-[104px] sm:px-7 lg:h-full lg:min-h-0 lg:px-10 lg:pb-16 lg:pt-[120px] xl:px-12">
        <div className="relative z-10 w-full lg:max-w-[860px]">
          <div className="max-w-[640px] lg:pl-8 xl:pl-12">
            <h1
              className={`font-sifonn text-[clamp(2.6rem,4.6vw,4.6rem)] font-bold leading-[0.9] tracking-[-0.03em] text-[#0c3571] ${reveal(
                titleVisible,
              )}`}
            >
              Tu bienestar
              <span className="mt-2 block text-[#5da2e3]">comienza aquí</span>
            </h1>

            <p
              className={`mt-5 max-w-[480px] text-[16px] leading-relaxed text-[#163c70] sm:text-[17px] ${reveal(
                subtitleVisible,
              )}`}
            >
              Encuentra servicios de cuidado personal cerca de ti y reserva en minutos.
            </p>
          </div>

          <div className={`relative z-20 mt-6 w-full lg:w-[820px] xl:w-[920px] ${reveal(searchVisible)}`}>
            <SearchBar />
          </div>

          <div className={`mt-6 lg:pl-1 xl:pl-5 ${reveal(chipsVisible)}`}>
            <p className="mb-2.5 text-[12px] font-bold uppercase tracking-[0.04em] text-[#0f4a98]">
              Popular ahora
            </p>

            <div className="flex flex-wrap gap-2.5">
              {popularServices.map(({ label, icon: Icon, color }) => (
                <button
                  key={label}
                  type="button"
                  className="flex h-10 items-center gap-2.5 rounded-full border border-white bg-white/90 px-3.5 text-[13px] font-semibold text-[#0c3979] shadow-[0_8px_20px_rgba(28,76,102,0.14)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-white hover:shadow-[0_12px_28px_rgba(28,76,102,0.20)]"
                >
                  <span className={`grid size-6.5 place-items-center rounded-full ${color}`}>
                    <Icon className="size-3.5" strokeWidth={1.8} />
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className={`mt-6 lg:absolute lg:-bottom-4 lg:left-[55%] lg:mt-0 xl:left-[62%] ${reveal(cardVisible)}`}>
            <AvailabilityCard />
          </div>
        </div>
      </div>
    </section>
  );
}