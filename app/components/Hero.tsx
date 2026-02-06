"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  { image: "/images/pubfinal.png" },
  { image: "/images/pubclothes.png" },
  { image: "/images/pubfloor.png" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 1500);
    },
    [isAnimating],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Fullscreen background images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Brylo"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Bottom gradient blur overlay — blur increases toward the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[25%] z-10 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[20%] backdrop-blur-[0.5px] [mask-image:linear-gradient(to_bottom,transparent,black)]" />
        <div className="absolute inset-x-0 top-[20%] h-[20%] backdrop-blur-[1px]" />
        <div className="absolute inset-x-0 top-[40%] h-[20%] backdrop-blur-[3px]" />
        <div className="absolute inset-x-0 top-[60%] h-[20%] backdrop-blur-[6px]" />
        <div className="absolute inset-x-0 top-[80%] h-[20%] backdrop-blur-[10px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full">
        <div className="max-w-6xl mx-auto px-8 h-full relative left-1/2 -translate-x-1/2 ">
          <div className="flex items-end justify-between h-full pb-20">
            {/* Left — Title */}
            <div>
              <h1 className="font-inter text-4xl md:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.15] drop-shadow-lg max-w-xl">
                One soap. Infinite
                <br />
                cleaning solutions.
              </h1>
            </div>

            {/* Right — Buttons */}
            <div className="flex flex-col items-end gap-4">
              <div className="flex gap-4">
                <a href="#collection" className="neon-button">
                  How it works
                </a>
                <a href="#about" className="neon-button neon-button-outline">
                  See features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators — centered */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-[6px] rounded-full transition-all duration-500 ${
              index === current
                ? "w-14 bg-[#f54038]"
                : "w-6 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
