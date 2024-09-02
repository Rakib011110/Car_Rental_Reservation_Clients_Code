import React from "react";
import Banner from "./Banner";
import CarsFeatures from "../../Pages/CarsFeatures/CarsFeatures";
import HighlightCars from "../../Pages/HighlightCars/HighlightCars";
import WhyChooseUs from "../../Pages/WhyChooseUs/WhyChooseUs";
import CustomerTestimonials from "../../Pages/CustomerTestimonials/CustomerTestimonials";
import Gallery from "../../Pages/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <div className="">
          <WhyChooseUs />

          {/* <CarsFeatures /> */}
          {/* <HighlightCars /> */}
        </div>
        <CustomerTestimonials />
        <div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Home;
