// src/api/userApi.ts

import { User } from "../types/apiTypes";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get user details by ID
    getUserById: builder.query<User, number>({
      query: (userId) => `/users/${userId}`,
    }),
    // Add a new user
    addUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "/users",
        method: "POST",
        body: newUser,
      }),
    }),
    // Update user details
    updateUser: builder.mutation<User, Partial<User> & { id: number }>({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    // Delete a user
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
