import { Send, PhoneCall, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  return (
    <section className="py-24 bg-pkg-graphite text-white relative overflow-hidden" id="contact">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pkg-red/5 -skew-x-12 translate-x-20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-pkg-red"></div>
              <span className="text-pkg-red font-bold uppercase tracking-widest text-sm">Tư vấn giải pháp</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Cần tư vấn cấu hình pin phù hợp cho thiết bị của bạn?
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-lg leading-relaxed">
              Gửi thông tin xe hoặc nhu cầu vận hành, đội ngũ kỹ thuật PKG sẽ tư vấn model pin phù hợp và phương án thay thế tối ưu.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-sm">
                <div className="w-14 h-14 bg-pkg-red flex items-center justify-center rounded-sm">
                  <PhoneCall className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Hotline dự án</div>
                  <div className="text-2xl font-bold tracking-tight">1900 60XX</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-sm">
                <div className="w-14 h-14 bg-[#0068FF] flex items-center justify-center rounded-sm">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Hỗ trợ Zalo</div>
                  <div className="text-2xl font-bold tracking-tight">Kết nối ngay</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-sm shadow-2xl">
            <h3 className="text-2xl font-bold text-pkg-graphite mb-8">Gửi yêu cầu báo giá</h3>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Họ và tên</label>
                <input type="text" className="w-full bg-pkg-gray border-none px-4 py-3 rounded-sm focus:ring-2 focus:ring-pkg-red text-pkg-graphite" placeholder="Nguyễn Văn A" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Số điện thoại</label>
                <input type="text" className="w-full bg-pkg-gray border-none px-4 py-3 rounded-sm focus:ring-2 focus:ring-pkg-red text-pkg-graphite" placeholder="090x xxx xxx" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Công ty</label>
                <input type="text" className="w-full bg-pkg-gray border-none px-4 py-3 rounded-sm focus:ring-2 focus:ring-pkg-red text-pkg-graphite" placeholder="Tên doanh nghiệp" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Loại xe / Model</label>
                <input type="text" className="w-full bg-pkg-gray border-none px-4 py-3 rounded-sm focus:ring-2 focus:ring-pkg-red text-pkg-graphite" placeholder="Ví dụ: Linde E16" />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Nội dung nhu cầu</label>
                <textarea rows={4} className="w-full bg-pkg-gray border-none px-4 py-3 rounded-sm focus:ring-2 focus:ring-pkg-red text-pkg-graphite" placeholder="Vui lòng mô tả nhu cầu sử dụng của bạn..."></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button className="w-full py-4 bg-pkg-red hover:bg-pkg-red-dark text-white font-bold rounded-sm transition-all transform hover:-translate-y-1 shadow-lg shadow-pkg-red/20 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Gửi yêu cầu báo giá
                </button>
                <p className="text-center text-gray-400 text-xs mt-4">Cam kết bảo mật thông tin và phản hồi trong vòng 2 giờ làm việc.</p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
