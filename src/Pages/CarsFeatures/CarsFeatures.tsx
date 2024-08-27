import React from "react";
import { useGetAllCarsQuery } from "../../redux/api/carApi";
import { Link } from "react-router-dom";

const CarsFeatures = () => {
  const { data: cars, isLoading } = useGetAllCarsQuery({});

  if (isLoading) {
    return <div> LOADING..............</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Car Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cars?.map((car) => (
            <div key={car.id} className="car-card p-4 border rounded">
              <img
                src={car.photoUrl}
                alt={car.name}
                className="w-full h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p>{car.description}</p>
              <p className="font-bold">Price Per Hour $ {car.pricePerHour}</p>
              <Link to={`/car/${car.id}`} className="text-blue-500">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarsFeatures;
