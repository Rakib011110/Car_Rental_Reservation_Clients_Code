import { Booking, TQueryParam, TResponseRedux } from "../types/apiTypes";
import baseApi from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all bookings
    getAllBookings: builder.query<TResponseRedux, TQueryParam>({
      query: (args) => {
        const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage
        return {
          url: `/bookings/my-bookings`,
          params: args,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getAllUsersBookings: builder.query<TResponseRedux, TQueryParam>({
      query: (args) => {
        const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage
        return {
          url: `/bookings`,
          params: args,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    // Get booking details by ID
    getBookingById: builder.query<Booking, number>({
      query: (bookingId) => {
        const token = localStorage.getItem("authToken");
        localStorage;
        return {
          url: `/bookings/${bookingId}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    returnCar: builder.mutation<Booking, { id: string; endTime: string }>({
      query: ({ id, endTime }) => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/cars/return`,
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: { bookingId: id, endTime },
        };
      },
    }),
    // Add a new booking
    addBooking: builder.mutation<Booking, Partial<Booking>>({
      query: (newBooking) => {
        const token = localStorage.getItem("authToken");
        return {
          url: "/bookings",
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: newBooking,
        };
      },
    }),

    // Update booking details
    updateBooking: builder.mutation<Booking, Partial<Booking> & { id: number }>(
      {
        query: ({ id, ...rest }) => {
          const token = localStorage.getItem("authToken");
          return {
            url: `/bookings/${id}`,
            method: "PUT",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: rest,
          };
        },
      }
    ),

    // Delete a booking
    deleteBooking: builder.mutation<{ success: boolean; id: number }, number>({
      query: (bookingId) => {
        const token = localStorage.getItem("authToken"); // Retrieve the token from localStorage
        return {
          url: `/bookings/${bookingId}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetAllUsersBookingsQuery,
  useGetBookingByIdQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
  useReturnCarMutation,
} = bookingApi;

export default bookingApi;
