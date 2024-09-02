import React, { useState } from "react";
import { useGetAllCarsQuery } from "../../redux/api/carApi";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Button from "../../Utils/Button";

const CarListings = () => {
  const { data: cars, isLoading } = useGetAllCarsQuery({});
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // State for filters
  const [carType, setCarType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleViewDetails = (car) => {
    setSelectedCar(car);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCar(null);
  };

  // Filter cars based on type and price range
  const filteredCars = cars?.filter(
    (car) =>
      (carType ? car.type === carType : true) &&
      car.pricePerHour >= priceRange[0] &&
      car.pricePerHour <= priceRange[1]
  );

  if (isLoading) {
    return <div> LOADING..............</div>;
  }

  return (
    <div>
      <div className="hero h-[50%] relative ">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-[-1]">
          <source
            src="https://res.cloudinary.com/dkm4xad0x/video/upload/v1725200306/dgfgwc1gzj4ylkms2w3n.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <div>
              <h1 className="text-3xl mt-32 mb-16 text-white font-serif">
                Choose Your Favourite Car in Our Car list <br /> Welcome to
                WheelzRent <br />{" "}
                <span className="text-[#20ff2b]">Car list!</span>
              </h1>
              <br />
              <h1 className="text-2xl text-[#20ff2b] font-serif mb-8">
                <span className="text-white">Your Journey,</span> Your Wheels,
                <span className="text-white"> Your Way!</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 mt-32">
        {/* Filters */}
        <div className="mb-8">
          <div className="flex space-x-4">
            <select
              className="border p-2 rounded"
              value={carType}
              onChange={(e) => setCarType(e.target.value)}>
              <option value="">All Types</option>
              <option value="SUV">SUV</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Sedan">Sedan</option>
              {/* Add more car types as needed */}
            </select>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
              className="border p-2 rounded"
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
              className="border p-2 rounded"
            />
            <div className="flex flex-col">
              <label>
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
            </div>
          </div>
        </div>
        {/* Car Listings */}
        <div className="grid mt- mb-32 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {filteredCars?.map((car) => (
            <div
              key={car.id}
              className="w-[95%] h-[466px] group mx-auto dark:bg-[#11065a] p-2 bg-white dark:border-0 border overflow-hidden rounded-md dark:text-white text-black">
              <figure className="w-full h-72 group-hover:h-64 transition-all duration-300 dark:bg-[#0a121a] bg-[#f0f5fa] p-2 rounded-md relative overflow-hidden">
                <div
                  style={{
                    background:
                      "linear-gradient(123.9deg, #0B65ED 1.52%, rgba(0, 0, 0, 0) 68.91%)",
                  }}
                  className="absolute top-0 left-0 w-full h-full  group-hover:opacity-100 opacity-0  transition-all duration-300"></div>
                <img
                  src={car.photoUrl}
                  alt={car.name}
                  className="absolute -bottom-1 group-hover:-bottom-7 right-0 h-full w-[93%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
                />
              </figure>
              <article className="p-4 space-y-2">
                <div className="h-8 w-20 text-center bg-[#1227e9] rounded-md">
                  {" "}
                  <p className="font-bold">Price ${car.pricePerHour}</p>
                </div>
                <h1 className="text-xl text-[#67ff38] font-semibold capitalize">
                  {car.name}
                </h1>
                <p className="text-base leading-[120%]">{car.description}</p>

                <Link
                  to={`/cars/${car._id}`}
                  className="text-base dark:text-white text-blue-600 font-normal group-hover:opacity-100 opacity-0 translate-y-2 group-hover:translate-y-0 pt-2 mb-10 flex gap-1 transition-all duration-300">
                  <Button
                    children1={"View Details"}
                    children2={"View Details"}
                  />
                  <span>
                    <ChevronRight />
                  </span>
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListings;
