import { CalendarDays, MapPin, Search } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { SearchInput } from "../../components/ui/SearchInput";

export function SearchBar() {
  return (
    <div className="citea-ring-gradient rounded-[34px] p-[2px] shadow-[0_28px_65px_rgba(0,74,173,0.20)] transition duration-300 hover:shadow-[0_32px_75px_rgba(0,74,173,0.28)]">
      <form
        className="grid w-full overflow-hidden rounded-[32px] border border-white bg-white/95 p-2.5 backdrop-blur-md sm:grid-cols-2 lg:flex lg:items-center lg:rounded-full"
        onSubmit={(event) => event.preventDefault()}
      >
        <SearchInput
          icon={<Search className="size-7" strokeWidth={1.8} />}
          label="¿Qué servicio buscas?"
          className="lg:flex-[1.35]"
        />
        <SearchInput
          icon={<MapPin className="size-7" strokeWidth={1.8} />}
          label="Tu ubicación"
          className="lg:flex-1"
          divider
        />
        <SearchInput
          icon={<CalendarDays className="size-7" strokeWidth={1.8} />}
          label="Elige una fecha"
          className="lg:flex-1"
          divider
        />

        <Button
          type="submit"
          className="animate-citea-glow m-1 h-14 px-9 text-base transition-transform duration-300 hover:scale-[1.04] active:scale-[0.97] sm:col-span-2 lg:col-auto lg:ml-2 lg:h-16 lg:min-w-[142px]"
        >
          Buscar
        </Button>
      </form>
    </div>
  );
}