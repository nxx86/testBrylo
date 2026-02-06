"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Ahmed K.",
    role: "Verified Buyer",
    text: "Absolutely incredible quality! The attention to detail is unmatched. Brylo has become my go-to brand.",
    rating: 5,
    image: "/images/2.png",
  },
  {
    name: "Sarah M.",
    role: "Loyal Customer",
    text: "I've been a customer for over a year now. Every single purchase has exceeded my expectations.",
    rating: 5,
    image: "/images/3.png",
  },
  {
    name: "Youssef B.",
    role: "Fashion Enthusiast",
    text: "Modern, sleek, and incredibly comfortable. The design philosophy behind Brylo is exceptional.",
    rating: 5,
    image: "/images/4.png",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#fff5ec] overflow-hidden">
      {/* Decorative teal accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full teal-section opacity-30 rounded-l-[100px]" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left content */}
          <div className="flex-1" data-aos="fade-right">
            <p className="text-[#b5d7e0] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
              Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6 leading-tight">
              What Our Clients Say
            </h2>
            <div className="w-24 h-[2px] bg-[#f54038] mb-8" />
            <p className="text-[#5a5a5a] text-lg leading-relaxed max-w-md">
              Don&apos;t just take our word for it. Here&apos;s what our
              satisfied customers have to share about their Brylo experience.
            </p>
          </div>

          {/* Right - Testimonial cards */}
          <div
            className="flex-1 space-y-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover p-6 rounded-2xl bg-white border border-[#e8e0d4] flex gap-5 items-start"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Small product image */}
                <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-[#f54038]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed mb-3 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div>
                    <p className="text-[#242424] font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[#8a8a8a] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
