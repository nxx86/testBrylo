"use client";

import { useState } from "react";
import Image from "next/image";

const solutions = [
  {
    id: 1,
    image: "/images/capsule.jpg",
    title: "Floor Cleaning",
    color: "#7cbcc9",
    description: "Professional floor care solution for all surface types",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: 2,
    image: "/images/capsule2.jpg",
    title: "Clothes Care",
    color: "#b3fae8",
    description: "Gentle yet effective fabric cleaning solution",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    image: "/images/capsule 3.jpg",
    title: "Dish Washing",
    color: "#c4faec",
    description: "Powerful grease-cutting dish cleaning formula",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    image: "/images/capsule 4.jpg",
    title: "Multi-Purpose",
    color: "#b5d7e0",
    description: "Versatile all-around cleaning solution",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
];

export default function CleaningSolutions() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="relative w-full py-24 md:py-32 bg-[#fff5ec] overflow-hidden"
      style={{ marginTop: "100px" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#b5d7e0]/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#c4faec]/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10 left-1/2 transform -translate-x-1/2">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[#7cbcc9] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Cleaning Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6">
            One System. Infinite Possibilities.
          </h2>
          <div className="w-24 h-[2px] bg-[#f54038] mx-auto mb-6" />
          <p className="text-[#242424]/70 max-w-2xl mx-auto text-lg">
            Simply choose the right capsule for your cleaning task and let BRYLO
            do the rest.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="group relative"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay={index * 150}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Card */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden bg-white border-2 border-[#e8e0d4] transition-all duration-500 hover:border-[#7cbcc9] hover:shadow-2xl hover:shadow-[#b5d7e0]/30 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative w-full h-[240px] overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(to top, ${solution.color}dd, transparent)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-[160px]">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300"
                    style={{
                      backgroundColor:
                        activeIndex === index
                          ? solution.color
                          : `${solution.color}30`,
                      color: activeIndex === index ? "white" : solution.color,
                    }}
                  >
                    {solution.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#242424] mb-2">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#242424]/60 text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `inset 0 0 60px ${solution.color}40`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p className="text-[#242424]/70 mb-6 text-lg">
            Mix, match, and customize your cleaning routine
          </p>
          <a href="#collection" className="inline-block neon-button">
            Explore All Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
