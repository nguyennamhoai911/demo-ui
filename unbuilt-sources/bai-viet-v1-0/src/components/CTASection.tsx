import { Phone, Mail, MessageSquare, Download, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta-section" className="container mx-auto px-6 mb-24">
      <div className="bg-white rounded-sm overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
        
        <div className="lg:w-7/12 p-10 md:p-20 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-black leading-tight mb-6">
              BẠN ĐANG TÌM <br />
              GIẢI PHÁP PIN PHÙ HỢP?
            </h2>
            <p className="text-gray-500 font-light text-lg mb-10 max-w-xl leading-relaxed">
              Đội ngũ chuyên gia kỹ thuật PKG Battery sẵn sàng tư vấn về dung lượng, 
              cấu hình và giải pháp lắp đặt tối ưu cho doanh nghiệp của bạn.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button className="bg-brand-red hover:bg-brand-red-dark text-white px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand-red/20">
                <Phone size={18} />
                Gọi Tư Vấn Kỹ Thuật
              </button>
              <button className="bg-charcoal hover:bg-black text-white px-10 py-5 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3">
                <MessageSquare size={18} />
                Gửi Yêu Cầu Báo Giá
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-5/12 bg-slate-50 p-10 md:p-20 flex flex-col justify-center border-l border-gray-100">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-6">Liên hệ trực tiếp</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-sm shadow-sm">
                <Mail className="text-charcoal" size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Kỹ Thuật</div>
                <div className="text-sm font-bold text-charcoal">tech-support@pkgbattery.com.vn</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-sm shadow-sm">
                <Phone className="text-charcoal" size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hotline B2B</div>
                <div className="text-sm font-bold text-charcoal">1900 88 88 XX</div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-charcoal group">
                <Download size={18} className="text-brand-red" />
                Tải về bộ hồ sơ năng lực (2026)
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal pt-24 pb-12 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-lg">PKG</span>
              </div>
              <span className="font-display font-bold tracking-tight text-xl">BATTERY</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed mb-10 pr-6">
              Nhà sản xuất và cung cấp giải pháp pin công nghiệp hàng đầu tại Việt Nam. 
              Đồng hành cùng sự phát triển bền vững của doanh nghiệp.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-8">Giải pháp</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pin xe nâng lithium</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pin xe điện du lịch</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Pin AGV / Robot</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Hệ thống lưu trữ năng lượng</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Dịch vụ OEM / ODM</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-8">Kiến thức</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Kiến thức kỹ thuật</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Dự án thực tế</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Tài liệu download</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog & Tin tức</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-8">Bản tin kỹ thuật</h4>
            <p className="text-sm text-gray-400 font-light mb-6 leading-relaxed">
              Nhận cập nhật công nghệ và xu hướng pin công nghiệp mới nhất.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-brand-red w-full transition-all"
              />
              <button className="bg-brand-red px-4 py-3 text-white transition-colors hover:bg-brand-red-dark">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-gray-500 font-medium tracking-tight">
            © 2026 PKG BATTERY CO., LTD. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
