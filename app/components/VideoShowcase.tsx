"use client";

export default function VideoShowcase() {
  return (
    <section
      className="relative w-full py-24 md:py-32 bg-[#f6ecde] overflow-hidden"
      style={{ marginTop: "100px" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#7cbcc9]/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#b3fae8]/10 blur-3xl" />

      <div className="max-w-6xl mx-auto px-8 relative z-10 left-1/2 transform -translate-x-1/2">
        {/* Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p className="text-[#7cbcc9] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            See It In Action
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6">
            Experience BRYLO
          </h2>
          <div className="w-24 h-[2px] bg-[#f54038] mx-auto mb-6" />
          <p className="text-[#242424]/70 max-w-2xl mx-auto text-lg">
            Watch how BRYLO revolutionizes your cleaning routine
          </p>
        </div>

        {/* Video Container */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#7cbcc9]/20 border-4 border-white"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            {/* 16:9 Aspect Ratio */}
            <iframe
              src="https://player.vimeo.com/video/1162606625?badge=0&autopause=0&player_id=0&app_id=58479"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="BRYLO Presentation"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <p className="text-[#242424]/60 italic">
            One innovative system. Countless cleaning possibilities.
          </p>
        </div>
      </div>

      {/* Vimeo Script */}
      <script src="https://player.vimeo.com/api/player.js" async />
    </section>
  );
}
