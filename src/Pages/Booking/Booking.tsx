// src/Pages/Booking/BookingPage.tsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetAllCarsQuery, useGetCarByIdQuery } from "../../redux/api/carApi";
import { useAddBookingMutation } from "../../redux/api/bookingApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data: car } = useGetCarByIdQuery(id || "");
  useGetAllCarsQuery({});
  const [addBooking] = useAddBookingMutation();

  const [bookingDetails, setBookingDetails] = useState({
    date: new Date().toISOString().split("T")[0], // Current date as default
    startTime: "",
    endTime: "",
    totalCost: 0,
    fullName: "",
    nidOrPassport: "",
    drivingLicense: "",
    pickUpDate: "",
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setBookingDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        throw new Error("User is not authenticated");
      }

      const bookingData = {
        ...bookingDetails,
        carId: id, // Attach carId from the URL params
      };

      await addBooking(bookingData).unwrap();
      toast.success("Booking successful!");
      console.log(bookingData);
      navigate("/dashboard/persional-info");
    } catch (error) {
      if (error.status === 401) {
        toast.error("User is not authorized. Please log in again.");
        console.error("User is not authorized. Please log in again.");
      } else {
        toast.error("Failed to book the car.");
        console.error("Failed to book the car:", error);
      }
    }
  };

  return (
    <div className="max-w-screen-sm mx-auto p-8 bg-white rounded-lg shadow-md mb-64 mt-20 border border-gray-200">
      {car ? (
        <>
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Booking for {car.name}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={bookingDetails.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Start Time
              </label>
              <input
                type="time"
                name="startTime"
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={bookingDetails.startTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                End Time
              </label>
              <input
                type="time"
                name="endTime"
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={bookingDetails.endTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={bookingDetails.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                NID/Passport
              </label>
              <input
                type="text"
                name="nidOrPassport"
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={bookingDetails.nidOrPassport}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Driving License
              </label>
              <input
                type="text"
                name="drivingLicense"
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={bookingDetails.drivingLicense}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Pick-up Date
              </label>
              <input
                type="date"
                name="pickUpDate"
                className="border border-gray-300 p-3 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                value={bookingDetails.pickUpDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-6 flex items-center">
              <label className="text-lg font-medium text-gray-700 mr-4">
                <input
                  type="checkbox"
                  name="insurance"
                  className="mr-2 leading-tight"
                  checked={bookingDetails.insurance}
                  onChange={handleInputChange}
                />
                Insurance
              </label>
              <label className="text-lg font-medium text-gray-700 mr-4">
                <input
                  type="checkbox"
                  name="gps"
                  className="mr-2 leading-tight"
                  checked={bookingDetails.gps}
                  onChange={handleInputChange}
                />
                GPS
              </label>
              <label className="text-lg font-medium text-gray-700">
                <input
                  type="checkbox"
                  name="childSeat"
                  className="mr-2 leading-tight"
                  checked={bookingDetails.childSeat}
                  onChange={handleInputChange}
                />
                Child Seat
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#050d31] to-[#091583] text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:from-blue-500 hover:to-blue-700 transition duration-200 transform hover:scale-105">
              Confirm Booking
            </button>
            <ToastContainer />
          </form>
        </>
      ) : (
        <p className="text-center text-gray-700">Car not found for booking.</p>
      )}
    </div>
  );
};

export default BookingPage;
