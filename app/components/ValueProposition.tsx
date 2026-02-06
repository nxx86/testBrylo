"use client";

export default function ValueProposition() {
  const values = [
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
            d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
          />
        </svg>
      ),
      title: "Space Optimization",
      desc: "One base product replaces several bulky bottles.",
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
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Cost Reduction",
      desc: "Users only purchase the tablets they need.",
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
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      ),
      title: "Environmental Responsibility",
      desc: "Less plastic packaging, lower carbon footprint, and reduced waste.",
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
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
          />
        </svg>
      ),
      title: "Innovative Thinking",
      desc: "A future-oriented concept aligned with modern consumer behavior.",
    },
  ];

  return (
    <section
      className="relative w-full py-24 md:py-32 bg-[#f6ecde] overflow-hidden"
      style={{ marginTop: "100px" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full border border-[#7cbcc9]/20" />
      <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full border border-[#b5d7e0]/10" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 left-1/2 transform -translate-x-1/2">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[#7cbcc9] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Why BRYLO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6">
            Value Proposition
          </h2>
          <div className="w-24 h-[2px] bg-[#f54038] mx-auto mb-6" />
          <p className="text-[#242424]/70 max-w-2xl mx-auto">
            BRYLO creates value through:
          </p>
        </div>

        {/* Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => (
            <div
              key={index}
              className="card-hover group p-8 rounded-2xl bg-white border border-[#e8e0d4] hover:shadow-lg transition-all duration-300"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#b5d7e0]/20 text-[#7cbcc9] group-hover:bg-[#b5d7e0] group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#242424] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#242424]/70 leading-relaxed text-sm">
                    {value.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ease of Use Highlight */}
        <div
          className="relative rounded-3xl p-10 bg-gradient-to-br from-[#b5d7e0] to-[#7cbcc9] text-center overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ease of Use
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Simple, intuitive, and adaptable for all households.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
