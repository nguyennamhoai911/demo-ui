import Header from './components/Header';
import Hero from './components/Hero';
import TechSnapshot from './components/TechSnapshot';
import KeyFeatures from './components/KeyFeatures';
import Gallery from './components/Gallery';
import SpecTable from './components/SpecTable';
import ProductOptions from './components/ProductOptions';
import { Downloads } from './components/TechnicalInfo';
import ContactForm from './components/ContactForm';
import StickyCTA from './components/StickyCTA';
import { motion } from 'motion/react';

function Footer() {
  return (
    <footer className="bg-pkg-gray py-20 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-pkg-red flex items-center justify-center font-black text-white text-lg">P</div>
              <span className="font-bold text-lg tracking-tighter">PKG BATTERY</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Giải pháp pin lithium công nghiệp hàng đầu Việt Nam, chuyên cung cấp năng lượng cho hệ thống xe nâng và lưu trữ năng lượng.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Sản phẩm</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-pkg-red">Pin xe nâng 24V</a></li>
              <li><a href="#" className="hover:text-pkg-red">Pin xe nâng 48V</a></li>
              <li><a href="#" className="hover:text-pkg-red">Pin xe nâng 80V</a></li>
              <li><a href="#" className="hover:text-pkg-red">Hệ thống sạc nhanh</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-pkg-red">Tài liệu kỹ thuật</a></li>
              <li><a href="#" className="hover:text-pkg-red">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-pkg-red">Quy trình lắp đặt</a></li>
              <li><a href="#" className="hover:text-pkg-red">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-gray-400">Liên hệ</h4>
            <div className="space-y-4 text-sm font-medium text-gray-600">
              <p>Hà Nội: Lô CN1, KCN Thạch Thất - Quốc Oai</p>
              <p>TP.HCM: Phường Thạnh Xuân, Quận 12</p>
              <div className="text-pkg-red font-bold">Hotline: 1900 60XX</div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <div>© 2024 PKG BATTERY. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-pkg-red">Privacy Policy</a>
            <a href="#" className="hover:text-pkg-red">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TechSnapshot />
        <KeyFeatures />
        
        {/* Flexible Body Content Example */}
        <section className="bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[600px] rounded-sm overflow-hidden bg-pkg-graphite group"
            >
              <img 
                src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=1200&h=600" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
                alt="Banner"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pkg-graphite via-transparent to-transparent flex items-end p-12">
                <div className="max-w-2xl">
                  <div className="inline-block px-3 py-1 bg-pkg-red text-white text-[10px] font-bold uppercase tracking-widest mb-4">Công nghệ Cell Pin</div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Trái tim của năng lượng bền vững</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Sử dụng các cell pin lithium iron phosphate (LiFePO4) cấp độ A, đảm bảo an toàn tuyệt đối và hiệu suất vận hành cao trong điều kiện khắc nghiệt nhất.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Gallery />
        <SpecTable />
        <ProductOptions />
        <Downloads />
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
