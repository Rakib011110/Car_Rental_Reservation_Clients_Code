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

export type Car = {
  _id: string;
  name: string;
  description: string;
  color: string;
  isElectric: boolean;
  status: string;
  features: string[];
  photoUrl: string;
  pricePerHour: number;
  isDeleted: boolean;
};

export type User = {
  id: number;
  name: string;
  email: string;
};

export type Booking = {
  id: number;
  carId: number;
  userId: number;
  startDate: string;
  endDate: string;
};
