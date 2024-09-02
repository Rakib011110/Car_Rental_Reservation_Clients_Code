import React from "react";
import {
  FaCar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaShieldAlt,
} from "react-icons/fa";
import carLogo from "../../assets/images/car-logo.png";

const Footer = () => {
  return (
    <div className="bg-[#081352]">
      <footer className="footer bg-[#081352] text-white p-10 max-w-screen-2xl mx-auto">
        <aside>
          <a className="btn btn-ghost text-xl font-bold text-white">
            <img className="w-40" src={carLogo} alt="Car Rental Logo" />
          </a>
          <p>
            Premium Car Rentals
            <br />
            Your trusted partner since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover flex items-center">
            <FaCar className="mr-2" /> Car Rentals
          </a>
          <a className="link link-hover flex items-center">
            <FaClipboardCheck className="mr-2" /> Booking Management
          </a>
          <a className="link link-hover flex items-center">
            <FaShieldAlt className="mr-2" /> Insurance Coverage
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover flex items-center">
            <FaMapMarkerAlt className="mr-2" /> About Us
          </a>
          <a className="link link-hover flex items-center">
            <FaPhone className="mr-2" /> Contact
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Policies</h6>
          <a className="link link-hover flex items-center">
            <FaShieldAlt className="mr-2" /> Terms of Use
          </a>
          <a className="link link-hover flex items-center">
            <FaShieldAlt className="mr-2" /> Privacy Policy
          </a>
          <a className="link link-hover flex items-center">
            <FaShieldAlt className="mr-2" /> Cookie Policy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
