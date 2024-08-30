// src/components/Dashboard/Admin/UserManagement.tsx

import React from "react";

import {
  useGetAllUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} from "../../../redux/api/userApi";

const UserManagement: React.FC = () => {
  const { data: users, isLoading } = useGetAllUsersQuery({});
  console.log(users);
  const [addUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const handleAddUser = async () => {
    const newUser = { name: "New User", email: "newuser@example.com" }; // Sample data
    await addUser(newUser);
  };

  const handleUpdateUser = async (id: number) => {
    const updatedUser = { id, name: "Updated User" }; // Sample data
    await updateUser(updatedUser);
  };

  const handleDeleteUser = async (id: number) => {
    await deleteUser(id);
  };

  function handleEdit(id: any): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">User Management</h1>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">User Name</th>
                <th className="px-4 py-2 border-b">Email</th>
                <th className="px-4 py-2 border-b">Role</th>
                <th className="px-4 py-2 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.data.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b">{user.name}</td>
                  <td className="px-4 py-2 border-b">{user.email}</td>
                  <td className="px-4 py-2 border-b">{user.role}</td>
                  <td className="px-4 py-2 border-b">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
