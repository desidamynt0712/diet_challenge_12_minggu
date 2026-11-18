import React, { useState } from 'react';
import { Clock, Flame, Maximize2, Utensils } from 'lucide-react';
import { CATALOG_TABS } from '../data/programData';
import { LightboxItem } from '../config/images';
import { SafeImage } from './LightboxModal';

interface RecipeCatalogSectionProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

export const RecipeCatalogSection: React.FC<RecipeCatalogSectionProps> = ({
  onOpenLightbox,
}) => {
  const [activeId, setActiveId] = useState<string>(CATALOG_TABS[0].id);
  const activeTab = CATALOG_TABS.find((t) => t.id === activeId) || CATALOG_TABS[0];

  return (
    <section
      id="katalog-resep"
      className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7] bg-[#F3EFE6]/55"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
            MINGGU 05 · PILIH GAYA MENUMU
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Pilih menunya,{' '}
            <span className="font-serif italic font-normal text-[#4A6B53]">
              kalorinya udah dihitungin.
            </span>
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Bagianmu cuma masak 15–20 menit atau pesan sesuai contekan, lalu centang tracker.
            Klik kategori di bawah untuk lihat halaman resep aslinya.
          </p>
        </div>

        {/* 6 Interactive Category Tabs */}
        <div
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5"
          role="tablist"
          aria-label="Kategori 400 resep dan panduan"
        >
          {CATALOG_TABS.map((tab) => {
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(tab.id)}
                className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer flex flex-col justify-between min-h-[76px] ${
                  isActive
                    ? 'bg-[#4A6B53] border-[#4A6B53] text-white shadow-xs'
                    : 'bg-white border-[#D5E0D7] text-[#1F2937] hover:bg-[#FAF6F0]'
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold leading-snug">
                  {tab.title}
                </span>
                <span
                  className={`mt-1.5 font-mono text-[11px] tabular-nums ${
                    isActive ? 'text-[#FAF6F0]/90' : 'text-[#4A6B53]'
                  }`}
                >
                  {tab.range}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Catalog Panel */}
        <div className="mt-6 bg-white rounded-2xl border border-[#D5E0D7] p-5 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Real Capture Document Image */}
            <div className="lg:col-span-6 flex flex-col">
              <button
                type="button"
                onClick={() =>
                  onOpenLightbox({
                    src: activeTab.image,
                    title: activeTab.imageTitle,
                    caption: activeTab.imageCaption,
                  })
                }
                className="relative flex-1 rounded-xl border border-[#D5E0D7] bg-[#FAF6F0] overflow-hidden cursor-zoom-in group min-h-[300px]"
              >
                <SafeImage
                  src={activeTab.image}
                  alt={activeTab.imageTitle}
                  fallbackTitle={activeTab.imageTitle}
                  className="w-full h-full object-contain bg-[#FAF6F0] transition-transform duration-300 group-hover:scale-[1.015]"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F2937]/80 text-white text-xs font-medium">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Perbesar halaman</span>
                </span>
              </button>
              <p className="mt-3 text-xs text-[#4B5563]">
                {activeTab.imageCaption}
              </p>
            </div>

            {/* Right: Highlighted Recipes / Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#4A6B53]">
                  <span>{activeTab.title}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{activeTab.range}</span>
                </div>
                <p className="mt-2 text-sm sm:text-base text-[#4B5563] leading-relaxed">
                  {activeTab.subtitle}
                </p>

                <div className="mt-6 space-y-4">
                  {activeTab.highlights.map((item) => (
                    <div
                      key={item.code}
                      className="rounded-xl bg-[#FAF6F0] border border-[#D5E0D7] p-4 sm:p-5"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-bold text-[#1F2937]">
                          <span className="font-mono text-xs text-[#9E525D] mr-2">
                            {item.code}
                          </span>
                          {item.name}
                        </h3>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#4A6B53] tabular-nums">
                        <span className="inline-flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-[#9E525D]" />
                          {item.calories}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5" />
                          {item.protein}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.time}
                        </span>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                        <strong className="text-[#1F2937] font-semibold">Bahan:</strong>{' '}
                        {item.ingredients}
                      </p>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                        <strong className="text-[#1F2937] font-semibold">Cara singkat:</strong>{' '}
                        {item.method}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D5E0D7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs sm:text-sm text-[#4B5563]">{activeTab.note}</p>
                <a
                  href="#checkout"
                  className="text-xs sm:text-sm font-semibold text-[#9E525D] hover:underline whitespace-nowrap shrink-0"
                >
                  Akses semua 400 resep →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
