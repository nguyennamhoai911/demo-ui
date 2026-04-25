export const PRODUCT = {
  name: "Bình ắc quy pin lithium cho xe nâng điện 24V 230Ah",
  sku: "PKGFF-24230V1",
  category: "Pin lithium cho xe nâng điện",
  shortDesc:
    "Giải pháp pin lithium công nghiệp cho xe nâng vận hành ổn định, sạc nhanh và giảm chi phí bảo trì.",
  specs: [
    { label: "Mã sản phẩm", value: "PKGFF-24230V1", unit: "" },
    { label: "Dung lượng", value: "230", unit: "Ah" },
    { label: "Năng lượng", value: "5.8", unit: "kWh" },
    { label: "Điện áp danh định", value: "25.6", unit: "V" },
    { label: "Thời gian sạc", value: "2–4", unit: "giờ" },
    { label: "Kích thước", value: "630 × 175 × 450", unit: "mm" },
    { label: "Khối lượng", value: "~54", unit: "kg" },
  ],
  benefits: [
    {
      title: "Sạc nhanh 2–4 giờ",
      desc: "Tận dụng sạc gián đoạn (opportunity charging) giữa các ca, giảm tối đa thời gian dừng máy.",
    },
    {
      title: "Không cần châm nước định kỳ",
      desc: "Loại bỏ hoàn toàn khâu bảo trì điện hoá, không khí axit, không vết ăn mòn ở khu vận hành.",
    },
    {
      title: "BMS bảo vệ thông minh",
      desc: "Giám sát quá dòng, quá áp, nhiệt độ và cân bằng cell, đảm bảo an toàn 24/7.",
    },
    {
      title: "Điện áp ổn định khi tải nặng",
      desc: "Hiệu suất xe nâng đồng đều suốt ca làm việc, không sụt áp như ắc quy chì.",
    },
    {
      title: "Giảm downtime đội xe",
      desc: "Một pin có thể chạy nhiều ca, không cần phòng sạc riêng và hệ thống thông gió phức tạp.",
    },
    {
      title: "Phù hợp môi trường công nghiệp",
      desc: "Vỏ kim loại chuẩn IP, chịu rung lắc, hoạt động ổn định trong kho lạnh và nhà máy.",
    },
  ],
  applications: [
    { name: "Xe nâng điện", desc: "Counterbalance, reach truck, pallet truck 24V." },
    { name: "Kho vận & logistics", desc: "Vận hành 2–3 ca/ngày, opportunity charging." },
    { name: "Nhà máy sản xuất", desc: "Line lắp ráp, dây chuyền nội bộ." },
    { name: "Kho lạnh", desc: "Hoạt động ổn định ở nhiệt độ thấp." },
    { name: "Thay thế ắc quy chì", desc: "Drop-in replacement, cùng khoang ắc quy." },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1640545232337-5cb2c7b24ca8?w=900&h=900&fit=crop",
      alt: "PKG Battery — góc chính",
      type: "image" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1742899273038-67ff67477663?w=900&h=900&fit=crop",
      alt: "Cụm cell và cổng kết nối",
      type: "image" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1732030373864-d37573915751?w=900&h=900&fit=crop",
      alt: "Chi tiết module pin",
      type: "image" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1700727448558-ba9c085d38f8?w=900&h=900&fit=crop",
      alt: "Cổng đầu nối kỹ thuật",
      type: "image" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1763665814546-27c2c003317e?w=900&h=900&fit=crop",
      alt: "Lắp đặt thực tế trên xe nâng",
      type: "image" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1672624254120-ebbe190b3519?w=900&h=900&fit=crop",
      alt: "Tủ sạc & hệ thống vận hành",
      type: "image" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1662079651579-d471c3af6a17?w=900&h=900&fit=crop",
      alt: "Video giới thiệu sản phẩm",
      type: "video" as const,
    },
    {
      src: "https://images.unsplash.com/photo-1552359276-830439467e8f?w=900&h=900&fit=crop",
      alt: "Bản vẽ kích thước kỹ thuật",
      type: "image" as const,
    },
  ],
  options: [
    { name: "PKGFF-24150V1", label: "24V 150Ah", energy: "3.8 kWh", weight: "38 kg" },
    { name: "PKGFF-24200V1", label: "24V 200Ah", energy: "5.1 kWh", weight: "47 kg" },
    { name: "PKGFF-24230V1", label: "24V 230Ah", energy: "5.8 kWh", weight: "54 kg", current: true },
    { name: "PKGFF-24280V1", label: "24V 280Ah", energy: "7.1 kWh", weight: "64 kg" },
    { name: "PKGFF-24340V1", label: "24V 340Ah", energy: "8.7 kWh", weight: "76 kg" },
  ],
  specsTable: [
    {
      group: "Thông số điện",
      rows: [
        ["Điện áp danh định", "25.6 V"],
        ["Điện áp vận hành", "20.0 – 29.2 V"],
        ["Dung lượng", "230 Ah"],
        ["Năng lượng", "5.8 kWh"],
        ["Dòng xả liên tục", "200 A"],
        ["Dòng xả đỉnh (3s)", "500 A"],
        ["Dòng sạc khuyến nghị", "60 – 115 A"],
        ["Thời gian sạc", "2 – 4 giờ"],
      ],
    },
    {
      group: "Cell & hoá học",
      rows: [
        ["Loại cell", "LiFePO4 (LFP) prismatic"],
        ["Cấu hình", "8S1P"],
        ["Số chu kỳ ở 80% DOD", "≥ 4.000 chu kỳ"],
        ["Tuổi thọ thiết kế", "10 năm"],
        ["Hiệu suất sạc/xả", "≥ 98%"],
      ],
    },
    {
      group: "BMS & bảo vệ",
      rows: [
        ["Bảo vệ quá áp", "Có"],
        ["Bảo vệ quá dòng", "Có"],
        ["Bảo vệ quá nhiệt", "Có"],
        ["Cân bằng cell chủ động", "Có"],
        ["Giao tiếp", "CAN bus / RS485"],
      ],
    },
    {
      group: "Cơ khí & môi trường",
      rows: [
        ["Kích thước (D × R × C)", "630 × 175 × 450 mm"],
        ["Khối lượng", "~54 kg"],
        ["Chuẩn bảo vệ", "IP54"],
        ["Nhiệt độ vận hành", "−20°C đến 55°C"],
        ["Vỏ", "Thép sơn tĩnh điện"],
        ["Chứng nhận", "CE, UN38.3, IEC 62619"],
      ],
    },
  ],
  files: [
    { name: "Catalogue PKG Battery 2026", format: "PDF", size: "8.4 MB" },
    { name: "Datasheet PKGFF-24230V1", format: "PDF", size: "1.2 MB" },
    { name: "Hướng dẫn lắp đặt & vận hành", format: "PDF", size: "2.1 MB" },
    { name: "Chứng nhận CE / UN38.3", format: "PDF", size: "780 KB" },
    { name: "Bản vẽ kỹ thuật 2D", format: "DWG", size: "3.6 MB" },
    { name: "Phiếu bảo hành mẫu", format: "PDF", size: "420 KB" },
  ],
  warranty: [
    {
      q: "Thời gian bảo hành",
      a: "Bảo hành 36 tháng hoặc 4.000 chu kỳ sạc–xả ở 80% DOD, tuỳ điều kiện đến trước.",
    },
    {
      q: "Điều kiện bảo hành",
      a: "Sản phẩm được lắp đặt, vận hành theo đúng hướng dẫn của PKG, có phiếu bảo hành và hoá đơn hợp lệ.",
    },
    {
      q: "Trường hợp không bảo hành",
      a: "Hư hỏng do va đập mạnh, cháy nổ do nguồn ngoài, tự ý tháo BMS, sử dụng sạc không tương thích hoặc môi trường vượt thông số khuyến nghị.",
    },
    {
      q: "Quy trình tiếp nhận",
      a: "Liên hệ hotline kỹ thuật → cung cấp mã sản phẩm và mô tả lỗi → kỹ sư PKG kiểm tra từ xa hoặc tới hiện trường trong 24–48h.",
    },
    {
      q: "Hotline kỹ thuật",
      a: "1900 0000 (8:00 – 22:00, hỗ trợ ngoài giờ với khách hàng dự án).",
    },
  ],
  related: [
    {
      name: "PKG 48V 200Ah",
      desc: "Pin lithium cho xe nâng đối trọng",
      img: "https://images.unsplash.com/photo-1640545232337-5cb2c7b24ca8?w=600&h=600&fit=crop",
      v: "48 V",
      ah: "200 Ah",
    },
    {
      name: "PKG 80V 300Ah",
      desc: "Reach truck & xe nâng tải nặng",
      img: "https://images.unsplash.com/photo-1742899273038-67ff67477663?w=600&h=600&fit=crop",
      v: "80 V",
      ah: "300 Ah",
    },
    {
      name: "PKG 24V 150Ah",
      desc: "Pallet truck nhẹ, vận hành 1 ca",
      img: "https://images.unsplash.com/photo-1732030373864-d37573915751?w=600&h=600&fit=crop",
      v: "24 V",
      ah: "150 Ah",
    },
    {
      name: "PKG ESS 51.2V 280Ah",
      desc: "Hệ lưu trữ năng lượng công nghiệp",
      img: "https://images.unsplash.com/photo-1672624254120-ebbe190b3519?w=600&h=600&fit=crop",
      v: "51.2 V",
      ah: "280 Ah",
    },
  ],
};
