"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-5">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-[200px] h-[200px] overflow-hidden">
            <Image
              src="/images/logofinal.png"
              alt="Brylo Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-[#242424] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-[#242424] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-[#242424] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="glass mx-6 mt-4 rounded-2xl p-6 flex flex-col gap-4"></div>
      </div>
    </nav>
  );
}
