/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Footer() {
  return (
    <footer className="bg-pkg-graphite pt-24 pb-12 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
             <div className="flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-pkg-red rounded-sm flex items-center justify-center">
                  <span className="text-white font-black text-xs">P</span>
                </div>
                <span className="text-xl font-black tracking-tighter">PKG <span className="font-light italic text-white/30">BATTERY</span></span>
             </div>
             <p className="text-white/40 text-sm leading-relaxed mb-8">
               Nhà sản xuất pin lithium công nghiệp hàng đầu Việt Nam. Cung cấp các giải pháp năng lượng thông minh, bền bỉ và hiệu quả cao cho mọi loại thiết bị điện công nghiệp.
             </p>
          </div>

          <div>
             <h4 className="text-sm font-black uppercase tracking-widest text-pkg-red mb-8">Sản phẩm</h4>
             <ul className="space-y-4 text-sm text-white/50 font-medium">
               <li className="hover:text-white transition-colors cursor-pointer">Pin xe nâng điện</li>
               <li className="hover:text-white transition-colors cursor-pointer">Pin AGV / AMR</li>
               <li className="hover:text-white transition-colors cursor-pointer">Hệ thống ESS</li>
               <li className="hover:text-white transition-colors cursor-pointer">Bộ sạc công nghiệp</li>
             </ul>
          </div>

          <div>
             <h4 className="text-sm font-black uppercase tracking-widest text-pkg-red mb-8">Hỗ trợ</h4>
             <ul className="space-y-4 text-sm text-white/50 font-medium">
               <li className="hover:text-white transition-colors cursor-pointer">Tài liệu kỹ thuật</li>
               <li className="hover:text-white transition-colors cursor-pointer">Chính sách bảo hành</li>
               <li className="hover:text-white transition-colors cursor-pointer">Mạng lới dịch vụ</li>
               <li className="hover:text-white transition-colors cursor-pointer">Tính toán ROI</li>
             </ul>
          </div>

          <div>
             <h4 className="text-sm font-black uppercase tracking-widest text-pkg-red mb-8">Kết nối</h4>
             <p className="text-sm text-white/50 font-medium mb-4">Đăng ký để nhận thông tin kỹ thuật và cập nhật sản phẩm mới nhất.</p>
             <div className="flex">
                <input type="email" placeholder="Email của bạn" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:border-pkg-red w-full" />
                <button className="bg-pkg-red px-4 py-2 rounded-r-lg text-sm font-bold">Join</button>
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
             © 2024 PKG BATTERY MANUFACTURING CO., LTD. ALL RIGHTS RESERVED.
           </p>
           <div className="flex space-x-8 text-[10px] text-white/20 font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
