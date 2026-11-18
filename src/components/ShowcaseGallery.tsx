import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, Maximize2, Presentation } from 'lucide-react';
import { SHOWCASE_BANNERS } from '../data/programData';
import { LightboxItem } from '../config/images';
import { SafeImage } from './LightboxModal';

interface ShowcaseGalleryProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

export const ShowcaseGallery: React.FC<ShowcaseGalleryProps> = ({ onOpenLightbox }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [carouselIdx, setCarouselIdx] = useState(0);

  const activeSlide = SHOWCASE_BANNERS[carouselIdx];

  const handlePrev = () => {
    setCarouselIdx((prev) => (prev === 0 ? SHOWCASE_BANNERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCarouselIdx((prev) => (prev === SHOWCASE_BANNERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="intip-isi" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
              MINGGU 03 · BUKAN SEKADAR TEORI
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
              Intip langsung{' '}
              <span className="font-serif italic font-normal text-[#4A6B53]">
                isi halaman
              </span>{' '}
              yang bakal kamu dapatkan.
            </h2>
            <p className="mt-3 text-base text-[#4B5563]">
              Semua file disusun rapi dengan tabel siap pakai, takaran jelas, dan
              ilustrasi visual. Klik gambar mana saja untuk memperbesar.
            </p>
          </div>

          {/* Interactive View Mode Switch */}
          <div className="inline-flex items-center gap-1 p-1 bg-[#F3EFE6] border border-[#D5E0D7] rounded-xl self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-[#1F2937] shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1F2937]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Tampilan 2×2</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('carousel')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                viewMode === 'carousel'
                  ? 'bg-white text-[#1F2937] shadow-xs'
                  : 'text-[#4B5563] hover:text-[#1F2937]'
              }`}
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Mode Fokus</span>
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SHOWCASE_BANNERS.map((banner) => (
              <article
                key={banner.id}
                className="bg-white rounded-2xl border border-[#D5E0D7] overflow-hidden flex flex-col group"
              >
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox({
                      src: banner.image,
                      title: banner.title,
                      caption: banner.description,
                    })
                  }
                  className="relative aspect-16/11 w-full bg-[#F3EFE6] overflow-hidden text-left cursor-zoom-in border-b border-[#D5E0D7]"
                >
                  <SafeImage
                    src={banner.image}
                    alt={banner.title}
                    fallbackTitle={banner.title}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F2937]/80 text-white text-xs font-medium backdrop-blur-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Perbesar</span>
                  </span>
                </button>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#4A6B53]">
                      <span>{banner.tag}</span>
                    </div>
                    <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#1F2937] leading-snug">
                      {banner.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                      {banner.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#D5E0D7]/70 flex flex-wrap items-center gap-2 text-xs text-[#4B5563]">
                    {banner.highlights.map((hl, idx) => (
                      <React.Fragment key={hl}>
                        {idx > 0 && <span aria-hidden="true">·</span>}
                        <span className="font-medium text-[#1F2937]">{hl}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 bg-white rounded-2xl border border-[#D5E0D7] overflow-hidden">
            <div className="px-4 sm:px-6 py-3.5 bg-[#F3EFE6] border-b border-[#D5E0D7] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {SHOWCASE_BANNERS.map((banner, idx) => (
                  <button
                    key={banner.id}
                    type="button"
                    onClick={() => setCarouselIdx(idx)}
                    className={`px-3 py-1.5 min-h-[36px] rounded-lg font-mono text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      idx === carouselIdx
                        ? 'bg-[#4A6B53] text-white'
                        : 'bg-white text-[#4B5563] hover:text-[#1F2937] border border-[#D5E0D7]'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Halaman sebelumnya"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white hover:bg-[#FAF6F0] border border-[#D5E0D7] text-[#1F2937] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Halaman berikutnya"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white hover:bg-[#FAF6F0] border border-[#D5E0D7] text-[#1F2937] cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenLightbox({
                  src: activeSlide.image,
                  title: activeSlide.title,
                  caption: activeSlide.description,
                })
              }
              className="w-full bg-[#FAF6F0] block cursor-zoom-in border-b border-[#D5E0D7]"
            >
              <SafeImage
                src={activeSlide.image}
                alt={activeSlide.title}
                fallbackTitle={activeSlide.title}
                className="w-full max-h-[580px] object-contain mx-auto"
              />
            </button>

            <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-[#4A6B53]">{activeSlide.tag}</p>
                <h3 className="mt-1 text-xl font-bold text-[#1F2937]">{activeSlide.title}</h3>
                <p className="mt-1.5 text-sm text-[#4B5563] max-w-2xl">
                  {activeSlide.description}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  onOpenLightbox({
                    src: activeSlide.image,
                    title: activeSlide.title,
                    caption: activeSlide.description,
                  })
                }
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[40px] rounded-full bg-[#9E525D] hover:bg-[#86424C] text-white text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-center"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Zoom Layar Penuh</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
