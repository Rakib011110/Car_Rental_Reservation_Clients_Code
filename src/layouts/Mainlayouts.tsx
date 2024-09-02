import React from "react";
import Navbar from "../Pages/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import { ThemeProvider } from "../Utils/ThemeContext";

const Mainlayouts = () => {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayouts;
