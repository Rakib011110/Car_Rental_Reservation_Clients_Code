import { Link } from "react-router-dom";
import {
  FaUser,
  FaCalendarAlt,
  FaCreditCard,
  FaCar,
  FaList,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

import React from "react";

const Dashboard = () => {
  return (
    <div>
      {" "}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center p-4">
          {/* Page content here */}
          <div className="text-xl font-semibold text-gray-800 dark:text-black">
            {/* Add your page content or additional text here */}
            <h1>Welcome to the Dashboard</h1>
            <p>Manage your application settings and data efficiently.</p>
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
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/user-dashboard" className="flex items-center">
                <FaUser className="inline-block mr-3 text-2xl" />
                User Dashboard (Manage User Data)
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/booking-management" className="flex items-center">
                <FaCalendarAlt className="inline-block mr-3 text-2xl" />
                Booking Management
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/payment-management" className="flex items-center">
                <FaCreditCard className="inline-block mr-3 text-2xl" />
                Payment Management
              </Link>
            </li>
            <li className="my-4 border-t border-gray-300"></li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/admin-dashboard" className="flex items-center">
                <FaCar className="inline-block mr-3 text-2xl" />
                Admin Dashboard (Manage Cars)
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/manage-cars" className="flex items-center">
                <FaList className="inline-block mr-3 text-2xl" />
                Manage Cars
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/manage-bookings" className="flex items-center">
                <FaCalendarAlt className="inline-block mr-3 text-2xl" />
                Manage Bookings
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/manage-return-cars" className="flex items-center">
                <FaCar className="inline-block mr-3 text-2xl" />
                Manage Return Cars
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/user-management" className="flex items-center">
                <FaUsers className="inline-block mr-3 text-2xl" />
                User Management
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/user-admin-pages" className="flex items-center">
                <FaSignOutAlt className="inline-block mr-3 text-2xl" />
                User/Admin Pages
              </Link>
            </li>
            <li className="text-lg font-semibold border-b border-gray-300 pb-2">
              <Link to="/booking-page" className="flex items-center">
                <FaCalendarAlt className="inline-block mr-3 text-2xl" />
                Booking Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
