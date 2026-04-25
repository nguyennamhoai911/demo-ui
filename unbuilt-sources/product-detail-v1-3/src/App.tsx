/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/product/Hero";
import TechnicalSnapshot from "./components/product/TechnicalSnapshot";
import WhyPkg from "./components/product/WhyPkg";
import Applications from "./components/product/Applications";
import EngineeringInside from "./components/product/EngineeringInside";
import Specifications from "./components/product/Specifications";
import ProductFamily from "./components/product/ProductFamily";
import Documentation from "./components/product/Documentation";
import Trust from "./components/product/Trust";
import ConversionBlock from "./components/product/ConversionBlock";
import StickyBar from "./components/product/StickyBar";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechnicalSnapshot />
        <WhyPkg />
        <Applications />
        <EngineeringInside />
        <Specifications />
        <ProductFamily />
        <Documentation />
        <Trust />
        <ConversionBlock />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
