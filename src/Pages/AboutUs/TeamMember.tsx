import React from "react";

const TeamMember = () => {
  const team = [
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager",
      avatar:
        "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg",
      description:
        "Jane has managed multiple projects in tech and ensures everything runs smoothly.",
      location: "San Francisco, USA",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "UI/UX Designer",
      avatar:
        "https://media.istockphoto.com/id/1311957094/photo/handsome-smiling-young-man-with-crossed-arms-portrait.jpg?s=612x612&w=0&k=20&c=zALF0xV8gL-W9IooXcbEE95aejQhYYkBslwjPMqlUxA=",
      description:
        "Alex is passionate about creating user-friendly and aesthetically pleasing designs.",
      location: "Austin, USA",
      email: "alex.johnson@example.com",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Marketing Specialist",
      avatar:
        "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
      description:
        "Emily is a marketing expert with a knack for creating impactful campaigns.",
      location: "Chicago, USA",
      email: "emily.davis@example.com",
    },
    {
      id: 5,
      name: "Michael Brown",
      position: "QA Engineer",
      avatar:
        "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
      description:
        "Michael ensures that all products meet the highest quality standards.",
      location: "Seattle, USA",
      email: "michael.brown@example.com",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 mt-10 max-w-screen-2xl mx-auto sm:grid-cols-2 md:grid-cols-4 gap-4">
        {team.map((member) => (
          <div
            key={member.id}
            className="border-4 border-blue-900 shadow-lg overflow-hidden rounded-t-full">
            <img
              className="w-full h-80 object-cover object-center rounded-full"
              src={member.avatar}
              alt={`${member.name} avatar`}
            />
            <div className="flex items-center px-6 py-3 bg-[#080e63]">
              <svg
                className="h-6 w-6 text-white fill-current"
                viewBox="0 0 512 512">
                <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
              </svg>
              <h1 className="mx-3 text-white font-semibold text-lg">
                {member.position}
              </h1>
            </div>
            <div className="py-4 px-6">
              <h1 className="text-2xl font-semibold text-[#2bec25]">
                {member.name}
              </h1>
              <p className="py-2 text-lg text-blue-900">{member.description}</p>
              <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                  <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                </svg>
                <h1 className="px-2 text-sm">{member.location}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
