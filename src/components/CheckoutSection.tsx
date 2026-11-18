import React, { useState } from 'react';
import { Check, ExternalLink, Lock, Mail, ShieldCheck } from 'lucide-react';
import { PAYMENT_METHODS } from '../data/programData';

const CHECKOUT_URL = 'http://lynk.id/dietbarengputri/gnqwk54x0yne/checkout';

export const CheckoutSection: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0].id);

  const selectedMethodObj =
    PAYMENT_METHODS.find((m) => m.id === selectedPayment) || PAYMENT_METHODS[0];

  return (
    <section
      id="checkout"
      className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7] bg-[#F3EFE6]/70"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
            AMBIL PAKET LENGKAP
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Harga 11 File Paket Lengkap ini{' '}
            <span className="line-through text-[#9E525D] decoration-2">Rp399.000</span>.{' '}
            <span className="font-serif italic font-normal text-[#4A6B53]">
              Khusus hari ini nggak sampai Rp100.000.
            </span>
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Tapi khusus lewat halaman ini, kamu{' '}
            <strong className="text-[#1F2937]">TIDAK PERLU</strong> membayar Rp399.000.
            Cukup sekali bayar hari ini dan semua file otomatis terkirim ke Email kamu.
          </p>
        </div>

        {/* Highlighted Price Anchor Card */}
        <div className="mt-8 bg-white rounded-2xl border border-[#D5E0D7] p-6 sm:p-8 text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-[#4A6B53]">
            CUKUP SEKALI BAYAR HARI INI
          </p>
          <div className="mt-2 flex flex-wrap items-baseline justify-center gap-3">
            <span className="font-mono text-lg sm:text-xl text-[#4B5563] line-through tabular-nums">
              Rp399.000
            </span>
            <span className="font-mono text-4xl sm:text-5xl font-bold text-[#9E525D] tabular-nums">
              Rp57.000
            </span>
            <span className="font-mono text-sm sm:text-base font-semibold text-[#4A6B53]">
              SAJA! (Hemat 85%)
            </span>
          </div>

          <div className="mt-4 max-w-xl mx-auto rounded-xl bg-[#FAF6F0] border border-[#D5E0D7] px-4 py-3.5 text-xs sm:text-sm text-[#1F2937] leading-relaxed">
            Artinya kamu cuma menyisihkan{' '}
            <strong className="font-mono text-[#4A6B53]">Rp142 per resep</strong> atau{' '}
            <strong className="font-mono text-[#4A6B53]">Rp678 per hari</strong> selama 12
            minggu untuk punya panduan tubuh sehat, langsing, dan bertenaga seumur hidup!
          </div>

          <div className="mt-5">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-[#9E525D] hover:bg-[#86424C] text-white text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-sm"
            >
              <span>AMBIL PROMO Rp57.000 SEKARANG SEBELUM HARGA NAIK MINGGU DEPAN</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>

        {/* Ringkasan Checkout Langsung ke Lynk.id */}
        <div
          id="form-checkout"
          className="mt-6 bg-white rounded-2xl border border-[#D5E0D7] shadow-sm overflow-hidden p-6 sm:p-8 space-y-8"
        >
          {/* Step 1: Paket */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#4A6B53] text-white font-mono text-xs font-bold inline-flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1F2937]">
                Paket yang Kamu Dapatkan
              </h3>
            </div>

            <div className="mt-4 rounded-xl bg-[#FAF6F0] border-2 border-[#4A6B53] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#1F2937]">
                  <Check className="w-4 h-4 text-[#4A6B53]" />
                  Paket Lengkap Diet Challenge 12 Minggu
                </span>
                <p className="text-xs sm:text-sm text-[#4B5563]">
                  11 File Digital (DOCX, XLSX, PDF) + 400 Resep + 24 Ilustrasi Olahraga +
                  Tracker Excel + 25 Prompt AI
                </p>
                <p className="font-mono text-xs text-[#9E525D] font-semibold">
                  Hemat Rp342.000 (85% OFF) · Setara Rp142/resep · Akses Selamanya
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <p className="font-mono text-sm text-[#4B5563] line-through tabular-nums">
                  Rp399.000
                </p>
                <p className="font-mono text-2xl sm:text-3xl font-bold text-[#1F2937] tabular-nums">
                  Rp57.000
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Pengiriman Otomatis */}
          <div className="pt-6 border-t border-[#D5E0D7]">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#4A6B53] text-white font-mono text-xs font-bold inline-flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1F2937]">
                Pengiriman Link Akses Otomatis
              </h3>
            </div>

            <div className="mt-4 rounded-xl bg-[#FAF6F0] border border-[#D5E0D7] p-4 flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#4A6B53] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#1F2937]">Kirim Otomatis ke Email</p>
                <p className="text-xs text-[#4B5563] mt-0.5">
                  Masukkan email aktifmu di halaman checkout Lynk.id untuk menerima link
                  unduh instan seluruh 11 file agar bisa dibuka kapan saja di HP maupun laptop.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Metode Pembayaran yang Tersedia */}
          <div className="pt-6 border-t border-[#D5E0D7]">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#4A6B53] text-white font-mono text-xs font-bold inline-flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#1F2937]">
                Metode Pembayaran yang Didukung
              </h3>
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5">
              {PAYMENT_METHODS.map((pm) => {
                const active = pm.id === selectedPayment;
                return (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setSelectedPayment(pm.id)}
                    className={`px-4 py-2.5 min-h-[42px] rounded-full text-xs sm:text-sm font-medium border transition-colors cursor-pointer whitespace-nowrap ${
                      active
                        ? 'bg-[#4A6B53] border-[#4A6B53] text-white'
                        : 'bg-[#FAF6F0] border-[#D5E0D7] text-[#1F2937] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    {pm.label}
                  </button>
                );
              })}
            </div>
            <p className="mt-2.5 text-xs text-[#4B5563]">
              <strong className="text-[#1F2937]">{selectedMethodObj.label}</strong> —{' '}
              {selectedMethodObj.note} (pilih langsung saat checkout).
            </p>
          </div>

          {/* Total Summary & Direct Lynk.id Checkout CTA */}
          <div className="pt-6 border-t border-[#D5E0D7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase text-[#4B5563]">
                TOTAL BAYAR HARI INI
              </p>
              <div className="flex items-baseline gap-2.5 mt-0.5">
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#1F2937] tabular-nums">
                  Rp57.000
                </span>
                <span className="text-xs text-[#4A6B53] font-medium">
                  Sekali bayar · Bebas biaya bulanan
                </span>
              </div>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 min-h-[48px] rounded-full bg-[#9E525D] hover:bg-[#86424C] text-white text-sm sm:text-base font-semibold transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>Checkout &amp; Bayar Sekarang · Rp57.000</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#4B5563] pt-1">
            <span className="inline-flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#4A6B53]" />
              <span>
                Link resmi:{' '}
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#1F2937] underline underline-offset-2 hover:text-[#4A6B53]"
                >
                  lynk.id/dietbarengputri/gnqwk54x0yne/checkout
                </a>
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A6B53]" />
              <span>File langsung terbuka setelah pembayaran berhasil</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
