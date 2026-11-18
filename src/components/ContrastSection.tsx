import React from 'react';
import { Check, X } from 'lucide-react';
import { CONTRAST_PAIN_POINTS, CONTRAST_SOLUTION_POINTS } from '../data/programData';

export const ContrastSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
            MINGGU 01 · UDAH PERNAH COBA?
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Udah coba diet berkali-kali,{' '}
            <span className="font-serif italic font-normal text-[#9E525D]">
              tapi ujung-ujungnya
            </span>{' '}
            kayak gini?
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Bukan kamu yang kurang niat. Biasanya metodenya yang terlalu menyiksa sampai
            nggak masuk akal buat dijalanin di tengah kerjaan dan hidup nyata.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Pain Card */}
          <div className="bg-white rounded-2xl border border-[#D5E0D7] p-6 sm:p-8 flex flex-col">
            <div className="pb-4 border-b border-[#D5E0D7]">
              <p className="font-mono text-xs text-[#9E525D] uppercase tracking-wider">
                YANG SERING BIKIN GAGAL
              </p>
              <h3 className="mt-1.5 text-xl font-bold text-[#1F2937]">
                Diet ekstrem yang bikin capek
              </h3>
            </div>

            <ul className="mt-6 space-y-4 flex-1">
              {CONTRAST_PAIN_POINTS.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full bg-[#9E525D]/10 text-[#9E525D] inline-flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <X className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Card */}
          <div className="bg-[#F3EFE6] rounded-2xl border border-[#D5E0D7] p-6 sm:p-8 flex flex-col">
            <div className="pb-4 border-b border-[#D5E0D7]">
              <p className="font-mono text-xs text-[#4A6B53] uppercase tracking-wider">
                SISTEM REALISTIS 12 MINGGU
              </p>
              <h3 className="mt-1.5 text-xl font-bold text-[#1F2937]">
                Yang bikin Diet Challenge 12 Minggu beda
              </h3>
            </div>

            <ul className="mt-6 space-y-4 flex-1">
              {CONTRAST_SOLUTION_POINTS.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-6 h-6 rounded-full bg-[#4A6B53] text-white inline-flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm sm:text-base text-[#1F2937] leading-relaxed">
                    <strong className="font-semibold">{item.lead}</strong>{' '}
                    <span className="text-[#4B5563]">{item.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
