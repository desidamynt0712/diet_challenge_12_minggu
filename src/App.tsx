import { useState } from 'react';
import { LightboxItem } from './config/images';
import { LightboxModal } from './components/LightboxModal';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContrastSection } from './components/ContrastSection';
import { ShowcaseGallery } from './components/ShowcaseGallery';
import { RecipeCatalogSection } from './components/RecipeCatalogSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BundleBentoSection } from './components/BundleBentoSection';
import { CostSimulatorSection } from './components/CostSimulatorSection';
import { CheckoutSection } from './components/CheckoutSection';
import { FaqAndClosingSection } from './components/FaqAndClosingSection';

export default function App() {
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1F2937]">
      {/* Section 1: Sticky Minimal Navbar */}
      <Navbar />

      <main>
        {/* Section 2: [MINGGU 00] Hero Section dengan 3D Mockup & 5-Tab Switcher */}
        <HeroSection onOpenLightbox={setLightboxItem} />

        {/* Section 3: [MINGGU 01] Kontras Masalah vs Solusi */}
        <ContrastSection />

        {/* Section 4: [MINGGU 03] Galeri "Intip Isi Asli Dokumen" */}
        <ShowcaseGallery onOpenLightbox={setLightboxItem} />

        {/* Section 5: [MINGGU 05] Katalog Interaktif 400 Resep & Panduan */}
        <RecipeCatalogSection onOpenLightbox={setLightboxItem} />

        {/* Section 6: [MINGGU 07] Cara Kerja 3 Langkah Interaktif */}
        <HowItWorksSection onOpenLightbox={setLightboxItem} />

        {/* Section 7: [MINGGU 09] Bento Grid 11 File Lengkap */}
        <BundleBentoSection onOpenLightbox={setLightboxItem} />

        {/* Section 8: [MINGGU 10] Simulasi Biaya Interaktif */}
        <CostSimulatorSection />

        {/* Section 9: [MINGGU 11] Harga & Embedded 3-Step Checkout Form */}
        <CheckoutSection />

        {/* Section 10: [MINGGU 12] FAQ Accordion, Kartu "Siap Mulai" & Sticky Mobile CTA */}
        <FaqAndClosingSection />
      </main>

      {/* Global Click-to-Zoom Lightbox Modal */}
      <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  );
}
