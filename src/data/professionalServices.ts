export interface ProfessionalService {
  id: string;
  professionalId: string;
  serviceId: string;
  locationId: string;
  price: number;
  durationMinutes: number;
  available: boolean;
  featured?: boolean;
}

export const professionalServices: ProfessionalService[] = [
  // Valeria Mendoza
  {
    id: 'offer-valeria-masaje-relajante',
    professionalId: 'professional-valeria-mendoza',
    serviceId: 'masaje-relajante',
    locationId: 'aqp-cayma',
    price: 80,
    durationMinutes: 60,
    available: true,
    featured: true,
  },
  {
    id: 'offer-valeria-masaje-descontracturante',
    professionalId: 'professional-valeria-mendoza',
    serviceId: 'masaje-descontracturante',
    locationId: 'aqp-cayma',
    price: 95,
    durationMinutes: 60,
    available: true,
  },
  {
    id: 'offer-valeria-piedras-calientes',
    professionalId: 'professional-valeria-mendoza',
    serviceId: 'masaje-piedras-calientes',
    locationId: 'aqp-cayma',
    price: 120,
    durationMinutes: 75,
    available: true,
    featured: true,
  },

  // Camila Torres
  {
    id: 'offer-camila-facial-hidratante',
    professionalId: 'professional-camila-torres',
    serviceId: 'facial-hidratante',
    locationId: 'aqp-yanahuara',
    price: 85,
    durationMinutes: 50,
    available: true,
    featured: true,
  },
  {
    id: 'offer-camila-facial-anti-edad',
    professionalId: 'professional-camila-torres',
    serviceId: 'facial-anti-edad',
    locationId: 'aqp-yanahuara',
    price: 110,
    durationMinutes: 60,
    available: true,
  },
  {
    id: 'offer-camila-limpieza-profunda',
    professionalId: 'professional-camila-torres',
    serviceId: 'limpieza-facial-profunda',
    locationId: 'aqp-yanahuara',
    price: 95,
    durationMinutes: 60,
    available: true,
  },

  // Daniela Flores
  {
    id: 'offer-daniela-manicure-clasica',
    professionalId: 'professional-daniela-flores',
    serviceId: 'manicure-clasica',
    locationId: 'aqp-cercado',
    price: 35,
    durationMinutes: 40,
    available: true,
  },
  {
    id: 'offer-daniela-manicure-semipermanente',
    professionalId: 'professional-daniela-flores',
    serviceId: 'manicure-semipermanente',
    locationId: 'aqp-cercado',
    price: 55,
    durationMinutes: 60,
    available: true,
    featured: true,
  },

  // Lucía Ramírez
  {
    id: 'offer-lucia-depilacion-cejas',
    professionalId: 'professional-lucia-ramirez',
    serviceId: 'depilacion-cejas',
    locationId: 'aqp-jlbyr',
    price: 25,
    durationMinutes: 25,
    available: true,
  },
  {
    id: 'offer-lucia-depilacion-corporal',
    professionalId: 'professional-lucia-ramirez',
    serviceId: 'depilacion-corporal-cera',
    locationId: 'aqp-jlbyr',
    price: 75,
    durationMinutes: 60,
    available: true,
    featured: true,
  },

  // Mariana Chávez
  {
    id: 'offer-mariana-pedicure-spa',
    professionalId: 'professional-mariana-chavez',
    serviceId: 'pedicure-spa',
    locationId: 'aqp-cerro-colorado',
    price: 65,
    durationMinutes: 60,
    available: true,
    featured: true,
  },
  {
    id: 'offer-mariana-manicure-clasica',
    professionalId: 'professional-mariana-chavez',
    serviceId: 'manicure-clasica',
    locationId: 'aqp-cerro-colorado',
    price: 38,
    durationMinutes: 40,
    available: true,
  },

  // Sofía Delgado
  {
    id: 'offer-sofia-exfoliacion-corporal',
    professionalId: 'professional-sofia-delgado',
    serviceId: 'exfoliacion-corporal',
    locationId: 'aqp-sachaca',
    price: 90,
    durationMinutes: 60,
    available: true,
    featured: true,
  },
  {
    id: 'offer-sofia-masaje-relajante',
    professionalId: 'professional-sofia-delgado',
    serviceId: 'masaje-relajante',
    locationId: 'aqp-sachaca',
    price: 85,
    durationMinutes: 60,
    available: true,
  },
];