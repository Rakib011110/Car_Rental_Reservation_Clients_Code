import React from "react";
import { toast } from "react-toastify";
import {
  useGetAllBookingsQuery,
  useGetAllUsersBookingsQuery,
  useUpdateBookingMutation,
} from "../../../redux/api/bookingApi";

const ManageBookings: React.FC = () => {
  const {
    data: bookingData,
    refetch,
    isLoading,
    isError,
  } = useGetAllUsersBookingsQuery({});
  const [updateBooking] = useUpdateBookingMutation();

  console.log("Booking Data:", bookingData?.data);

  const handleUpdateBookingStatus = async (id: number, status: string) => {
    try {
      await updateBooking({ id, status }).unwrap();
      toast.success(`Booking ${status} successfully!`);
      refetch();
    } catch (error) {
      toast.error(`Failed to ${status} booking. Please try again.`);
      console.log("Error updating booking:", error);
    }
  };

  if (isLoading) {
    return <div>Loading bookings...</div>;
  }

  if (isError) {
    return <div>Failed to load bookings. Please try again later.</div>;
  }
  return (
    <div className="p-6 bg-gradient-to-r from-[#060d3b] to-[#2c3a94] rounded shadow text-white">
      <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>

      <div className="bg-white p-4 rounded shadow">
        {bookingData?.data?.length ? (
          <table className="min-w-full bg-[#060d3b]">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-2 px-4">User Email</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Car</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingData?.data?.map((booking: any) => (
                <tr key={booking._id} className="border-b">
                  <td className="py-2 px-4">{booking.user.email}</td>
                  <td className="py-2 px-4">{booking.user.name}</td>
                  <td className="py-2 px-4">{booking?.car?.name}</td>
                  <td className="py-2 px-4">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4">{booking.status}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() =>
                        handleUpdateBookingStatus(booking._id, "approved")
                      }
                      className="bg-blue-500 text-white py-1 px-4 rounded mr-2"
                      disabled={booking.status === "approved"}>
                      Approve
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateBookingStatus(booking._id, "canceled")
                      }
                      className="bg-red-500 text-white py-1 px-4 rounded"
                      disabled={booking.status === "canceled"}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No bookings available.</p>
        )}
      </div>
    </div>
  );
};

export default ManageBookings;
