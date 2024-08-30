// src/components/BookingManagement.tsx

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetAllBookingsQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} from "../../../../redux/api/bookingApi";
import { RootState } from "../../../../redux/store/store";
import ModifyBookingModal from "./ModifyBookingModal";
import Button from "../../../../Utils/Button";

const BookingManagement: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const [selectedBooking, setSelectedBooking] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch all bookings made by the user
  const {
    data: bookingData,
    refetch: refetchBookings,
    isFetching,
    error,
  } = useGetAllBookingsQuery({});

  const [updateBooking] = useUpdateBookingMutation();
  const [deleteBooking] = useDeleteBookingMutation();

  const handleModifyBooking = (bookingId: number) => {
    setSelectedBooking(bookingId);
    setIsModalOpen(true); // Open the modal for modifying the booking
  };

  const handleCancelBooking = async (bookingId: number) => {
    try {
      await deleteBooking(bookingId).unwrap();
      toast.success("Booking cancelled successfully!");
      refetchBookings();
    } catch (error) {
      console.error("Failed to cancel booking", error);
      toast.error("Failed to cancel booking. Please try again.");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBooking(null);
  };

  if (isFetching) return <p className="text-center text-xl">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-xl text-red-500">
        Error fetching bookings data: {error.message}
      </p>
    );

  return (
    <div className="max-w-screen-lg mx-auto p-3 bg-gradient-to-r from-[#060d3b] to-[#2c3a94] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">Booking History</h2>
      <div>
        {bookingData?.data.length ? (
          <ul className="space-y-4">
            {bookingData.data.map((booking) => (
              <li
                key={booking._id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md">
                <img
                  src={booking.car.photoUrl} // Assuming each booking has a car image
                  alt={booking.car.name}
                  className="w-72 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <p className="text-xl font-semibold">{booking.car.name}</p>
                  <p className="text-lg">Status: {booking.status}</p>
                  <p className="text-lg">Pick-Up Date: {booking.pickUpDate}</p>
                  <p className="text-lg">Total Cost: ${booking.totalCost}</p>
                </div>
                <div className="ml-4 space-x-2">
                  <button
                    onClick={() => handleModifyBooking(booking._id)}
                    className=" text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50"
                    disabled={booking.status !== "approved"}>
                    <Button children1={"Modify"} children2={"click"} />
                  </button>
                  <button
                    onClick={() => handleCancelBooking(booking._id)}
                    className=" text-white py-2 px-4 rounded-lg hover:bg-red-600 disabled:opacity-50"
                    disabled={booking.status !== "approved"}>
                    <Button children1={"Cancel"} children2={"click"} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-xl text-white">No bookings found.</p>
        )}
      </div>

      {selectedBooking && (
        <ModifyBookingModal
          bookingId={selectedBooking}
          isOpen={isModalOpen}
          onClose={handleModalClose}
          refetchBookings={refetchBookings}
        />
      )}
    </div>
  );
};

export default BookingManagement;
