"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/images/2.png", title: "Collection Piece" },
  { src: "/images/3.png", title: "Signature Style" },
  { src: "/images/4.png", title: "Premium Quality" },
  { src: "/images/5.png", title: "Modern Design" },
  { src: "/images/6.png", title: "Crafted Detail" },
  { src: "/images/7.png", title: "Luxury Edition" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative w-full py-24 md:py-32 bg-[#f6ecde]"
      style={{ marginTop: "100px" }}
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#b5d7e0] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6">
            Visual Showcase
          </h2>
          <div className="w-24 h-[2px] bg-[#f54038] mx-auto mb-6" />
          <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg">
            Browse through our curated selection of premium products and
            designs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#e8e0d4] cursor-pointer bg-white"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative w-full h-72 md:h-80 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#242424]/0 group-hover:bg-[#242424]/40 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="w-12 h-[2px] bg-[#b5d7e0] mb-4" />
                  <h3 className="text-white text-xl font-bold tracking-wider">
                    {image.title}
                  </h3>
                  <p className="text-[#b5d7e0] text-sm tracking-wider uppercase mt-2">
                    View Detail
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="group relative overflow-hidden rounded-2xl border border-[#e8e0d4] cursor-pointer bg-white"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
              <Image
                src="/images/8.png"
                alt="Featured Collection"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#242424]/0 group-hover:bg-[#242424]/40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-xl font-bold tracking-wider">
                  Featured Collection
                </h3>
              </div>
            </div>
          </div>
          <div
            className="group relative overflow-hidden rounded-2xl border border-[#e8e0d4] cursor-pointer bg-white"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="relative w-full h-72 md:h-80 overflow-hidden">
              <Image
                src="/images/9.png"
                alt="Limited Edition"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#242424]/0 group-hover:bg-[#242424]/40 transition-all duration-500" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-white text-xl font-bold tracking-wider">
                  Limited Edition
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
