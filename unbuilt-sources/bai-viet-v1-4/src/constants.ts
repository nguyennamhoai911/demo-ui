
export type ArticleType = 'technical' | 'news' | 'project' | 'oem';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  type: ArticleType;
  image: string;
  date: string;
  readTime: string;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  label: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Pin lithium xe nâng là gì? Ưu điểm vượt trội so với acquy chì axit',
    excerpt: 'Khám phá lý do tại sao các doanh nghiệp kho vận đang chuyển dịch mạnh mẽ sang công nghệ lithium để tối ưu hóa chi phí vận hành.',
    category: 'Kiến thức kỹ thuật',
    type: 'technical',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    date: '15/04/2026',
    readTime: '6 phút đọc',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'PKG Battery ký kết hợp tác chiến lược cùng tập đoàn Logistics toàn cầu',
    excerpt: 'Sự kiện đánh dấu bước tiến quan trọng trong việc cung cấp giải pháp năng lượng xanh cho chuỗi cung ứng tại khu vực Đông Nam Á.',
    category: 'Tin doanh nghiệp',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1512418490979-92798ccc13a0?auto=format&fit=crop&q=80',
    date: '10/04/2026',
    readTime: '4 phút đọc',
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Giải pháp pin Lithium cho hệ thống AGV tại nhà máy sản xuất linh kiện điện tử',
    excerpt: 'Chi tiết dự án triển khai hệ thống pin thông minh hỗ trợ vận hành 24/7 cho dàn Robot tự hành tại Bắc Ninh.',
    category: 'Dự án bàn giao',
    type: 'project',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    date: '08/04/2026',
    readTime: '8 phút đọc',
    isFeatured: true,
  },
  {
    id: '4',
    title: 'Cách chọn dung lượng pin xe nâng phù hợp với ca làm việc',
    excerpt: 'Tính toán dung lượng Ampere-giờ (Ah) dựa trên cường độ hoạt động và khả năng sạc tranh thủ của xe nâng điện.',
    category: 'Kiến thức kỹ thuật',
    type: 'technical',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80',
    date: '05/04/2026',
    readTime: '5 phút đọc',
  },
  {
    id: '5',
    title: 'Bàn giao lô pin xe nâng điện cho doanh nghiệp thực phẩm hàng đầu',
    excerpt: 'Dòng pin tiêu chuẩn IP67 đáp ứng yêu cầu khắt khe về vệ sinh và nhiệt độ trong môi trường kho lạnh thực phẩm.',
    category: 'Dự án bàn giao',
    type: 'project',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80',
    date: '02/04/2026',
    readTime: '4 phút đọc',
  },
  {
    id: '6',
    title: 'PKG tham gia Triển lãm Công nghiệp Quốc tế 2026',
    excerpt: 'Giới thiệu các dòng module pin mới nhất dành cho lưu trữ năng lượng tái tạo (ESS) và xe điện chuyên dụng.',
    category: 'Tin doanh nghiệp',
    type: 'news',
    image: 'https://images.unsplash.com/photo-1505373633519-204124352a12?auto=format&fit=crop&q=80',
    date: '28/03/2026',
    readTime: '3 phút đọc',
  },
  {
    id: '7',
    title: 'Hệ thống quản lý pin BMS: Bộ não của pin Lithium công nghiệp',
    excerpt: 'Tìm hiểu sâu về cấu tạo và cách thức BMS bảo vệ hệ thống pin khỏi quá nhiệt, quá tải và ngắn mạch.',
    category: 'Kiến thức kỹ thuật',
    type: 'technical',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    date: '25/03/2026',
    readTime: '7 phút đọc',
  },
  {
    id: '8',
    title: 'Tầm quan trọng của dịch vụ OEM/ODM trong ngành pin công nghiệp',
    excerpt: 'Lợi thế khi doanh nghiệp tự làm chủ công nghệ đóng gói pack pin và tùy biến theo yêu cầu thiết bị.',
    category: 'OEM / ODM',
    type: 'oem',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    date: '20/03/2026',
    readTime: '5 phút đọc',
  }
];

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'Tất cả' },
  { id: 'technical', label: 'Kiến thức kỹ thuật' },
  { id: 'news', label: 'Tin doanh nghiệp' },
  { id: 'project', label: 'Dự án bàn giao' },
  { id: 'xe-nang', label: 'Xe nâng' },
  { id: 'agv-robot', label: 'AGV / Robot' },
  { id: 'oem-odm', label: 'OEM / ODM' },
];
