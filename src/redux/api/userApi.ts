// src/redux/api/userApi.ts

import { User, TQueryParam, TResponseRedux } from "../types/apiTypes";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<TResponseRedux, TQueryParam>({
      query: (params) => ({
        url: `/auth`,
        params,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: "User", id } as const)),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }],
    }),

    addUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: "/auth",
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),

    updateUser: builder.mutation<User, Partial<User> & { id: string }>({
      query: ({ id, ...rest }) => ({
        url: `/auth/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "User", id }],
    }),

    deleteUser: builder.mutation<{ success: boolean; id: string }, string>({
      query: (userId) => ({
        url: `/auth/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "User", id }],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;

export default userApi;
