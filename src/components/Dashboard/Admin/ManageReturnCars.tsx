import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importing the toastify styles
import {
  useGetAllUsersBookingsQuery,
  useReturnCarMutation,
} from "../../../redux/api/bookingApi";

const ManageReturnCars: React.FC = () => {
  const {
    data: bookingData,
    refetch,
    isLoading,
    isError,
  } = useGetAllUsersBookingsQuery({});

  const [returnCar] = useReturnCarMutation();
  const [returnBookingId, setReturnBookingId] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Debugging: Console log to check API data fetching status
  console.log("Bookings Data:", bookingData);

  const handleReturnCar = async (bookingId: string) => {
    if (!endTime) {
      toast.error("Please select a valid return time.");
      return;
    }

    // Ensure the bookingId is a valid ObjectId
    if (!bookingId || bookingId === "return") {
      toast.error("Invalid booking ID. Please try again.");
      return;
    }

    try {
      setLoading(true);
      console.log("Returning car with ID:", bookingId);

      const response = await returnCar({ id: bookingId, endTime }).unwrap();

      if (response?.message === "Car already returned") {
        toast.info("This car has already been returned.");
      } else {
        toast.success("Car returned successfully!");
      }

      refetch();
      setReturnBookingId(null); // Reset return modal state
      setEndTime(""); // Reset endTime input
    } catch (err: any) {
      console.error("Error returning car:", err); // Debugging: Log error details
      const errorMessage =
        err?.data?.message || "Failed to return car. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !bookingData?.data) {
    console.error("Error loading bookings data:", isError);
    return <p>Error loading bookings data. Please try again later.</p>;
  }

  return (
    <div className="p-8 bg-gradient-to-r from-[#060d3b] to-[#2c3a94] text-white rounded shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Manage Return Cars</h2>

      {/* Display list of booked cars */}
      <table className="w-full table-auto bg-transparent rounded border border-green-600">
        <thead>
          <tr className="border-b border-green-600">
            <th className="px-6 py-4 text-lg font-semibold text-left">Car</th>
            <th className="px-6 py-4 text-lg font-semibold text-left">
              Car Name
            </th>
            <th className="px-6 py-4 text-lg font-semibold text-left">
              Booking Start Time
            </th>
            <th className="px-6 py-4 text-lg font-semibold text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookingData?.data?.map((booking) => (
            <tr key={booking._id} className="border-b border-green-600">
              <td className="px-6 py-4">
                <img
                  src={booking?.car?.photoUrl || ""}
                  alt={
                    booking.car?.name
                      ? `${booking.car.name} photo`
                      : "Car photo"
                  }
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </td>
              <td className="px-6 py-4 text-lg">
                {booking.car?.name || "Unknown"}
              </td>
              <td className="px-6 py-4 text-lg">
                {booking.startTime || "N/A"}
              </td>
              <td className="px-6 py-4">
                <button
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700"
                  onClick={() => setReturnBookingId(booking._id)}>
                  Return
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for returning a car */}
      {returnBookingId && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-black max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-6">Return Car</h3>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
            />
            <div className="flex justify-between">
              <button
                onClick={() => handleReturnCar(returnBookingId)}
                className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700"
                disabled={loading}>
                {loading ? "Processing..." : "Confirm Return"}
              </button>
              <button
                onClick={() => setReturnBookingId(null)}
                className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Container to display toast messages */}
      <ToastContainer />
    </div>
  );
};

export default ManageReturnCars;
