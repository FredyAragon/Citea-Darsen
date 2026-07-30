import { CalendarDays, MapPin, Search } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { SearchInput } from "../../components/ui/SearchInput";

export function SearchBar() {
  return (
    <form
      className="grid w-full overflow-hidden rounded-[28px] border border-white bg-white/95 p-2 shadow-[0_20px_45px_rgba(28,76,102,0.18)] backdrop-blur-md sm:grid-cols-2 lg:flex lg:items-center lg:rounded-full"
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
        className="m-1 h-14 px-9 text-base sm:col-span-2 lg:col-auto lg:ml-2 lg:h-16 lg:min-w-[142px]"
      >
        Buscar
      </Button>
    </form>
  );
}
