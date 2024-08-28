// src/components/HomePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetAllCarsQuery } from "../../redux/api/carApi";
import Button from "../../Utils/Button";
import {
  faCar,
  faShuttleVan,
  faBus,
  faStar,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Features from "./Features";
import Logo from "../../Pages/Logo/Logo";

const Banner = () => {
  const [searchParams, setSearchParams] = useState({
    location: "",
    startDate: "",
    endDate: "",
  });
  const [searchTrigger, setSearchTrigger] = useState(false);

  const { data: cars, refetch } = useGetAllCarsQuery(searchParams, {
    skip: !searchTrigger,
  });

  const handleSearch = () => {
    setSearchTrigger(true);
    refetch();
  };
  return (
    <div className=" mx-auto ">
      {/* <section className="hero mb-8">
        <img src="" alt="Car Rental" className="w-full h-60 object-cover" />
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Location"
            value={searchParams.location}
            onChange={(e) =>
              setSearchParams({ ...searchParams, location: e.target.value })
            }
            className="p-2 border rounded"
          />
          <input
            type="date"
            placeholder="Start Date"
            value={searchParams.startDate}
            onChange={(e) =>
              setSearchParams({ ...searchParams, startDate: e.target.value })
            }
            className="p-2 border rounded ml-2"
          />
          <input
            type="date"
            placeholder="End Date"
            value={searchParams.endDate}
            onChange={(e) =>
              setSearchParams({ ...searchParams, endDate: e.target.value })
            }
            className="p-2 border rounded ml-2"
          />
          <button
            onClick={handleSearch}
            className="ml-2 p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </div>
      </section> */}

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <div>
              <h1 className="text-3xl mb-16 text-white font-serif  ">
                Rent with Ease, Drive with Confidence - Welcome to WheelzRent!
              </h1>{" "}
              <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0">
                {[
                  { icon: faCar, name: "Car" },
                  { icon: faShuttleVan, name: "Van" },
                  { icon: faBus, name: "Minibus" },
                  { icon: faCarSide, name: "Prestige" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 flex flex-col items-center justify-center  dark:border-[#656fe2] border  text-white rounded-lg p-4 shadow-md">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-5xl mb-2"
                    />
                    <span className="text-lg font-semibold">{item.name}</span>
                  </div>
                ))}
              </div>
              <br />
              <h1 className="text-2xl text-[#20ff2b] font-serif mb-8">
                {" "}
                <span className="text-white"> Your Journey,</span> Your Wheels,
                <span className="text-white"> Your Way!</span>
              </h1>
            </div>

            <div className="flex flex-wrap justify-center md:flex-nowrap gap-2 mt-4 p-4 bg-gradient-to-r dark:from-[#070e41] dark:border-[#656fe2] border rounded-md shadow-md">
              <input
                type="text"
                placeholder="Location"
                value={searchParams.location}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, location: e.target.value })
                }
                className="p-3   dark:border-[#0533fd] border-4 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={searchParams.startDate}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    startDate: e.target.value,
                  })
                }
                className="p-3  dark:border-[#0533fd] border-4 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:[#13096e]"
              />
              <input
                type="date"
                placeholder="End Date"
                value={searchParams.endDate}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, endDate: e.target.value })
                }
                className="p-3  dark:border-[#0533fd] border-4 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSearch}
                className="w-full md:w-auto p-3  text-white rounded-md hover:bg-[#10144e] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                <Button children1={"Search"} children2={"Click"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Logo />

      <section className="featured-cars mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
          {cars?.map((car: { _id: React.Key | null | undefined }) => (
            <Features car={car} key={car._id}></Features>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
