import React, { useState } from "react";
import { User } from "../../../../redux/types/apiTypes";
import { toast } from "react-toastify";

interface UserUpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  updateUser: (args: Partial<User> & { id: string }) => void;
}

const UserUpdateModal: React.FC<UserUpdateModalProps> = ({
  isOpen,
  onClose,
  user,
  updateUser,
}) => {
  const [formData, setFormData] = useState<Partial<User>>({
    name: user.name,
    email: user.email,
    phone: user.phone,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await updateUser({ id: user._id, ...formData });
      toast.success("Information updated successfully!");
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update information. Please try again.");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Update Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-lg">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-lg">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block text-lg">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default UserUpdateModal;
