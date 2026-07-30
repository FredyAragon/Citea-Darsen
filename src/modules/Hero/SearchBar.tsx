import { useState, type FormEvent } from "react";
import { Button } from "../../components/ui/Button";
import { ServiceSelect } from "./search/ServiceSelect";
import { LocationSelect } from "./search/LocationSelect";
import { DateSelect } from "./search/DateSelect";

export function SearchBar() {
  const [services, setServices] = useState<string[]>([]);
  const [location, setLocation] = useState<string | null>(null);
  const [date, setDate] = useState<Date | null>(null);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="animate-citea-aura absolute -inset-3 -z-10 rounded-[36px] bg-[radial-gradient(closest-side,rgba(205,255,216,0.55),rgba(156,205,225,0.30),transparent)] blur-xl"
      />

      <form
        onSubmit={handleSubmit}
        className="grid w-full gap-1 rounded-[24px] border border-white bg-white/95 p-1.5 shadow-[0_16px_36px_rgba(28,76,102,0.15)] backdrop-blur-md transition duration-300 hover:shadow-[0_20px_44px_rgba(28,76,102,0.19)] sm:grid-cols-2 lg:flex lg:items-center lg:gap-0 lg:rounded-full"
      >
        <ServiceSelect selected={services} onChange={setServices} />

        <div className="hidden h-7 w-px self-center bg-[#dbe4ec] lg:block" />

        <LocationSelect selected={location} onChange={setLocation} />

        <div className="hidden h-7 w-px self-center bg-[#dbe4ec] lg:block" />

        <DateSelect selected={date} onChange={setDate} />

        <Button
          type="submit"
          className="m-1 h-11 px-6 text-[14px] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] sm:col-span-2 lg:col-auto lg:ml-2 lg:h-[52px] lg:min-w-[122px]"
        >
          Buscar
        </Button>
      </form>
    </div>
  );
}