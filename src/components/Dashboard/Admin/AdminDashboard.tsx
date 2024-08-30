// src/components/DashboardOverview.tsx

import React, { useEffect, useState } from "react";
import { useGetAllBookingsQuery } from "../../../redux/api/bookingApi";
import { useGetAllCarsQuery } from "../../../redux/api/carApi";

const DashboardOverview: React.FC = () => {
  const { data: bookingsData, isLoading: isBookingsLoading } =
    useGetAllBookingsQuery({});
  const { data: carsData, isLoading: isCarsLoading } = useGetAllCarsQuery({});
  console.log(carsData);
  const [totalRevenue, setTotalRevenue] = useState<number>(0);

  useEffect(() => {
    if (bookingsData && bookingsData.data) {
      const revenue = bookingsData.data.reduce(
        (sum, booking) => sum + (booking.totalCost || 0),
        0
      );
      setTotalRevenue(revenue);
    }
  }, [bookingsData]);

  const totalBookings = bookingsData?.data?.length || 0;
  const availableCars = carsData?.data
    ? carsData.data.filter((car) => car.isAvailable).length
    : 0;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-blue-100 rounded">
          <h3 className="text-lg font-semibold">Total Bookings</h3>
          <p className="text-3xl">
            {isBookingsLoading ? "Loading..." : totalBookings}
          </p>
        </div>
        <div className="p-4 bg-green-100 rounded">
          <h3 className="text-lg font-semibold">Available Cars</h3>
          <p className="text-3xl">{carsData?.length}</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-3xl">${totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      {/* Display the list of cars */}
      <h3 className="text-xl font-semibold mb-4">Car List</h3>
      {isCarsLoading ? (
        <p>Loading cars...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {carsData?.map((car) => (
            <div key={car.id} className="p-4 border rounded shadow">
              <h4 className="text-lg font-semibold">{car.name}</h4>
              <p>Price Per Hour: ${car.pricePerHour}</p>
              <p>Status: {car.isAvailable ? "Available" : " Available"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardOverview;
