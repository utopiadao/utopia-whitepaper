export const id = {
  title: 'Kertas Putih UTOPIA',
  description: 'Jaringan Kekayaan Bebas Konsensus: Evolusi Mandiri Ekosistem Aliran Nilai',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Kertas Putih', link: '/id/whitepaper/' },
      { text: 'Ekonomi', link: '/id/economics/' }
    ],

    sidebar: {
      '/id/whitepaper/': [
        {
          text: 'Kata Pengantar',
          link: '/id/whitepaper/'
        },
        {
          text: 'Bab 1: Filosofi Kebebasan Finansial',
          collapsed: false,
          items: [
            { text: 'Esensi Kekayaan', link: '/id/whitepaper/chapter1/section1' },
            { text: 'Pembentukan dan Evolusi Konsensus', link: '/id/whitepaper/chapter1/section2' },
            { text: 'Mendefinisikan Batas Kebebasan', link: '/id/whitepaper/chapter1/section3' }
          ]
        },
        {
          text: 'Bab 2: Kelahiran Utopia',
          collapsed: false,
          items: [
            { text: 'Visi dan Misi', link: '/id/whitepaper/chapter2/section1' },
            { text: 'Nilai Inti', link: '/id/whitepaper/chapter2/section2' },
            { text: 'Gambaran Arsitektur Sistem', link: '/id/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: 'Bab 3: Sistem Pool Resonansi',
          collapsed: false,
          items: [
            { text: 'Fondasi Filosofis', link: '/id/whitepaper/chapter3/section1' },
            { text: 'Struktur Empat Dimensi', link: '/id/whitepaper/chapter3/section2' },
            { text: 'Amplifikasi Resonansi', link: '/id/whitepaper/chapter3/section3' },
            { text: 'Proses Resonansi', link: '/id/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Bab 4: Jaringan Konsensus Zona',
          collapsed: false,
          items: [
            { text: 'Struktur Astral', link: '/id/whitepaper/chapter4/section1' },
            { text: 'Konsensus Dimensional', link: '/id/whitepaper/chapter4/section2' },
            { text: 'Algoritma Konsensus Nilai', link: '/id/whitepaper/chapter4/section3' },
            { text: 'Peta Bintang Konsensus', link: '/id/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: 'Bab 5: Sistem Node Kemakmuran',
          collapsed: false,
          items: [
            { text: 'Esensi Node Kemakmuran', link: '/id/whitepaper/chapter5/section1' },
            { text: 'Mekanisme Bukti Nilai', link: '/id/whitepaper/chapter5/section2' },
            { text: 'Mekanisme Berbagi Galaksi', link: '/id/whitepaper/chapter5/section3' },
            { text: 'Fungsi Mesin Kemakmuran', link: '/id/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: 'Bab 6: Mekanisme Restart Phoenix',
          collapsed: false,
          items: [
            { text: 'Filosofi Siklus Abadi', link: '/id/whitepaper/chapter6/section1' },
            { text: 'Proses Kelahiran Kembali Phoenix', link: '/id/whitepaper/chapter6/section2' },
            { text: 'Analisis Prinsip Ekonomi', link: '/id/whitepaper/chapter6/section3' },
            { text: 'Hadiah Kemakmuran Berkelanjutan', link: '/id/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: 'Bab 7: Arsitektur Kontrak Pintar',
          collapsed: false,
          items: [
            { text: 'Filosofi Tanpa Upgrade', link: '/id/whitepaper/chapter7/section1' },
            { text: 'Mesin Pra-kalkulasi', link: '/id/whitepaper/chapter7/section2' },
            { text: 'Jaminan Desentralisasi', link: '/id/whitepaper/chapter7/section3' },
            { text: 'Transparansi On-chain', link: '/id/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Bab 8: Model Ekonomi',
          collapsed: false,
          items: [
            { text: 'Algoritma Keseimbangan Dinamis', link: '/id/whitepaper/chapter8/section1' },
            { text: 'Algoritma Restart Phoenix', link: '/id/whitepaper/chapter8/section2' },
            { text: 'Analisis Uji Stres', link: '/id/whitepaper/chapter8/section3' },
            { text: 'Simulasi Monte Carlo', link: '/id/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Bab 9: Mengklarifikasi Kesalahpahaman',
          collapsed: false,
          items: [
            { text: 'Kesalahpahaman Sifat Sistem', link: '/id/whitepaper/chapter9/section1' },
            { text: 'Kesalahpahaman Kompleksitas', link: '/id/whitepaper/chapter9/section2' },
            { text: 'Kesalahpahaman Keamanan Teknis', link: '/id/whitepaper/chapter9/section3' },
            { text: 'Kesalahpahaman Keberlanjutan', link: '/id/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: 'Bab 10: Kesimpulan',
          collapsed: false,
          items: [
            { text: 'Benih Pemikiran', link: '/id/whitepaper/chapter10/section1' },
            { text: 'Masa Depan Bersama Kita', link: '/id/whitepaper/chapter10/section2' },
            { text: 'Nilai Abadi', link: '/id/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: 'Lampiran',
          collapsed: false,
          items: [
            { text: 'Glosarium', link: '/id/whitepaper/appendix/glossary' },
            { text: 'Parameter Sistem', link: '/id/whitepaper/appendix/parameters' },
            { text: 'Panduan Verifikasi', link: '/id/whitepaper/appendix/verification' },
            { text: 'Penyangkalan', link: '/id/whitepaper/appendix/disclaimer' }
          ]
        }
      ],
      '/id/economics/': [
        {
          text: 'Model Ekonomi',
          items: [
            { text: 'Ikhtisar', link: '/id/economics/' },
            { text: 'Teori Nilai Jaringan', link: '/id/economics/network-value' },
            { text: 'Model Pendapatan', link: '/id/economics/revenue-model' },
            { text: 'Manajemen Risiko', link: '/id/economics/risk-management' },
            { text: 'Analisis Keberlanjutan', link: '/id/economics/sustainability' }
          ]
        }
      ],
      '/id/technology/': [
        {
          text: 'Arsitektur Teknis',
          items: [
            { text: 'Ikhtisar', link: '/id/technology/' },
            { text: 'Kontrak Pintar', link: '/id/technology/smart-contract' },
            { text: 'Mekanisme Keamanan', link: '/id/technology/security' },
            { text: 'Dokumentasi API', link: '/id/technology/api' }
          ]
        }
      ]
    },

    // Indonesian interface text
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub'
    }
  }
}