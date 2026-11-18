import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Check, Search } from 'lucide-react';
import { HERO_TABS } from '../data/programData';
import { LightboxItem } from '../config/images';
import { SafeImage } from './LightboxModal';

interface HeroSectionProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenLightbox }) => {
  const [activeTabId, setActiveTabId] = useState<string>(HERO_TABS[0].id);
  const activeTab = HERO_TABS.find((t) => t.id === activeTabId) || HERO_TABS[0];

  return (
    <section className="pt-10 sm:pt-14 pb-16 sm:pb-24 px-4 sm:px-6 border-b border-[#D5E0D7]">
      <div className="max-w-6xl mx-auto">
        {/* Editorial Intro Block */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
            MINGGU 00 · MULAI DARI HARI KE-0
          </p>

          <h1
            className="mt-4 font-bold tracking-tight text-[#1F2937] leading-[1.12]"
            style={{ fontSize: 'clamp(2.15rem, 4.3vw, 3.6rem)' }}
          >
            Diet 12 minggu yang{' '}
            <span className="font-serif italic font-normal text-[#4A6B53]">
              tetap makan nasi
            </span>{' '}
            dan nggak bikin timbangan naik lagi.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-2xl mx-auto">
            Buka panduannya, pilih menu dari 400 resep lokal &amp; kafe, lalu centang
            tracker harianmu. Kalori, takaran sendok, jadwal olahraga rumahan
            berilustrasi, sampai fase pengunci berat badan sudah dihitungin buat kamu.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#checkout"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#9E525D] hover:bg-[#86424C] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Ambil Paket Lengkap · Rp57.000</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#intip-isi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white hover:bg-[#F3EFE6] text-[#1F2937] border border-[#D5E0D7] text-sm sm:text-base font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <span>Intip isi halaman aslinya</span>
              <ArrowDown className="w-4 h-4 text-[#4A6B53]" />
            </a>
          </div>

          {/* 3 Clean Unboxed Micro-Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#4B5563]">
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#4A6B53]" />
              <span>Sekali bayar Rp57.000</span>
            </span>
            <span className="text-[#D5E0D7]" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#4A6B53]" />
              <span>11 file lengkap (DOCX, XLSX, PDF)</span>
            </span>
            <span className="text-[#D5E0D7]" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#4A6B53]" />
              <span>100% bahan pasar lokal</span>
            </span>
          </div>
        </div>

        {/* Interactive 5-Tab Browser/Tablet Showcase Frame */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-[#D5E0D7] shadow-sm overflow-hidden">
          {/* Tab Bar */}
          <div className="bg-[#F3EFE6] border-b border-[#D5E0D7] px-3 sm:px-5 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
            <div
              className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0"
              role="tablist"
              aria-label="Pratinjau isi bundle"
            >
              {HERO_TABS.map((tab) => {
                const isActive = tab.id === activeTab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-3.5 py-2 min-h-[40px] rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#4A6B53] text-white shadow-xs'
                        : 'bg-white/70 text-[#4B5563] hover:bg-white hover:text-[#1F2937] border border-[#D5E0D7]/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenLightbox({
                  src: activeTab.image,
                  title: activeTab.title,
                  caption: activeTab.caption,
                })
              }
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg bg-white hover:bg-[#FAF6F0] text-[#1F2937] border border-[#D5E0D7] text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer self-end lg:self-auto"
            >
              <Search className="w-3.5 h-3.5 text-[#4A6B53]" />
              <span>Klik gambar untuk perbesar</span>
            </button>
          </div>

          {/* Active Image Viewport */}
          <div
            onClick={() =>
              onOpenLightbox({
                src: activeTab.image,
                title: activeTab.title,
                caption: activeTab.caption,
              })
            }
            className="relative bg-[#FAF6F0] cursor-zoom-in group"
          >
            <div className="aspect-16/10 sm:aspect-16/9 w-full overflow-hidden flex items-center justify-center bg-[#F3EFE6]">
              <SafeImage
                src={activeTab.image}
                alt={activeTab.title}
                fallbackTitle={activeTab.title}
                className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </div>

            {/* Subtle bottom info bar */}
            <div className="px-4 sm:px-6 py-4 bg-white border-t border-[#D5E0D7] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#4A6B53]">
                  <span>{activeTab.badge}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-sans font-semibold text-sm text-[#1F2937]">
                    {activeTab.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-1">{activeTab.caption}</p>
              </div>
              <span className="text-xs font-medium text-[#9E525D] whitespace-nowrap shrink-0">
                Ketuk untuk zoom layar penuh →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
