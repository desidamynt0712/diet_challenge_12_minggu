// Konfigurasi terpusat seluruh aset gambar produk digital.
// Ganti path di bawah jika ingin menukar aset dengan file baru di folder /public.
export const IMAGES = {
  // Gambar Hero Mockup 3D Utama ("hero-mockup-3d.jpg")
  hero_mockup: "/assets/aistudio/Gemini_Generated_Image_hrc6t9hrc6t9hrc6_5345afee.jpg",

  // 4 Banner Showcase Gabungan ("Intip Isi Asli Dokumen")
  showcase_1: "/assets/aistudio/Code_Generated_Image_b232a085.png", // Preview_LP_1_Start_Here_dan_Workbook_12_Minggu.png
  showcase_2: "/assets/aistudio/Code_Generated_Image__1__c9fff5e6.png", // Preview_LP_2_Workbook_Olahraga_24_Ilustrasi.png
  showcase_3: "/assets/aistudio/Code_Generated_Image__2__247261a5.png", // Preview_LP_3_Katalog_400_Resep_Diet.png
  showcase_4: "/assets/aistudio/Code_Generated_Image__3__535ca629.png", // Preview_LP_4_Prompt_AI_Bonus_Ojol_dan_Ensiklopedia.png

  // 14 Gambar Capture Satuan
  cap_01: "/assets/captures/capture_01_start_here_roadmap.png",
  cap_02: "/assets/captures/capture_02_tabel_kalori_dan_takaran_sendok.png",
  cap_03: "/assets/captures/capture_03_25_prompt_ai_master.png",
  cap_04: "/assets/captures/capture_04_prompt_ai_scan_piring_dan_ojol.png",
  cap_05: "/assets/captures/capture_05_workbook_12_minggu_habit_stacking.png",
  cap_06: "/assets/captures/capture_06_olahraga_minggu_1_ilustrasi.png",
  cap_07: "/assets/captures/capture_07_olahraga_minggu_6_core_sculpt.png",
  cap_08: "/assets/captures/capture_08_bonus_7day_meal_plan.png",
  cap_09: "/assets/captures/capture_09_bonus_cheat_sheet_ojol_kondangan.png",
  cap_10: "/assets/captures/capture_10_ensiklopedia_reverse_dieting_antiyoyo.png",
  cap_11: "/assets/captures/capture_11_resep_indo_ayam_bakar_pepes.png",
  cap_12: "/assets/captures/capture_12_resep_western_bulgogi_oyakodon.png",
  cap_13: "/assets/captures/capture_13_resep_cemilan_asin_tahu_walik.png",
  cap_14: "/assets/captures/capture_14_resep_cemilan_manis_chia_tiramisu.png",
} as const;

export type ImageKey = keyof typeof IMAGES;

export interface LightboxItem {
  src: string;
  title: string;
  caption: string;
}
