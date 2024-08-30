import { User, TQueryParam, TResponseRedux } from "../types/apiTypes";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get all users
    getAllUsers: builder.query<TResponseRedux, TQueryParam>({
      query: (params) => ({
        url: `/auth`,
        params,
      }),
    }),

    // Get user details by ID
    getUserById: builder.query<User, string>({
      // Changed to string if IDs are strings
      query: (userId) => `/auth/${userId}`,
    }),

    // Add a new user
    addUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "/auth",
        method: "POST",
        body: newUser,
      }),
    }),

    // Update user details
    updateUser: builder.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...rest }) => {
        const token = localStorage.getItem("authToken");
        return {
          url: `/auth/${id}`,
          method: "PUT",
          body: rest,
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        };
      },
    }),
    // Delete a user
    deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
      // Changed to string if IDs are strings
      query: (userId) => ({
        url: `/auth/${userId}`,
        method: "DELETE",
      }),
    }),

    // Get user ID by email
    getUserIdByEmail: builder.query<{ id: string }, string>({
      query: (email) => `/auth/find/${email}`,
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserIdByEmailQuery, // Add this line
} = userApi;

export default userApi;
