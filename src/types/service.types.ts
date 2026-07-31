export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

export interface Service {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}