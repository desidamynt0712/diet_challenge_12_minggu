import React, { useState } from 'react';
import { Maximize2, CheckCircle2, Sparkles, Dumbbell, ShieldCheck } from 'lucide-react';
import { IMAGES, LightboxItem } from '../config/images';
import { REVERSE_DIETING_STEPS, WEIGHT_BRACKETS } from '../data/programData';
import { SafeImage } from './LightboxModal';

interface HowItWorksSectionProps {
  onOpenLightbox: (item: LightboxItem) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenLightbox,
}) => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [selectedBracketId, setSelectedBracketId] = useState<string>('61-70');
  const [step2View, setStep2View] = useState<'habit' | 'workout1' | 'workout6' | 'ai'>('habit');

  const activeBracket =
    WEIGHT_BRACKETS.find((w) => w.id === selectedBracketId) || WEIGHT_BRACKETS[1];

  const step2Images = {
    habit: {
      src: IMAGES.cap_05,
      title: 'Workbook 12 Minggu & Sistem Habit Stacking',
      caption: 'Peta Tangga Kebiasaan 12 Minggu & Misi Minggu 1: Sugar Detox.',
    },
    workout1: {
      src: IMAGES.cap_06,
      title: 'Ilustrasi Olahraga Minggu 1 (Ramah Lutut)',
      caption: '6 gerakan pemula 20 menit di kamar + Panduan Postur Aman Lutut.',
    },
    workout6: {
      src: IMAGES.cap_07,
      title: 'Ilustrasi Olahraga Minggu 6 (Core Sculpt)',
      caption: 'Rangkaian pengencang perut bawah & pinggang samping tanpa alat.',
    },
    ai: {
      src: IMAGES.cap_04,
      title: '25 Prompt AI Diet & Vision AI Scan Piring',
      caption: 'Tinggal salin prompt ke ChatGPT/Gemini gratis buat hitung piring makan & racik menu kulkas.',
    },
  };

  return (
    <section id="cara-kerja" className="py-16 sm:py-24 px-4 sm:px-6 border-b border-[#D5E0D7]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wider text-[#4A6B53] font-medium uppercase">
            MINGGU 07 · CARA KERJA
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-[#1F2937] leading-tight">
            Tiga langkah dari Hari ke-0 sampai{' '}
            <span className="font-serif italic font-normal text-[#4A6B53]">
              berat badan terkunci
            </span>{' '}
            di Minggu ke-12.
          </h2>
          <p className="mt-3 text-base text-[#4B5563]">
            Klik tiap langkah di bawah untuk melihat simulasi interaktif sekaligus bukti
            halaman dokumen aslinya.
          </p>
        </div>

        {/* 3 Step Switcher Buttons */}
        <div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3"
          role="tablist"
          aria-label="Langkah kerja program 12 minggu"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeStep === 1}
            onClick={() => setActiveStep(1)}
            className={`p-4 sm:p-5 rounded-xl border text-left transition-colors cursor-pointer ${
              activeStep === 1
                ? 'bg-[#4A6B53] border-[#4A6B53] text-white'
                : 'bg-white border-[#D5E0D7] text-[#1F2937] hover:bg-[#F3EFE6]'
            }`}
          >
            <span
              className={`font-mono text-[11px] uppercase tracking-wider ${
                activeStep === 1 ? 'text-[#FAF6F0]/90' : 'text-[#4A6B53]'
              }`}
            >
              LANGKAH 1/3 · HARI KE-0
            </span>
            <p className="mt-1.5 text-base font-bold">
              Cek Target Kalori &amp; Takaran Sendok
            </p>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeStep === 2}
            onClick={() => setActiveStep(2)}
            className={`p-4 sm:p-5 rounded-xl border text-left transition-colors cursor-pointer ${
              activeStep === 2
                ? 'bg-[#4A6B53] border-[#4A6B53] text-white'
                : 'bg-white border-[#D5E0D7] text-[#1F2937] hover:bg-[#F3EFE6]'
            }`}
          >
            <span
              className={`font-mono text-[11px] uppercase tracking-wider ${
                activeStep === 2 ? 'text-[#FAF6F0]/90' : 'text-[#4A6B53]'
              }`}
            >
              LANGKAH 2/3 · MINGGU 1–10
            </span>
            <p className="mt-1.5 text-base font-bold">
              Misi Mingguan, Olahraga 20 Mnt &amp; AI
            </p>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeStep === 3}
            onClick={() => setActiveStep(3)}
            className={`p-4 sm:p-5 rounded-xl border text-left transition-colors cursor-pointer ${
              activeStep === 3
                ? 'bg-[#4A6B53] border-[#4A6B53] text-white'
                : 'bg-white border-[#D5E0D7] text-[#1F2937] hover:bg-[#F3EFE6]'
            }`}
          >
            <span
              className={`font-mono text-[11px] uppercase tracking-wider ${
                activeStep === 3 ? 'text-[#FAF6F0]/90' : 'text-[#4A6B53]'
              }`}
            >
              LANGKAH 3/3 · MINGGU 11–12
            </span>
            <p className="mt-1.5 text-base font-bold">
              Kunci Berat Badan (Reverse Dieting)
            </p>
          </button>
        </div>

        {/* Step Content Panel */}
        <div className="mt-6 bg-white rounded-2xl border border-[#D5E0D7] p-5 sm:p-8">
          {activeStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Mini Calorie Calculator */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <p className="font-mono text-xs text-[#4A6B53] uppercase">
                    SIMULASI HARI KE-0 · TANPA TIMBANGAN DAPUR
                  </p>
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-[#1F2937]">
                    Pilih berat badan awalmu sekarang:
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {WEIGHT_BRACKETS.map((wb) => {
                    const selected = wb.id === selectedBracketId;
                    return (
                      <button
                        key={wb.id}
                        type="button"
                        onClick={() => setSelectedBracketId(wb.id)}
                        className={`px-3.5 py-2 min-h-[40px] rounded-lg font-mono text-xs sm:text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                          selected
                            ? 'bg-[#9E525D] text-white'
                            : 'bg-[#FAF6F0] text-[#1F2937] border border-[#D5E0D7] hover:bg-[#F3EFE6]'
                        }`}
                      >
                        {wb.label}
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-xl bg-[#FAF6F0] border border-[#D5E0D7] p-5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg border border-[#D5E0D7] p-3.5">
                      <p className="text-xs text-[#4B5563]">Target Kalori Wanita</p>
                      <p className="mt-1 font-mono text-lg font-bold text-[#4A6B53] tabular-nums">
                        {activeBracket.womanCal}
                      </p>
                    </div>
                    <div className="bg-white rounded-lg border border-[#D5E0D7] p-3.5">
                      <p className="text-xs text-[#4B5563]">Target Kalori Pria</p>
                      <p className="mt-1 font-mono text-lg font-bold text-[#4A6B53] tabular-nums">
                        {activeBracket.manCal}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#D5E0D7] space-y-2 text-sm">
                    <div className="flex justify-between gap-2">
                      <span className="text-[#4B5563]">Target Protein Harian:</span>
                      <span className="font-mono font-semibold text-[#1F2937] tabular-nums">
                        {activeBracket.protein}
                      </span>
                    </div>
                    <div className="flex justify-between gap-2">
                      <span className="text-[#4B5563]">Pola Makan:</span>
                      <span className="font-medium text-[#1F2937] text-right">
                        {activeBracket.composition}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#D5E0D7] space-y-1.5 text-xs sm:text-sm text-[#4B5563]">
                    <p>
                      <strong className="text-[#1F2937]">Takaran Nasi:</strong>{' '}
                      {activeBracket.riceTarget}
                    </p>
                    <p>
                      <strong className="text-[#1F2937]">Takaran Lauk Protein:</strong>{' '}
                      {activeBracket.chickenTarget}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Dual Document Captures (cap_01 & cap_02) */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox({
                      src: IMAGES.cap_01,
                      title: 'Bagian 1: Start Here & Roadmap 4 Tahap',
                      caption: 'Alur eksekusi terstruktur dari Hari ke-0 hingga lulus Minggu ke-12.',
                    })
                  }
                  className="bg-[#FAF6F0] rounded-xl border border-[#D5E0D7] overflow-hidden text-left group cursor-zoom-in flex flex-col"
                >
                  <div className="relative h-64 w-full bg-white overflow-hidden">
                    <SafeImage
                      src={IMAGES.cap_01}
                      alt="Roadmap Start Here Hari ke-0"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform"
                    />
                    <span className="absolute bottom-2 right-2 p-1.5 rounded-md bg-[#1F2937]/75 text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-mono text-[11px] text-[#4A6B53]">FILE #01 · HAL. 1</p>
                    <p className="text-xs font-semibold text-[#1F2937] mt-0.5">
                      Alur Eksekusi 4 Tahap
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox({
                      src: IMAGES.cap_02,
                      title: 'Tabel Kalori Cepat & Konversi Takaran Sendok',
                      caption: 'Takaran sendok makan, centong datar, dan telapak tangan tanpa perlu timbangan.',
                    })
                  }
                  className="bg-[#FAF6F0] rounded-xl border border-[#D5E0D7] overflow-hidden text-left group cursor-zoom-in flex flex-col"
                >
                  <div className="relative h-64 w-full bg-white overflow-hidden">
                    <SafeImage
                      src={IMAGES.cap_02}
                      alt="Tabel Kalori dan Takaran Sendok"
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform"
                    />
                    <span className="absolute bottom-2 right-2 p-1.5 rounded-md bg-[#1F2937]/75 text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="p-3">
                    <p className="font-mono text-[11px] text-[#4A6B53]">FILE #01 · BAB 4</p>
                    <p className="text-xs font-semibold text-[#1F2937] mt-0.5">
                      Tabel Kalori &amp; Takaran Sendok
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Step 2 Mechanics */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <p className="font-mono text-xs text-[#4A6B53] uppercase">
                    FASE INTI · MINGGU 1 S/D MINGGU 10
                  </p>
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-[#1F2937]">
                    Cukup fokus 1 kebiasaan baru tiap minggu + latihan 20 menit di kamar.
                  </h3>
                  <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                    Nggak usah langsung ubah semua hal di hari pertama. Program ini memakai
                    sistem <strong className="text-[#1F2937]">Habit Stacking</strong>,
                    jadwal workout 3–4x seminggu berilustrasi, dan 25 Prompt AI siap salin.
                  </p>
                </div>

                {/* Sub-view selector */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() => setStep2View('habit')}
                    className={`w-full p-3.5 rounded-xl border text-left transition-colors cursor-pointer flex items-start gap-3 ${
                      step2View === 'habit'
                        ? 'bg-[#F3EFE6] border-[#4A6B53]'
                        : 'bg-[#FAF6F0] border-[#D5E0D7] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#4A6B53] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#1F2937]">
                        Workbook Habit Stacking 12 Minggu
                      </p>
                      <p className="text-xs text-[#4B5563] mt-0.5">
                        Mulai dari Sugar Detox (Minggu 1), Piring T &amp; IF 14:10, sampai
                        Metabolic Refeed.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep2View('workout1')}
                    className={`w-full p-3.5 rounded-xl border text-left transition-colors cursor-pointer flex items-start gap-3 ${
                      step2View === 'workout1'
                        ? 'bg-[#F3EFE6] border-[#4A6B53]'
                        : 'bg-[#FAF6F0] border-[#D5E0D7] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <Dumbbell className="w-5 h-5 text-[#4A6B53] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#1F2937]">
                        Olahraga Minggu 1: Adaptasi Sendi (Ramah Lutut)
                      </p>
                      <p className="text-xs text-[#4B5563] mt-0.5">
                        3 sesi @ 20 menit dengan Chair Squat, Knee Push-Up, &amp; Glute Bridge.
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep2View('workout6')}
                    className={`w-full p-3.5 rounded-xl border text-left transition-colors cursor-pointer flex items-start gap-3 ${
                      step2View === 'workout6'
                        ? 'bg-[#F3EFE6] border-[#4A6B53]'
                        : 'bg-[#FAF6F0] border-[#D5E0D7] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <Dumbbell className="w-5 h-5 text-[#9E525D] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#1F2937]">
                        Olahraga Minggu 6: Core Sculpt &amp; Anti-Perut Buncit
                      </p>
                      <p className="text-xs text-[#4B5563] mt-0.5">
                        Fokus perut bawah &amp; pinggang samping (Heel Touch, Flutter Kick 45°).
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep2View('ai')}
                    className={`w-full p-3.5 rounded-xl border text-left transition-colors cursor-pointer flex items-start gap-3 ${
                      step2View === 'ai'
                        ? 'bg-[#F3EFE6] border-[#4A6B53]'
                        : 'bg-[#FAF6F0] border-[#D5E0D7] hover:bg-[#F3EFE6]'
                    }`}
                  >
                    <Sparkles className="w-5 h-5 text-[#4A6B53] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-[#1F2937]">
                        25 Prompt AI (Master Coach + Vision AI Scan Piring)
                      </p>
                      <p className="text-xs text-[#4B5563] mt-0.5">
                        Foto makananmu di warteg/restoran, AI langsung estimasi kalori &amp;
                        proteinnya dalam tabel rapi.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right: Live Switched Document Capture */}
              <div className="lg:col-span-6 space-y-3">
                <button
                  type="button"
                  onClick={() => onOpenLightbox(step2Images[step2View])}
                  className="relative w-full rounded-xl border border-[#D5E0D7] bg-[#FAF6F0] overflow-hidden cursor-zoom-in group block"
                >
                  <SafeImage
                    src={step2Images[step2View].src}
                    alt={step2Images[step2View].title}
                    fallbackTitle={step2Images[step2View].title}
                    className="w-full max-h-[430px] object-contain mx-auto bg-white"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F2937]/80 text-white text-xs font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Perbesar</span>
                  </span>
                </button>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-[#4B5563]">{step2Images[step2View].caption}</p>
                  <button
                    type="button"
                    onClick={() =>
                      onOpenLightbox({
                        src: IMAGES.cap_03,
                        title: 'Master System Prompt & 3 Langkah Pakai AI',
                        caption: 'Cukup 1x paste Master Prompt di Gemini/ChatGPT gratis.',
                      })
                    }
                    className="text-xs font-medium text-[#4A6B53] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Lihat Master Prompt →
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Reverse Dieting Timeline */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <p className="font-mono text-xs text-[#4A6B53] uppercase">
                    FASE KUNCI METABOLISME · MINGGU 11–12
                  </p>
                  <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-[#1F2937]">
                    Protokol Reverse Dieting 4 Minggu (Anti-YoYo)
                  </h3>
                  <p className="mt-2 text-sm text-[#4B5563] leading-relaxed">
                    Inilah bagian yang sering dilupakan orang. Kalori tidak langsung
                    dilonjakkan, melainkan dinaikkan bertahap{' '}
                    <span className="font-mono font-semibold text-[#1F2937]">
                      +150 kkal/minggu
                    </span>{' '}
                    agar metabolisme pulih tanpa menimbun lemak baru.
                  </p>
                </div>

                <div className="space-y-3">
                  {REVERSE_DIETING_STEPS.map((row, idx) => (
                    <div
                      key={row.phase}
                      className="rounded-xl bg-[#FAF6F0] border border-[#D5E0D7] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-xs font-semibold text-[#4A6B53]">
                            0{idx + 1}. {row.phase}
                          </span>
                          <span className="text-xs text-[#4B5563]">· {row.label}</span>
                        </div>
                        <p className="text-sm text-[#1F2937]">{row.action}</p>
                        <p className="text-xs text-[#4B5563]">{row.outcome}</p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <span className="inline-block font-mono text-sm font-bold text-[#9E525D] tabular-nums bg-white px-3 py-1.5 rounded-lg border border-[#D5E0D7]">
                          {row.calories}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl bg-[#F3EFE6] border border-[#D5E0D7] p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#4A6B53] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#1F2937] leading-relaxed">
                    <strong>Aturan 80/20 &amp; Red Flag +2 Kg:</strong> 17–18 kali makanmu
                    per minggu tetap bergizi utuh, 3–4 kali makan boleh fleksibel bareng
                    keluarga. Jika timbangan mingguan naik +2 kg, cukup defisit ringan 7–10
                    hari.
                  </p>
                </div>
              </div>

              {/* Right: cap_10 document proof */}
              <div className="lg:col-span-5 space-y-3">
                <button
                  type="button"
                  onClick={() =>
                    onOpenLightbox({
                      src: IMAGES.cap_10,
                      title: 'Ensiklopedia Bab 7: Protokol Reverse Dieting & Anti-YoYo',
                      caption: 'Tabel kenaikan kalori bertahap +150 kkal/minggu dan 4 Anchor Habits permanen.',
                    })
                  }
                  className="relative w-full rounded-xl border border-[#D5E0D7] bg-[#FAF6F0] overflow-hidden cursor-zoom-in group block"
                >
                  <SafeImage
                    src={IMAGES.cap_10}
                    alt="Protokol Reverse Dieting dan 4 Anchor Habits Anti-YoYo"
                    className="w-full max-h-[480px] object-contain mx-auto bg-white"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F2937]/80 text-white text-xs font-medium">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Perbesar</span>
                  </span>
                </button>
                <p className="text-xs text-[#4B5563]">
                  Cuplikan asli Ensiklopedia Bab 7: Protokol Reverse Dieting &amp; 4 Anchor
                  Habits.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
