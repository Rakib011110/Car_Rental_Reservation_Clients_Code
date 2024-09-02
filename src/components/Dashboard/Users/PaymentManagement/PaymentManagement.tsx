import React, { useState } from "react";
import { useGetAllBookingsQuery } from "../../../../redux/api/bookingApi";
import {
  useInitiatePaymentMutation,
  useConfirmPaymentMutation,
} from "../../../../redux/api/paymentApi";

const PaymentManagement = () => {
  const { data: bookingData, isFetching, error } = useGetAllBookingsQuery({});
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("SSLCommerz");

  const [initiatePayment] = useInitiatePaymentMutation();
  const [confirmPayment] = useConfirmPaymentMutation();

  const handleOpenPaymentModal = (booking) => {
    console.log("Booking selected:", booking);
    setSelectedBooking(booking);
    setIsPaymentModalOpen(true);
    console.log("Modal should now be open.");
  };

  const handleClosePaymentModal = () => {
    setIsPaymentModalOpen(false);
    setSelectedBooking(null);
    console.log("Modal closed.");
  };

  const handlePayment = async () => {
    if (!selectedBooking) {
      console.log("No booking selected for payment.");
      return;
    }

    try {
      console.log("Initiating payment for booking:", selectedBooking);
      const paymentData = await initiatePayment({
        bookingId: selectedBooking._id,
        amount: selectedBooking.totalPrice,
        currency: "BDT", // or the currency you need
        paymentMethod, // Use the selected payment method
      }).unwrap();

      console.log("Payment initiated, payment data:", paymentData);

      const confirmation = await confirmPayment(paymentData.id).unwrap();
      console.log("Payment confirmation received:", confirmation);

      if (confirmation.message === "Payment successful") {
        alert("Payment successful!");
        handleClosePaymentModal();
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    }
  };

  if (isFetching) return <p>Loading bookings...</p>;
  if (error) return <p>Error fetching bookings: {error.message}</p>;

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Car</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Updated At</th>
            <th className="py-2 px-4 border-b">Price per Hour</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.data.map((booking) => (
            <tr key={booking._id} className="border-b hover:bg-gray-100">
              <td className="py-3 px-4 flex items-center">
                <img
                  src={booking.car.photoUrl}
                  alt={booking.car.name}
                  className="w-44 h-16 object-cover rounded-md mr-4"
                />
                <span className="text-blue-900 font-semibold">
                  {booking.car.name}
                </span>
              </td>
              <td className="py-3 px-4">Time: {booking.startTime}</td>
              <td className="py-3 px-4">
                {new Date(booking.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="py-3 px-4">$ {booking.car.pricePerHour}</td>
              <td className="py-3 px-4">
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpenPaymentModal(booking)}>
                  Pay Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isPaymentModalOpen && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
            {selectedBooking && (
              <div>
                <p>Car: {selectedBooking.car.name}</p>
                <p>Total Price: {selectedBooking.pricePerHour}</p>
              </div>
            )}
            <div className="mt-4">
              <label
                htmlFor="paymentMethod"
                className="block text-sm font-medium text-gray-700">
                Select Payment Method
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="SSLCommerz">SSLCommerz</option>
                {/* Add more payment options if needed */}
              </select>
            </div>
            <div className="mt-6 flex justify-end">
              <button className="btn btn-success" onClick={handlePayment}>
                Confirm Payment
              </button>
              <button
                className="btn btn-secondary ml-4"
                onClick={handleClosePaymentModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentManagement;
