import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-rental-reservation-server-code.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
});

export default baseApi;
