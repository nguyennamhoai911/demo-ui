import { Download, ShieldCheck, HelpCircle, Clock, Truck } from 'lucide-react';
import { SAMPLE_PRODUCT } from '../constants';

export function Downloads() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Downloads */}
          <div id="downloads">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-0.5 w-12 bg-pkg-red"></div>
              <h2 className="text-3xl font-bold">Tài liệu kỹ thuật</h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {SAMPLE_PRODUCT.downloads.map((file, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-6 bg-pkg-gray hover:bg-gray-200 transition-colors rounded-sm group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-sm group-hover:scale-110 transition-transform">
                      <span className="text-pkg-red font-bold text-xs">{file.type}</span>
                    </div>
                    <div>
                      <div className="font-bold text-pkg-graphite">{file.name}</div>
                      <div className="text-xs text-gray-500 font-mono">{file.size} • Version 2024</div>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-pkg-red transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {/* Warranty */}
          <div id="warranty">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-0.5 w-12 bg-pkg-red"></div>
              <h2 className="text-3xl font-bold">Chính sách bảo hành</h2>
            </div>
            
            <div className="bg-pkg-graphite p-8 rounded-sm text-white relative overflow-hidden">
              <ShieldCheck className="absolute -bottom-8 -right-8 w-40 h-40 text-white/5" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pkg-red rounded-sm">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">5 Năm Bảo Hành</div>
                </div>
                
                <p className="text-gray-400 mb-8 max-w-md">
                  Chính sách bảo hành tiêu chuẩn cho dòng pin Forklift cao cấp, cam kết đồng hành cùng doanh nghiệp.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {SAMPLE_PRODUCT.warranty.terms.map((term, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-pkg-red mt-2"></div>
                      <span className="text-sm text-gray-300 leading-snug">{term}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-pkg-red" />
                    <span className="text-sm font-medium">Hỗ trợ 24/7</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-pkg-red" />
                    <span className="text-sm font-medium">Xử lý trong 48h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
