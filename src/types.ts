export type ServiceCategory = 'all' | 'mens-haircuts' | 'beards-shaves' | 'kids-cuts' | 'vip-afterhours';

export interface BarberService {
  id: string;
  name: string;
  category: 'mens-haircuts' | 'beards-shaves' | 'kids-cuts' | 'vip-afterhours';
  price: number;
  duration: string;
  description: string;
  razorFinish: boolean;
  popular?: boolean;
  badge?: string;
}

export interface BarberStaff {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

export interface BookingFormState {
  serviceId: string;
  barberId: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  addRazorFinish: boolean;
}
