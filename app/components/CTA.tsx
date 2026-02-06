"use client";

export default function CTA() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#f6ecde] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-[#b5d7e0]/20" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full border-2 border-[#fce0cf]/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#b5d7e0]/5 blur-3xl" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 text-center">
        <div data-aos="zoom-in">
          <p className="text-[#f54038] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
            Limited Time Offer
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#242424] mb-6 leading-tight">
            Ready to Elevate
            <br />
            <span className="text-[#7cbcc9]">Your Style?</span>
          </h2>
          <p className="text-[#5a5a5a] text-lg max-w-2xl mx-auto mb-10">
            Join thousands of satisfied customers who have already discovered
            the Brylo difference. Don&apos;t miss out on our exclusive
            collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-10 py-4 bg-[#f54038] text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-[#ff6b63] transition-all duration-300 coral-glow"
            >
              Shop the Collection
            </a>
            <a
              href="#gallery"
              className="px-10 py-4 border-2 border-[#242424]/15 text-[#242424] font-bold tracking-wider uppercase text-sm rounded-full hover:border-[#b5d7e0] hover:bg-[#b5d7e0]/10 transition-all duration-300"
            >
              Browse Gallery
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            "Free Shipping",
            "30-Day Returns",
            "Secure Payment",
            "Premium Quality",
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-[#8a8a8a]">
              <svg
                className="w-4 h-4 text-[#b5d7e0]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm tracking-wider">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
