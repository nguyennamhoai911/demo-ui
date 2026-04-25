export interface Article {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author?: string;
  readTime: string;
  isFeatured?: boolean;
}

export const CATEGORIES = [
  "Tất cả",
  "Pin xe nâng",
  "AGV / Robot",
  "Lưu trữ năng lượng",
  "Xe điện du lịch",
  "OEM / ODM",
  "Kiến thức kỹ thuật",
  "Dự án thực tế",
  "Tin công ty",
  "Tài liệu",
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Pin lithium xe nâng: Giải pháp tối ưu cho nhà máy hiện đại",
    category: "Pin xe nâng",
    summary: "Tìm hiểu vì sao các tập đoàn lớn đang chuyển dịch từ pin chì-axit sang lithium để tăng 40% hiệu suất vận hành.",
    content: "Content goes here...",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    date: "15 Tháng 4, 2024",
    readTime: "8 phút đọc",
    isFeatured: true,
  },
  {
    id: "2",
    title: "So sánh Lithium và Chì-axit cho xe nâng công nghiệp",
    category: "Kiến thức kỹ thuật",
    summary: "Bảng phân tích chi tiết về TCO (Tổng chi phí sở hữu) giữa hai công nghệ lưu trữ năng lượng phổ biến nhất hiện nay.",
    content: "Content goes here...",
    image: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?q=80&w=2070&auto=format&fit=crop",
    date: "10 Tháng 4, 2024",
    readTime: "12 phút đọc",
  },
  {
    id: "3",
    title: "Dự án Pin Lithium cho kho lạnh tại Logistics Hub Hải Phòng",
    category: "Dự án thực tế",
    summary: "Cách PKG Battery giải quyết bài toán sụt giảm dung lượng pin trong môi trường -25 độ C.",
    content: "Content goes here...",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    date: "05 Tháng 4, 2024",
    readTime: "6 phút đọc",
  },
  {
    id: "4",
    title: "Quy trình QC Pack Pin tại PKG Battery: Tiêu chuẩn quốc tế",
    category: "OEM / ODM",
    summary: "Khám phá hệ thống kiểm định 12 bước nghiêm ngặt đảm bảo an toàn tuyệt đối cho mọi tế bào pin.",
    content: "Content goes here...",
    image: "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=2070&auto=format&fit=crop",
    date: "02 Tháng 4, 2024",
    readTime: "10 phút đọc",
  },
  {
    id: "5",
    title: "Pin AGV cho nhà máy tự động hóa: Những lưu ý khi thiết kế",
    category: "AGV / Robot",
    summary: "Tối ưu hóa kích thước và trọng lượng pack pin để đạt hiệu suất di chuyển tốt nhất cho Robot tự hành.",
    content: "Content goes here...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    date: "28 Tháng 3, 2024",
    readTime: "7 phút đọc",
  },
];
