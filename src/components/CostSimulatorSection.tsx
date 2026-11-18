import React, { useState } from 'react';
import { ArrowRight, Calculator } from 'lucide-react';

const formatRupiah = (val: number) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(val);

export const CostSimulatorSection: React.FC = () => {
  const [weeks, setWeeks] = useState<number>(12);
  const [dailyCost, setDailyCost] = useState<number>(65000);

  const bundlePrice = 57000;
  const totalDays = weeks * 7;
  const cateringTotal = totalDays * dailyCost;
  const savings = Math.max(0, cateringTotal - bundlePrice);
  const weeklyMarketBudget = 254000;

  return (
    <section
      id="simulasi-biaya"
      className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
            MINGGU 10 · SIMULASI BIAYA
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Coba bandingkan sama{' '}
            <span className="font-serif italic font-normal text-[#9E525D]">
              ongkos katering atau ojolmu.
            </span>
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Geser dua slider di bawah buat lihat selisih pengeluaranmu selama program
            berlangsung.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 2 Interactive Sliders */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#D5E0D7] p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div className="space-y-8">
              {/* Slider 1 */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="slider-weeks"
                    className="text-sm sm:text-base font-semibold text-[#1F2937]"
                  >
                    Durasi diet (Minggu)
                  </label>
                  <span className="font-mono text-lg font-bold text-[#4A6B53] tabular-nums">
                    {weeks} minggu ({totalDays} hari)
                  </span>
                </div>
                <input
                  id="slider-weeks"
                  type="range"
                  min={4}
                  max={12}
                  step={1}
                  value={weeks}
                  onChange={(e) => setWeeks(Number(e.target.value))}
                  className="diet-slider w-full mt-4"
                />
                <div className="mt-2 flex justify-between font-mono text-xs text-[#4B5563]">
                  <span>4 minggu</span>
                  <span>8 minggu</span>
                  <span>12 minggu</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <label
                    htmlFor="slider-daily"
                    className="text-sm sm:text-base font-semibold text-[#1F2937]"
                  >
                    Biaya katering diet / jajan ojol per hari
                  </label>
                  <span className="font-mono text-lg font-bold text-[#9E525D] tabular-nums">
                    {formatRupiah(dailyCost)}
                  </span>
                </div>
                <input
                  id="slider-daily"
                  type="range"
                  min={35000}
                  max={150000}
                  step={5000}
                  value={dailyCost}
                  onChange={(e) => setDailyCost(Number(e.target.value))}
                  className="diet-slider w-full mt-4"
                />
                <div className="mt-2 flex justify-between font-mono text-xs text-[#4B5563] tabular-nums">
                  <span>Rp35.000</span>
                  <span>Rp90.000</span>
                  <span>Rp150.000</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#D5E0D7] flex items-center gap-3 text-xs sm:text-sm text-[#4B5563]">
              <Calculator className="w-4 h-4 text-[#4A6B53] shrink-0" />
              <span>
                Perhitungan otomatis:{' '}
                <span className="font-mono text-[#1F2937] tabular-nums">
                  {totalDays} hari × {formatRupiah(dailyCost)}
                </span>
              </span>
            </div>
          </div>

          {/* Right: Real-Time Comparison Result */}
          <div className="lg:col-span-6 bg-[#F3EFE6] rounded-2xl border border-[#D5E0D7] p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-[#D5E0D7] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-mono uppercase text-[#4B5563]">
                    PENGELUARAN KATERING / OJOL ({weeks} MINGGU)
                  </p>
                  <p className="text-xs text-[#4B5563] mt-0.5">
                    Berhenti bayar = menu diet ikut berhenti
                  </p>
                </div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#9E525D] tabular-nums line-through decoration-[#9E525D]/60">
                  {formatRupiah(cateringTotal)}
                </p>
              </div>

              <div className="bg-white rounded-xl border border-[#4A6B53] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-mono uppercase text-[#4A6B53]">
                    PAKET LENGKAP DIET CHALLENGE 12 MINGGU (11 FILE)
                  </p>
                  <p className="text-xs text-[#4B5563] mt-0.5">
                    Sekali bayar, semua file &amp; 400 resep jadi milikmu selamanya
                  </p>
                </div>
                <p className="font-mono text-xl sm:text-2xl font-bold text-[#4A6B53] tabular-nums">
                  {formatRupiah(bundlePrice)}
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#4A6B53] text-white p-5 sm:p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-[#FAF6F0]/80">
                HASIL PERBANDINGAN
              </p>
              <p className="mt-2 text-lg sm:text-xl font-bold leading-snug">
                Selisihnya{' '}
                <span className="font-mono underline decoration-[#FAF6F0]/50 underline-offset-4 tabular-nums">
                  {formatRupiah(savings)}
                </span>
                ! Dengan panduan ini, belanja dapurmu di pasar cuma ~
                <span className="font-mono tabular-nums">
                  {formatRupiah(weeklyMarketBudget)}
                </span>
                /minggu.
              </p>
              <div className="mt-4">
                <a
                  href="#checkout"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-full bg-white text-[#1F2937] hover:bg-[#FAF6F0] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                >
                  <span>Ambil Paket Hemat Rp57.000</span>
                  <ArrowRight className="w-4 h-4 text-[#9E525D]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
