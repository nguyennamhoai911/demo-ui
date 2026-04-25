import { Product } from './types';

export const mockProduct: Product = {
  id: 'pkg-24230v1',
  sku: 'PKGFF-24230V1',
  category: 'Pin lithium cho xe nâng điện',
  name: 'Bình ắc quy pin lithium cho xe nâng điện 24V 230Ah',
  shortDescription: 'Giải pháp pin lithium công nghiệp cho xe nâng vận hành ổn định, sạc nhanh và giảm chi phí bảo trì.',
  mainImage: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop', // Ảnh minh họa acquy
  gallery: [
    'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-15950538016bb3-09413286f9c9?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
  ],
  snapshot: [
    { label: 'Mã sản phẩm', value: 'PKGFF-24230V1' },
    { label: 'Dung lượng', value: '230', unit: 'Ah' },
    { label: 'Năng lượng', value: '5.8', unit: 'kWh' },
    { label: 'Điện áp', value: '25.6', unit: 'V' },
    { label: 'Thời gian sạc', value: '2 – 4', unit: 'giờ' },
    { label: 'Kích thước', value: '630 × 175 × 450', unit: 'mm' },
    { label: 'Khối lượng', value: '~54', unit: 'kg' },
  ],
  benefits: [
    { title: 'Sạc nhanh vượt trội', description: 'Đầy điện trong 2-4 giờ, cho phép sạc tranh thủ mọi thời gian nghỉ.' },
    { title: 'Không bảo trì', description: 'Loại bỏ hoàn toàn công đoạn châm nước cất định kỳ và vệ sinh axit.' },
    { title: 'BMS bảo vệ thông minh', description: 'Hệ thống quản lý pin tự động ngắt khi quá nhiệt, quá dòng, bảo vệ an toàn tuyệt đối.' },
    { title: 'Tuổi thọ cao', description: 'Số chu kỳ sạc xả lên đến 3000-4000 lần, gấp 3-4 lần ắc quy chì truyền thống.' },
  ],
  applications: [
    'Xe nâng điện Forklift',
    'Xe nâng tay điện Palette Jack',
    'Kho vận Logistics',
    'Nhà máy sản xuất',
    'Môi trường sạch/thực phẩm',
  ],
  compatibility: [
    'Phù hợp xe nâng điện 24V phổ biến',
    'Tiêu chuẩn thay thế ắc quy chì axit',
    'Hỗ trợ cấu hình theo model xe: Toyota, Komatsu, Linde, Heli...',
  ],
  techSpecs: [
    {
      groupName: 'Thông số điện',
      specs: [
        { key: 'Định mức điện áp', value: '25.6 V' },
        { key: 'Dung lượng định mức', value: '230 Ah' },
        { key: 'Năng lượng lưu trữ', value: '5.88 kWh' },
        { key: 'Hiệu suất sạc/xả', value: '≥ 95%' },
      ],
    },
    {
      groupName: 'Thông số sạc/xả',
      specs: [
        { key: 'Dòng sạc tiêu chuẩn', value: '115 A (0.5C)' },
        { key: 'Dòng sạc tối đa', value: '230 A (1C)' },
        { key: 'Dòng xả tối đa liên tục', value: '230 A' },
        { key: 'Dòng xả đỉnh (10s)', value: '460 A' },
      ],
    },
    {
      groupName: 'Kích thước & Khối lượng',
      specs: [
        { key: 'Kích thước (D×R×C)', value: '630 × 175 × 450 mm' },
        { key: 'Khối lượng', value: '54 kg' },
        { key: 'Vỏ thùng', value: 'Thép sơn tĩnh điện' },
      ],
    },
  ],
  familyOptions: [
    { id: '1', name: '24V 150Ah', voltage: '24V', capacity: '150Ah', energy: '3.8kWh' },
    { id: '2', name: '24V 200Ah', voltage: '24V', capacity: '200Ah', energy: '5.1kWh' },
    { id: '3', name: '24V 230Ah', voltage: '24V', capacity: '230Ah', energy: '5.8kWh', isActive: true },
    { id: '4', name: '24V 280Ah', voltage: '24V', capacity: '280Ah', energy: '7.1kWh' },
  ],
  downloads: [
    { name: 'Catalogue Giải pháp Pin Lithium PKG', type: 'PDF', size: '2.4 MB', url: '#' },
    { name: 'Datasheet PKGFF-24230V1', type: 'PDF', size: '1.2 MB', url: '#' },
    { name: 'Hướng dẫn sử dụng & bảo trì', type: 'PDF', size: '3.1 MB', url: '#' },
  ],
  faqs: [
    { question: 'Pin này có thay thế được ắc quy chì đang dùng không?', answer: 'Hoàn toàn có thể. PKG cung cấp giải pháp hộc sắt thiết kế riêng theo kích thước xe nâng hiện tại của bạn để lắp đặt vừa vặn.' },
    { question: 'Thời gian bảo hành là bao lâu?', answer: 'Tất cả sản phẩm pin lithium PKG được bảo hành tiêu chuẩn 5 năm hoặc 10,000 giờ vận hành tùy điều kiện nào đến trước.' },
    { question: 'Có cần phải thay bộ sạc mới không?', answer: 'Có, pin lithium cần bộ sạc chuyên dụng có giao tiếp BMS để đảm bảo sạc đúng thuật toán và an toàn. PKG cung cấp sạc đồng bộ đi kèm.' },
  ]
};
