/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryTabs } from './components/CategoryTabs';
import { ArticleCard } from './components/ArticleCard';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { SkeletonLoader, EmptyState, ErrorState } from './components/States';
import { Article, MOCK_ARTICLES } from './types';
import { Settings, RefreshCcw, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type UIState = 'normal' | 'loading' | 'empty' | 'error';

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [uiState, setUiState] = useState<UIState>('normal');
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [showStateControls, setShowStateControls] = useState(false);

  // Filter logic
  const filteredArticles = articles.filter(art => {
    if (activeTab === 'all') return true;
    if (activeTab === 'tech') return art.type === 'technical';
    if (activeTab === 'news') return art.type === 'news';
    if (activeTab === 'forklift') return art.tags.includes('Xe nâng');
    if (activeTab === 'project') return art.type === 'project';
    if (activeTab === 'oem') return art.type === 'oem';
    return true;
  });

  const featuredArticle = filteredArticles.find(a => a.isFeatured);
  const normalArticles = filteredArticles.filter(a => a !== featuredArticle);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoadingMore(false);
    }, 1500);
  };

  const simulateLoading = () => {
    setUiState('loading');
    setTimeout(() => setUiState('normal'), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      {/* State Switcher for Demo Purposes (Subtle) */}
      <div className="fixed bottom-6 left-6 z-[60]">
        <button 
          onClick={() => setShowStateControls(!showStateControls)}
          className="w-12 h-12 bg-zinc-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          {showStateControls ? <RefreshCcw size={20} /> : <Settings size={20} />}
        </button>
        {showStateControls && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-16 left-0 bg-white border border-zinc-200 p-2 rounded-lg shadow-2xl w-48 flex flex-col gap-1"
          >
            <div className="text-[10px] font-black text-zinc-400 px-3 py-1 uppercase tracking-widest">Switch UI States</div>
            {(['normal', 'loading', 'empty', 'error'] as const).map(state => (
              <button 
                key={state}
                onClick={() => {
                  setUiState(state);
                  setShowStateControls(false);
                }}
                className={`text-left px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors ${uiState === state ? 'bg-brand-red text-white' : 'hover:bg-zinc-100 text-zinc-600'}`}
              >
                {state}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      <main className="flex-grow">
        <Hero isEmpty={uiState === 'empty'} />
        
        <CategoryTabs activeId={activeTab} onSelect={(id) => {
          setActiveTab(id);
          simulateLoading();
        }} />

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            
            <AnimatePresence mode="wait">
              {uiState === 'loading' && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <SkeletonLoader />
                </motion.div>
              )}

              {uiState === 'error' && (
                <motion.div 
                  key="error"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <ErrorState onRetry={simulateLoading} />
                </motion.div>
              )}

              {uiState === 'empty' && (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <EmptyState />
                </motion.div>
              )}

              {uiState === 'normal' && (
                <motion.div 
                  key="normal"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="space-y-16 lg:space-y-24"
                >
                  {/* Featured Article */}
                  {featuredArticle && activeTab === 'all' && (
                    <div className="mb-16">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-0.5 bg-brand-red" />
                        <h2 className="text-xl font-display font-bold uppercase tracking-widest text-zinc-900">Tiêu điểm công nghệ</h2>
                      </div>
                      <ArticleCard article={featuredArticle} featured />
                    </div>
                  )}

                  {/* Main Grid */}
                  <div>
                    <div className="flex items-center flex-wrap justify-between gap-4 mb-10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-0.5 bg-brand-red" />
                        <h2 className="text-xl font-display font-bold uppercase tracking-widest text-zinc-900">
                          {activeTab === 'all' ? 'Tất cả bài viết' : `Chuyên mục: ${CATEGORIES.find(c => c.id === activeTab)?.name}`}
                        </h2>
                      </div>
                      <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                        Hiển thị {filteredArticles.length} bài viết
                      </div>
                    </div>

                    {filteredArticles.length > 0 ? (
                      <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {normalArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                          ))}
                        </div>
                        
                        {/* Load More Section */}
                        <div className="mt-20 flex flex-col items-center">
                          <button 
                            onClick={handleLoadMore}
                            disabled={isLoadingMore}
                            className={`group flex items-center gap-3 px-10 py-4 border-2 border-zinc-900 rounded-sm font-bold text-sm tracking-widest uppercase transition-all ${
                              isLoadingMore ? 'opacity-50 cursor-wait' : 'hover:bg-zinc-900 hover:text-white active:scale-95'
                            }`}
                          >
                            {isLoadingMore ? (
                              <>
                                <Loader2 size={18} className="animate-spin" /> ĐANG TẢI...
                              </>
                            ) : (
                              'Xem thêm bài viết'
                            )}
                          </button>
                          
                          {/* Success message mock after load more */}
                          {!isLoadingMore && activeTab === 'news' && (
                            <p className="mt-6 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Bạn đã xem hết tin tức mới nhất</p>
                          )}
                        </div>
                      </>
                    ) : (
                      <EmptyState />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 z-50 bg-white/80 backdrop-blur-md border-t border-zinc-200">
         <button className="w-full bg-brand-red text-white py-3 font-bold text-sm rounded shadow-lg shadow-red-500/30">
            NHẬN TƯ VẤN KỸ THUẬT NGAY
         </button>
      </div>
    </div>
  );
}
