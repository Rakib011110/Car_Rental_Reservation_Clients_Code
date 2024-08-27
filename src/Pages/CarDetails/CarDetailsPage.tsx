// src/Pages/CarDetails/CarDetailsPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { useGetCarByIdQuery } from "../../redux/api/carApi";

const CarDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Car ID:", id); // Ensure this logs the correct ID

  const { data: car, error, isLoading } = useGetCarByIdQuery(id || ""); // Pass ID as string

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading car details.</p>;

  return (
    <div className="container mx-auto p-4">
      {car ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
          <img
            src={car.photoUrl}
            alt={car.name}
            className="w-full h-60 object-cover mb-4"
          />
          <p className="mb-4">{car.description}</p>
          <p className="font-bold mb-4">${car.pricePerHour}</p>
          <button className="p-2 bg-blue-500 text-white rounded">
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
