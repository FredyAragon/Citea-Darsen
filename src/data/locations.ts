export interface LocationOption {
  id: string;
  city: string;
  region: string;
}

export const arequipaDistricts: LocationOption[] = [
  { id: "aqp-cercado", city: "Arequipa (Cercado)", region: "Arequipa" },
  { id: "aqp-cayma", city: "Cayma", region: "Arequipa" },
  { id: "aqp-yanahuara", city: "Yanahuara", region: "Arequipa" },
  { id: "aqp-cerro-colorado", city: "Cerro Colorado", region: "Arequipa" },
  { id: "aqp-jlbyr", city: "José Luis Bustamante y Rivero", region: "Arequipa" },
  { id: "aqp-paucarpata", city: "Paucarpata", region: "Arequipa" },
  { id: "aqp-sachaca", city: "Sachaca", region: "Arequipa" },
  { id: "aqp-mariano-melgar", city: "Mariano Melgar", region: "Arequipa" },
  { id: "aqp-socabaya", city: "Socabaya", region: "Arequipa" },
  { id: "aqp-characato", city: "Characato", region: "Arequipa" },
];

export const peruCities: LocationOption[] = [
  { id: "lima", city: "Lima", region: "Lima" },
  { id: "cusco", city: "Cusco", region: "Cusco" },
  { id: "trujillo", city: "Trujillo", region: "La Libertad" },
  { id: "chiclayo", city: "Chiclayo", region: "Lambayeque" },
  { id: "piura", city: "Piura", region: "Piura" },
  { id: "tacna", city: "Tacna", region: "Tacna" },
  { id: "puno", city: "Puno", region: "Puno" },
  { id: "ica", city: "Ica", region: "Ica" },
  { id: "huancayo", city: "Huancayo", region: "Junín" },
];