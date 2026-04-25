import { SAMPLE_PRODUCT } from '../constants';
import { ChevronRight } from 'lucide-react';

export default function ProductOptions() {
  return (
    <section className="py-24 bg-pkg-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-0.5 w-12 bg-pkg-red"></div>
          <h2 className="text-3xl font-bold">Cùng dòng sản phẩm</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {SAMPLE_PRODUCT.options.map((option) => (
            <div 
              key={option.id}
              className={`flex-1 min-w-[220px] p-6 rounded-sm border-2 transition-all cursor-pointer group ${
                option.isActive 
                  ? 'border-pkg-red bg-white shadow-lg' 
                  : 'border-white bg-white/50 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold uppercase tracking-wider ${option.isActive ? 'text-pkg-red' : 'text-gray-400'}`}>
                  {option.isActive ? 'Đang xem' : 'Option'}
                </span>
                {option.isActive && <div className="w-2 h-2 rounded-full bg-pkg-red"></div>}
              </div>
              <h3 className="text-xl font-bold mb-1 tracking-tight">{option.name}</h3>
              <p className="text-gray-500 font-mono text-sm mb-6">{option.shortSpec}</p>
              
              <button 
                className={`w-full py-2 flex items-center justify-center gap-1 text-sm font-bold transition-colors ${
                  option.isActive 
                    ? 'text-pkg-red' 
                    : 'text-gray-400 group-hover:text-pkg-graphite'
                }`}
              >
                {option.isActive ? 'Thông số hiện tại' : 'Xem chi tiết'}
                {!option.isActive && <ChevronRight className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
