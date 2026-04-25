import { FileText, Download, Copy, ExternalLink } from 'lucide-react';
import { SAMPLE_PRODUCT } from '../constants';

export default function SpecTable() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-0.5 w-12 bg-pkg-red"></div>
                <h2 className="text-3xl font-bold">Thông số kỹ thuật</h2>
              </div>
              <p className="text-gray-500">Chi tiết các chỉ số vận hành và đặc tính vật lý của model PKGFF-24230V1.</p>
            </div>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-pkg-gray hover:bg-gray-200 text-sm font-semibold rounded-sm transition-colors flex items-center gap-2">
                <Copy className="w-4 h-4" /> Sao chép specs
              </button>
              <button className="px-4 py-2 bg-pkg-graphite hover:bg-black text-white text-sm font-semibold rounded-sm transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" /> Tải PDF Datasheet
              </button>
            </div>
          </div>

          <div className="border border-gray-100 rounded-sm overflow-hidden shadow-xl shadow-gray-200/50">
            {SAMPLE_PRODUCT.fullSpecs.map((group, groupIdx) => (
              <div key={groupIdx} className="border-b border-gray-100 last:border-0">
                <div className="bg-pkg-gray px-6 py-4 font-bold text-pkg-graphite uppercase tracking-wider text-sm flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-pkg-red"></div>
                  {group.groupName}
                </div>
                <div className="divide-y divide-gray-50">
                  {Object.entries(group.specs).map(([key, value], idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 px-6 py-4 hover:bg-pkg-red/[0.02] transition-colors group">
                      <div className="text-gray-500 font-medium">{key}</div>
                      <div className="font-semibold text-pkg-graphite group-hover:text-pkg-red transition-colors">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-pkg-gray p-6 rounded flex items-center justify-between border-l-4 border-pkg-graphite">
            <div className="flex items-center gap-4">
              <FileText className="w-6 h-6 text-pkg-red" />
              <div>
                <div className="font-bold">Cần tùy chỉnh kích thước vỏ thùng?</div>
                <div className="text-sm text-gray-500">Chúng tôi hỗ trợ thiết kế vỏ pin theo khoang chứa xe nâng OEM.</div>
              </div>
            </div>
            <button className="text-pkg-red font-bold flex items-center gap-1 hover:underline">
              Liên hệ kỹ thuật <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
