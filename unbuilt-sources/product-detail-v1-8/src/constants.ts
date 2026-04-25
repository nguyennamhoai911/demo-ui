export interface ProductBenefit {
  title: string;
  description?: string;
}

export interface TechSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface SpecGroup {
  groupName: string;
  specs: { [key: string]: string };
}

export interface ProductOption {
  id: string;
  name: string;
  shortSpec: string;
  isActive?: boolean;
}

export interface DownloadFile {
  name: string;
  type: 'PDF' | 'DWG' | 'DOC';
  size: string;
}

export const SAMPLE_PRODUCT = {
  id: 'PKGFF-24230V1',
  category: 'Pin lithium cho xe nâng điện',
  name: 'Bình ắc quy pin lithium cho xe nâng điện 24V 230Ah',
  shortDesc: 'Giải pháp pin lithium công nghiệp cho xe nâng vận hành ổn định, sạc nhanh và giảm chi phí bảo trì.',
  images: [
    'https://images.unsplash.com/photo-1620714223084-8dfaa649524a?auto=format&fit=crop&q=80&w=800&h=800',
    'https://images.unsplash.com/photo-1544274433-2ba397ba3881?auto=format&fit=crop&q=80&w=800&h=800',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=800',
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
    { title: 'Sạc nhanh trong 2 – 4 giờ', description: 'Tận dụng thời gian nghỉ giữa ca' },
    { title: 'Không cần châm nước định kỳ', description: 'Giảm chi phí vận hành & bảo trì' },
    { title: 'BMS bảo vệ thông minh', description: 'Giám sát sạc xả an toàn tuyệt đối' },
    { title: 'Điện áp ổn định khi vận hành', description: 'Duy trì công suất nâng đồng nhất' },
    { title: 'Giảm downtime cho đội xe', description: 'Tăng năng suất làm việc của kho' },
    { title: 'Phù hợp môi trường công nghiệp', description: 'Thiết kế chống rung & bụi bẩn' },
  ],
  applications: [
    'Xe nâng điện',
    'Kho vận',
    'Nhà máy',
    'Logistics',
    'Thay thế ắc quy chì',
  ],
  options: [
    { id: '1', name: '24V 150Ah', shortSpec: '3.8 kWh' },
    { id: '2', name: '24V 200Ah', shortSpec: '5.1 kWh' },
    { id: '3', name: '24V 230Ah', shortSpec: '5.8 kWh', isActive: true },
    { id: '4', name: '24V 280Ah', shortSpec: '7.2 kWh' },
    { id: '5', name: '24V 340Ah', shortSpec: '8.7 kWh' },
  ],
  fullSpecs: [
    {
      groupName: 'Thông số điện',
      specs: {
        'Định mức điện áp': '25.6 V',
        'Dung lượng định mức': '230 Ah',
        'Tổng năng lượng': '5.8 kWh',
        'Hiệu suất sạc/xả': '> 98%',
        'Chu kỳ thọ (Cycle Life)': '> 4000 chu kỳ (80% DOD)',
      },
    },
    {
      groupName: 'Thông số vật lý',
      specs: {
        'Kích thước (D×R×C)': '630 × 175 × 450 mm',
        'Khối lượng': '~54 kg',
        'Vỏ hộp': 'Thép sơn tĩnh điện công nghiệp',
        'Cổng kết nối': 'Rema / Anderson',
      },
    },
  ],
  downloads: [
    { name: 'Catalogue PKG Forklift Series', type: 'PDF', size: '2.4 MB' },
    { name: 'Technical Datasheet PKGFF-24230V1', type: 'PDF', size: '1.1 MB' },
    { name: 'User Manual & Safety Guide', type: 'PDF', size: '3.8 MB' },
  ],
  warranty: {
    period: '5 năm hoặc 10,000 giờ vận hành',
    terms: [
      'Bảo hành 1 đổi 1 cho cell pin nếu lỗi nhà sản xuất',
      'Hỗ trợ kỹ thuật 24/7 qua hotline',
      'Kiểm tra định kỳ miễn phí mỗi 6 tháng',
    ],
  },
};
