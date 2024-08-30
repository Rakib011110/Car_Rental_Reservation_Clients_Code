import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  useAddCarMutation,
  useDeleteCarMutation,
  useGetAllCarsQuery,
  useUpdateCarMutation,
} from "../../../redux/api/carApi";

const ManageCars: React.FC = () => {
  const { data: carsData, refetch } = useGetAllCarsQuery({});
  const [addCar] = useAddCarMutation();
  const [updateCar] = useUpdateCarMutation();
  const [deleteCar] = useDeleteCarMutation();
  const [newCar, setNewCar] = useState({
    name: "",
    description: "",
    model: "",
    year: "",
    color: "",
    isElectric: false,
    status: "available" as "available" | "unavailable",
    features: "",
    pricePerHour: "",
    photoUrl: "",
  });

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setNewCar((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddCar = async () => {
    // console.log("Adding Car:", newCar);
    try {
      await addCar(newCar).unwrap();
      toast.success("Car added successfully!");
      console.log(newCar);
      refetch();
    } catch (error) {
      toast.error("Failed to add car. Please try again.");
      console.log("error", error);
    }
  };

  const handleUpdateCar = async () => {
    if (selectedCar) {
      try {
        await updateCar({ id: selectedCar._id, ...newCar }).unwrap();
        toast.success("Car updated successfully!");
        refetch();
        setShowUpdateModal(false);
      } catch (error) {
        toast.error("Failed to update car. Please try again.");
        console.log(error);
      }
    }
  };

  const handleDeleteCar = async (carId: number) => {
    console.log("Deleting Car with ID:", carId); // Add this line
    try {
      const result = await deleteCar(carId).unwrap();
      console.log("Car Deleted Successfully:", result);
      toast.success("Car deleted successfully!");
      refetch();
    } catch (error) {
      console.error("Failed to Delete Car:", error);
      toast.error("Failed to delete car. Please try again.");
    }
  };
  const openUpdateModal = (car: any) => {
    setSelectedCar(car);
    setNewCar(car);
    setShowUpdateModal(true);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-[#060d3b] to-[#2c3a94] rounded shadow text-white">
      <h2 className="text-2xl font-semibold mb-4">Manage Cars</h2>

      {/* Flex Container for Add Car Form and Car List */}
      <div className="flex flex-col">
        {/* Form for Adding Car */}
        <div className="flex flex-wrap bg-white  rounded shadow p-4 mb-4">
          <h3 className="w-full text-xl font-semibold mb-4 text-green-600">
            Add Car
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Car Name"
            value={newCar.name}
            onChange={handleInputChange}
            className="flex-1 min-w-[200px] mb-2 mr-2 p-2  rounded border border-blue-950 text-black"
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={newCar.model}
            onChange={handleInputChange}
            className="flex-1 min-w-[200px] mb-2 mr-2 p-2 border rounded border-blue-950 text-black"
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={newCar.year}
            onChange={handleInputChange}
            className="flex-1 min-w-[200px] mb-2 mr-2 p-2 border rounded border-blue-950 text-black"
          />
          <input
            type="text"
            name="color"
            placeholder="Color"
            value={newCar.color}
            onChange={handleInputChange}
            className="flex-1 min-w-[200px] mb-2 p-2 border rounded border-blue-950 text-black"
          />
          <input
            type="number"
            name="pricePerHour"
            placeholder="Price per Hour"
            value={newCar.pricePerHour}
            onChange={handleInputChange}
            className="flex-1 min-w-[200px] mb-2 p-2 border rounded border-blue-950 text-black"
          />
          <input
            type="text"
            name="photoUrl"
            placeholder="Photo URL"
            value={newCar.photoUrl}
            onChange={handleInputChange}
            className="flex-1 min-w-[200px] mb-2 p-2 border rounded border-blue-950 text-black"
          />
          <label className="flex items-center mb-2 mr-2 border-blue-950 text-black">
            <input
              type="checkbox"
              name="isElectric"
              checked={newCar.isElectric}
              onChange={handleInputChange}
              className="mr-2"
            />
            Electric
          </label>
          <select
            name="status"
            value={newCar.status}
            onChange={handleInputChange}
            className="flex-1 min-w-[200px] mb-2 p-2 border rounded border-blue-950 text-black">
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>
          <textarea
            name="features"
            placeholder="Features"
            value={newCar.features}
            onChange={handleInputChange}
            className="w-full min-h-[80px] mb-2 p-2 border rounded border-blue-950 text-black"></textarea>
          <textarea
            name="description"
            placeholder="Description"
            value={newCar.description}
            onChange={handleInputChange}
            className="w-full min-h-[80px] mb-2 p-2 border rounded border-blue-950 text-black"></textarea>
          <button
            onClick={handleAddCar}
            className="bg-green-600 text-white py-2 px-4 rounded mt-2">
            Add Car
          </button>
        </div>

        {/* Table for Car List */}
        <div className="bg-blue-500 mx-auto rounded shadow p-4 ">
          <h3 className="text-xl font-semibold mb-4 text-white">Car List</h3>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-2 px-4">Image</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-blue-950">
              {carsData?.map((car) => (
                <tr key={car._id} className="border-b">
                  <td className="py-2 px-4">
                    {car.photoUrl && (
                      <img
                        src={car.photoUrl}
                        alt={`${car.name} photo`}
                        className="w-28 h-16 object-cover"
                      />
                    )}
                  </td>
                  <td className="py-2 px-4">{car.name}</td>
                  <td className="py-2 px-4">${car.pricePerHour}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => openUpdateModal(car)}
                      className="bg-blue-500 text-white py-1 px-4 rounded mr-2">
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteCar(car._id)}
                      className="bg-red-500 text-white py-1 px-4 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <ToastContainer />
          </table>
        </div>
      </div>

      {/* Modal for Updating Car */}
      {showUpdateModal && selectedCar && (
        <div className="fixed inset-0 bg-black  bg-opacity-50 flex items-center justify-center">
          <div className=" text-black bg-blue-900 border p-6 rounded shadow-lg w-1/2">
            <h3 className="text-xl font-semibold mb-4">Update Car</h3>
            <input
              type="text"
              name="name"
              placeholder="Car Name"
              value={newCar.name}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newCar.description}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"></textarea>
            <input
              type="text"
              name="model"
              placeholder="Model"
              value={newCar.model}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={newCar.year}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={newCar.color}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="number"
              name="pricePerHour"
              placeholder="Price per Hour"
              value={newCar.pricePerHour}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              value={newCar.photoUrl}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"
            />
            <label className="flex items-center mb-2 text-white">
              <input
                type="checkbox"
                name="isElectric"
                checked={newCar.isElectric}
                onChange={handleInputChange}
                className="mr-2  "
              />
              Electric
            </label>
            <select
              name="status"
              value={newCar.status}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded">
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <textarea
              name="features"
              placeholder="Features"
              value={newCar.features}
              onChange={handleInputChange}
              className="block w-full mb-2 p-2 border rounded"></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleUpdateCar}
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
                Update Car
              </button>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCars;
