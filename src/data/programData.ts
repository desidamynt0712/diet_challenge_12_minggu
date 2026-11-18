import { IMAGES } from '../config/images';

export interface HeroTabItem {
  id: string;
  label: string;
  shortLabel: string;
  image: string;
  title: string;
  caption: string;
  badge: string;
}

export const HERO_TABS: HeroTabItem[] = [
  {
    id: 'bundle-3d',
    label: 'Paket Lengkap 3D',
    shortLabel: 'Paket 3D',
    image: IMAGES.hero_mockup,
    title: 'Bundle Lengkap Diet Challenge 12 Minggu',
    caption: '11 file siap pakai: Tracker Excel 12 minggu, 4 Ebook 400 Resep, Workbook Olahraga 24 Ilustrasi, 25 Prompt AI, & Cheat Sheet Ojol.',
    badge: '11 FILE · DOCX / XLSX / PDF',
  },
  {
    id: 'start-here',
    label: 'Start Here & Workbook',
    shortLabel: 'Start Here',
    image: IMAGES.showcase_1,
    title: 'Panduan Hari ke-0, Takaran Sendok & Workbook 12 Minggu',
    caption: 'Roadmap eksekusi 4 tahap dari Hari ke-0 sampai Minggu ke-12, tabel target kalori, konversi takaran sendok/tangan, & misi mingguan.',
    badge: 'MODUL #01 & #03',
  },
  {
    id: 'olahraga',
    label: '24 Ilustrasi Olahraga',
    shortLabel: 'Olahraga',
    image: IMAGES.showcase_2,
    title: 'Workbook Olahraga Rumahan 20 Menit + 24 Ilustrasi',
    caption: 'Gerakan ramah lutut tanpa alat dari Minggu 1 (Adaptasi Sendi), Minggu 6 (Core Sculpt), sampai Minggu 11 (Maintenance Kunci Otot).',
    badge: 'MODUL #04 · 24 ILUSTRASI',
  },
  {
    id: 'resep-400',
    label: '400 Resep Diet',
    shortLabel: '400 Resep',
    image: IMAGES.showcase_3,
    title: '4 Ebook Katalog 400 Resep Masakan Lokal, Cafe & Cemilan',
    caption: '100 Resep Indonesia, 100 Resep Western & Asia, 100 Cemilan Asin, & 100 Cemilan Manis lengkap angka kalori, protein, dan takaran.',
    badge: '4 EBOOK · 400 RESEP',
  },
  {
    id: 'ai-ojol',
    label: 'Prompt AI & Cheat Sheet Ojol',
    shortLabel: 'AI & Ojol',
    image: IMAGES.showcase_4,
    title: '25 Prompt AI, Cheat Sheet Ojol/Kondangan & Protokol Anti-YoYo',
    caption: 'Salin prompt ke ChatGPT/Gemini gratis buat hitung piring makan, plus panduan pesan Warteg/Padang/Kafe dan Reverse Dieting 4 minggu.',
    badge: 'MODUL #02, #05 & ENSIKLOPEDIA',
  },
];

export const CONTRAST_PAIN_POINTS = [
  'Makan rebusan hambar tanpa garam, baru 4 hari udah lemas di kantor.',
  'Mengira harus beli salmon, dada ayam organik, atau katering Rp2 jutaan sebulan.',
  'Siang nahan lapar, jam 10 malam kalap pesan ojol + martabak.',
  'Udah turun 4 kg, begitu makan normal seminggu langsung naik 6 kg (efek yo-yo).',
];

export const CONTRAST_SOLUTION_POINTS = [
  {
    lead: 'Tetap makan nasi & berbumbu Nusantara:',
    detail: 'Pakai rumus visual Piring T dan 3 Bumbu Dasar Rebus (0 minyak).',
  },
  {
    lead: 'Pilih sendiri dari 400 resep siap masak:',
    detail: 'Lengkap angka kalori, gram protein, dan takaran sendok rumah tangga.',
  },
  {
    lead: 'Wajib ngemil sore 1x sehari (95–195 kkal):',
    detail: 'Ada 200 resep cemilan asin & manis supaya malam nggak kalap.',
  },
  {
    lead: 'Ada 2 minggu pengunci berat badan (Minggu 11–12):',
    detail: 'Pakai Reverse Dieting (+150 kkal bertahap) supaya bebas efek yo-yo.',
  },
];

export interface ShowcaseItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export const SHOWCASE_BANNERS: ShowcaseItem[] = [
  {
    id: 'sc-1',
    tag: 'MODUL #01 & #03',
    title: 'Panduan Hari ke-0, Tabel Kalori & Workbook Misi 12 Minggu',
    description: 'Alur eksekusi dari Hari ke-0, konversi takaran sendok/telapak tangan kalau belum punya timbangan dapur, plus ceklis Habit Stacking 84 hari.',
    image: IMAGES.showcase_1,
    highlights: ['Roadmap 4 Tahap', 'Konversi Sendok & Centong', 'Misi Minggu 1–12'],
  },
  {
    id: 'sc-2',
    tag: 'MODUL #04 · 24 ILUSTRASI',
    title: 'Workbook Olahraga Rumahan 20 Menit Tanpa Alat Gym',
    description: 'Dilengkapi 24 ilustrasi gerakan & panduan postur aman lutut dari Minggu 1 (Pemula), Minggu 6 (Core Sculpt), hingga Minggu 11 (Kunci Otot).',
    image: IMAGES.showcase_2,
    highlights: ['Ramah Lutut Pemula', '20–28 Menit di Kamar', 'Target Langkah NEAT'],
  },
  {
    id: 'sc-3',
    tag: '4 EBOOK · 400 RESEP',
    title: 'Katalog 400 Resep: Makanan Berat Indonesia, Western/Asia & Cemilan',
    description: 'Tetap makan nasi, Ayam Bakar, Bulgogi, Tahu Walik, sampai Tiramisu Oats. Sudah dihitung kalori, protein, dan batas maksimal 1 sdt minyak.',
    image: IMAGES.showcase_3,
    highlights: ['100 Resep Indo', '100 Western & Asia', '200 Cemilan Asin/Manis'],
  },
  {
    id: 'sc-4',
    tag: 'MODUL #02, #05 & ENSIKLOPEDIA',
    title: '25 Prompt AI Diet, Cheat Sheet Ojol/Kondangan & Protokol Anti-YoYo',
    description: 'Tinggal salin prompt untuk ubah Gemini/ChatGPT jadi asisten gizi 24/7, plus contekan menu aman Warteg, Padang, Kafe & Reverse Dieting.',
    image: IMAGES.showcase_4,
    highlights: ['Master Prompt + Vision AI', '4 Template Catatan Ojol', 'Protokol Anti-YoYo'],
  },
];

export interface RecipeHighlight {
  code: string;
  name: string;
  calories: string;
  protein: string;
  time: string;
  ingredients: string;
  method: string;
}

export interface CatalogTab {
  id: string;
  title: string;
  range: string;
  subtitle: string;
  image: string;
  imageTitle: string;
  imageCaption: string;
  note: string;
  highlights: RecipeHighlight[];
  extraRows?: { label: string; value: string; note: string }[];
}

export const CATALOG_TABS: CatalogTab[] = [
  {
    id: 'indo',
    title: 'Makanan Berat Indonesia',
    range: '330–465 kkal',
    subtitle: 'Masakan rumahan berbumbu Nusantara lengkap 100g nasi hangat dan maksimal 1 sdt minyak.',
    image: IMAGES.cap_11,
    imageTitle: 'Ebook 100 Resep Makanan Berat Indonesia (#001–#100)',
    imageCaption: 'Cuplikan halaman resep #001 Ayam Bakar Bumbu Rujak (415 kkal) & #002 Pepes Ayam Kemangi Jamur (380 kkal).',
    note: 'Total 100 variasi lauk Nusantara: Ayam Suwir Sambal Matah, Ikan Kembung Dabu-Dabu, Soto Ayam Bening, sampai Rawon Rendah Lemak.',
    highlights: [
      {
        code: '#001',
        name: 'Ayam Bakar Bumbu Rujak Tanpa Santan',
        calories: '415 kkal',
        protein: '36g Protein',
        time: '20 Menit',
        ingredients: '150g dada ayam fillet, 100g nasi merah matang, 100ml kaldu ayam + 2 sdm susu skim, 2 sdm bumbu dasar merah, daun jeruk, serai, 1 sdt minyak.',
        method: 'Tumis bumbu dengan 1 sdt minyak, ungkep ayam dengan kaldu & susu skim hingga menyusut, lalu panggang di teflon 3 menit per sisi.',
      },
      {
        code: '#002',
        name: 'Pepes Dada Ayam Kemangi Jamur Tiram',
        calories: '380 kkal',
        protein: '38g Protein',
        time: '25 Menit',
        ingredients: '150g dada ayam potong dadu, 50g jamur tiram suwir, 100g nasi merah/putih, 1 ikat kemangi, 2 sdm bumbu kuning rebus, daun pisang.',
        method: 'Aduk rata ayam, jamur, bumbu kuning, dan kemangi (0 minyak). Bungkus daun pisang, kukus 20 menit, lalu bakar teflon agar wangi.',
      },
    ],
  },
  {
    id: 'western',
    title: 'Western & Asian Cafe',
    range: '340–485 kkal',
    subtitle: 'Gaya Donburi Jepang, Dupbap Korea, dan pasta tinggi protein yang praktis buat meal prep kerja.',
    image: IMAGES.cap_12,
    imageTitle: 'Ebook 100 Resep Makanan Berat Western & Asia (#001–#100)',
    imageCaption: 'Cuplikan resep #001 Korean Beef Bulgogi Bowl (430 kkal) & #002 Japanese Oyakodon (410 kkal).',
    note: 'Cocok banget buat bekal kantor 15 menit jadi—tetap pakai nasi takar 100g dengan protein tinggi dan sayuran seimbang.',
    highlights: [
      {
        code: '#001',
        name: 'Korean Beef Bulgogi & Broccoli Rice Bowl',
        calories: '430 kkal',
        protein: '34g Protein',
        time: '15 Menit',
        ingredients: '120g daging sapi has dalam iris tipis, 100g nasi merah hangat, 100g brokoli rebus, 1 sdm kecap asin, 1/2 sdt minyak wijen, jahe, stevia.',
        method: 'Marinasi daging 10 menit, panggang cepat di teflon panas tanpa minyak tambahan selama 4 menit, tata di atas nasi dan brokoli.',
      },
      {
        code: '#002',
        name: 'Japanese Oyakodon (Ayam & Telur Tanpa Minyak)',
        calories: '410 kkal',
        protein: '38g Protein',
        time: '15 Menit',
        ingredients: '130g dada ayam potong dadu, 1 telur utuh + 1 putih telur, 100g nasi hangat, 1/2 bombay, 100ml kaldu dashi/ayam, 1 sdm kecap asin.',
        method: 'Didihkan kaldu, kecap asin, dan bombay di teflon kecil (0 minyak). Masak ayam, tuang kocokan telur, tutup 1 menit, tuang ke atas nasi.',
      },
    ],
  },
  {
    id: 'cemilan-asin',
    title: 'Cemilan Asin Gurih',
    range: '95–195 kkal',
    subtitle: 'Penyelamat jam 4 sore supaya perut nggak keroncongan dan malam nggak kalap gorengan.',
    image: IMAGES.cap_13,
    imageTitle: 'Ebook 100 Resep Cemilan Asin Diet (#001–#100)',
    imageCaption: 'Cuplikan resep #001 Tahu Walik Ayam Crispy Air-Fryer (175 kkal) & #002 Bakwan Sayur Oat Udang (180 kkal).',
    note: 'Semua resep pakai teknik air-fryer, kukus, atau teflon minim minyak—tetap kriuk gurih tapi kalorinya terkunci di bawah 195 kkal.',
    highlights: [
      {
        code: '#001',
        name: 'Tahu Walik Ayam Kukus & Air-Fryer (4 Potong)',
        calories: '175 kkal',
        protein: '16g Protein',
        time: '20 Menit',
        ingredients: '2 buah tahu pong belah dua & balik, 80g dada ayam giling, 1 putih telur, 1 batang daun bawang, 1 sdm tepung tapioka, lada, garam.',
        method: 'Aduk isian ayam & bumbu, isikan ke tahu walik, kukus 10 menit lalu panggang di air-fryer/teflon kering 190°C selama 8 menit hingga garing.',
      },
      {
        code: '#002',
        name: 'Bakwan Sayur Oat & Udang Panggang Teflon (3 Buah)',
        calories: '180 kkal',
        protein: '14g Protein',
        time: '15 Menit',
        ingredients: '3 sdm tepung oat (rolled oats blender), 50g udang cincang, 1 putih telur, 80g wortel kol tauge, ketumbar, 1/2 sdt minyak.',
        method: 'Campur seluruh bahan dengan 2 sdm air kaldu, cetak 3 bulatan pipih di teflon anti-lengket, panggang api kecil 4 menit per sisi.',
      },
    ],
  },
  {
    id: 'cemilan-manis',
    title: 'Cemilan Manis & PMS',
    range: '95–190 kkal',
    subtitle: 'Obat kangen dessert kafe dan penyelamat pas lagi PMS tanpa gula pasir dan krim kental.',
    image: IMAGES.cap_14,
    imageTitle: 'Ebook 100 Resep Cemilan Manis Diet (#001–#100)',
    imageCaption: 'Cuplikan resep #001 Double Choco Chia Pudding (165 kkal) & #002 Tiramisu Overnight Oats (185 kkal).',
    note: 'Serat larut dari rolled oats & chia seeds mengembang hingga 10x lipat di lambung, bikin kenyang sampai 4 jam!',
    highlights: [
      {
        code: '#001',
        name: 'Double Chocolate Chia Protein Pudding',
        calories: '165 kkal',
        protein: '14g Protein',
        time: '5 Menit (+Dinginkan)',
        ingredients: '2 sdm (20g) chia seeds, 150ml susu cair skim/tinggi protein, 1 sdm bubuk kakao murni, 2 sdm Greek yogurt plain, 2 tetes stevia, 30g stroberi.',
        method: 'Aduk rata susu, bubuk kakao, stevia, dan chia seeds dalam gelas. Simpan di kulkas minimal 2 jam hingga mengental, beri topping yogurt.',
      },
      {
        code: '#002',
        name: 'Tiramisu Overnight Oats Kopi & Yogurt',
        calories: '185 kkal',
        protein: '15g Protein',
        time: '5 Menit (+Dinginkan)',
        ingredients: '3 sdm (25g) rolled oats, 1 sdt chia seeds, 50ml kopi hitam tanpa gula, 50ml susu skim, 3 sdm Greek yogurt plain, stevia, bubuk kakao.',
        method: 'Campur oat, chia, kopi, susu skim, dan stevia di wadah, simpan semalaman di kulkas. Pagi/sore beri krim yogurt dan ayak bubuk kakao.',
      },
    ],
  },
  {
    id: 'meal-plan',
    title: '7-Day Meal Plan & Pasar',
    range: '~Rp254rb/mgg',
    subtitle: 'Jadwal makan lengkap Senin–Minggu (~1.380 kkal & 95–105g protein/hari) plus daftar belanja pasar.',
    image: IMAGES.cap_08,
    imageTitle: 'Tabel Panduan Kalori & 7-Day Sample Meal Plan',
    imageCaption: 'Komposisi makan harian terstruktur ~1.350–1.450 kkal/hari dengan bahan pasar lokal hemat.',
    note: 'Nggak perlu mikir "besok makan apa ya?". Tinggal ikuti jadwal Senin–Minggu dan bawa daftar belanja pas ke pasar atau minimarket.',
    highlights: [
      {
        code: 'SEN–RAB',
        name: 'Pola Harian Fase Adaptasi (~1.380 kkal · 98g Protein)',
        calories: '1.380 kkal',
        protein: '98g Protein',
        time: '3x Makan + 1x Cemilan',
        ingredients: 'Sarapan/Siang: Nasi 100g + Ayam Bakar Rujak / Pepes Kemangi + Lalapan. Sore: Tahu Walik / Chia Pudding. Malam: Ikan Kembung / Oyakodon.',
        method: 'Siapkan bumbu dasar merah & kuning rebus di hari Minggu (60 menit) supaya masak harian di hari kerja cukup 10–15 menit saja.',
      },
      {
        code: 'BELANJA',
        name: 'Estimasi Daftar Belanja Pasar Mingguan',
        calories: 'Rp254.000',
        protein: '7 Hari Penuh',
        time: '1x Belanja/Mgg',
        ingredients: '1 kg dada ayam fillet, 1/2 kg ikan kembung, 15 butir telur, 2 papan tempe, 10 tahu putih, sayur hijau, beras merah/putih, oat & buah.',
        method: 'Total ongkos dapur ~Rp36.000/hari—jauh lebih murah dibanding katering diet atau pesan makanan online tiap hari.',
      },
    ],
  },
  {
    id: 'ojol',
    title: 'Survival Ojol & Kondangan',
    range: '350–520 kkal',
    subtitle: 'Tabel Lampu Hijau Warteg, RM Padang, Bakso, Kopi Susu & 4 Template Catatan GoFood/GrabFood.',
    image: IMAGES.cap_09,
    imageTitle: 'Bonus 3: Cheat Sheet Survival Makan di Luar, Ojol, Kafe & Kondangan',
    imageCaption: 'Panduan lampu hijau vs jebakan kalori di Warteg, RM Padang, Pecel Lele, Kafe, dan Kondangan.',
    note: 'Diet bukan berarti anti-sosial atau nggak boleh pesan ojol. Tinggal copas catatan pesan ojol anti-banjir minyak di bawah ini.',
    highlights: [
      {
        code: 'WARTEG/PADANG',
        name: 'Pilihan Lampu Hijau (420–520 kkal)',
        calories: '420–520 kkal',
        protein: '30–35g Prot',
        time: 'Pesan Langsung / Ojol',
        ingredients: 'Warteg: Nasi 1/2 porsi + Ayam bakar/pepes/ikan panggang + Sayur bening + Tahu tempe bacem. Padang: Nasi 1/2 + Ayam Pop tanpa kulit + Daun singkong rebus.',
        method: 'Hindari kikil santan, kentang balado berminyak, perkedel, dan kuah gulai/rendang banjir.',
      },
      {
        code: 'CATATAN OJOL',
        name: 'Template Notes GoFood / GrabFood Anti-Banjir Minyak',
        calories: 'Hemat -250 kkal',
        protein: 'Tetap Nikmat',
        time: 'Copy-Paste',
        ingredients: 'Ayam Bakar: "Bagian dada saja ya kak, bakar tanpa oles mentega, sambal dipisah." | Kopi Kafe: "Less Ice, No Sugar / Gula dipisah ya kak (susu low-fat jika ada)."',
        method: 'Cukup ubah catatan pesanan sekali ketik, kalori tersembunyi dari minyak oles dan gula cair langsung terpangkas drastis.',
      },
    ],
  },
];

export interface WeightBracket {
  id: string;
  label: string;
  womanCal: string;
  manCal: string;
  protein: string;
  composition: string;
  riceTarget: string;
  chickenTarget: string;
}

export const WEIGHT_BRACKETS: WeightBracket[] = [
  {
    id: '50-60',
    label: '50–60 kg',
    womanCal: '1.250 – 1.350 kkal',
    manCal: '1.500 – 1.650 kkal',
    protein: '85 – 100 g',
    composition: '3x makan @375 kkal + 1x cemilan 150 kkal',
    riceTarget: '1 centong datar (100g / 130 kkal)',
    chickenTarget: '1 telapak tangan penuh dada ayam (30g protein)',
  },
  {
    id: '61-70',
    label: '61–70 kg',
    womanCal: '1.350 – 1.450 kkal',
    manCal: '1.650 – 1.750 kkal',
    protein: '95 – 110 g',
    composition: '3x makan @410 kkal + 1x cemilan 170 kkal',
    riceTarget: '1 centong datar (100g / 130 kkal)',
    chickenTarget: '1 telapak tangan penuh dada ayam (30g protein)',
  },
  {
    id: '71-80',
    label: '71–80 kg',
    womanCal: '1.450 – 1.550 kkal',
    manCal: '1.750 – 1.900 kkal',
    protein: '105 – 120 g',
    composition: '3x makan @440 kkal + 1x cemilan 180 kkal',
    riceTarget: '1 centong datar (100g / 130 kkal)',
    chickenTarget: '1 telapak tangan penuh dada ayam (30g protein)',
  },
  {
    id: '81-95',
    label: '81–95 kg',
    womanCal: '1.550 – 1.700 kkal',
    manCal: '1.900 – 2.100 kkal',
    protein: '115 – 135 g',
    composition: '3x makan @480 kkal + 1x cemilan 190 kkal',
    riceTarget: '1–1,25 centong datar (100–125g)',
    chickenTarget: '1,25 telapak tangan dada ayam / ikan fillet',
  },
  {
    id: 'gt95',
    label: '> 95 kg',
    womanCal: '1.700 – 1.850 kkal',
    manCal: '2.100 – 2.300 kkal',
    protein: '130 – 150 g',
    composition: '3x makan @520 kkal + 2x cemilan @150 kkal',
    riceTarget: '1,25 centong datar (125g)',
    chickenTarget: '1,5 telapak tangan protein tanpa lemak',
  },
];

export const REVERSE_DIETING_STEPS = [
  {
    phase: 'Akhir Minggu 10',
    label: 'Titik Akhir Defisit',
    calories: '1.350 kkal',
    action: 'Porsi defisit akhir (protein tinggi, sayur penuh, karbohidrat terukur).',
    outcome: 'Berat badan target tercapai.',
  },
  {
    phase: 'Minggu 11',
    label: 'Transisi Maintenance 1',
    calories: '1.500 kkal (+150)',
    action: 'Tambahkan +3 sdm nasi merah/putih saat makan siang atau +1 buah pisang/apel sore hari.',
    outcome: 'Energi olahraga meningkat, berat badan tetap stabil (±0,2 kg).',
  },
  {
    phase: 'Minggu 12',
    label: 'Transisi Maintenance 2',
    calories: '1.650 kkal (+150)',
    action: 'Tambahkan +1/2 buah alpukat atau +1 butir telur utuh + 2 sdm nasi pada makan malam.',
    outcome: 'Hormon leptin & tiroid pulih optimal, tidur makin nyenyak.',
  },
  {
    phase: 'Minggu 13+',
    label: 'Gaya Hidup Permanen',
    calories: '1.750 kkal (TDEE Baru)',
    action: 'Pola makan 80/20 seimbang tanpa perlu menimbang ketat setiap hari.',
    outcome: 'Berat badan terkunci permanen bebas efek yo-yo!',
  },
];

export interface BundleFile {
  id: string;
  title: string;
  formats: string[];
  pages: string;
  summary: string;
  image?: string;
  span?: 'wide' | 'normal';
  isExcel?: boolean;
}

export const BUNDLE_FILES: BundleFile[] = [
  {
    id: 'f1',
    title: 'Bagian 1: Start Here & Aturan Program',
    formats: ['.DOCX', '.PDF'],
    pages: '6 halaman',
    summary: 'Peta panduan Hari ke-0, 10 aturan harian, tabel target kalori, konversi takaran sendok, & protokol darurat.',
    image: IMAGES.cap_01,
    span: 'wide',
  },
  {
    id: 'f2',
    title: 'Tracker Diet Challenge 12 Minggu',
    formats: ['.XLSX'],
    pages: '3 sheet otomatis + grafik',
    summary: 'Input berat badan, lingkar pinggang, ceklis harian 84 hari, dan grafik progres otomatis di Excel / Google Sheets.',
    isExcel: true,
    span: 'normal',
  },
  {
    id: 'f3',
    title: 'Bagian 2: Kumpulan 25 Prompt AI Diet & Olahraga',
    formats: ['.PDF'],
    pages: '11 halaman',
    summary: 'Master System Prompt, Vision AI scan foto piring makan, racik menu isi kulkas, & modifikasi cedera lutut.',
    image: IMAGES.cap_03,
    span: 'normal',
  },
  {
    id: 'f4',
    title: 'Bagian 3: Workbook 12 Minggu Challenge Diet',
    formats: ['.PDF'],
    pages: '12 halaman',
    summary: 'Sistem Habit Stacking bertahap Minggu 1 s/d Minggu 12 dengan misi fisiologis mingguan dan lembar evaluasi.',
    image: IMAGES.cap_05,
    span: 'normal',
  },
  {
    id: 'f5',
    title: 'Bagian 4: Workbook Olahraga Rumahan + 24 Ilustrasi',
    formats: ['.DOCX', '.PDF'],
    pages: '14 halaman',
    summary: 'Jadwal latihan 20 menit di kamar tanpa alat dari Minggu 1 sampai Minggu 12 + panduan postur aman lutut.',
    image: IMAGES.cap_06,
    span: 'wide',
  },
  {
    id: 'f6',
    title: 'Bagian 5: Paket 4 Panduan Bonus Praktis',
    formats: ['.DOCX', '.PDF'],
    pages: '5 halaman',
    summary: '7-Day Meal Plan, Daftar Belanja Pasar, Cheat Sheet Ojol/Warteg/Padang/Kondangan, & Meal Prep 60 Menit.',
    image: IMAGES.cap_09,
    span: 'normal',
  },
  {
    id: 'f7',
    title: 'Ensiklopedia Buku Diet Lengkap Bab 1–7',
    formats: ['.PDF'],
    pages: '14 halaman',
    summary: 'Ilmu defisit kalori berkelanjutan, IF 14:10 & 16:8, hormon nafsu makan, hingga Protokol Reverse Dieting Anti-YoYo.',
    image: IMAGES.cap_10,
    span: 'normal',
  },
  {
    id: 'f8',
    title: 'Ebook 100 Resep Makanan Berat Indonesia',
    formats: ['.PDF'],
    pages: '14 hlm · #001–#100',
    summary: 'Ayam Bakar Rujak, Pepes Kemangi, Ikan Dabu-Dabu, s/d Soto Bening dengan nasi 100g & maks. 1 sdt minyak.',
    image: IMAGES.cap_11,
    span: 'normal',
  },
  {
    id: 'f9',
    title: 'Ebook 100 Resep Makanan Berat Western & Asia',
    formats: ['.PDF'],
    pages: '13 hlm · #001–#100',
    summary: 'Korean Beef Bulgogi Bowl, Japanese Oyakodon, Chicken Teriyaki, & pasta tinggi protein untuk meal prep kerja.',
    image: IMAGES.cap_12,
    span: 'normal',
  },
  {
    id: 'f10',
    title: 'Ebook 100 Resep Cemilan Asin Diet',
    formats: ['.PDF'],
    pages: '14 hlm · #001–#100',
    summary: 'Tahu Walik Crispy Air-Fryer, Bakwan Oat Udang, Tahu Cabai Garam, & jajanan gurih 95–195 kkal.',
    image: IMAGES.cap_13,
    span: 'normal',
  },
  {
    id: 'f11',
    title: 'Ebook 100 Resep Cemilan Manis Diet',
    formats: ['.PDF'],
    pages: '13 hlm · #001–#100',
    summary: 'Double Choco Chia Pudding, Tiramisu Overnight Oats, & es cendol/dessert rendah kalori penyelamat PMS.',
    image: IMAGES.cap_14,
    span: 'normal',
  },
];

export const PAYMENT_METHODS = [
  { id: 'qris', label: 'QRIS (Instan)', note: 'Otomatis terverifikasi dalam hitungan detik' },
  { id: 'bca', label: 'VA BCA', note: 'Transfer Virtual Account BCA' },
  { id: 'mandiri', label: 'VA Mandiri', note: 'Livin’ / ATM Mandiri Virtual Account' },
  { id: 'bni', label: 'VA BNI', note: 'BNI Mobile / ATM Virtual Account' },
  { id: 'bri', label: 'VA BRI', note: 'BRImo Virtual Account' },
  { id: 'ewallet', label: 'ShopeePay / GoPay', note: 'Bayar langsung dari aplikasi e-wallet' },
];

export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Apakah masih boleh makan nasi putih atau harus ganti beras merah/shirataki?',
    a: 'Tetap boleh makan nasi putih hangat! Hampir semua resep makanan berat di bundle ini sudah menghitung porsi 100g nasi putih atau nasi merah matang (1 centong datar = ~130 kkal). Nggak perlu beli shirataki atau bahan mahal.',
  },
  {
    q: 'Kalau belum punya timbangan dapur digital di rumah, gimana cara ngukur porsinya?',
    a: 'Di File Bagian 1 (Start Here), sudah disediakan Tabel Konversi Takaran Sendok & Telapak Tangan. Misalnya 1 centong datar nasi = 100g, 1 telapak tangan penuh dada ayam tanpa jari = 120–140g (28–32g protein), dan 1 sendok teh kecil minyak = 5 ml.',
  },
  {
    q: 'Lutut saya gampang nyeri atau berat badan masih di atas 80 kg, apakah olahraganya aman?',
    a: 'Aman banget. Minggu 1–4 fokus di Adaptasi Sendi & Low-Impact (tanpa lompat-lompatan seperti burpees atau jump squat). Ada panduan postur aman lutut untuk Chair Squat, Knee Push-Up, dan Glute Bridge lengkap dengan 24 ilustrasi visual.',
  },
  {
    q: 'Saya pekerja sibuk dan sering beli makan di luar / pesan GoFood & GrabFood, apakah tetap kepakai?',
    a: 'Justru di Bagian 5 ada Cheat Sheet Survival Warteg, RM Padang, Pecel Lele, Bakso, Kedai Kopi, sampai Kondangan. Tinggal salin 4 template catatan ojol anti-banjir minyak ke kolom notes GoFood/GrabFood kamu.',
  },
  {
    q: 'Apakah 25 Prompt AI-nya harus pakai ChatGPT Plus yang berbayar?',
    a: 'Nggak perlu bayar langganan AI. Semua 25 prompt—termasuk Master System Prompt Coach Diet 12 Minggu dan Prompt #16 Vision AI buat scan foto piring makan—bisa langsung dipakai di aplikasi Google Gemini atau ChatGPT versi gratis di HP.',
  },
  {
    q: 'File-nya nanti dikirim dalam format apa dan bisa dibuka di HP?',
    a: 'Kamu dapat total 11 file dalam format PDF (siap baca rapi di HP Android/iPhone & tablet), DOCX (bisa diedit/print ulang di Word/Google Docs), dan XLSX (Tracker 12 Minggu otomatis bisa dibuka di Excel maupun Google Sheets gratis).',
  },
  {
    q: 'Setelah bayar Rp57.000, gimana cara dapat link download filenya?',
    a: 'Begitu pembayaran terkonfirmasi otomatis (terutama pakai QRIS/e-wallet), link akses Google Drive / halaman unduh langsung dikirim otomatis ke Email aktif yang kamu isi saat checkout. Akses berlaku selamanya tanpa biaya bulanan.',
  },
  {
    q: 'Bedanya program ini sama ebook resep diet biasa apa?',
    a: 'Ebook biasa cuma kasih resep lalu kamu bingung sendiri pas berat badan mentok atau habis turun malah balik naik lagi. Di sini ada sistem bertahap 12 minggu: Hari ke-0 penentuan kalori, Minggu 1–10 Habit Stacking + olahraga berilustrasi, dan Minggu 11–12 Protokol Reverse Dieting (+150 kkal bertahap) untuk mengunci berat badan baru.',
  },
];
