export const WA_NUMBER = "628113955599";
export const WA_DEFAULT_MSG = encodeURIComponent("Halo, saya dosen/akademisi ingin klaim Harga Khusus Mitra Universitas untuk kelas AI Dosen.");
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_DEFAULT_MSG}`;

export const CURRENT_PERIOD = "1 Agustus 2026";

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  badgeTag: string;
}

export const PROBLEM_DATA = {
  label: "Hal Yang Sering Dialami Para Akademisi",
  headline: "Kerja Keras Saja Tidak Cukup jika Waktu Anda Masih Habis untuk Kerja Konvensional",
  cards: [
    {
      id: "prob-1",
      badgeTag: "Review Literatur",
      title: "Review Literatur Memakan Banyak Waktu",
      description: "Membaca puluhan jurnal, menyusun literature review, dan menemukan research gap sering kali memerlukan waktu yang panjang sebelum proses penelitian benar-benar dimulai."
    },
    {
      id: "prob-2",
      badgeTag: "Optimalisasi AI",
      title: "Sudah Menggunakan AI, tetapi Belum Maksimal",
      description: "AI dapat membantu pekerjaan akademik, namun tanpa teknik prompting dan workflow yang tepat, hasilnya masih memerlukan banyak revisi dan belum sesuai dengan standar penulisan ilmiah."
    },
    {
      id: "prob-3",
      badgeTag: "Publikasi & Proposal",
      title: "Tekanan Publikasi dan Proposal Penelitian",
      description: "Target publikasi jurnal serta penyusunan proposal penelitian sering berjalan bersamaan dengan berbagai tanggung jawab akademik lainnya, sehingga prosesnya menjadi lebih menantang."
    },
    {
      id: "prob-4",
      badgeTag: "Etika & Deteksi AI",
      title: "Khawatir dengan Plagiarisme dan Deteksi AI",
      description: "Banyak akademisi masih ragu memanfaatkan AI karena khawatir terhadap isu plagiarisme, etika akademik, maupun hasil tulisan yang terdeteksi sebagai konten AI."
    }
  ]
};

export const TRANSFORMATION_DATA = {
  headline: "Perbandingan Nyata yang Sudah Diukur",
  rows: [
    {
      conventional: "Melakukan Research gap dan proposal secara manual",
      aiBased: "Identifikasi research gap dan proposal lebih cepat & efisien"
    },
    {
      conventional: "Penulisan jurnal ilmiah berulang",
      aiBased: "Parafrase dan revisi lebih efisien dan terstruktur"
    },
    {
      conventional: "Menyiapkan materi ajar dengan cara lama",
      aiBased: "Pengajaran lebih inovatif & praktis dengan AI"
    }
  ]
};

export const SOLUTION_DATA = {
  headline: "Bangun Workflow Akademik Anda - Berbasis AI Hanya Dalam 1 Hari",
  benefits: [
    {
      number: "01",
      title: "Workflow Riset yang Lebih Sistematis",
      description: "Bangun alur kerja riset yang terstruktur, mulai dari pencarian referensi, analisis research gap, hingga penyusunan draf akademik secara lebih efisien."
    },
    {
      number: "02",
      title: "Produktivitas Akademik Meningkat",
      description: "Manfaatkan AI untuk mempercepat proses riset dan penulisan, sehingga waktu dapat dialokasikan lebih optimal untuk mengajar, meneliti, dan menjalankan Tri Dharma."
    },
    {
      number: "03",
      title: "AI yang Relevan untuk Kebutuhan Dosen",
      description: "Pelajari penerapan AI melalui studi kasus dan praktik yang sesuai dengan kebutuhan riset, pengajaran, dan publikasi ilmiah."
    }
  ]
};

export interface AIToolItem {
  id: string;
  name: string;
  role: string;
  category: string;
  brandColor: string;
  subTools?: string[];
}

export const AI_TOOLS_LIST: AIToolItem[] = [
  { id: "chatgpt", name: "ChatGPT", role: "Scientific Drafting & Prompting", category: "LLM Leader", brandColor: "#10A37F" },
  { id: "claude", name: "Claude", role: "Long-form Writing & Deep Synthesis", category: "Academic Writing", brandColor: "#D97757" },
  { id: "gemini", name: "Gemini", role: "Multimodal Research & Live Data", category: "Search & Vision", brandColor: "#4285F4" },
  { id: "notebooklm", name: "NotebookLM", role: "Source-Grounded Literature Assistant", category: "Notebook AI", brandColor: "#38BDF8" },
  { id: "googleflow", name: "Google Flow", role: "Workflow Automation & Media", category: "Process Builder", brandColor: "#A855F7" },
  { id: "toolspendukung", name: "Tools Pendukung", role: "Reference Manager & Plagiarism Checker", category: "Support Toolkit", brandColor: "#6366F1", subTools: ["Mendeley", "Turnitin", "Zotero", "Grammarly"] }
];

export interface CurriculumSession {
  sessionNumber: string;
  tag: string;
  title: string;
  items: string[];
}

export const CURRICULUM_DATA = {
  label: "Isi Pembelajaran Kami",
  headline: "Pelajari strategi dan praktik penggunaan AI yang relevan untuk mendukung produktivitas akademik.",
  sessions: [
    {
      sessionNumber: "01",
      tag: "SESI 1",
      title: "Precision Prompting & Research Gap",
      items: [
        "Kuasai RCTFA Framework untuk instruksi AI yang akurat.",
        "Petakan novelty riset dari ribuan literatur secara instan.",
        "Hands-on: Buat research gap & outline dari topik peserta."
      ]
    },
    {
      sessionNumber: "02",
      tag: "SESI 2",
      title: "Scientific Paper & Extraction",
      items: [
        "Ekstraksi dokumen akademik/legal tebal dan Deep Research.",
        "Asisten penyusunan draft jurnal, parafrase, & otomasi proposal."
      ]
    },
    {
      sessionNumber: "03",
      tag: "SESI 3",
      title: "Smart Teaching & Innovation",
      items: [
        "Buat modul ajar interaktif, presentasi, video, & kuis berbasis AI.",
        "Integrasi career mentorship & literasi AI untuk lulusan."
      ]
    },
    {
      sessionNumber: "04",
      tag: "PENUTUPAN",
      title: "Showcase & Penutupan",
      items: [
        "Demo output, RTL 32 JP, & Sertifikat Applied AI MAXY Academy."
      ]
    }
  ]
};

export interface Speaker {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const SPEAKERS_DATA = {
  headline: "Belajar Langsung Bersama Praktisi AI Expert",
  subtext: "Dipandu oleh mentor yang aktif menerapkan AI dalam dunia industri dan pendidikan, sehingga materi yang disampaikan bersifat praktis, aplikatif, dan sesuai dengan kebutuhan terkini para akademisi.",
  list: [
    {
      name: "Andy Febrico Bintoro",
      role: "CTO / Co-Founder",
      bio: "Mentor ahli yang aktif menerapkan AI dalam dunia industri dan pendidikan untuk efisiensi riset serta transformasi institusi.",
      image: "/img/tim/Ko Toro.jpg"
    },
    {
      name: "Stefen Laksana",
      role: "Applied AI Expert & Product Manager",
      bio: "Telah mendampingi lebih dari 50 institusi dan perusahaan dalam adopsi teknologi AI.",
      image: "/img/tim/Pak Stefen.jpg"
    },
    {
      name: "Nathanael Abelito Leo",
      role: "Applied AI Expert & IT Trainer",
      bio: "Spesialis implementasi AI untuk pendidikan dan industri.",
      image: "/img/tim/Nathan.png"
    }
  ]
};

export const TESTIMONIALS_DATA = {
  headline: "Ini Cerita dan Pengalaman Mereka",
  subheadline: "Ratusan dosen telah mengikuti pelatihan AI bersama MAXY Academy dan mulai menerapkan AI untuk mendukung aktivitas penelitian, pengajaran, maupun publikasi ilmiah mereka.",
  notionLink: "https://app.notion.com/p/andytoro/Testimoni-3904b243e15280b1ac57fba79492cb8c",
  featured: [
    {
      quote: "Pelatihan ini membuka cakrawala pemikiran kami mengenai perancangan instrumen AI terapan untuk dosen dan mahasiswa, tanpa mengesampingkan kode etik akademik. Sangat bermanfaat untuk pengembangan kurikulum ajar prodi masa kini.",
      initials: "HW",
      name: "Dr. Hendra Wijaya",
      role: "Dekan Fakultas Bisnis"
    },
    {
      quote: "Awalnya ragu apakah AI benar bisa langsung dimanfaatkan untuk pengajaran secara mandiri. Ternyata integrasi tools di kelas ini sangat taktis, mempermudah penyusunan kurikulum, riset pribadi, hingga pembimbingan mahasiswa.",
      initials: "HC",
      name: "Happy Cahaya Mulya, M.Psi",
      role: "Kaprodi Psikologi"
    }
  ]
};

export const PRICING_DATA = {
  headline: "Program Disesuaikan Kebutuhan Anda",
  packages: [
    {
      id: "onsite-mitra",
      name: "Onsite Harga Khusus Mitra Universitas",
      description: "Nikmati pengalaman belajar langsung dengan harga spesial.",
      price: "Rp1.225.000",
      normalPrice: "Rp1.750.000",
      badge: "Harga Khusus Mitra",
      isPopular: true,
      features: [
        "Seluruh benefit kelas onsite",
        "Makan siang, snack, coffee break, dan networking eksklusif",
        "Harga Khusus Mitra Universitas dengan kuota terbatas",
        "Sertifikat 32 JP & Badge Eksklusif"
      ]
    },
    {
      id: "onsite-reguler",
      name: "Onsite Reguler",
      description: "Belajar langsung di MAXY AI Hub dengan pengalaman yang lebih intensif.",
      price: "Rp1.750.000",
      badge: "Reguler",
      isPopular: false,
      features: [
        "Pendampingan langsung dari mentor",
        "Akses penuh ke seluruh materi pembelajaran",
        "Fasilitas belajar yang nyaman dan representatif",
        "Sertifikat 32 JP & Badge Eksklusif"
      ]
    },
    {
      id: "online-zoom",
      name: "Online Class (Live via Zoom)",
      description: "Belajar dari mana saja tanpa mengurangi pengalaman belajar.",
      price: "Rp1.225.000",
      badge: "Flexible Online",
      isPopular: false,
      features: [
        "Live interaktif bersama mentor",
        "Akses prompt library eksklusif",
        "Rekaman kelas untuk belajar ulang",
        "Sertifikat 32 JP & Badge Eksklusif"
      ]
    }
  ]
};

export const VALUE_COMPARISON_DATA = {
  headline: "Semua yang Anda Dapatkan dalam Satu Hari",
  items: [
    {
      title: "AI Research Workflow",
      value: "Rp4.000.000",
      desc: "Framework AI untuk mempercepat riset, analisis literatur, dan penulisan akademik."
    },
    {
      title: "Template Proposal Hibah & Prompt Library",
      value: "Rp3.500.000",
      desc: "Template siap pakai untuk proposal hibah, riset, dan pengajaran berbasis AI."
    },
    {
      title: "Materi Pembelajaran & AI Toolkit",
      value: "Rp4.000.000",
      desc: "Modul pembelajaran, blueprint, dan rekomendasi tools AI yang siap diterapkan."
    },
    {
      title: "Recording Class",
      value: "Senilai Rp1.000.000",
      desc: "Akses rekaman kelas yang dapat dipelajari kapan saja."
    },
    {
      title: "Komunitas Alumni & Grup Diskusi",
      value: "Rp1.000.000",
      desc: "Terhubung dengan akademisi dan praktisi untuk berbagi wawasan dan kolaborasi."
    },
    {
      title: "Sertifikat Kelulusan",
      value: "Rp500.000",
      desc: "Sertifikat resmi sebagai bukti kompetensi."
    }
  ],
  totalValue: "Rp14.000.000",
  standardPrice: "Rp1.750.000",
  mitraPrice: "Rp1.225.000"
};

export const FAQS_DATA = {
  headline: "Pertanyaan yang Sering Diajukan",
  list: [
    {
      question: "Saya tidak memiliki latar belakang IT atau coding. Apakah bisa mengikuti kelas ini?",
      answer: "Tentu bisa. Program ini dirancang khusus untuk dosen dan akademisi dari berbagai bidang keilmuan, sehingga tidak memerlukan kemampuan coding maupun latar belakang IT. Anda akan mempelajari pemanfaatan AI melalui pendekatan yang praktis, didukung berbagai tools no-code yang mudah digunakan. Cukup siapkan laptop dan koneksi internet untuk mengikuti kelas."
    },
    {
      question: "Apakah wajib berlangganan tools AI berbayar?",
      answer: "Tidak. Sebagian besar materi dapat dipraktikkan menggunakan versi gratis dari berbagai AI tools. Namun, untuk memperoleh pengalaman dan hasil yang lebih optimal, kami akan memberikan rekomendasi tools premium yang dapat dipertimbangkan sesuai kebutuhan. Penggunaannya bersifat opsional, bukan kewajiban."
    },
    {
      question: "Bagaimana proses setelah mendaftar?",
      answer: "Setelah mengisi formulir, tim MAXY Academy akan menghubungi Anda melalui WhatsApp untuk proses konfirmasi data dan pembayaran. Setelah pendaftaran berhasil dikonfirmasi, Anda akan menerima informasi pelaksanaan kelas, tautan akses, serta panduan persiapan melalui email atau WhatsApp."
    },
    {
      question: "Apa perbedaan paket Online dan Onsite?",
      answer: "Baik kelas Online maupun Onsite memiliki materi dan kurikulum yang sama. Perbedaannya terletak pada metode pelaksanaannya. Kelas Onsite memberikan pengalaman belajar secara langsung di MAXY AI Hub Jakarta Selatan, lengkap dengan sesi diskusi, networking, dan pendampingan tatap muka. Sementara itu, kelas Online diselenggarakan melalui Zoom secara interaktif, sehingga tetap nyaman diikuti oleh peserta dari berbagai daerah."
    }
  ]
};

export const POPUP_DATA = {
  headline: "Jangan Lewatkan Harga Khusus Mitra Universitas!",
  subheadline: "Manfaatkan harga Harga Khusus Mitra Universitas sebelum periode promo berakhir. Setelah batas waktu atau kuota terpenuhi, harga akan kembali ke harga normal.",
  mitraPrice: "Rp1.225.000",
  normalPrice: "Rp1.750.000",
  buttonText: "Amankan Harga Khusus Mitra Universitas",
  footerText: "Lanjutkan tanpa penawaran Harga Khusus Mitra Universitas"
};

export interface IKUItem {
  id: string;
  code: string;
  category: string;
  title: string;
  description: string;
  badge: string;
}

export const IKU_LIST: IKUItem[] = [
  {
    id: "iku-3",
    code: "IKU 3",
    category: "Tri Dharma Perguruan Tinggi",
    title: "Dosen Berkegiatan di Luar Kampus",
    description: "Pemanfaatan AI untuk membimbing proyek riset terapan, konsultasi industri, dan pengabdian masyarakat.",
    badge: "Riset & Pengabdian"
  },
  {
    id: "iku-5",
    code: "IKU 5",
    category: "Publikasi & Karya Ilmiah",
    title: "Hasil Kerja Dosen Digunakan Masyarakat / Rekognisi Internasional",
    description: "Akselerasi penulisan draft jurnal bereputasi Scopus/Sinta, patent drafting, dan hibah penelitian.",
    badge: "Publikasi Scopus / Sinta"
  },
  {
    id: "iku-7",
    code: "IKU 7",
    category: "Inovasi Pembelajaran",
    title: "Kelas yang Kolaboratif dan Partisipatif",
    description: "Pembuatan modul ajar interaktif, studi kasus berbasis AI, dan instrumen asesmen modern.",
    badge: "Modul & Smart Teaching"
  }
];
