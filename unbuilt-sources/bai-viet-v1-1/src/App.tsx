import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import FeaturedSection from './components/FeaturedSection';
import TrustStrip from './components/TrustStrip';
import ArticleCard from './components/ArticleCard';
import ResourceSection from './components/ResourceSection';
import CaseStudySection from './components/CaseStudySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { MOCK_ARTICLES } from './types';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function App() {
  const latestArticles = MOCK_ARTICLES.slice(0, 4); // For the editorial list
  const gridArticles = MOCK_ARTICLES;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <FilterBar />

        {/* Featured Section */}
        <FeaturedSection articles={MOCK_ARTICLES} />

        <TrustStrip />

        {/* Article Listing Section - Editorial Rows */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter">Bài viết mới nhất</h2>
            <div className="hidden md:flex gap-4">
               <button className="w-12 h-12 border border-gray-100 flex items-center justify-center hover:bg-pkg-charcoal hover:text-white transition-all">
                  <ArrowLeft className="w-5 h-5" />
               </button>
               <button className="w-12 h-12 border border-gray-100 flex items-center justify-center hover:bg-pkg-charcoal hover:text-white transition-all">
                  <ArrowRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div className="flex flex-col">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} layout="row" />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button className="bg-pkg-charcoal text-white px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-pkg-red transition-all">
              Tải thêm bài viết
            </button>
          </div>
        </section>

        {/* Topic Cluster: Pin Xe Nâng (Sample) */}
        <section className="bg-pkg-gray py-24 border-y border-gray-200">
           <div className="max-w-7xl mx-auto px-6 lg:px-12">
             <div className="flex items-center gap-4 mb-12">
               <div className="w-2 h-12 bg-pkg-red" />
               <div>
                  <h2 className="text-3xl font-display font-bold uppercase tracking-tighter">Kiến thức Pin Xe Nâng</h2>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">Forklift Energy Solutions</p>
               </div>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {MOCK_ARTICLES.slice(0, 3).map((article) => (
                 <ArticleCard key={article.id} article={article} layout="grid" />
               ))}
             </div>
           </div>
        </section>

        <CaseStudySection />
        
        <ResourceSection />

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
