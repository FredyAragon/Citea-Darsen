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
  size = 64,
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
        opacity="0.55"
      />
      <path
        d="M32 8C24 22 22 40 30 58"
        stroke="#ffffff"
        strokeWidth="1.4"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}

function AvailabilityCard() {
  return (
    <Card className="flex w-full max-w-[350px] items-center gap-3 p-3.5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(24,70,98,0.22)] sm:p-4 lg:w-[360px]">
      <div
        className="relative size-[66px] shrink-0 rounded-[18px] bg-cover bg-[position:72%_center]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <span className="absolute bottom-1 right-1 size-3 rounded-full border-2 border-white bg-[#14b86e]" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-[15px] font-bold text-[#138d55]">
          <span className="size-2 rounded-full bg-[#18b86d]" />
          Disponible hoy
        </div>
        <p className="mt-0.5 text-[15px] font-semibold text-[#183c68]">4:30 p. m.</p>
      </div>

      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#e5f8eb] text-[#15955b]">
        <CalendarDays className="size-6" strokeWidth={1.8} />
      </span>
    </Card>
  );
}

export function Hero() {
  const titleVisible = useRevealOnMount(60);
  const subtitleVisible = useRevealOnMount(200);
  const searchVisible = useRevealOnMount(340);
  const chipsVisible = useRevealOnMount(480);
  const cardVisible = useRevealOnMount(620);

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden rounded-b-[32px] bg-[#eefcf5] lg:h-[clamp(760px,calc(100svh-16px),940px)]"
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

      {/* Hojas decorativas */}
      <LeafDecor className="left-[4%] top-[18%] -z-10" color="#cdffd8" size={58} style={{ animationDelay: "0s" }} />
      <LeafDecor className="left-[14%] top-[62%] -z-10" color="#9ccde1" size={42} style={{ animationDelay: "1.4s", ["--leaf-rot" as string]: "-18deg" }} />
      <LeafDecor className="left-[46%] top-[8%] -z-10 hidden lg:block" color="#cdffd8" size={34} style={{ animationDelay: "2.6s", ["--leaf-rot" as string]: "12deg" }} />
      <LeafDecor className="left-[38%] top-[78%] -z-10 hidden lg:block" color="#9ccde1" size={46} style={{ animationDelay: "0.8s", ["--leaf-rot" as string]: "-8deg" }} />

      <Header />

      <div className="mx-auto flex min-h-[820px] max-w-[1560px] items-center px-5 pb-12 pt-[132px] sm:px-8 lg:h-full lg:min-h-0 lg:px-12 lg:pb-20 lg:pt-[150px] xl:px-14">
        <div className="relative z-10 w-full lg:max-w-[920px]">
          <div className="max-w-[720px] lg:pl-10 xl:pl-16">
            <h1
              className={`font-sifonn text-[clamp(3.7rem,6.1vw,6.6rem)] font-bold leading-[0.88] tracking-[-0.045em] text-[#0c3571] ${reveal(
                titleVisible,
              )}`}
            >
              Tu bienestar
              <span className="mt-3 block text-[#5da2e3]">comienza aquí</span>
            </h1>

            <p
              className={`mt-7 max-w-[540px] text-[19px] leading-relaxed text-[#163c70] sm:text-[21px] ${reveal(
                subtitleVisible,
              )}`}
            >
              Encuentra servicios de cuidado personal cerca de ti y reserva en minutos.
            </p>
          </div>

          <div className={`relative z-20 mt-8 w-full lg:w-[900px] xl:w-[1040px] ${reveal(searchVisible)}`}>
            <SearchBar />
          </div>

          <div className={`mt-8 lg:pl-2 xl:pl-7 ${reveal(chipsVisible)}`}>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.04em] text-[#0f4a98]">
              Popular ahora
            </p>

            <div className="flex flex-wrap gap-3">
              {popularServices.map(({ label, icon: Icon, color }) => (
                <button
                  key={label}
                  type="button"
                  className="flex h-12 items-center gap-3 rounded-full border border-white bg-white/90 px-4 text-[15px] font-semibold text-[#0c3979] shadow-[0_8px_20px_rgba(28,76,102,0.14)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-white hover:shadow-[0_12px_28px_rgba(28,76,102,0.20)]"
                >
                  <span className={`grid size-8 place-items-center rounded-full ${color}`}>
                    <Icon className="size-4" strokeWidth={1.8} />
                  </span>
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className={`mt-7 lg:absolute lg:-bottom-5 lg:left-[55%] lg:mt-0 xl:left-[62%] ${reveal(cardVisible)}`}>
            <AvailabilityCard />
          </div>
        </div>
      </div>
    </section>
  );
}