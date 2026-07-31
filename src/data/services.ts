export interface Service {
  id: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
}

export interface ServiceOption {
  id: string;
  name: string;
  categoryId: string;
}

export const services: Service[] = [
  {
    id: 'masaje-relajante',
    name: 'Masaje relajante',
    categoryId: 'category-masajes',
    shortDescription:
      'Masaje suave diseñado para reducir el estrés y favorecer el descanso.',
    image: '/images/services/masaje-relajante.webp',
    featured: true,
  },
  {
    id: 'masaje-descontracturante',
    name: 'Masaje descontracturante',
    categoryId: 'category-masajes',
    shortDescription:
      'Tratamiento enfocado en aliviar tensión muscular y molestias corporales.',
    image: '/images/services/masaje-descontracturante.webp',
  },
  {
    id: 'masaje-piedras-calientes',
    name: 'Masaje con piedras calientes',
    categoryId: 'category-masajes',
    shortDescription:
      'Técnica de relajación que combina masaje y piedras a temperatura controlada.',
    image: '/images/services/masaje-piedras.webp',
  },
  {
    id: 'facial-hidratante',
    name: 'Facial hidratante',
    categoryId: 'category-faciales',
    shortDescription:
      'Tratamiento para recuperar la hidratación y suavidad de la piel.',
    image: '/images/services/facial-hidratante.webp',
    featured: true,
  },
  {
    id: 'facial-anti-edad',
    name: 'Facial anti-edad',
    categoryId: 'category-faciales',
    shortDescription:
      'Cuidado facial orientado a mejorar la apariencia y elasticidad de la piel.',
    image: '/images/services/facial-anti-edad.webp',
  },
  {
    id: 'limpieza-facial-profunda',
    name: 'Limpieza facial profunda',
    categoryId: 'category-faciales',
    shortDescription:
      'Limpieza especializada para retirar impurezas y revitalizar la piel.',
    image: '/images/services/limpieza-facial.webp',
  },
  {
    id: 'manicure-clasica',
    name: 'Manicure clásica',
    categoryId: 'category-manicure',
    shortDescription:
      'Cuidado tradicional de manos y uñas con acabado personalizado.',
    image: '/images/services/manicure-clasica.webp',
  },
  {
    id: 'manicure-semipermanente',
    name: 'Manicure semipermanente',
    categoryId: 'category-manicure',
    shortDescription:
      'Manicure de mayor duración con esmalte semipermanente.',
    image: '/images/services/manicure-semipermanente.webp',
    featured: true,
  },
  {
    id: 'pedicure-spa',
    name: 'Pedicure spa',
    categoryId: 'category-pedicure',
    shortDescription:
      'Experiencia completa de relajación y cuidado para los pies.',
    image: '/images/services/pedicure-spa.webp',
  },
  {
    id: 'depilacion-cejas',
    name: 'Depilación de cejas',
    categoryId: 'category-depilacion',
    shortDescription:
      'Perfilado y depilación de cejas de acuerdo con la forma del rostro.',
    image: '/images/services/depilacion-cejas.webp',
  },
  {
    id: 'depilacion-corporal-cera',
    name: 'Depilación corporal con cera',
    categoryId: 'category-depilacion',
    shortDescription:
      'Servicio de depilación corporal mediante cera profesional.',
    image: '/images/services/depilacion-corporal.webp',
  },
  {
    id: 'exfoliacion-corporal',
    name: 'Exfoliación corporal',
    categoryId: 'category-corporal',
    shortDescription:
      'Tratamiento que ayuda a renovar y suavizar la apariencia de la piel.',
    image: '/images/services/exfoliacion-corporal.webp',
  },
];

/*
 * Conservamos serviceOptions para el buscador actual.
 * Se genera automáticamente para evitar datos duplicados.
 */
export const serviceOptions: ServiceOption[] = services.map((service) => ({
  id: service.id,
  name: service.name,
  categoryId: service.categoryId,
}));