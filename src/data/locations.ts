export interface LocationOption {
  id: string;
  name: string;
  region: string;
  type: 'district' | 'city';
}

export const arequipaDistricts: LocationOption[] = [
  { id: "aqp-cercado", name: "Arequipa (Cercado)", region: "Arequipa", type: "district" },
  { id: "aqp-cayma", name: "Cayma", region: "Arequipa", type: "district" },
  { id: "aqp-yanahuara", name: "Yanahuara", region: "Arequipa", type: "district" },
  { id: "aqp-cerro-colorado", name: "Cerro Colorado", region: "Arequipa", type: "district" },
  { id: "aqp-jlbyr", name: "José Luis Bustamante y Rivero", region: "Arequipa", type: "district" },
  { id: "aqp-paucarpata", name: "Paucarpata", region: "Arequipa", type: "district" },
  { id: "aqp-sachaca", name: "Sachaca", region: "Arequipa", type: "district" },
  { id: "aqp-mariano-melgar", name: "Mariano Melgar", region: "Arequipa", type: "district" },
  { id: "aqp-socabaya", name: "Socabaya", region: "Arequipa", type: "district" },
  { id: "aqp-characato", name: "Characato", region: "Arequipa", type: "district" },
];

export const peruCities: LocationOption[] = [
  { id: "lima", name: "Lima", region: "Lima", type: "city" },
  { id: "cusco", name: "Cusco", region: "Cusco", type: "city" },
  { id: "trujillo", name: "Trujillo", region: "La Libertad", type: "city" },
  { id: "chiclayo", name: "Chiclayo", region: "Lambayeque", type: "city" },
  { id: "piura", name: "Piura", region: "Piura", type: "city" },
  { id: "tacna", name: "Tacna", region: "Tacna", type: "city" },
  { id: "puno", name: "Puno", region: "Puno", type: "city" },
  { id: "ica", name: "Ica", region: "Ica", type: "city" },
  { id: "huancayo", name: "Huancayo", region: "Junín", type: "city" },
];