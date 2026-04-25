import { useState, useMemo } from 'react';
import { Header, Hero } from './components/CoreUI';
import { FilterBar, FeaturedGrid, ArticleCard } from './components/ListingUI';
import { CaseStudySection, TopicClusters, FinalCTA } from './components/TrustUI';
import { Footer } from './components/Footer';
import { ARTICLES } from './constants';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return ARTICLES;
    // Map IDs to types for basic filtering
    const typeMap: Record<string, string> = {
      'technical': 'technical',
      'news': 'news',
      'project': 'project',
      'oem-odm': 'oem'
    };
    return ARTICLES.filter(art => art.type === typeMap[activeCategory] || art.category.toLowerCase().includes(activeCategory.toLowerCase()));
  }, [activeCategory]);

  const featuredArticles = ARTICLES.filter(a => a.isFeatured).slice(0, 4);
  const mainStreamArticles = filteredArticles.filter(a => !a.isFeatured || activeCategory !== 'all');

  const handleCategoryChange = (id: string) => {
    setIsLoading(true);
    setActiveCategory(id);
    // Simulate content change loading
    setTimeout(() => setIsLoading(false), 400);
    // Scroll to filters on selection
    const filterEl = document.getElementById('filter-anchor');
    if (filterEl) {
      filterEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-100 selection:text-rose-600">
      <Header />
      
      <main>
        <Hero />
        
        {/* Featured Section - Only show when "All" is selected to maintain editorial hierarchy */}
        {activeCategory === 'all' && (
          <FeaturedGrid articles={featuredArticles} />
        )}

        <div id="filter-anchor" className="scroll-mt-24" />
        <FilterBar activeId={activeCategory} onSelect={handleCategoryChange} />

        {/* Main Listing Stream */}
        <section className="container mx-auto px-6 mb-32 min-h-[400px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-32"
              >
                <Loader2 className="text-rose-600 animate-spin mb-4" size={40} />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Đang cập nhật nội dung...</span>
              </motion.div>
            ) : (
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
              >
                {mainStreamArticles.length > 0 ? (
                  mainStreamArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))
                ) : (
                  <div className="col-span-full py-32 text-center border-2 border-dashed border-gray-100 bg-gray-50/50">
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">Chưa có nội dung cho chủ đề này.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!isLoading && mainStreamArticles.length > 0 && (
             <div className="mt-20 flex justify-center">
                <button className="px-10 py-4 border border-gray-200 text-xs font-bold text-gray-900 uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-sm">
                   Tải thêm bài viết
                </button>
             </div>
          )}
        </section>

        {/* Brand Authority Sections */}
        <CaseStudySection />
        <TopicClusters />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
