import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useGetAllBookingsQuery } from "../../../../redux/api/bookingApi";
import { RootState } from "../../../../redux/store/store";
import { useUpdateUserMutation } from "../../../../redux/api/userApi";
import UserUpdateModal from "./UserUpdateModal";
import Button from "../../../../Utils/Button";

const PersonalInformation: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetch all bookings made by the user
  const { data: bookingData, isFetching, error } = useGetAllBookingsQuery({});
  const [updateUser] = useUpdateUserMutation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  if (isFetching) return <p className="text-center text-xl">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-xl text-red-500">
        Error fetching bookings data: {error.message}
      </p>
    );

  return (
    <div className="max-w-screen-lg mx-auto p-4 bg-gradient-to-r from-[#060d3b] to-[#2c3a94] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6">
        Personal Information
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between border-4 border-blue-600 mb-8">
        <div className="flex-1 mr-4 flex justify-between">
          <p className="text-2xl font-bold text-blue-900 mb-2">
            Name: {user.name}
          </p>
          <p className="text-xl text-gray-700 mb-2">Email: {user.email}</p>
          <p className="text-xl text-gray-700">Phone: {user.phone}</p>
        </div>
        <button
          onClick={handleOpenModal}
          className=" text-white  rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
          <Button children1={"Update"} children2={" Update Info"} />
        </button>
      </div>

      <h2 className="text-3xl font-bold text-white mb-6">Booking History</h2>
      {bookingData?.data.length ? (
        <div className="overflow-x-auto max-w-screen-2xl">
          <table className=" bg-white rounded-lg shadow-xl">
            <thead>
              <tr className="bg-blue-600 text-white text-left">
                <th className="py-3 px-4">Car</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Pick-Up Date</th>
                <th className="py-3 px-4">Start Time</th>
                <th className="py-3 px-4">Booking Time</th>
                <th className="py-3 px-4">Total Cost</th>
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
                  <td className="py-3 px-4">{booking.status}</td>
                  <td className="py-3 px-4">{booking.pickUpDate}</td>
                  <td className="py-3 px-4">{booking.startTime}</td>
                  <td className="py-3 px-4">{booking.bookingTime}</td>
                  <td className="py-3 px-4">${booking.totalCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-xl text-white">No bookings found.</p>
      )}

      {isModalOpen && (
        <UserUpdateModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          user={user}
          updateUser={updateUser}
        />
      )}
    </div>
  );
};

export default PersonalInformation;
