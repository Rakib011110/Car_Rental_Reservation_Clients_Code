// src/components/ModifyBookingModal.tsx

import React, { useState } from "react";
import { useUpdateBookingMutation } from "../../../../redux/api/bookingApi";
import { toast } from "react-toastify";

interface ModifyBookingModalProps {
  bookingId: number;
  isOpen: boolean;
  onClose: () => void;
  refetchBookings: () => void;
}

const ModifyBookingModal: React.FC<ModifyBookingModalProps> = ({
  bookingId,
  isOpen,
  onClose,
  refetchBookings,
}) => {
  const [updateBooking] = useUpdateBookingMutation();
  const [formData, setFormData] = useState({
    startTime: "",
    endTime: "",
    totalCost: 0,
    insurance: false,
    gps: false,
    childSeat: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateBooking({ id: bookingId, ...formData }).unwrap();
      toast.success("Booking modified successfully!");
      refetchBookings();
      onClose();
    } catch (error) {
      console.error("Failed to modify booking", error);
      toast.error("Failed to modify booking. Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Modify Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Start Time
            </label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              End Time
            </label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Total Cost
            </label>
            <input
              type="number"
              name="totalCost"
              value={formData.totalCost}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Insurance
            </label>
            <input
              type="checkbox"
              name="insurance"
              checked={formData.insurance}
              onChange={handleChange}
              className="w-4 h-4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              GPS
            </label>
            <input
              type="checkbox"
              name="gps"
              checked={formData.gps}
              onChange={handleChange}
              className="w-4 h-4"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Child Seat
            </label>
            <input
              type="checkbox"
              name="childSeat"
              checked={formData.childSeat}
              onChange={handleChange}
              className="w-4 h-4"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModifyBookingModal;
