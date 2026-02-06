"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-[#fff5ec]"
    >
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-[#b5d7e0] text-sm tracking-[0.3em] uppercase mb-4 font-semibold">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#242424] mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-[2px] bg-[#f54038] mx-auto mb-6" />
          <p className="text-[#5a5a5a] max-w-2xl mx-auto text-lg">
            Have questions or want to place an order? We&apos;d love to hear
            from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1" data-aos="fade-right">
            <div className="space-y-8">
              {[
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  ),
                  label: "Email",
                  value: "contact@brylo.com",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  ),
                  label: "Phone",
                  value: "+216 XX XXX XXX",
                },
                {
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  ),
                  label: "Location",
                  value: "Tunisia",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#b5d7e0]/20 text-[#7cbcc9] flex items-center justify-center group-hover:bg-[#b5d7e0] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#8a8a8a] text-sm tracking-wider uppercase">
                      {item.label}
                    </p>
                    <p className="text-[#242424] font-medium mt-1">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-12" data-aos="fade-up" data-aos-delay="400">
              <p className="text-[#8a8a8a] text-sm tracking-wider uppercase mb-4">
                Follow Us
              </p>
              <div className="flex gap-4">
                {["Instagram", "Facebook", "TikTok"].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full border border-[#e8e0d4] flex items-center justify-center text-[#8a8a8a] hover:border-[#b5d7e0] hover:text-[#7cbcc9] hover:bg-[#b5d7e0]/10 transition-all duration-300"
                  >
                    <span className="text-xs font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1" data-aos="fade-left" data-aos-delay="200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-[#8a8a8a] text-sm tracking-wider uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-[#e8e0d4] rounded-xl px-5 py-3.5 text-[#242424] placeholder-[#c0b8ae] focus:border-[#b5d7e0] focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[#8a8a8a] text-sm tracking-wider uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white border border-[#e8e0d4] rounded-xl px-5 py-3.5 text-[#242424] placeholder-[#c0b8ae] focus:border-[#b5d7e0] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-[#8a8a8a] text-sm tracking-wider uppercase block mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-white border border-[#e8e0d4] rounded-xl px-5 py-3.5 text-[#242424] placeholder-[#c0b8ae] focus:border-[#b5d7e0] focus:outline-none transition-colors duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="text-[#8a8a8a] text-sm tracking-wider uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white border border-[#e8e0d4] rounded-xl px-5 py-3.5 text-[#242424] placeholder-[#c0b8ae] focus:border-[#b5d7e0] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#f54038] text-white font-bold tracking-wider uppercase text-sm rounded-xl hover:bg-[#ff6b63] transition-all duration-300 coral-glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
