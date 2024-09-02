import React, { useState } from "react";
import { useGetAllCarsQuery } from "../../redux/api/carApi";
import { Link } from "react-router-dom";
import { ArrowBigDown, ArrowRight, ChevronRight, Heart } from "lucide-react";
import Button from "../../Utils/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faShuttleVan } from "@fortawesome/free-solid-svg-icons";
const CarListings = () => {
  const { data: cars, isLoading } = useGetAllCarsQuery({});
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewDetails = (car) => {
    setSelectedCar(car);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCar(null);
  };

  console.log(cars);
  if (isLoading) {
    return <div> LOADING..............</div>;
  }

  return (
    <div>
      <div className="hero  h-[50%] relative">
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
              <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0"></div>
              <br />
              <h1 className="text-2xl text-[#20ff2b] font-serif mb-8">
                <span className="text-white">Your Journey,</span> Your Wheels,
                <span className="text-white"> Your Way!</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="grid mt-32 mb-32 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 max-w-screen-xl mx-auto">
        {cars?.map((car) => (
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
                <Button children1={"View Details"} children2={"View Details"} />
                <span>
                  <ChevronRight />
                </span>
              </Link>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarListings;
