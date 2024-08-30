// src/types/apiTypes.ts

export type TQueryParam = {
  [key: string]: any;
};

export type TResponseRedux = {
  data: any;
  status: string;
  error?: string;
  map?: any;
};

export interface Car {
  _id: string;
  name: string;
  description: string;
  model: string;
  year: string;
  color: string;
  isElectric: boolean;
  status: "available" | "unavailable";
  features: string;
  pricePerHour: string;
  photoUrl: string;
}
export interface User {
  _id: string;
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  password?: string;
  phone: string;
  address: string;
}

export type Booking = {
  id: number;
  carId: number;
  userId: number;
  startDate: string;
  endDate: string;
};
