"use client";

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
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "All-in-One System",
    desc: "Replacing multiple cleaning products with one intelligent system",
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
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
    title: "Customizable Solutions",
    desc: "Offering customizable solutions for different tasks",
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
          d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
    title: "Reduce Clutter",
    desc: "Reducing storage needs and clutter",
  },
];

export default function Features() {
  return (
    <section
      className="relative w-full py-24 md:py-32 bg-[#fff5ec] overflow-hidden"
      style={{ marginTop: "100px" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full border border-[#b5d7e0]/20" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full border border-[#b5d7e0]/10" />
      <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-[#b5d7e0]/10" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 left-1/2 transform -translate-x-1/2">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[#b5d7e0] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6">
            Role of BRYLO
          </h2>
          <div className="w-24 h-[2px] bg-[#f54038] mx-auto" />
          <p className="text-[#242424]/70 mt-6 max-w-2xl mx-auto">
            BRYLO simplifies cleaning by:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-hover group p-8 rounded-2xl bg-white border border-[#e8e0d4] text-center hover:shadow-lg transition-all duration-300"
              data-aos={
                index === 0
                  ? "fade-right"
                  : index === 1
                    ? "fade-up"
                    : "fade-left"
              }
              data-aos-duration="1000"
              data-aos-delay={index * 150}
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
  );
}
