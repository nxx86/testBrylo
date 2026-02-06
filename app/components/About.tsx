"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-32 bg-[#fff5ec] overflow-hidden"
      style={{ marginTop: "100px" }}
    >
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-[#b5d7e0]/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="relative w-full max-w-lg" data-aos="fade-right">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-[#b5d7e0]/10">
              <Image
                src="/images/brylo vision.png"
                alt="About Brylo"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
          </div>

          {/* Content */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="200">
            <p className="text-[#b5d7e0] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
              Our Story
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6 leading-tight">
              The Vision Behind <span className="text-[#7cbcc9]">Brylo</span>
            </h2>
            <p className="text-[#5a5a5a] text-lg leading-relaxed mb-6">
              Founded with a passion for exceptional quality and modern design,
              Brylo represents the perfect fusion of craftsmanship and
              contemporary style. Every product tells a story of dedication,
              creativity, and attention to detail.
            </p>
            <p className="text-[#5a5a5a] text-lg leading-relaxed mb-8">
              We believe that great design should be accessible to everyone. Our
              team works tirelessly to create products that not only look
              exceptional but feel incredible.
            </p>

            {/* Timeline */}
            <div className="space-y-4">
              {[
                { year: "2021", event: "Brand Founded" },
                { year: "2023", event: "First Collection Launch" },
                { year: "2025", event: "International Expansion" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                  data-aos="fade-left"
                  data-aos-delay={300 + index * 100}
                >
                  <span className="text-[#f54038] font-bold text-lg min-w-[60px]">
                    {item.year}
                  </span>
                  <div className="w-3 h-3 rounded-full bg-[#b5d7e0]" />
                  <div className="h-[1px] flex-1 bg-[#e8e0d4]" />
                  <span className="text-[#242424] font-medium">
                    {item.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
