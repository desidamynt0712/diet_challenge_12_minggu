import React, { useState } from 'react';
import { ArrowRight, ChevronDown, FolderArchive } from 'lucide-react';
import { FAQ_ITEMS } from '../data/programData';

export const FaqAndClosingSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7]">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
              MINGGU 12 · TANYA JAWAB PRAKTIS
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
              Pertanyaan yang paling sering ditanyain{' '}
              <span className="font-serif italic font-normal text-[#4A6B53]">
                sebelum mulai.
              </span>
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[#D5E0D7] bg-white rounded-2xl border border-[#D5E0D7] overflow-hidden">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF6F0]/60 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#1F2937] leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#4A6B53] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Closing Export-Modal Style Card */}
          <div className="mt-14 bg-[#F3EFE6] rounded-2xl border border-[#D5E0D7] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#4A6B53]">
                  <FolderArchive className="w-4 h-4" />
                  <span>Diet_Challenge_12_Minggu_Bundle.zip</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2937]">
                  Siap mulai 12 minggu yang lebih santai dan masuk akal?
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#4B5563]">
                  <span>11 File Lengkap</span>
                  <span aria-hidden="true">·</span>
                  <span>400 Resep + 24 Ilustrasi</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono font-semibold text-[#1F2937]">
                    Rp57.000 sekali bayar
                  </span>
                </div>
              </div>

              <a
                href="http://lynk.id/dietbarengputri/gnqwk54x0yne/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#9E525D] hover:bg-[#86424C] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 shadow-sm"
              >
                <span>Ambil Paket Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer className="py-10 pb-24 md:pb-12 px-4 sm:px-6 text-xs sm:text-sm text-[#4B5563]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium text-[#1F2937]">
            <span className="w-2 h-2 rounded-full bg-[#4A6B53]" aria-hidden="true" />
            <span>Diet Challenge 12 Minggu</span>
            <span className="text-[#4B5563] font-normal">
              · Sistem Turun BB &amp; Kunci Metabolisme
            </span>
          </div>
          <p className="text-xs text-[#4B5563]">
            © {new Date().getFullYear()} dietbarengputri · Produk Digital Akses Selamanya
          </p>
        </div>
      </footer>

      {/* Compact Sticky Mobile CTA Bar (<= 54px height, strictly within 15% mobile sticky cap) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#FAF6F0]/95 backdrop-blur-md border-t border-[#D5E0D7] px-4 py-2">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-bold text-[#1F2937] truncate">
              11 File + 400 Resep
            </p>
            <p className="font-mono text-xs text-[#9E525D] font-bold tabular-nums">
              Rp57.000 <span className="line-through text-[#4B5563] font-normal">Rp399rb</span>
            </p>
          </div>
          <a
            href="#checkout"
            className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] rounded-full bg-[#9E525D] text-white text-xs font-semibold whitespace-nowrap shrink-0"
          >
            <span>Ambil Paket</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </>
  );
};
