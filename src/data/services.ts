export type ServiceCategory =
  | "Masajes"
  | "Faciales"
  | "Manicure"
  | "Pedicure"
  | "Depilación"
  | "Corporal";

export interface ServiceOption {
  id: string;
  name: string;
  category: ServiceCategory;
}

export const serviceOptions: ServiceOption[] = [
  { id: "masaje-relajante", name: "Masaje relajante", category: "Masajes" },
  { id: "masaje-descontracturante", name: "Masaje descontracturante", category: "Masajes" },
  { id: "masaje-piedras-calientes", name: "Masaje con piedras calientes", category: "Masajes" },
  { id: "facial-hidratante", name: "Facial hidratante", category: "Faciales" },
  { id: "facial-anti-edad", name: "Facial anti-edad", category: "Faciales" },
  { id: "limpieza-facial-profunda", name: "Limpieza facial profunda", category: "Faciales" },
  { id: "manicure-clasica", name: "Manicure clásica", category: "Manicure" },
  { id: "manicure-semipermanente", name: "Manicure semipermanente", category: "Manicure" },
  { id: "pedicure-spa", name: "Pedicure spa", category: "Pedicure" },
  { id: "depilacion-cejas", name: "Depilación de cejas", category: "Depilación" },
  { id: "depilacion-corporal-cera", name: "Depilación corporal con cera", category: "Depilación" },
  { id: "exfoliacion-corporal", name: "Exfoliación corporal", category: "Corporal" },
];