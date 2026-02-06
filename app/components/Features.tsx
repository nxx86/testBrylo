"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
    title: "Premium Quality",
    desc: "Every piece is crafted with the highest quality materials for lasting comfort and style.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
    title: "Made With Love",
    desc: "Designed with passion and meticulous attention to every single detail.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    ),
    title: "Fast Shipping",
    desc: "Quick and reliable delivery right to your doorstep, wherever you are.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    title: "Secure Purchase",
    desc: "Shop with confidence — secure payments and hassle-free returns guaranteed.",
  },
];

const stats = [
  { number: 10000, suffix: "K+", label: "Happy Customers" },
  { number: 500, suffix: "+", label: "Products Sold" },
  { number: 50, suffix: "+", label: "Unique Designs" },
  { number: 4.9, suffix: "", label: "Average Rating", isDecimal: true },
];

function CountUp({
  end,
  suffix,
  isDecimal,
}: {
  end: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={ref}>
      {isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Features() {
  return (
    <>
      {/* Features Section */}
      <section
        className="relative w-full py-24 md:py-32 bg-[#fff5ec] overflow-hidden"
        style={{ marginTop: "100px" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-[#b5d7e0]/20" />
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-[#b5d7e0]/10" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#b5d7e0]/10" />

        <div className="max-w-6xl mx-auto px-8 relative z-10 left-1/2 transform -translate-x-1/2">
          <div className="text-center mb-16" data-aos="fade-up">
            <p className="text-[#b5d7e0] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6">
              The Brylo Difference
            </h2>
            <div className="w-24 h-[2px] bg-[#f54038] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-hover group p-8 rounded-2xl bg-white border border-[#e8e0d4] text-center hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#b5d7e0]/20 text-[#7cbcc9] mb-6 group-hover:bg-[#b5d7e0] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#242424] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#242424]/70 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section on cream bg */}
      <section className="relative w-full py-20 bg-[#f6ecde]">
        <div className="max-w-6xl mx-auto px-8 relative left-1/2 transform -translate-x-1/2">
          <div
            className="rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/50 border border-[#e8e0d4]"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <p className="text-3xl md:text-5xl font-bold text-[#f54038]">
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </p>
                <p className="text-[#8a8a8a] text-sm tracking-wider uppercase mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
