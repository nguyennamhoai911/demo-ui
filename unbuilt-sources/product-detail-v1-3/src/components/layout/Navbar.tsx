/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, Search, Globe } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-black tracking-tighter">
              <span className="text-pkg-red">PKG</span><span className="text-black">BATTERY</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-300 hidden sm:block mx-4"></div>
            <div className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase hidden sm:block">Industrial Energy Solutions</div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-pkg-red transition-colors">Sản phẩm</a>
            <a href="#" className="hover:text-pkg-red transition-colors">Giải pháp</a>
            <a href="#" className="hover:text-pkg-red transition-colors">Dịch vụ</a>
            <a href="#" className="hover:text-pkg-red transition-colors">Về chúng tôi</a>
          </div>
        </div>

        <div className="flex items-center space-x-6">
           <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-400 hover:text-pkg-graphite transition-colors">
                <Globe className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-pkg-graphite transition-colors">
                <Search className="w-5 h-5" />
              </button>
           </div>
           
           <button className="hidden lg:block px-5 py-2 border-[1.5px] border-black text-[11px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
             Contact Expert
           </button>

           <button className="lg:hidden text-pkg-graphite">
             <Menu className="w-6 h-6" />
           </button>
        </div>
      </div>
    </nav>
  );
}
