import { Link, Outlet } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaCreditCard,
  FaCar,
  FaList,
  FaUsers,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

const Dashboard = () => {
  // Get the user object from Redux store
  const user = useSelector((state: RootState) => state.auth.user);
  const userRole = user?.role; // Assume 'role' is a property in the user object

  console.log("User from Redux state:", user); // Debugging line

  // If user data is not loaded, show a loading state or fallback UI
  if (!user) {
    return <p>Loading user data...</p>;
  }

  // Conditional rendering based on role
  const isAdmin = userRole === "admin";

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center p-4">
        {/* Page content here */}
        <div className="text-xl font-semibold text-gray-800 dark:text-black">
          <Outlet />
        </div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden mt-4">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu bg-gradient-to-r from-[#060d3b] to-[#2c3a94] text-white min-h-full w-80 p-4 space-y-4 border-r border-gray-600">
          {/* Sidebar content here */}
          <li className="font-semibold border-b border-gray-300 pb-2 text-2xl">
            <Link to="/" className="flex items-center">
              <FaHome className="inline-block mr-3 " />
              HOME
            </Link>
            <Link
              to="/dashboard/personal-info"
              className="flex items-center lx">
              Name: {user?.name}
            </Link>
          </li>

          {/* Render User or Admin specific links based on user role */}
          {isAdmin ? (
            // Admin-specific links
            <>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link
                  to="/dashboard/admin-dashboard"
                  className="flex items-center">
                  <FaCar className="inline-block mr-3 text-2xl" />
                  Admin Dashboard
                </Link>
              </li>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link to="/dashboard/manage-cars" className="flex items-center">
                  <FaList className="inline-block mr-3 text-2xl" />
                  Manage Cars
                </Link>
              </li>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link
                  to="/dashboard/admin-booking-management"
                  className="flex items-center">
                  <FaCalendarAlt className="inline-block mr-3 text-2xl" />
                  Manage Bookings
                </Link>
              </li>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link
                  to="/dashboard/manage-return-cars"
                  className="flex items-center">
                  <FaCar className="inline-block mr-3 text-2xl" />
                  Manage Return Cars
                </Link>
              </li>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link
                  to="/dashboard/user-management"
                  className="flex items-center">
                  <FaUsers className="inline-block mr-3 text-2xl" />
                  User Management
                </Link>
              </li>
            </>
          ) : (
            // User-specific links
            <>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link
                  to="/dashboard/user-persional-info"
                  className="flex items-center">
                  <FaUser className="inline-block mr-3 text-2xl" />
                  Personal Information
                </Link>
              </li>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link
                  to="/dashboard/booking-management"
                  className="flex items-center">
                  <FaCalendarAlt className="inline-block mr-3 text-2xl" />
                  Booking Management
                </Link>
              </li>
              <li className="text-lg font-semibold border-b border-gray-300 pb-2">
                <Link
                  to="/dashboard/payment-management"
                  className="flex items-center">
                  <FaCreditCard className="inline-block mr-3 text-2xl" />
                  Payment Management
                </Link>
              </li>
            </>
          )}

          {/* Common links for all users */}
          <li className="text-lg font-semibold border-b border-gray-300 pb-2">
            <Link to="/" className="flex items-center">
              <FaSignOutAlt className="inline-block mr-3 text-2xl" />
              GO HOME
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
