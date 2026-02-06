"use client";

import { useState } from "react";
import Image from "next/image";

const views = [
  { image: "/images/frontfinal.png", label: "Front View" },
  { image: "/images/back.jpg", label: "Back View" },
];

export default function ProductShowcase() {
  const [activeView, setActiveView] = useState(0);

  return (
    <section
      id="collection"
      className="relative w-full py-24 md:py-32 bg-[#fff5ec]"
      style={{ marginTop: "100px" }}
    >
      <div className="max-w-6xl mx-auto px-8 relative left-1/2 transform -translate-x-1/2">
        {/* Section Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <p className="text-[#b5d7e0] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Discover
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#242424] mb-6">
            Our Product
          </h2>
          <div className="w-24 h-[2px] bg-[#f54038] mx-auto mb-6" />
          <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg">
            Explore both sides of our premium design — crafted with precision
            and finished with elegance.
          </p>
        </div>

        {/* Product display — image left, info right */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Product Image Card */}
          <div
            className="w-full max-w-md lg:flex-shrink-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              {views.map((view, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === activeView ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={view.image}
                    alt={view.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242424]/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[#b5d7e0] text-xs tracking-[0.2em] uppercase font-medium">
                      {view.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View indicators */}
            <div className="flex gap-4 justify-center mt-[10px]">
              {views.map((view, index) => (
                <button
                  key={index}
                  onClick={() => setActiveView(index)}
                  className={`h-[6px] rounded-full transition-all duration-500 ${
                    index === activeView
                      ? "w-14 bg-[#f54038]"
                      : "w-6 bg-[#242424]/20 hover:bg-[#242424]/40"
                  }`}
                  aria-label={`Show ${view.label}`}
                />
              ))}
            </div>
          </div>

          {/* Product Info — right side */}
          <div
            className="flex-1 max-w-xl"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <span className="text-[#f54038] text-sm tracking-[0.2em] uppercase font-medium">
              Featured Product
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[#242424] mt-3 mb-6">
              Brylo Signature Edition
            </h3>
            <p className="text-[#5a5a5a] text-lg leading-relaxed mb-10">
              Experience unparalleled quality with our signature collection.
              Each piece is meticulously crafted using premium materials,
              ensuring both comfort and durability. The modern design seamlessly
              blends timeless elegance with contemporary aesthetics.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: "Material", value: "Premium Cotton" },
                { label: "Design", value: "Modern Fit" },
                { label: "Quality", value: "Hand-finished" },
                { label: "Style", value: "Versatile" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-[#b5d7e0] pl-[10px]"
                >
                  <p className="text-[#8a8a8a] text-xs tracking-wider uppercase">
                    {item.label}
                  </p>
                  <p className="text-[#242424] font-semibold mt-2">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="neon-button">
                Order Now
              </a>
              <button className="neon-button neon-button-outline">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
