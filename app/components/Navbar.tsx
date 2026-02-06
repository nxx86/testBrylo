"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent py-5">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-start">
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
      </div>
    </nav>
  );
}
