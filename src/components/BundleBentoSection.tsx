import React from 'react';
import { FileSpreadsheet, Maximize2, TrendingDown } from 'lucide-react';
import { BUNDLE_FILES } from '../data/programData';
import { LightboxItem } from '../config/images';
import { SafeImage } from './LightboxModal';

interface BundleBentoSectionProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

export const BundleBentoSection: React.FC<BundleBentoSectionProps> = ({
  onOpenLightbox,
}) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7] bg-[#F3EFE6]/55">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
            MINGGU 09 · ISI BUNDLE LENGKAP
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Satu kali bayar Rp57.000,{' '}
            <span className="font-serif italic font-normal text-[#4A6B53]">
              langsung dapat 11 file ini.
            </span>
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Nggak ada biaya langganan bulanan. Simpan semua file di HP atau laptop, bisa
            diprint ulang kapan saja. Klik pratinjau file untuk melihat halaman aslinya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BUNDLE_FILES.map((file, idx) => (
            <article
              key={file.id}
              className={`bg-white rounded-2xl border border-[#D5E0D7] p-5 flex flex-col justify-between gap-4 ${
                file.span === 'wide' ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#4A6B53]">
                    <span className="font-semibold text-[#1F2937]">
                      FILE #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{file.formats.join(' & ')}</span>
                    <span aria-hidden="true">·</span>
                    <span>{file.pages}</span>
                  </div>

                  <h3 className="mt-2 text-base sm:text-lg font-bold text-[#1F2937] leading-snug">
                    {file.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                    {file.summary}
                  </p>
                </div>

                {/* Preview Thumbnail or Excel Visual */}
                {file.isExcel ? (
                  <div className="w-full sm:w-36 h-28 rounded-xl bg-[#FAF6F0] border border-[#D5E0D7] p-3 flex flex-col justify-between shrink-0">
                    <div className="flex items-center justify-between text-[#4A6B53]">
                      <FileSpreadsheet className="w-5 h-5" />
                      <span className="font-mono text-[10px] font-semibold">.XLSX</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-[#4A6B53] font-semibold">
                        <TrendingDown className="w-3.5 h-3.5" />
                        <span>84 Hari</span>
                      </div>
                      <p className="text-[11px] text-[#4B5563] mt-0.5">
                        3 Sheet + Grafik Otomatis
                      </p>
                    </div>
                  </div>
                ) : file.image ? (
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: file.image!,
                        title: file.title,
                        caption: `${file.formats.join(' & ')} · ${file.pages} — ${file.summary}`,
                      })
                    }
                    className="relative w-full sm:w-36 h-28 rounded-xl border border-[#D5E0D7] bg-[#FAF6F0] overflow-hidden shrink-0 group cursor-zoom-in"
                    aria-label={`Perbesar pratinjau ${file.title}`}
                  >
                    <SafeImage
                      src={file.image}
                      alt={`Pratinjau ${file.title}`}
                      fallbackTitle={file.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
                    />
                    <span className="absolute bottom-1.5 right-1.5 p-1 rounded-md bg-[#1F2937]/75 text-white">
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
