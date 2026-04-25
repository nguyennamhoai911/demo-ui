import { ShieldCheck, Factory, Lightbulb, Zap } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    { icon: Factory, label: "Nhà sản xuất tại Việt Nam" },
    { icon: Lightbulb, label: "OEM/ODM Battery Pack" },
    { icon: ShieldCheck, label: "Tư vấn kỹ thuật chuyên sâu" },
    { icon: Zap, label: "Giải pháp cho Industry 4.0" },
  ];

  return (
    <div className="bg-pkg-charcoal py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-pkg-red group-hover:bg-pkg-red transition-all duration-500">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-widest leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
