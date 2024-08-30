import baseApi from "./baseApi";
import { Car, TQueryParam, TResponseRedux } from "./../types/apiTypes";

const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCars: builder.query<TResponseRedux, TQueryParam>({
      query: (args) => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/cars`,
          params: args,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getCarById: builder.query<Car, string>({
      query: (carId) => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/cars/${carId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    addCar: builder.mutation<Car, Partial<Car>>({
      query: (newCar) => {
        const token = localStorage.getItem("authToken");
        return {
          url: "/cars",
          method: "POST",
          body: newCar,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    updateCar: builder.mutation<Car, Partial<Car> & { id: number }>({
      query: ({ id, ...rest }) => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/cars/${id}`,
          method: "PUT",
          body: rest,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    deleteCar: builder.mutation<{ success: boolean; id: number }, number>({
      query: (carId) => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/cars/${carId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
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
