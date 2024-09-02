import React from "react";
import Title from "../../Utils/Title";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    email: "john.doe@example.com",
    rating: 4,
    review: "Great car! Smooth ride and very fuel-efficient.",
    avatar:
      "https://img.freepik.com/premium-photo/photo-portrait-luxury-car-with-handsome-stylish-businessman_763111-93585.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "Los Angeles, USA",
    email: "jane.smith@example.com",
    rating: 5,
    review: "Absolutely love this car! It's perfect for city driving.",
    avatar:
      "https://img.freepik.com/premium-photo/photo-portrait-luxury-car-with-handsome-stylish-businessman_763111-93682.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    location: "Chicago, USA",
    email: "michael.johnson@example.com",
    rating: 3,
    review: "The car is decent, but could be more comfortable on long drives.",
    avatar:
      "https://img.freepik.com/premium-photo/photo-happy-stylish-man-near-car_671352-7321.jpg",
  },
  {
    id: 4,
    name: "Michael Johnson",
    location: "Chicago, USA",
    email: "michael.johnson@example.com",
    rating: 3,
    review: "The car is decent, but could be more comfortable on long drives.",
    avatar:
      "https://img.freepik.com/premium-photo/business-man-choosing-car-car-salon_1303-32013.jpg",
  },
  {
    id: 5,
    name: "Jones Smith",
    location: "Los Angeles, USA",
    email: "jhonessmith@example.com",
    rating: 5,
    review:
      "It awesome car absolutely love this car! It's perfect for city driving.",
    avatar:
      "https://media.istockphoto.com/id/696663316/photo/car-dealer-in-showroom.jpg?s=612x612&w=0&k=20&c=DaJsmjPZkKNnY-L1haIlVLVmyi2LJw73l_J2CWNvApw=",
  },
];

const CustomerTestimonials = () => {
  return (
    <div>
      <Title
        bigTitle={"Customer Review"}
        smallTitle={"Customer Who Loved Us"}
      />
      <div className="grid grid-cols-1  mt- max-w-screen-2xl mx-auto sm:grid-cols-2 md:grid-cols-5 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="  border-4  border-blue-900 shadow-lg overflow-hidden rounded-t-full">
            <img
              className="w-full h-72 border-b-4 border border-white border-b-blue-900 object-cover object-center rounded-full"
              src={review.avatar}
              alt={`${review.name} avatar`}
            />
            <div className="flex items-center px-6 py-3 bg-[#080e63]">
              <svg
                className="h-6 w-6 text-white fill-current"
                viewBox="0 0 512 512">
                <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
              </svg>
              <h1 className="mx-3 text-white font-semibold text-lg">
                {`${review.rating} Stars`}
              </h1>
            </div>
            <div className="py-4 px-6">
              <h1 className="text-2xl font-semibold text-[#2bec25]">
                {review.name}
              </h1>
              <p className="py-2 text-lg text-blue-900">{review.review}</p>
              <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                  <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                </svg>
                <h1 className="px-2 text-sm">{review.location}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                  <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                </svg>
                <h1 className="px-2 text-sm">{review.email}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerTestimonials;
