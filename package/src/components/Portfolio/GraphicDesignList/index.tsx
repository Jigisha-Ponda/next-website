// import React from "react";

// const GraphicDesignList = () => {
//   return (
//     <div className="text-center text-muted text-lg">
//       Graphic Design projects will be shown here.
//     </div>
//   )
// }

// export default GraphicDesignList;

"use client";
import React from "react";
import Image from "next/image";

const graphicProjects = [
  {
    id: 1,
    image: "/images/image/graphic-1.svg",
    alt: "Food App UI Design",
  },
  {
    id: 2,
    image: "/images/image/graphic-2.svg",
    alt: "Calendar UI Design",
  },
  {
    id: 3,
    image: "/images/image/graphic-3.svg",
    alt: "Traders App UI Design",
  },
  {
    id: 4,
    image: "/images/image/graphic-4.svg",
    alt: "Vyavr App",
  },
  {
    id: 5,
    image: "/images/image/graphic-5.svg",
    alt: "E-commerce UI Design",
  },
  {
    id: 6,
    image: "/images/image/graphic-6.svg",
    alt: "Finance Dashboard UI",
  },
  {
    id: 7,
    image: "/images/image/graphic-7.svg",
    alt: "Learning App UI",
  },
  {
    id: 8,
    image: "/images/image/graphic-8.svg",
    alt: "Fitness Tracker UI",
  },
  {
    id: 9,
    image: "/images/image/graphic-9.svg",
    alt: "Food Delivery UI",
  },
  {
    id: 10,
    image: "/images/image/graphic-10.svg",
    alt: "Crypto Wallet UI",
  },
  {
    id: 11,
    image: "/images/image/graphic-11.svg",
    alt: "Banking App UI",
  },
  {
    id: 12,
    image: "/images/image/graphic-12.svg",
    alt: "Healthcare App UI",
  },
  {
    id: 13,
    image: "/images/image/graphic-13.svg",
    alt: "Job Finder UI",
  },
  {
    id: 14,
    image: "/images/image/graphic-14.svg",
    alt: "Travel Booking UI",
  },
  {
    id: 15,
    image: "/images/image/graphic-15.svg",
    alt: "News App UI",
  },
  {
    id: 16,
    image: "/images/image/graphic-16.svg",
    alt: "Language Learning UI",
  },
  {
    id: 17,
    image: "/images/image/graphic-17.svg",
    alt: "Smart Home UI",
  },
  {
    id: 18,
    image: "/images/image/graphic-18.svg",
    alt: "Pet Adoption UI",
  },
  {
    id: 19,
    image: "/images/image/graphic-19.svg",
    alt: "Music Streaming UI",
  },
  {
    id: 20,
    image: "/images/image/graphic-20.svg",
    alt: "Dating App UI",
  },
  {
    id: 21,
    image: "/images/image/graphic-21.svg",
    alt: "Education Platform UI",
  },
];


const GraphicDesignList = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {graphicProjects.map((project) => (
          <div
            key={project.id}
            className="relative w-full overflow-hidden rounded-xl shadow-md group"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraphicDesignList;
