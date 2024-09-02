import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import baseApi from "./baseApi";

type PaymentResponse = {
  id: string;
  paymentUrl: string;
  message?: string;
};

type PaymentDetails = {
  amount: number;
  currency: string;
};

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    initiatePayment: builder.mutation<PaymentResponse, PaymentDetails>({
      query: (paymentData) => ({
        url: "/payment/initiate",
        method: "POST",
        body: paymentData,
      }),
    }),
    confirmPayment: builder.mutation<PaymentResponse, string>({
      query: (paymentId) => ({
        url: `/payment/confirm/${paymentId}`,
        method: "POST", // Assuming confirmation is a POST request.
      }),
    }),
  }),
});

export const { useInitiatePaymentMutation, useConfirmPaymentMutation } =
  paymentApi;
