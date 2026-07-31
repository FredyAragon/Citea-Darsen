// src/modules/Directory/Directory.tsx
import CitySelector from './CitySelector';

export default function Directory() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        
        {/* Título Principal */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl text-left">
            Buscar por ciudad
          </h2>
        </div>

        {/* Componente de Filtro y Listados */}
        <CitySelector />

      </div>
    </section>
  );
}