import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../components/Home/Home";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import CarListings from "../Pages/CarListings/CarListings";
import CarDetailsPage from "../Pages/CarDetails/CarDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/carlisting",
        element: <CarListings />,
      },
      {
        path: "/cars/:id",
        element: <CarDetailsPage />,
      },
    ],
  },
]);

export default router;
