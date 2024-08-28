import { Booking, TQueryParam, TResponseRedux } from "../types/apiTypes";
import baseApi from "./baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all bookings
    getAllBookings: builder.query<TResponseRedux, TQueryParam>({
      query: (args) => ({
        url: `/bookings`,
        params: args,
      }),
    }),

    // Get booking details by ID
    getBookingById: builder.query<Booking, number>({
      query: (bookingId) => `/bookings/${bookingId}`,
    }),
    // Add a new booking
    addBooking: builder.mutation<Booking, Partial<Booking>>({
      query: (newBooking) => ({
        url: "/bookings",
        method: "POST",
        body: newBooking,
      }),
    }),
    // Update booking details
    updateBooking: builder.mutation<Booking, Partial<Booking> & { id: number }>(
      {
        query: ({ id, ...rest }) => ({
          url: `/bookings/${id}`,
          method: "PUT",
          body: rest,
        }),
      }
    ),
    // Delete a booking
    deleteBooking: builder.mutation<{ success: boolean; id: number }, number>({
      query: (bookingId) => ({
        url: `/bookings/${bookingId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetBookingByIdQuery,
  useAddBookingMutation,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} = bookingApi;

export default bookingApi;
