import React, { useEffect, useRef, useState } from "react";
import { useGetAllCarsQuery } from "../../redux/api/carApi";
import { ChevronRight } from "lucide-react";
import Button from "../../Utils/Button";
import { Link } from "react-router-dom";
import Title from "../../Utils/Title";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

const FeaturedCars = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const { data: cars, isLoading } = useGetAllCarsQuery({ limit: 4 });

  if (isLoading) {
    return <div>Loading...</div>; // Consider adding a spinner or a more engaging loading indicator
  }

  return (
    <motion.div
      style={{
        background: "linear-gradient(145deg, #0d053d, #15086b)",
        boxShadow: "10px 10px 20px #0c0535, -5px -5px 5px #170875 ",
      }}
      className="max-w-screen-2xl mx-auto overflow-x-hidden  border rounded-md mb-2 text-white">
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing">
        {cars?.map((car) => (
          <motion.div key={car._id} className="min-w-[19rem] min-h-[20rem] p-2">
            <img
              src={car.photoUrl}
              width={300}
              height={400}
              alt={car.name}
              className="w-full h-full object-cover pointer-events-none rounded-md"
            />
            <article className="p-4">
              <h1 className="text-xl font-semibold">{car.name}</h1>
              <p className="text-base">{car.description}</p>
              <div className="mt-2">
                <Link
                  to={`/cars/${car._id}`}
                  className="flex items-center gap-1 text-blue-600 dark:text-white">
                  <Button
                    children1={"View Details"}
                    children2={"View Details"}
                  />
                  <ChevronRight />
                </Link>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FeaturedCars;
