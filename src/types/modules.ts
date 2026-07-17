// src/types/modules.ts
export interface Service {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  reviewsCount: number;
  category: string;
  isRecommended?: boolean;
  isVerified?: boolean;
}

// src/types/modules.ts
export interface Review {
  id: string;
  title: string;
  comment: string;
  rating: number;
  userName: string;
  userLocation: string;
  userAvatar: string;
}