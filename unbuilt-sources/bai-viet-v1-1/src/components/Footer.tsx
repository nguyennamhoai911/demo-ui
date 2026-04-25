import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pkg-charcoal border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-pkg-red flex items-center justify-center rounded-sm">
                <span className="text-white font-display font-bold text-lg">P</span>
              </div>
              <span className="text-white font-display font-bold text-xl tracking-tighter">PKG BATTERY</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              PKG Battery là nhà sản xuất và cung cấp pin công nghiệp hàng đầu Việt Nam, chuyên sâu về các giải pháp lưu trữ năng lượng Lithium-ion cho xe nâng, AGV và hệ thống năng lượng tái tạo.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Youtube, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-pkg-red hover:bg-pkg-red transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-white font-display font-bold text-sm uppercase tracking-widest">Sản phẩm</h5>
            <ul className="space-y-4">
              {["Pin xe nâng", "Pin AGV / Robot", "Lưu trữ năng lượng", "Trạm sạc", "Linh kiện"].map((item) => (
                <li key={item}><a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h5 className="text-white font-display font-bold text-sm uppercase tracking-widest">Văn phòng chính</h5>
            <ul className="space-y-4">
              <li className="text-gray-500 text-sm max-w-xs">
                Khu Công Nghiệp Quang Minh, Mê Linh, Hà Nội, Việt Nam
              </li>
              <li className="text-gray-500 text-sm">+84 (0) 123 456 789</li>
              <li className="text-gray-500 text-sm">sales@pkgbattery.com.vn</li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
             <h5 className="text-white font-display font-bold text-sm uppercase tracking-widest">Bản tin kỹ thuật</h5>
             <p className="text-gray-500 text-sm">Đăng ký để nhận báo cáo thị trường và cập nhật công nghệ mới.</p>
             <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email của bạn" 
                  className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-pkg-red flex-1" 
                />
                <button className="bg-pkg-red text-white px-4 py-3 text-sm font-bold uppercase tracking-widest">Gửi</button>
             </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            © 2024 PKG BATTERY INDUSTRIAL SOLUTIONS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-gray-600 text-[10px] uppercase tracking-widest font-bold hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
