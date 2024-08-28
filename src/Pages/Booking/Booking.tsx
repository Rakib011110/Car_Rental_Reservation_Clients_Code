// src/Pages/Booking/BookingPage.tsx
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAddBookingMutation } from "../../redux/api/bookingApi"; // Assume we have this mutation defined

const BookingPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [addBooking] = useAddBookingMutation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nid: "",
    drivingLicense: "",
    pickUpDate: "",
    dropOffDate: "",
    ...state?.additionalFeatures,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addBooking({ carId: id, ...formData }).unwrap();
      navigate("/confirmation", { state: { formData } });
    } catch (error) {
      console.error("Failed to book the car:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Booking Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">NID/Passport</label>
          <input
            type="text"
            name="nid"
            value={formData.nid}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Driving License</label>
          <input
            type="text"
            name="drivingLicense"
            value={formData.drivingLicense}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Pick-Up Date</label>
          <input
            type="date"
            name="pickUpDate"
            value={formData.pickUpDate}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Drop-Off Date</label>
          <input
            type="date"
            name="dropOffDate"
            value={formData.dropOffDate}
            onChange={handleInputChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Additional Features</h3>
          <label className="block">
            <input
              type="checkbox"
              name="insurance"
              checked={formData.insurance}
              onChange={handleInputChange}
            />
            Insurance
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="gps"
              checked={formData.gps}
              onChange={handleInputChange}
            />
            GPS
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="childSeat"
              checked={formData.childSeat}
              onChange={handleInputChange}
            />
            Child Seat
          </label>
        </div>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
