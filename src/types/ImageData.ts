// src/types/ImageData.ts
export interface ImageData {
    fileName: string;
    title?: string;
    year?: number; // Added year
    dimensions?: string; //Renamed size to dimensions
    medium?: string; //Added medium
    description?: string;
    etsyLink?: string; // Added etsyLink
  }