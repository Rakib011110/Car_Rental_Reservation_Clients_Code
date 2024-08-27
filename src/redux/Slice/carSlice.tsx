// slices/carSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

interface CarState {
  cars: Car[];
}

const initialState: CarState = {
  cars: [],
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCars: (state, action: PayloadAction<Car[]>) => {
      state.cars = action.payload;
    },
    updateCarAvailability: (
      state,
      action: PayloadAction<{ id: number; available: boolean }>
    ) => {
      const carIndex = state.cars.findIndex(
        (car) => car.id === action.payload.id
      );
      if (carIndex !== -1) {
        state.cars[carIndex].available = action.payload.available;
      }
    },
  },
});

export const { setCars, updateCarAvailability } = carSlice.actions;
export default carSlice.reducer;
