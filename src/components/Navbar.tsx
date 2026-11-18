import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#D5E0D7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-tight text-[#1F2937] whitespace-nowrap shrink-0"
        >
          <span
            className="w-2.5 h-2.5 rounded-full bg-[#4A6B53] shrink-0"
            aria-hidden="true"
          />
          <span>diet-challenge</span>
          <span className="hidden lg:inline font-normal text-[#4B5563]">
            · Program 12 Minggu + 400 Resep
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4B5563]"
        >
          <a
            href="#intip-isi"
            className="hover:text-[#1F2937] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Intip Isi
          </a>
          <a
            href="#katalog-resep"
            className="hover:text-[#1F2937] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            400 Resep
          </a>
          <a
            href="#cara-kerja"
            className="hover:text-[#1F2937] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Cara Kerja
          </a>
          <a
            href="#simulasi-biaya"
            className="hover:text-[#1F2937] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Simulasi Biaya
          </a>
          <a
            href="#faq"
            className="hover:text-[#1F2937] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="shrink-0">
          <a
            href="#checkout"
            className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-full bg-[#9E525D] hover:bg-[#86424C] text-white text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>Ambil sekarang · Rp57rb</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
