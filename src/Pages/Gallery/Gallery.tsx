import React from "react";
import Title from "../../Utils/Title";

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
  {
    id: "3",
    url: "https://s43365.pcdn.co/wp-content/uploads/2023/11/Mercedes-Benz-GLC-Coupe.jpg",
    title: "Electric Car",
    description: "A modern electric vehicle.",
  },
  {
    id: "5",
    url: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
    title: "Ford Mustang",
    description: "Muscle Car",
    tags: ["Power", "Muscle", "Iconic", "V8 Engine"],
  },
  {
    id: "6",
    url: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
    title: "Chevrolet Corvette",
    description: "Sports Car",
    tags: ["Speed", "Sports", "Sleek", "Performance"],
  },

  {
    id: "8",
    url: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mikebirdy-3729464.jpg&fm=jpg",
    title: "SUV",
    description: "A spacious and powerful SUV.",
  },
];
const CarData = [
  {
    id: "4",
    url: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
    title: "Electric Car",
    description: "A modern electric vehicle.",
  },
  {
    id: "5",
    url: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202312/658e5b5ebba32-xiaomi-su7-ev-to-take-on-tesla-293837105-16x9.jpg?size=948:533",
    title: "Ford Mustang",
    description: "Muscle Car",
    tags: ["Power", "Muscle", "Iconic", "V8 Engine"],
  },
  {
    id: "6",
    url: "https://www.topgear.com/sites/default/files/2024/02/ioniq5n.jpeg",
    title: "Chevrolet Corvette",
    description: "Sports Car",
    tags: ["Speed", "Sports", "Sleek", "Performance"],
  },
  {
    id: "7",
    url: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
    title: "Porsche 911",
    description: "Luxury Sports Car",
    tags: ["Luxury", "Sports", "Classic", "Turbocharged"],
  },
];

const Gallery: React.FC = () => {
  return (
    <div>
      <Title bigTitle={"Our Gallery"} smallTitle={"Your Favourite Car Pic"} />

      <div className="group flex flex-col md:flex-row justify-center gap-2 w-[80%] mx-auto mb-10 mt-3">
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
      {/* <div className="group flex flex-col md:flex-row justify-center gap-2 w-[80%] mx-auto mb-10 mt-3">
        {CarData.map((car) => (
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
      </div> */}
    </div>
  );
};

export default Gallery;
