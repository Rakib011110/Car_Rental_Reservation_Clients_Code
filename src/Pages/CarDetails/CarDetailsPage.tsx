// src/Pages/CarDetails/CarDetailsPage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/api/carApi";

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: car, error, isLoading } = useGetCarByIdQuery(id || "");
  const [additionalFeatures, setAdditionalFeatures] = useState({
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAdditionalFeatures((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleBookNow = () => {
    // Redirect to the booking page with car ID and selected features
    navigate(`/booking/${id}`, { state: { additionalFeatures } });
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading car details.</p>;

  return (
    <div className="container mx-auto p-4 ">
      {car ? (
        <>
          <h1 className="text-3xl  font-bold mb-4">{car.name}</h1>
          <img
            src={car.photoUrl}
            alt={car.name}
            className="w-full h-60 object-cover mb-4"
          />
          <p className="mb-4">{car.description}</p>
          <p className="font-bold mb-4">${car.pricePerHour}</p>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Additional Features</h3>
            <label className="block">
              <input
                type="checkbox"
                name="insurance"
                checked={additionalFeatures.insurance}
                onChange={handleFeatureChange}
              />
              Insurance
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="gps"
                checked={additionalFeatures.gps}
                onChange={handleFeatureChange}
              />
              GPS
            </label>
            <label className="block">
              <input
                type="checkbox"
                name="childSeat"
                checked={additionalFeatures.childSeat}
                onChange={handleFeatureChange}
              />
              Child Seat
            </label>
          </div>
          <button
            onClick={handleBookNow}
            className="p-2 bg-blue-500 text-white rounded">
            Book Now
          </button>
        </>
      ) : (
        <p>No car details available.</p>
      )}
    </div>
  );
};

export default CarDetailsPage;
