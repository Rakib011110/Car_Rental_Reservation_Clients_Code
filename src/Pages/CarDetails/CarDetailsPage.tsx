// src/Pages/CarDetails/CarDetailsPage.tsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/api/carApi";
import { FaStar } from "react-icons/fa";

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: car, isLoading, error } = useGetCarByIdQuery(id || "");
  const [zoom, setZoom] = useState(false);

  const handleBookNow = () => {
    navigate(`/booking/${id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading car details.</p>;

  return (
    <div className="container mx-auto p-4">
      {car ? (
        <>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Car Image with Zoom */}
            <div className="relative w-full md:w-1/2">
              <img
                src={car.photoUrl}
                alt={car.name}
                className={`w-full h-60 object-cover mb-4 ${
                  zoom ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setZoom(!zoom)}
              />
              {zoom && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                  <img
                    src={car.photoUrl}
                    alt={car.name}
                    className="w-full h-full object-contain"
                    onClick={() => setZoom(false)}
                  />
                </div>
              )}
            </div>

            {/* Car Details */}
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold mb-2">{car.name}</h1>
              <p className="text-gray-700 mb-4">{car.description}</p>
              <p className="font-bold text-xl mb-4">${car.pricePerHour}/hour</p>

              {/* Additional Options */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">
                  Additional Options
                </h2>
                <div className="flex flex-col gap-2">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Insurance
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    GPS
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Child Seat
                  </label>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
                {/* Sample Review */}
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400" />
                  <p className="ml-2">"Great car, very comfortable!"</p>
                </div>
                {/* Add more reviews here */}
              </div>

              {/* Book Now Button */}
              <button
                className="p-2 bg-blue-500 text-white rounded"
                onClick={handleBookNow}>
                Book Now
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>No car found with the given ID.</p>
      )}
    </div>
  );
};

export default CarDetailsPage;
