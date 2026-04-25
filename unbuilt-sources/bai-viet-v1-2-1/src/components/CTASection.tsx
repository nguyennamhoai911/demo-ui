import React from 'react';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl -z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-red font-bold tracking-widest text-sm uppercase mb-4 block">Lead generation</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Bạn cần tư vấn giải pháp năng lượng tối ưu cho doanh nghiệp?
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Hãy để lại thông tin hoặc loại pin bạn đang quan tâm, đội ngũ chuyên gia của PKG Battery sẽ liên hệ khảo sát và tư vấn trong vòng 24 giờ.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-brand-red">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Hotline 24/7</div>
                  <div className="text-xl font-bold">0900.XXX.XXX</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-brand-red">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Email tư vấn</div>
                  <div className="text-xl font-bold">info@pkgbattery.vn</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-sm shadow-2xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Họ và tên *</label>
                  <input type="text" placeholder="Nguyễn Văn A" className="w-full bg-zinc-50 border border-zinc-200 p-3 rounded-sm text-zinc-900 focus:outline-none focus:border-brand-red" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Số điện thoại *</label>
                  <input type="tel" placeholder="090 123 4567" className="w-full bg-zinc-50 border border-zinc-200 p-3 rounded-sm text-zinc-900 focus:outline-none focus:border-brand-red" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Email liên hệ</label>
                <input type="email" placeholder="email@congty.com" className="w-full bg-zinc-50 border border-zinc-200 p-3 rounded-sm text-zinc-900 focus:outline-none focus:border-brand-red" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Nội dung quan tâm</label>
                <select className="w-full bg-zinc-50 border border-zinc-200 p-3 rounded-sm text-zinc-900 focus:outline-none focus:border-brand-red uppercase text-xs font-bold">
                  <option>Pin Xe Nâng Lithium</option>
                  <option>Pin Cho Hệ Thống AGV/Robot</option>
                  <option>Pin Lưu Trữ Năng Lượng (ESS)</option>
                  <option>Dịch Vụ OEM/ODM</option>
                  <option>Khác</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Tin nhắn</label>
                <textarea rows={4} placeholder="Ví dụ: Tôi cần báo giá pin 48V-400Ah cho xe nâng Linde..." className="w-full bg-zinc-50 border border-zinc-200 p-3 rounded-sm text-zinc-900 focus:outline-none focus:border-brand-red"></textarea>
              </div>
              <button className="w-full bg-brand-red text-white py-4 rounded-sm font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20 flex items-center justify-center gap-2">
                GỬI YÊU CẦU TƯ VẤN <ArrowUpRight size={20} />
              </button>
              <p className="text-center text-[10px] text-zinc-400 uppercase tracking-widest font-semibold pt-2">
                Cam kết bảo mật thông tin khách hàng 100%
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
