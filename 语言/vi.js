```javascript
export const vi = {
  title: 'Sách Trắng Utopia',
  description: 'Mạng lưới Tài sản Tự do Đồng thuận: Hệ sinh thái Dòng chảy Giá trị Tự tiến hóa',
  
  themeConfig: {
    logo: '/logo/logo2.svg',
    nav: [
      { text: 'Sách Trắng', link: '/whitepaper/' },
      { text: 'Mô hình Kinh tế', link: '/economics/' }
    ],

    sidebar: {
      '/whitepaper/': [
        {
          text: 'Lời nói đầu',
          link: '/whitepaper/'
        },
        {
          text: 'Chương 1: Suy tư Triết học về Tự do Tài sản',
          link: '/whitepaper/chapter1/'
        },
        {
          text: 'Chương 2: Sự ra đời của Utopia',
          link: '/whitepaper/chapter2/'
        },
        {
          text: 'Chương 3: Hệ thống Bể Cộng hưởng',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/chapter3/' },
            { text: '3.1 Nền tảng Triết học của Bể Cộng hưởng', link: '/whitepaper/chapter3/section1' },
            { text: '3.2 Cấu trúc Cộng hưởng Bốn chiều', link: '/whitepaper/chapter3/section2' },
            { text: '3.3 Nguyên lý Khuếch đại Cộng hưởng', link: '/whitepaper/chapter3/section3' },
            { text: '3.4 Quy trình Tham gia', link: '/whitepaper/chapter3/section4' }
          ]
        },
        {
          text: 'Chương 4: Mạng lưới Đồng thuận Khu vực',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/chapter4/' },
            { text: '4.1 Cấu trúc Biểu đồ Sao và Đồng thuận Chiều', link: '/whitepaper/chapter4/section1' },
            { text: '4.2 Thuật toán Đồng thuận Giá trị và Bản đồ Sao', link: '/whitepaper/chapter4/section2' },
            { text: '4.3 Triết lý Mạng lưới và Thực hành Kỹ thuật', link: '/whitepaper/chapter4/section3' }
          ]
        },
        {
          text: 'Chương 5: Hệ thống Nút Thịnh vượng',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/chapter5/' },
            { text: '5.1 Bản chất và Lựa chọn các Nút Thịnh vượng', link: '/whitepaper/chapter5/section1' },
            { text: '5.2 Chia sẻ Thiên hà và Phân phối Giá trị', link: '/whitepaper/chapter5/section2' },
            { text: '5.3 Động cơ Thịnh vượng và Cân bằng Động', link: '/whitepaper/chapter5/section3' }
          ]
        },
        {
          text: 'Chương 6: Cơ chế Khởi động lại Phoenix',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/chapter6/' },
            { text: '6.1 Triết lý và Cơ chế Kích hoạt Khởi động lại Phoenix', link: '/whitepaper/chapter6/section1' },
            { text: '6.2 Thiết kế Quy trình Tái sinh Phoenix', link: '/whitepaper/chapter6/section2' },
            { text: '6.3 Phân tích Nguyên lý Kinh tế', link: '/whitepaper/chapter6/section3' },
            { text: '6.4 Cơ chế Thưởng Thịnh vượng Liên tục', link: '/whitepaper/chapter6/section4' },
            { text: '6.5 Phân tích Lý thuyết Trò chơi và Ý nghĩa Cuối cùng', link: '/whitepaper/chapter6/section5' }
          ]
        },
        {
          text: 'Chương 7: Hợp đồng Thông minh được Điều khiển bởi Thông tin',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/chapter7/' },
            { text: '7.1 Thiết kế Kiến trúc và Khái niệm', link: '/whitepaper/chapter7/section1' },
            { text: '7.2 Động cơ Tính toán trước và Cơ chế Bảo mật', link: '/whitepaper/chapter7/section2' },
            { text: '7.3 Tương tác Người dùng và Phi tập trung hóa', link: '/whitepaper/chapter7/section3' },
            { text: '7.4 Minh bạch và Tóm tắt Kỹ thuật', link: '/whitepaper/chapter7/section4' }
          ]
        },
        {
          text: 'Chương 8: Mô hình hóa Toán học',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/chapter8/' },
            { text: '8.1 Biến số Cốt lõi và Mô hình Ổn định', link: '/whitepaper/chapter8/section1' },
            { text: '8.2 Hiệu ứng Mạng lưới và Cân bằng Động', link: '/whitepaper/chapter8/section2' },
            { text: '8.3 Thuật toán Phoenix và Kiểm tra Áp lực', link: '/whitepaper/chapter8/section3' },
            { text: '8.4 Lý thuyết Kinh tế và Kết luận', link: '/whitepaper/chapter8/section4' }
          ]
        },
        {
          text: 'Chương 9: Làm rõ những Hiểu lầm Phổ biến',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/chapter9/' },
            { text: '9.1 Hiểu lầm 1: Đây là một kế hoạch Ponzi hoặc quỹ tiền', link: '/whitepaper/chapter9/section1' },
            { text: '9.2 Hiểu lầm 2: Lợi nhuận cao không bền vững', link: '/whitepaper/chapter9/section2' },
            { text: '9.3 Hiểu lầm 3: Thiếu hỗ trợ giá trị thực', link: '/whitepaper/chapter9/section3' },
            { text: '9.4 Hiểu lầm 4: Độ phức tạp kỹ thuật để lừa dối', link: '/whitepaper/chapter9/section4' },
            { text: '9.5 Hiểu lầm 5: Rủi ro quá cao và không thể kiểm soát', link: '/whitepaper/chapter9/section5' },
            { text: '9.6 Hiểu lầm 6: Chỉ là một trò chơi khoai tây nóng', link: '/whitepaper/chapter9/section6' },
            { text: '9.7 Hiểu lầm 7: Hệ thống có thể bị thao túng', link: '/whitepaper/chapter9/section7' },
            { text: '9.8 Hiểu lầm 8: Mô hình kinh tế không bền vững', link: '/whitepaper/chapter9/section8' },
            { text: '9.9 Hiểu lầm 9: Đội ngũ có thể bỏ chạy', link: '/whitepaper/chapter9/section9' },
            { text: '9.10 Hiểu lầm 10: Chỉ những người tham gia sớm được hưởng lợi', link: '/whitepaper/chapter9/section10' },
            { text: '9.11 Kết luận: Nhận thức Hợp lý và Lựa chọn Khôn ngoan', link: '/whitepaper/chapter9/section11' },
            { text: '9.12 Phụ lục: Hướng dẫn Xác minh Kỹ thuật', link: '/whitepaper/chapter9/section12' },
            { text: '9.13 Công cụ Xác minh Cộng đồng', link: '/whitepaper/chapter9/section13' }
          ]
        },
        {
          text: 'Chương 10: Kết luận - Hạt giống của Tư tưởng',
          link: '/whitepaper/chapter10/'
        },
        {
          text: 'Chương 11: Phụ lục',
          collapsed: false,
          items: [
            { text: 'Tổng quan Chương', link: '/whitepaper/appendix/' },
            { text: '11.1 Từ điển Khái niệm Cốt lõi', link: '/whitepaper/appendix/section1' },
            { text: '11.2 Tham số Hệ thống và Tài liệu Tham khảo', link: '/whitepaper/appendix/section2' },
            { text: '11.3 So sánh Thuật ngữ và Lời cảm ơn', link: '/whitepaper/appendix/section3' },
            { text: '11.4 Tuyên bố Từ chối trách nhiệm và Tham gia', link: '/whitepaper/appendix/section4' }
          ]
        }
      ],
      '/economics/': [
        {
          text: 'Mô hình Kinh tế',
          items: [
            { text: 'Tổng quan', link: '/economics/' },
            { text: 'Lý thuyết Giá trị Mạng lưới', link: '/economics/network-value' },
            { text: 'Mô hình Doanh thu', link: '/economics/revenue-model' },
            { text: 'Quản lý Rủi ro', link: '/economics/risk-management' },
            { text: 'Phân tích Tính bền vững', link: '/economics/sustainability' }
          ]
        }
      ]
    },

    // Văn bản giao diện tiếng Việt
    outlineTitle: 'Mục lục',
    docFooter: {
      prev: 'Trang trước',
      next: 'Trang tiếp theo'
    },
    darkModeSwitchLabel: 'Giao diện',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Về đầu trang'
  }
}
```