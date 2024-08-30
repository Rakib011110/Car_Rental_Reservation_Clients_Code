import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Company History</h2>
        <p className="text-lg">
          Founded in 2020, WheelsRent was established with a mission to provide
          a seamless and enjoyable car rental experience. Our vision is to
          revolutionize the rental industry with a focus on innovation, customer
          satisfaction, and sustainability. We are committed to offering a wide
          range of vehicles to meet diverse needs and preferences, ensuring
          every journey is exceptional.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img
              src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724976000&semt=ais_hybrid"
              alt="Team Member 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          <div className="text-center">
            <img
              src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg"
              alt="Team Member 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p className="text-gray-600">Chief Operating Officer</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Fleet</h2>
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s"
            alt="Our Fleet"
            className="w-full h-80 object-cover rounded-lg mb-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <p className="text-xl font-bold">Economy, Luxury, SUVs, and More</p>
          </div>
        </div>
        <p className="text-lg">
          Our fleet includes a diverse range of vehicles, from economy cars
          perfect for budget travelers to luxury cars for those seeking a
          premium experience. We also offer a selection of SUVs for families and
          adventure seekers. Whatever your needs, we have the perfect car for
          you.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Values & Commitment</h2>
        <p className="text-lg">
          At WheelsRent, we are dedicated to providing exceptional customer
          service and maintaining the highest standards of quality. Our
          commitment to sustainability is reflected in our efforts to reduce our
          carbon footprint and promote environmentally-friendly practices. We
          value integrity, transparency, and innovation in all aspects of our
          business.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="text-lg mb-2">Phone: (123) 456-7890</p>
        <p className="text-lg mb-2">Email: support@wheelsrent.com</p>
        <p className="text-lg">
          Address: 1234 Rent Avenue, Cityville, ST 56789
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
