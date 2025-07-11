export const vi = {
  title: 'Sách Trắng UTOPIA',
  description: 'Mạng Lưới Tài Sản Tự Do Đồng Thuận: Tiến Hóa Tự Quản Của Hệ Sinh Thái Dòng Chảy Giá Trị',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Sách Trắng', link: '/vi/whitepaper/' },
      { text: 'Kinh Tế', link: '/vi/economics/' }
    ],

    sidebar: {
      '/vi/whitepaper/': [
        {
          text: 'Lời Nói Đầu',
          link: '/vi/whitepaper/'
        },
        {
          text: 'Chương 1: Triết Lý Tự Do Tài Chính',
          collapsed: false,
          items: [
            { text: 'Bản Chất Của Sự Giàu Có', link: '/vi/whitepaper/chapter1/section1' },
            { text: 'Hình Thành và Tiến Hóa Đồng Thuận', link: '/vi/whitepaper/chapter1/section2' },
            { text: 'Xác Định Ranh Giới Tự Do', link: '/vi/whitepaper/chapter1/section3' }
          ]
        },
        {
          text: 'Chương 2: Sự Ra Đời Của Utopia',
          collapsed: false,
          items: [
            { text: 'Tầm Nhìn và Sứ Mệnh', link: '/vi/whitepaper/chapter2/section1' },
            { text: 'Giá Trị Cốt Lõi', link: '/vi/whitepaper/chapter2/section2' },
            { text: 'Tổng Quan Kiến Trúc Hệ Thống', link: '/vi/whitepaper/chapter2/section3' }
          ]
        },
        {
          text: 'Chương 3: Hệ Thống Pool Cộng Hưởng',
          collapsed: false,
          items: [
            { text: 'Nền Tảng Triết Học', link: '/vi/whitepaper/chapter3/section1' },
            { text: 'Cấu Trúc Bốn Chiều', link: '/vi/whitepaper/chapter3/section2' },
            { text: 'Khuếch Đại Cộng Hưởng', link: '/vi/whitepaper/chapter3/section3' },
            { text: 'Quy Trình Cộng Hưởng', link: '/vi/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Chương 4: Mạng Lưới Đồng Thuận Khu Vực',
          collapsed: false,
          items: [
            { text: 'Cấu Trúc Thiên Thể', link: '/vi/whitepaper/chapter4/section1' },
            { text: 'Đồng Thuận Chiều Không Gian', link: '/vi/whitepaper/chapter4/section2' },
            { text: 'Thuật Toán Đồng Thuận Giá Trị', link: '/vi/whitepaper/chapter4/section3' },
            { text: 'Bản Đồ Sao Đồng Thuận', link: '/vi/whitepaper/chapter4/section4' }
          ]
        },
        {
          text: 'Chương 5: Hệ Thống Node Thịnh Vượng',
          collapsed: false,
          items: [
            { text: 'Bản Chất Của Node Thịnh Vượng', link: '/vi/whitepaper/chapter5/section1' },
            { text: 'Cơ Chế Chứng Minh Giá Trị', link: '/vi/whitepaper/chapter5/section2' },
            { text: 'Cơ Chế Chia Sẻ Thiên Hà', link: '/vi/whitepaper/chapter5/section3' },
            { text: 'Chức Năng Động Cơ Thịnh Vượng', link: '/vi/whitepaper/chapter5/section4' }
          ]
        },
        {
          text: 'Chương 6: Cơ Chế Khởi Động Lại Phoenix',
          collapsed: false,
          items: [
            { text: 'Triết Lý Chu Kỳ Vĩnh Cửu', link: '/vi/whitepaper/chapter6/section1' },
            { text: 'Quy Trình Tái Sinh Phoenix', link: '/vi/whitepaper/chapter6/section2' },
            { text: 'Phân Tích Nguyên Lý Kinh Tế', link: '/vi/whitepaper/chapter6/section3' },
            { text: 'Phần Thưởng Thịnh Vượng Liên Tục', link: '/vi/whitepaper/chapter6/section4' }
          ]
        },
        {
          text: 'Chương 7: Kiến Trúc Hợp Đồng Thông Minh',
          collapsed: false,
          items: [
            { text: 'Triết Lý Không Nâng Cấp', link: '/vi/whitepaper/chapter7/section1' },
            { text: 'Động Cơ Tính Toán Trước', link: '/vi/whitepaper/chapter7/section2' },
            { text: 'Đảm Bảo Phi Tập Trung', link: '/vi/whitepaper/chapter7/section3' },
            { text: 'Minh Bạch On-chain', link: '/vi/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Chương 8: Mô Hình Kinh Tế',
          collapsed: false,
          items: [
            { text: 'Thuật Toán Cân Bằng Động', link: '/vi/whitepaper/chapter8/section1' },
            { text: 'Thuật Toán Khởi Động Lại Phoenix', link: '/vi/whitepaper/chapter8/section2' },
            { text: 'Phân Tích Kiểm Tra Áp Lực', link: '/vi/whitepaper/chapter8/section3' },
            { text: 'Mô Phỏng Monte Carlo', link: '/vi/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Chương 9: Làm Rõ Hiểu Lầm',
          collapsed: false,
          items: [
            { text: 'Hiểu Lầm Về Bản Chất Hệ Thống', link: '/vi/whitepaper/chapter9/section1' },
            { text: 'Hiểu Lầm Về Độ Phức Tạp', link: '/vi/whitepaper/chapter9/section2' },
            { text: 'Hiểu Lầm Về Bảo Mật Kỹ Thuật', link: '/vi/whitepaper/chapter9/section3' },
            { text: 'Hiểu Lầm Về Tính Bền Vững', link: '/vi/whitepaper/chapter9/section4' }
          ]
        },
        {
          text: 'Chương 10: Kết Luận',
          collapsed: false,
          items: [
            { text: 'Hạt Giống Tư Duy', link: '/vi/whitepaper/chapter10/section1' },
            { text: 'Tương Lai Chung Của Chúng Ta', link: '/vi/whitepaper/chapter10/section2' },
            { text: 'Giá Trị Vĩnh Cửu', link: '/vi/whitepaper/chapter10/section3' }
          ]
        },
        {
          text: 'Phụ Lục',
          collapsed: false,
          items: [
            { text: 'Thuật Ngữ', link: '/vi/whitepaper/appendix/glossary' },
            { text: 'Tham Số Hệ Thống', link: '/vi/whitepaper/appendix/parameters' },
            { text: 'Hướng Dẫn Xác Minh', link: '/vi/whitepaper/appendix/verification' },
            { text: 'Tuyên Bố Miễn Trừ', link: '/vi/whitepaper/appendix/disclaimer' }
          ]
        }
      ],
      '/vi/economics/': [
        {
          text: 'Mô Hình Kinh Tế',
          items: [
            { text: 'Tổng Quan', link: '/vi/economics/' },
            { text: 'Lý Thuyết Giá Trị Mạng Lưới', link: '/vi/economics/network-value' },
            { text: 'Mô Hình Doanh Thu', link: '/vi/economics/revenue-model' },
            { text: 'Quản Lý Rủi Ro', link: '/vi/economics/risk-management' },
            { text: 'Phân Tích Tính Bền Vững', link: '/vi/economics/sustainability' }
          ]
        }
      ],
      '/vi/technology/': [
        {
          text: 'Kiến Trúc Kỹ Thuật',
          items: [
            { text: 'Tổng Quan', link: '/vi/technology/' },
            { text: 'Hợp Đồng Thông Minh', link: '/vi/technology/smart-contract' },
            { text: 'Cơ Chế Bảo Mật', link: '/vi/technology/security' },
            { text: 'Tài Liệu API', link: '/vi/technology/api' }
          ]
        }
      ]
    },

    // Vietnamese interface text
    editLink: {
      pattern: 'https://github.com/utopia-project/whitepaper/edit/main/docs/:path',
      text: 'Chỉnh sửa trang này trên GitHub'
    }
  }
}