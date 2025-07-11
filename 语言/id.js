```javascript
export const id = {
  title: 'Buku Putih Utopia',
  description: 'Jaringan Kekayaan Bebas Konsensus: Ekosistem Aliran Nilai yang Berevolusi Mandiri',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Buku Putih', link: '/whitepaper/' },
      { text: 'Model Ekonomi', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: 'Kata Pengantar',
          link: '/whitepaper/'
        },
        {
          text: 'Bab 1: Pemikiran Filosofis tentang Kebebasan Kekayaan',
          link: '/whitepaper/chapter1/'
        },
        {
          text: 'Bab 2: Kelahiran Utopia',
          link: '/whitepaper/chapter2/'
        },
        {
          text: 'Bab 3: Sistem Kolam Resonansi',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/chapter3/' },
            { text: '3.1 Dasar Filosofis Kolam Resonansi', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 Struktur Resonansi Empat Dimensi', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 Prinsip Amplifikasi Resonansi', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 Proses Partisipasi', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Bab 4: Jaringan Konsensus Regional',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/chapter4/' },
            { text: '4.1 Struktur Bagan Bintang dan Konsensus Dimensional', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 Algoritma Konsensus Nilai dan Peta Bintang', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 Filosofi Jaringan dan Praktek Teknis', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'Bab 5: Sistem Node Kemakmuran',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/chapter5/' },
            { text: '5.1 Sifat dan Seleksi Node Kemakmuran', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 Berbagi Galaksi dan Distribusi Nilai', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 Mesin Kemakmuran dan Keseimbangan Dinamis', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'Bab 6: Mekanisme Restart Phoenix',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/chapter6/' },
            { text: '6.1 Filosofi dan Mekanisme Pemicu Restart Phoenix', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 Desain Proses Kelahiran Kembali Phoenix', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 Analisis Prinsip Ekonomi', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 Mekanisme Penghargaan Kemakmuran Berkelanjutan', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 Analisis Teori Permainan dan Makna Utama', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'Bab 7: Kontrak Pintar yang Didorong Informasi',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/chapter7/' },
            { text: '7.1 Desain Arsitektur dan Konsep', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 Mesin Pra-komputasi dan Mekanisme Keamanan', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 Interaksi Pengguna dan Desentralisasi', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 Transparansi dan Ringkasan Teknis', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Bab 8: Pemodelan Matematika',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/chapter8/' },
            { text: '8.1 Variabel Inti dan Model Stabilitas', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 Efek Jaringan dan Keseimbangan Dinamis', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 Algoritma Phoenix dan Tes Stres', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 Teori Ekonomi dan Kesimpulan', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Bab 9: Klarifikasi Kesalahpahaman Umum',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/chapter9/' },
            { text: '9.1 Kesalahpahaman 1: Ini adalah skema Ponzi atau kumpulan uang', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 Kesalahpahaman 2: Pengembalian tinggi tidak berkelanjutan', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 Kesalahpahaman 3: Kurangnya dukungan nilai nyata', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 Kesalahpahaman 4: Kompleksitas teknis untuk menipu', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 Kesalahpahaman 5: Risiko terlalu tinggi dan tidak terkendali', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 Kesalahpahaman 6: Hanya permainan kentang panas', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 Kesalahpahaman 7: Sistem mungkin dimanipulasi', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 Kesalahpahaman 8: Model ekonomi tidak berkelanjutan', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 Kesalahpahaman 9: Tim mungkin kabur', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 Kesalahpahaman 10: Hanya peserta awal yang mendapat manfaat', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 Kesimpulan: Kognisi Rasional dan Pilihan Bijak', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 Lampiran: Panduan Verifikasi Teknis', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 Alat Verifikasi Komunitas', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'Bab 10: Kesimpulan - Benih Pemikiran',
          link: '/whitepaper/chapter10/'
        },
        {
          text: 'Bab 11: Lampiran',
          collapsed: false,
          items: [
            { text: 'Ikhtisar Bab', link: '/whitepaper/appendix/' },
            { text: '11.1 Glosarium Konsep Inti', link: '/whitepaper/appendix/section1' },
            { text: '11.2 Parameter Sistem dan Materi Referensi', link: '/whitepaper/appendix/section2' },
            { text: '11.3 Perbandingan Terminologi dan Ucapan Terima Kasih', link: '/whitepaper/appendix/section3' },
            { text: '11.4 Penyangkalan dan Partisipasi', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: 'Model Ekonomi',
          items: [
            { text: 'Gambaran Umum', link: '/economics/' },
            { text: 'Teori Nilai Jaringan', link: '/economics/network-value' },
            { text: 'Model Pendapatan', link: '/economics/revenue-model' },
            { text: 'Manajemen Risiko', link: '/economics/risk-management' },
            { text: 'Analisis Keberlanjutan', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // Teks antarmuka Indonesia
    outlineTitle: 'Daftar Isi',
    docFooter: {
      prev: 'Halaman sebelumnya',
      next: 'Halaman selanjutnya'
    },
    darkModeSwitchLabel: 'Tampilan',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Kembali ke atas'
  }
}
```