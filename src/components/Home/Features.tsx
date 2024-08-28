import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Utils/Button";
import { ChevronRight } from "lucide-react";

const Features = ({ car }) => {
  return (
    <div>
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
    </div>
  );
};

export default Features;
