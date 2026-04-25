import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-200 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-sm tracking-tighter">PKG</span>
              </div>
              <div className="font-display font-bold text-lg tracking-tight">BATTERY</div>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              PKG Battery là nhà sản xuất pin lithium công nghiệp hàng đầu Việt Nam, cung cấp các giải pháp năng lượng sạch, hiệu quả cho doanh nghiệp toàn cầu.
            </p>
            <div className="flex gap-4">
              {['FB', 'LD', 'YT'].map(social => (
                <div key={social} className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-600 cursor-pointer hover:bg-brand-red hover:text-white transition-colors">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase text-sm tracking-widest">Sản phẩm chính</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-brand-red transition-colors">Pin Lithium xe nâng</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Hệ thống Pin AGV / Robot</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Pin lưu trữ ESS công nghiệp</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Trạm sạc nhanh công suất lớn</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Giải pháp thiết kế OEM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase text-sm tracking-widest">Về chúng tôi</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-brand-red transition-colors">Hồ sơ năng lực</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Chứng chỉ kỹ thuật</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Tin tức doanh nghiệp</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Cơ hội nghề nghiệp</a></li>
              <li><a href="#" className="hover:text-brand-red transition-colors">Chính sách bảo hành</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6 uppercase text-sm tracking-widest">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">Văn phòng:</span>
                <span>Khu Công Nghệ Cao, Tp. Thủ Đức, Tp. Hồ Chí Minh</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">Nhà máy:</span>
                <span>KCN VSIP II-A, Bình Dương</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-zinc-900 shrink-0">Phone:</span>
                <span>(+84) 28 XXXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-zinc-400 text-xs font-medium">
            © 2024 PKG BATTERY MANUFACTURING CO., LTD. All rights reserved.
          </div>
          <div className="flex gap-6 text-zinc-400 text-xs font-medium">
            <a href="#" className="hover:text-zinc-900 underline">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
