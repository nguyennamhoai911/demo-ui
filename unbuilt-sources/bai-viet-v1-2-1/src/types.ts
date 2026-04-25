import { LucideIcon } from 'lucide-react';

export type ArticleType = 'technical' | 'news' | 'project' | 'oem';

export interface Article {
  id: string;
  type: ArticleType;
  title: string;
  summary?: string;
  content?: string;
  author?: {
    name: string;
    avatar?: string;
    role: string;
  };
  publishDate: string;
  thumbnail?: string;
  tags: string[];
  isFeatured?: boolean;
  readTime?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Tất cả', slug: 'all' },
  { id: 'tech', name: 'Kiến thức kỹ thuật', slug: 'technical' },
  { id: 'news', name: 'Tin doanh nghiệp', slug: 'news' },
  { id: 'forklift', name: 'Pin xe nâng', slug: 'forklift' },
  { id: 'project', name: 'Dự án tiêu biểu', slug: 'project' },
  { id: 'oem', name: 'Giải pháp OEM', slug: 'oem' },
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: '1',
    type: 'technical',
    title: 'Tại sao Pin Lithium-ion là lựa chọn tối ưu cho hệ thống xe nâng điện trong kho lạnh?',
    summary: 'Phân tích hiệu suất của pin Lithium trong môi trường âm sâu và cách tối ưu hóa tuổi thọ pin khi vận hành liên tục 3 ca.',
    publishDate: '2024-03-20',
    thumbnail: 'https://images.unsplash.com/photo-1563906267088-b029e71011e4?auto=format&fit=crop&q=80&w=800',
    author: { name: 'Dr. Nguyen Van A', role: 'Technical Director' },
    tags: ['Xe nâng', 'Lithium-ion', 'Kho lạnh'],
    isFeatured: true,
    readTime: '8 phút'
  },
  {
    id: '2',
    type: 'news',
    title: 'PKG Battery ký kết hợp tác chiến lược cung cấp giải pháp năng lượng cho tập đoàn sản xuất AGV hàng đầu khu vực',
    summary: 'Sự kiện đánh dấu bước tiến quan trọng của PKG trong việc mở rộng thị trường robot tự hành tại Đông Nam Á.',
    publishDate: '2024-03-15',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    tags: ['Sự kiện', 'AGV', 'Hợp tác'],
    isFeatured: true,
    readTime: '5 phút'
  },
  {
    id: '3',
    type: 'technical',
    title: 'Hướng dẫn bảo trì định kỳ cho pack pin 48V-400Ah',
    summary: 'Các bước kiểm tra an toàn và bảo dưỡng hệ thống quản lý pin (BMS) để đảm bảo độ tin cậy vận hành.',
    publishDate: '2024-03-10',
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800',
    tags: ['Bảo trì', 'BMS', 'Kỹ thuật'],
    readTime: '12 phút'
  },
  {
    id: '4',
    type: 'project',
    title: 'Dự án: Hệ thống pin lưu trữ năng lượng mặt trời 1MWh tại khu công nghiệp VSIP III',
    summary: 'Giải pháp giảm thiểu chi phí tiền điện giờ cao điểm và ổn định lưới điện cho dây chuyền sản xuất may mặc.',
    publishDate: '2024-03-05',
    thumbnail: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=800',
    tags: ['ESS', 'Năng lượng mặt trời', 'Công nghiệp'],
    readTime: '10 phút'
  },
  {
    id: '5',
    type: 'oem',
    title: 'Dịch vụ thiết kế Battery Pack theo yêu cầu (OEM/ODM): Từ ý tưởng đến sản xuất hàng loạt',
    summary: 'Quy trình 5 bước tại PKG giúp doanh nghiệp sở hữu giải pháp pin độc quyền hiệu quả nhất.',
    publishDate: '2024-02-28',
    thumbnail: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800',
    tags: ['OEM', 'Thiết kế', 'ODM'],
    readTime: '15 phút'
  },
  {
    id: '6',
    type: 'technical',
    title: 'Tiêu chuẩn an toàn IEC 62619 đối với pin công nghiệp: Những điều doanh nghiệp cần biết',
    publishDate: '2024-02-20',
    // No thumbnail to test fallback
    tags: ['An toàn', 'IEC', 'Tiêu chuẩn'],
    readTime: '6 phút'
  },
  {
    id: '7',
    type: 'news',
    title: 'PKG Battery đạt chứng nhận Top 10 Doanh nghiệp Công nghiệp Hỗ trợ tiêu biểu năm 2023. Đây là một tiêu đề rất dài để kiểm tra khả năng hiển thị của giao diện trong trường hợp tiêu đề vượt quá 2 dòng trên mobile và 3 dòng trên desktop.',
    summary: 'Niềm tự hào của đội ngũ kỹ sư Việt Nam trên hành trình làm chủ công nghệ năng lượng sạch.',
    publishDate: '2024-01-15',
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    tags: ['Giải thưởng', 'Doanh nghiệp'],
    readTime: '4 phút'
  },
];
