export interface ProfessionalService {
  id: string;

  professionalId: string;
  serviceId: string;

  price: number;
  durationMinutes: number;

  location: string;
  available: boolean;
  featured?: boolean;
}