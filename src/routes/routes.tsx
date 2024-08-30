import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Mainlayouts from "../layouts/Mainlayouts";
import Home from "../components/Home/Home";
import SignUp from "../components/Auth/SignUp";
import SignIn from "../components/Auth/SignIn";
import CarListings from "../Pages/CarListings/CarListings";
import CarDetailsPage from "../Pages/CarDetails/CarDetailsPage";
import ProtectedRoute from "../components/Auth/ProtectedRoute";
import BookingPage from "../Pages/Booking/Booking";
import Dashboard from "../layouts/Dashboard";
import BookingManagement from "../components/Dashboard/Users/Booking-management/BookingManagement";
import PaymentManagement from "../components/Dashboard/Users/PaymentManagement/PaymentManagement";
import AdminDashboard from "../components/Dashboard/Admin/AdminDashboard";
import ManageBookings from "../components/Dashboard/Admin/ManageBookings";
import ManageReturnCars from "../components/Dashboard/Admin/ManageReturnCars";
import UserManagement from "../components/Dashboard/Admin/UserManagement";
import ManageCars from "../components/Dashboard/Admin/ManageCars";
import BookingList from "../components/Dashboard/Users/Booking-management/BookingManagement";
import PersonalInformation from "../components/Dashboard/Users/PersionalInfo/PersonalInformation";
import DashboardOverview from "../components/Dashboard/Admin/AdminDashboard";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Utils/ErrorPage";

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
      {
        path: "/booking/:id",
        element: <BookingPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "*", // Catch-all route for 404 errors
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin-dashboard",
        element: <DashboardOverview />,
      },
      {
        path: "manage-cars",
        element: <ManageCars />,
      },
      {
        path: "admin-booking-management",
        element: <ManageBookings />,
      },

      {
        path: "manage-return-cars",
        element: <ManageReturnCars />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      // here is start for user
      {
        path: "user-persional-info",
        element: <PersonalInformation />,
      },
      {
        path: "booking-management",
        element: <BookingManagement />,
      },

      {
        path: "persional-info",
        element: <PersonalInformation />,
      },
      {
        path: "payment-management",
        element: <PaymentManagement />,
      },
    ],
  },
]);

export default router;
