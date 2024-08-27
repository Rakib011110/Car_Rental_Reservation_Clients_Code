// src/api/carApi.ts
import baseApi from "./baseApi";
import { Car, TQueryParam, TResponseRedux } from "./../types/apiTypes";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query<TResponseRedux, TQueryParam>({
      query: (args) => ({
        url: `/cars`,
        params: args,
      }),
    }),
    getCarById: builder.query<Car, string>({
      query: (carId) => `/cars/${carId}`,
    }),
    addCar: builder.mutation<Car, Partial<Car>>({
      query: (newCar) => ({
        url: "/cars",
        method: "POST",
        body: newCar,
      }),
    }),
    updateCar: builder.mutation<Car, Partial<Car> & { id: number }>({
      query: ({ id, ...rest }) => ({
        url: `/cars/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteCar: builder.mutation<{ success: boolean; id: number }, number>({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllCarsQuery,
  useGetCarByIdQuery,
  useAddCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;

export default carApi;
