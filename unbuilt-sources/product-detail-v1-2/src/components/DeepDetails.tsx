import { motion } from "motion/react";
import { Download, FileText, ChevronRight, Activity, Cpu, ShieldAlert, Thermometer, Zap, CheckCircle2, Info } from "lucide-react";
import { PRODUCT_DATA } from "../constants";

export function Applications() {
  const apps = [
    { title: "Xe nâng hàng (Forklift)", icon: "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=800&auto=format&fit=crop" },
    { title: "Kho vận Logistics", icon: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop" },
    { title: "Nhà máy sản xuất", icon: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" },
    { title: "Khu công nghiệp", icon: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=800&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-4">Ứng dụng đa dạng</h2>
          <p className="text-pkg-dark-gray/60 max-w-2xl mx-auto italic">“Phù hợp cho mọi yêu cầu vận hành khắc nghiệt, thay thế hoàn hảo cho hệ thống ắc quy chì cũ.”</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {apps.map((app, i) => (
            <motion.div 
              key={app.title}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
            >
              <img src={app.icon} alt={app.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-pkg-black to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white font-bold text-lg mb-2">{app.title}</h3>
                <div className="w-8 h-1 bg-pkg-red transform origin-left group-hover:scale-x-150 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechSafety() {
  const safetyFeatures = [
    { title: "Bảo vệ quá dòng", icon: <Activity className="w-5 h-5" /> },
    { title: "Bảo vệ quá áp/thấp áp", icon: <Zap className="w-5 h-5" /> },
    { title: "Bảo vệ nhiệt độ", icon: <Thermometer className="w-5 h-5" /> },
    { title: "Bảo vệ ngắn mạch", icon: <ShieldAlert className="w-5 h-5" /> },
  ];

  return (
    <section className="py-24 bg-pkg-gray/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
           <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 industrial-grid opacity-20 pointer-events-none" />
             <div className="relative z-10 p-4 border border-pkg-red/10 rounded-3xl bg-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590634149298-385011e74092?q=80&w=1000&auto=format&fit=crop" 
                  alt="Internal structure concept"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Visual Callouts */}
                <CalloutDot top="20%" left="30%" label="Cell LiFePO4" />
                <CalloutDot top="60%" left="70%" label="Smart BMS" />
                <CalloutDot top="40%" left="50%" label="Metal Housing" />
             </div>
           </div>

           <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-pkg-red w-6 h-6" />
                <span className="font-bold text-pkg-red uppercase tracking-widest text-sm">Công nghệ cốt lõi</span>
              </div>
              <h2 className="font-display font-medium text-4xl mb-8">Hệ thống an toàn <span className="font-bold">Đa tầng</span></h2>
              <p className="text-pkg-dark-gray/60 mb-10 text-lg leading-relaxed">
                Mỗi bộ pin PKG đều được trang bị hệ thống quản lý pin (BMS) tiên tiến, giám sát và bảo vệ từng cell pin trong thời gian thực, đảm bảo vận hành an toàn tuyệt đối trong môi trường công nghiệp nặng.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {safetyFeatures.map((f) => (
                  <div key={f.title} className="flex items-center gap-4 p-4 bg-white border border-pkg-gray rounded-sm hover:border-pkg-red/30 transition-colors">
                    <div className="text-pkg-red">{f.icon}</div>
                    <span className="font-bold text-pkg-black text-sm">{f.title}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

function CalloutDot({ top, left, label }: { top: string, left: string, label: string }) {
  return (
    <div className="absolute flex items-center gap-2 group z-20" style={{ top, left }}>
      <div className="w-4 h-4 bg-pkg-red rounded-full flex items-center justify-center animate-pulse">
        <div className="w-2 h-2 bg-white rounded-full" />
      </div>
      <div className="glass-panel text-[10px] font-bold px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        {label}
      </div>
    </div>
  );
}

export function DetailedSpecs() {
  const specGroups = [
    {
      title: "Thông số điện",
      items: [
        { name: "Định mức điện áp", value: "25.6 V" },
        { name: "Phạm vi điện áp", value: "20.0 V ~ 29.2 V" },
        { name: "Dung lượng định mức", value: "230 Ah (@0.5C)" },
        { name: "Năng lượng lưu trữ", value: "5.88 kWh" },
      ]
    },
    {
      title: "Thông số sạc & Xả",
      items: [
        { name: "Dòng sạc tiêu chuẩn", value: "50 A (0.2C)" },
        { name: "Dòng sạc tối đa", value: "115 A (0.5C)" },
        { name: "Dòng xả liên tục", value: "200 A" },
        { name: "Dòng xả đỉnh", value: "350 A (30s)" },
      ]
    },
    {
      title: "Kích thước & Vận hành",
      items: [
        { name: "Kích thước (L×W×H)", value: "630 × 175 × 450 mm" },
        { name: "Khối lượng", value: "~54 kg" },
        { name: "Nhiệt độ hoạt động", value: "-20°C ~ 60°C" },
        { name: "Cấp độ bảo vệ", value: "IP65 / IP67 (Tùy chọn)" },
      ]
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Thông số kỹ thuật</h2>
            <p className="text-pkg-dark-gray/60">Bảng chi tiết thông số kỹ thuật cho model PKGFF-24230V1.</p>
          </div>
          <button className="flex items-center gap-2 text-pkg-red font-bold hover:underline">
            <Download className="w-5 h-5" /> Tải về PDF Datasheet
          </button>
        </div>

        <div className="space-y-12">
          {specGroups.map(group => (
            <div key={group.title}>
              <h3 className="text-xs uppercase tracking-widest font-bold text-pkg-red mb-6 border-b border-pkg-gray pb-2">{group.title}</h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {group.items.map(item => (
                  <div key={item.name} className="flex justify-between py-3 border-b border-pkg-gray/30 group">
                    <span className="text-pkg-dark-gray/70 text-sm group-hover:text-pkg-black transition-colors">{item.name}</span>
                    <span className="font-bold text-sm text-pkg-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductFamily() {
  const variants = [
    { ah: 150, kwh: 3.8, current: false },
    { ah: 200, kwh: 5.1, current: false },
    { ah: 230, kwh: 5.8, current: true },
    { ah: 280, kwh: 7.2, current: false },
    { ah: 340, kwh: 8.7, current: false },
  ];

  return (
    <section className="py-24 bg-pkg-gray/20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl mb-12 text-center">Dòng sản phẩm 24V (24V Series)</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {variants.map(v => (
            <div 
              key={v.ah} 
              className={`p-8 rounded-xl border flex flex-col items-center text-center transition-all ${v.current ? "bg-white border-pkg-red shadow-xl ring-2 ring-pkg-red/5" : "bg-white/50 border-pkg-gray hover:border-pkg-red/30"}`}
            >
              <div className={`text-4xl font-display font-bold mb-1 ${v.current ? "text-pkg-red" : "text-pkg-black"}`}>{v.ah}Ah</div>
              <div className="text-xs font-bold text-pkg-dark-gray/50 uppercase tracking-widest mb-6">{v.kwh} kWh Energy</div>
              <button className={`w-full py-3 rounded-sm text-sm font-bold transition-all ${v.current ? "bg-pkg-red text-white" : "border border-pkg-gray hover:bg-pkg-gray"}`}>
                {v.current ? "Bạn đang xem" : "Xem chi tiết"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Downloads() {
  const docs = [
    { name: "Catalogue Tổng Hợp", type: "PDF", size: "12.4 MB" },
    { name: "Technical Datasheet", type: "PDF", size: "2.1 MB" },
    { name: "User Manual", type: "PDF", size: "5.8 MB" },
    { name: "Certificates (CE/MSDS)", type: "ZIP", size: "8.2 MB" },
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto glass-panel p-12 rounded-3xl industrial-grid">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl mb-2">Thư viện tài liệu kỹ thuật</h2>
            <p className="text-pkg-dark-gray/60">Tải xuống các tài liệu kỹ thuật, hướng dẫn sử dụng và chứng nhận chất lượng.</p>
          </div>
          <div className="w-16 h-1 bg-pkg-red" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {docs.map(doc => (
            <div key={doc.name} className="bg-white p-6 rounded-lg border border-pkg-gray hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between h-40">
              <div className="flex justify-between items-start">
                <FileText className="w-8 h-8 text-pkg-red/40 group-hover:text-pkg-red transition-all" />
                <span className="text-[10px] font-bold text-pkg-dark-gray/40">{doc.type} • {doc.size}</span>
              </div>
              <div>
                <h3 className="font-bold text-sm mb-3 group-hover:text-pkg-red transition-colors">{doc.name}</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold text-pkg-red uppercase tracking-wider">
                  Download <Download className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <section className="py-24 bg-white px-6" id="contact">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16 items-stretch">
        <div className="lg:col-span-2 bg-pkg-black text-white p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pkg-red/20 blur-3xl rounded-full" />
          
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Liên hệ <span className="text-pkg-red">Báo giá</span></h2>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Vui lòng để lại thông tin nhu cầu hoặc model xe, đội ngũ kỹ thuật PKG sẽ phản hồi trong vòng 2 giờ làm việc.
            </p>
            
            <div className="space-y-6">
              {[
                "Tư vấn cấu hình theo model xe cụ thể",
                "Khảo sát hiện trạng & phương án thay thế",
                "Chính sách bảo hành vàng & bảo trì trọn đời",
                "Hỗ trợ kỹ thuật 24/7 trực tiếp"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pkg-red" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-white/5 p-6 rounded-xl border border-white/10 flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-pkg-red flex items-center justify-center">
               <Cpu className="text-white w-6 h-6" />
             </div>
             <div>
               <div className="text-[10px] uppercase font-bold text-gray-500">Kỹ thuật trưởng</div>
               <div className="font-bold">Hotline: 09xx xxx xxx</div>
             </div>
          </div>
        </div>
        
        <div className="lg:col-span-3">
           <form className="grid sm:grid-cols-2 gap-6">
              <FormGroup label="Họ tên khách hàng" placeholder="VD: Nguyễn Văn A" />
              <FormGroup label="Số điện thoại" placeholder="VD: 0987xxxxxx" />
              <FormGroup label="Tên công ty" placeholder="VD: Công ty Logistics PKG" />
              <FormGroup label="Model xe / Loại thiết bị" placeholder="VD: Komatsu 2.5T" />
              <div className="sm:col-span-2">
                <FormGroup label="Nhu cầu sử dụng / Ghi chú" placeholder="VD: Cần 2 bộ thay thế ắc quy chì 24V..." isTextArea />
              </div>
              
              <div className="sm:col-span-2 mt-4 space-y-4">
                <button className="w-full bg-pkg-red text-white py-5 rounded-sm font-bold hover:bg-pkg-black transition-all shadow-xl shadow-pkg-red/10 flex items-center justify-center gap-3 group">
                  Gửi yêu cầu báo giá <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 justify-center text-[10px] text-pkg-dark-gray/50 uppercase font-bold">
                   <Info className="w-3 h-3" /> Bảo mật thông tin • Phản hồi nhanh chóng
                </div>
              </div>
           </form>
        </div>
      </div>
    </section>
  );
}

function FormGroup({ label, placeholder, isTextArea }: { label: string, placeholder: string, isTextArea?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-wider text-pkg-dark-gray">{label}</label>
      {isTextArea ? (
        <textarea 
          placeholder={placeholder}
          className="w-full bg-pkg-gray/50 border border-pkg-gray p-4 rounded-sm focus:outline-none focus:border-pkg-red transition-all min-h-[120px] resize-none"
        />
      ) : (
        <input 
          type="text" 
          placeholder={placeholder}
          className="w-full bg-pkg-gray/50 border border-pkg-gray p-4 rounded-sm focus:outline-none focus:border-pkg-red transition-all"
        />
      )}
    </div>
  );
}
