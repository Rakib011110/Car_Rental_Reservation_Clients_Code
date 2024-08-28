import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaCarSide, // For SUV, Sedan, etc.
  FaCarAlt, // For Hatchback, Convertible, etc.
  FaTruckMonster, // For Truck
  FaCaravan, // For Minivan, Station Wagon
  FaRoad, // For Crossover
  FaTaxi, // For Coupe
  FaBicycle, // For Exotic Cars
} from "react-icons/fa";

const logos = [
  { icon: <FaCarSide size={40} />, label: "SUV" },
  { icon: <FaCarAlt size={40} />, label: "Hatchback" },
  { icon: <FaRoad size={40} />, label: "Crossover" },
  { icon: <FaCarAlt size={40} />, label: "Convertible" },
  { icon: <FaCarSide size={40} />, label: "Sedan" },
  //   { icon: <FaSportsball size={40} />, label: "Sports Car" },
  { icon: <FaTaxi size={40} />, label: "Coupe" },
  { icon: <FaCaravan size={40} />, label: "Minivan" },
  { icon: <FaCaravan size={40} />, label: "Station Wagon" },
  { icon: <FaTruckMonster size={40} />, label: "Truck" },
  { icon: <FaCaravan size={40} />, label: "Minivans" },
  { icon: <FaBicycle size={40} />, label: "Exotic Cars" },
];

const Logo = () => {
  return (
    <div className="bg-black p-4">
      <Marquee speed={50} gradient={false}>
        {logos.map(({ icon, label }) => (
          <div key={label} className="flex items-center mx-4 text-[#0efd0ef1]">
            <div className="mr-2">{icon}</div>
            <span className="text-white text-xl font-bold">{label}</span>
            <div className="ml-2 h-6 w-6 rounded-full bg-[#0efd0ef1]"></div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Logo;
