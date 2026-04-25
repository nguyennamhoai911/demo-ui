
import { cn } from '../lib/utils';
import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube, ChevronUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-rose-600 flex items-center justify-center font-bold text-white rounded-sm">P</div>
              <span className="font-bold text-lg">PKG BATTERY</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Nhà sản xuất và cung cấp giải pháp pin Lithium công nghiệp hàng đầu, đồng hành cùng sự phát triển bền vững của doanh nghiệp Việt Nam.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-600 hover:border-rose-600 transition-all rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-600 hover:border-rose-600 transition-all rounded-full">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center text-gray-400 hover:text-rose-600 hover:border-rose-600 transition-all rounded-full">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-rose-600 pl-3 mb-6 text-sm uppercase tracking-widest">Sản phẩm</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-rose-600 transition-colors"><a href="#">Pin xe nâng Lithium</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Pin AGV / Robot</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Pin xe điện du lịch</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Hệ thống lưu trữ ESS</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Trạm sạc công nghiệp</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-rose-600 pl-3 mb-6 text-sm uppercase tracking-widest">Tài nguyên</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-rose-600 transition-colors"><a href="#">Trung tâm kiến thức</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Dự án tiêu biểu</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Tài liệu kỹ thuật</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Chính sách bảo hành</a></li>
              <li className="hover:text-rose-600 transition-colors"><a href="#">Chứng chỉ năng lượng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 border-l-2 border-rose-600 pl-3 mb-6 text-sm uppercase tracking-widest">Liên hệ</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-rose-600 shrink-0 mt-1" />
                <span>Khu công nghiệp VSIP, Thuận An, Bình Dương, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-rose-600 shrink-0" />
                <span>+84 1900 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-rose-600 shrink-0" />
                <span>info@pkgbattery.com.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">© 2026 PKG Battery. Toàn bộ bản quyền thuộc về PKG Group.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-rose-600 transition-colors">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Chính sách bảo mật</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 bg-gray-50 text-gray-400 hover:bg-rose-600 hover:text-white transition-all rounded-sm"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
