// src/modules/Directory/CitySelector.tsx
import { useState } from 'react';

// Tipado para la estructura de datos locales
interface DirectoryRegion {
  id: string;
  name: string;
  popularServices: string[];
  cities: {
    [cityName: string]: string[];
  };
}

const PERU_DIRECTORY_DATA: DirectoryRegion[] = [
  {
    id: 'pe-aqp',
    name: 'Arequipa',
    popularServices: [
      'Salones de belleza en Arequipa',
      'Salones de uñas en Arequipa',
      'Cejas y pestañas en Arequipa',
      'Masajes en Arequipa',
      'Peluquerías en Arequipa',
      'Centros de medicina estética en Arequipa'
    ],
    cities: {
      'Cayma': [
        'Peluquerías en Cayma',
        'Salones de uñas en Cayma',
        'Cejas y pestañas en Cayma',
        'Salones de belleza en Cayma',
        'Barberías en Cayma',
        'Spas y saunas en Cayma'
      ],
      'Yanahuara': [
        'Peluquerías en Yanahuara',
        'Salones de uñas en Yanahuara',
        'Cejas y pestañas en Yanahuara',
        'Salones de belleza en Yanahuara',
        'Centros de masaje en Yanahuara',
        'Centro de depilación en Yanahuara'
      ],
      'Cercado': [
        'Barberías en Cercado',
        'Peluquerías en Cercado',
        'Salones de uñas en Cercado',
        'Centros de masaje en Cercado',
        'Spas y saunas en Cercado',
        'Tatuajes y piercings en Cercado'
      ],
      'J.L. Bustamante': [
        'Salones de belleza en JLBYR',
        'Salones de uñas en JLBYR',
        'Cejas y pestañas en JLBYR',
        'Barberías en JLBYR',
        'Centros de masaje en JLBYR',
        'Centro de depilación en JLBYR'
      ]
    }
  },
  {
    id: 'pe-lima',
    name: 'Lima',
    popularServices: [
      'Salones de belleza en Lima',
      'Salones de uñas en Lima',
      'Cejas y pestañas en Lima',
      'Masajes en Lima',
      'Peluquerías en Lima',
      'Centros de medicina estética en Lima'
    ],
    cities: {
      'Miraflores': [
        'Peluquerías en Miraflores',
        'Salones de uñas en Miraflores',
        'Cejas y pestañas en Miraflores',
        'Salones de belleza en Miraflores',
        'Spas y saunas en Miraflores',
        'Centros de masaje en Miraflores'
      ],
      'San Isidro': [
        'Salones de belleza en San Isidro',
        'Salones de uñas en San Isidro',
        'Centros de medicina estética en San Isidro',
        'Centros de masaje en San Isidro',
        'Barberías en San Isidro',
        'Cejas y pestañas en San Isidro'
      ],
      'Santiago de Surco': [
        'Peluquerías en Surco',
        'Salones de uñas en Surco',
        'Barberías en Surco',
        'Salones de belleza en Surco',
        'Spas y saunas en Surco',
        'Centro de depilación en Surco'
      ],
      'La Molina': [
        'Salones de belleza en La Molina',
        'Salones de uñas en La Molina',
        'Cejas y pestañas en La Molina',
        'Centros de masaje en La Molina',
        'Barberías en La Molina',
        'Spas y saunas en La Molina'
      ]
    }
  },
  {
    id: 'pe-lalib',
    name: 'La Libertad',
    popularServices: [
      'Salones de belleza en La Libertad',
      'Peluquerías en La Libertad',
      'Barberías en La Libertad'
    ],
    cities: {
      'Trujillo': [
        'Peluquerías en Trujillo',
        'Salones de uñas en Trujillo',
        'Barberías en Trujillo',
        'Salones de belleza en Trujillo'
      ],
      'Huanchaco': [
        'Centros de masaje en Huanchaco',
        'Spas y saunas en Huanchaco',
        'Barberías en Huanchaco'
      ]
    }
  }
];

const LOWER_CATEGORIES = [
  'Salones de belleza', 'Cejas y pestañas', 'Salones de uñas', 
  'Peluquerías', 'Masajes', 'Centro de depilación', 
  'Centros de medicina estética', 'Barberías', 'Spas y saunas', 'Fisioterapia'
];

export default function CitySelector() {
  const [activeRegion, setActiveRegion] = useState(PERU_DIRECTORY_DATA[0]);

  return (
    <div className="w-full">
      
      {/* Pestañas Superiores (Regiones de Perú) */}
      <div className="flex flex-wrap gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
        {PERU_DIRECTORY_DATA.map((region) => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region)}
            type="button"
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-250 shrink-0 ${
              activeRegion.id === region.id
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-150'
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>

      {/* Grid de Enlaces por Distritos / Ciudades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left mb-16">
        
        {/* Columna Popular Fija por Región */}
        <div>
          <h3 className="font-bold text-slate-950 mb-4 text-base tracking-tight">Popular</h3>
          <ul className="space-y-3">
            {activeRegion.popularServices.map((service, index) => (
              <li key={index}>
                <a href="#" className="text-sm text-slate-600 hover:text-citea-cobalt hover:underline block leading-snug">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columnas de los Distritos de la Región Activa */}
        {Object.entries(activeRegion.cities).map(([cityName, services]) => (
          <div key={cityName}>
            <h3 className="font-bold text-slate-950 mb-4 text-base tracking-tight">{cityName}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-slate-600 hover:text-citea-cobalt hover:underline block leading-snug">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pestañas Inferiores de Categorías del Mockup */}
      <div className="border-t border-slate-100 pt-10 relative">
        <div className="flex flex-wrap gap-2.5 overflow-x-auto pr-12 scrollbar-none">
          {LOWER_CATEGORIES.map((cat, index) => (
            <a
              key={index}
              href="#"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-slate-700 border border-slate-250/70 hover:border-slate-400 hover:bg-slate-50 transition shrink-0"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}