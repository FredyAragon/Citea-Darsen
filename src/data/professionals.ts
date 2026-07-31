export interface Professional {
  id: string;
  name: string;
  slug: string;
  specialty: string;
  description: string;
  image: string;
  coverImage?: string;
  locationId: string;
  workplace?: string;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  verified: boolean;
  featured?: boolean;
}

export const professionals: Professional[] = [
  {
    id: 'professional-valeria-mendoza',
    name: 'Valeria Mendoza',
    slug: 'valeria-mendoza',
    specialty: 'Masajes y bienestar corporal',
    description:
      'Especialista en técnicas de relajación, recuperación muscular y bienestar corporal.',
    image: '/images/professionals/valeria-mendoza.webp',
    coverImage: '/images/professionals/valeria-cover.webp',
    locationId: 'aqp-cayma',
    workplace: 'Serena Wellness Spa',
    rating: 4.9,
    reviewCount: 128,
    yearsExperience: 6,
    verified: true,
    featured: true,
  },
  {
    id: 'professional-camila-torres',
    name: 'Camila Torres',
    slug: 'camila-torres',
    specialty: 'Estética facial y cuidado de la piel',
    description:
      'Profesional dedicada a tratamientos faciales personalizados, hidratación y limpieza profunda.',
    image: '/images/professionals/camila-torres.webp',
    coverImage: '/images/professionals/camila-cover.webp',
    locationId: 'aqp-yanahuara',
    workplace: 'Aura Estética Natural',
    rating: 4.8,
    reviewCount: 96,
    yearsExperience: 5,
    verified: true,
    featured: true,
  },
  {
    id: 'professional-daniela-flores',
    name: 'Daniela Flores',
    slug: 'daniela-flores',
    specialty: 'Manicure y cuidado de uñas',
    description:
      'Especialista en manicure clásica, esmaltado semipermanente y cuidado integral de manos.',
    image: '/images/professionals/daniela-flores.webp',
    coverImage: '/images/professionals/daniela-cover.webp',
    locationId: 'aqp-cercado',
    workplace: 'Nativa Nail Studio',
    rating: 5,
    reviewCount: 204,
    yearsExperience: 7,
    verified: true,
    featured: true,
  },
  {
    id: 'professional-lucia-ramirez',
    name: 'Lucía Ramírez',
    slug: 'lucia-ramirez',
    specialty: 'Depilación y diseño de cejas',
    description:
      'Especialista en perfilado de cejas y técnicas de depilación facial y corporal.',
    image: '/images/professionals/lucia-ramirez.webp',
    coverImage: '/images/professionals/lucia-cover.webp',
    locationId: 'aqp-jlbyr',
    workplace: 'Lúmina Beauty Studio',
    rating: 4.7,
    reviewCount: 74,
    yearsExperience: 4,
    verified: true,
  },
  {
    id: 'professional-mariana-chavez',
    name: 'Mariana Chávez',
    slug: 'mariana-chavez',
    specialty: 'Pedicure y bienestar de pies',
    description:
      'Profesional especializada en pedicure spa, relajación y cuidado estético de los pies.',
    image: '/images/professionals/mariana-chavez.webp',
    coverImage: '/images/professionals/mariana-cover.webp',
    locationId: 'aqp-cerro-colorado',
    workplace: 'Calma Spa Urbano',
    rating: 4.8,
    reviewCount: 82,
    yearsExperience: 5,
    verified: true,
  },
  {
    id: 'professional-sofia-delgado',
    name: 'Sofía Delgado',
    slug: 'sofia-delgado',
    specialty: 'Tratamientos corporales',
    description:
      'Especialista en exfoliación, hidratación y tratamientos orientados al bienestar de la piel.',
    image: '/images/professionals/sofia-delgado.webp',
    coverImage: '/images/professionals/sofia-cover.webp',
    locationId: 'aqp-sachaca',
    workplace: 'Esencia Centro de Bienestar',
    rating: 4.9,
    reviewCount: 115,
    yearsExperience: 8,
    verified: true,
    featured: true,
  },
];