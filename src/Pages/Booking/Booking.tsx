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
    <div className="container mx-auto p-4">
      {car ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Booking for {car.name}</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                className="border border-gray-300 p-2 w-full"
                value={bookingDetails.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Start Time</label>
              <input
                type="time"
                name="startTime"
                className="border border-gray-300 p-2 w-full"
                value={bookingDetails.startTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">End Time</label>
              <input
                type="time"
                name="endTime"
                className="border border-gray-300 p-2 w-full"
                value={bookingDetails.endTime}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="border border-gray-300 p-2 w-full"
                value={bookingDetails.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">NID/Passport</label>
              <input
                type="text"
                name="nidOrPassport"
                className="border border-gray-300 p-2 w-full"
                value={bookingDetails.nidOrPassport}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Driving License</label>
              <input
                type="text"
                name="drivingLicense"
                className="border border-gray-300 p-2 w-full"
                value={bookingDetails.drivingLicense}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Pick-up Date</label>
              <input
                type="date"
                name="pickUpDate"
                className="border border-gray-300 p-2 w-full"
                value={bookingDetails.pickUpDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label>
                <input
                  type="checkbox"
                  name="insurance"
                  checked={bookingDetails.insurance}
                  onChange={handleInputChange}
                />
                Insurance
              </label>
            </div>
            <div className="mb-4">
              <label>
                <input
                  type="checkbox"
                  name="gps"
                  checked={bookingDetails.gps}
                  onChange={handleInputChange}
                />
                GPS
              </label>
            </div>
            <div className="mb-4">
              <label>
                <input
                  type="checkbox"
                  name="childSeat"
                  checked={bookingDetails.childSeat}
                  onChange={handleInputChange}
                />
                Child Seat
              </label>
            </div>
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded">
              Confirm Booking
            </button>
            <ToastContainer />
          </form>
        </>
      ) : (
        <p>Car not found for booking.</p>
      )}
    </div>
  );
};

export default BookingPage;
