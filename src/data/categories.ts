export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'category-masajes',
    name: 'Masajes',
    slug: 'masajes',
  },
  {
    id: 'category-faciales',
    name: 'Faciales',
    slug: 'faciales',
  },
  {
    id: 'category-manicure',
    name: 'Manicure',
    slug: 'manicure',
  },
  {
    id: 'category-pedicure',
    name: 'Pedicure',
    slug: 'pedicure',
  },
  {
    id: 'category-depilacion',
    name: 'Depilación',
    slug: 'depilacion',
  },
  {
    id: 'category-corporal',
    name: 'Cuidado corporal',
    slug: 'cuidado-corporal',
  },
];