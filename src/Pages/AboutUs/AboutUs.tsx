import React from "react";
import TeamMember from "./TeamMember";
import Title from "../../Utils/Title";

const AboutUs = () => {
  const carImages = [
    {
      id: "1",
      url: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",
      title: "Sports Car",
      description: "A high-performance sports car.",
    },
    {
      id: "2",
      url: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mikebirdy-3729464.jpg&fm=jpg",
      title: "SUV",
      description: "A spacious and powerful SUV.",
    },
  ];

  return (
    <div className="">
      <div className="hero  h-[0%] relative">
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
              <h1 className="text-3xl mt-24 mb-12 text-white font-serif">
                Welcome to WheelzRent <br />{" "}
                <span className="text-[#20ff2b]">About Us</span>
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
      <div className="max-w-screen-xl mx-auto p-6">
        <section className="mb-12">
          <Title bigTitle={"Company History"} smallTitle={""} />
          <h2 className="text-3xl  font-bold mb-4"></h2>
          <p className="text-2xl border p-5 border-blue-900 font-serif">
            Founded in 2020, WheelsRent was established with a mission to
            provide a seamless and enjoyable car rental experience. Our vision
            is to revolutionize the rental industry with a focus on innovation,
            customer satisfaction, and sustainability. We are committed to
            offering a wide range of vehicles to meet diverse needs and
            preferences, ensuring every journey is exceptional.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4"></h2>
          <Title bigTitle={"Our Team"} smallTitle={""} />

          <TeamMember />
        </section>

        <section className="mb-12">
          <Title bigTitle={"Our Fleet"} smallTitle={""} />
          {/* <h2 className="text-3xl font-bold mb-4"></h2> */}
          <div className="group flex flex-col md:flex-row justify-center gap-2 w-[100%] mx-auto mb-10 mt-3">
            {carImages.map((car) => (
              <article
                key={car.id}
                className="relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] transition-all duration-300 ease-in-out before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100">
                <a
                  className="absolute inset-0 text-white z-10 p-3 flex flex-col justify-end"
                  href="#0">
                  <h1 className="text-xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                    {car.title}
                  </h1>
                  <span className="text-3xl font-medium md:whitespace-nowrap md:truncate md:opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out delay-200">
                    {car.description}
                  </span>
                </a>
                <img
                  className="object-cover h-72 md:h-[420px] w-full"
                  src={car.url}
                  alt={car.title}
                />
              </article>
            ))}
          </div>
          <p className="text-2xl border p-5 border-blue-900 font-serif">
            Our fleet includes a diverse range of vehicles, from economy cars
            perfect for budget travelers to luxury cars for those seeking a
            premium experience. We also offer a selection of SUVs for families
            and adventure seekers. Whatever your needs, we have the perfect car
            for you.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4"></h2>
          <Title bigTitle={"Values & Commitment"} smallTitle={""} />
          <p className="text-2xl border p-5 border-blue-900 font-serif">
            At WheelsRent, we are dedicated to providing exceptional customer
            service and maintaining the highest standards of quality. Our
            commitment to sustainability is reflected in our efforts to reduce
            our carbon footprint and promote environmentally-friendly practices.
            We value integrity, transparency, and innovation in all aspects of
            our business.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-[#6dfd2b]">
            Contact Information
          </h2>
          <p className="text-lg mb-2">Phone: (123) 456-7890</p>
          <p className="text-lg mb-2">Email: support@wheelsrent.com</p>
          <p className="text-lg">
            Address: 1234 Rent Avenue, Cityville, ST 56789
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
