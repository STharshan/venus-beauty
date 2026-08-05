export interface Treatment {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  price: string;
  duration: string;
  downtime: string;
  resultsLast: string;
  category: 'injectables' | 'rejuvenation' | 'body' | 'skincare';
  image: string;
  benefits: string[];
  idealFor: string[];
}

export interface SkinConcern {
  id: string;
  title: string;
  iconName: string;
  description: string;
  recommendedTreatmentIds: string[];
}

export interface BeforeAfterResult {
  id: string;
  treatmentName: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  details: string;
  sessionCount: string;
  timeframe: string;
}

export interface StepProcess {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ClinicFeature {
  title: string;
  description: string;
  iconName: string;
}

export interface BookingFormData {
  treatmentId: string;
  date: string;
  time: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
  isFirstVisit: boolean;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
}
