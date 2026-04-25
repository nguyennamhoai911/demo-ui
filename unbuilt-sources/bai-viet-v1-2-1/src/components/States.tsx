import React from 'react';

export const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-white border border-zinc-100 rounded-sm overflow-hidden p-0 animate-pulse">
          <div className="h-48 bg-zinc-100" />
          <div className="p-6 space-y-4">
            <div className="h-3 w-24 bg-zinc-100 rounded" />
            <div className="space-y-2">
              <div className="h-5 w-full bg-zinc-100 rounded" />
              <div className="h-5 w-3/4 bg-zinc-100 rounded" />
            </div>
            <div className="h-12 w-full bg-zinc-50 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export const EmptyState = () => (
  <div className="py-20 text-center bg-white border border-dashed border-zinc-300 rounded-lg max-w-2xl mx-auto px-6">
    <div className="w-16 h-16 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-400">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-zinc-900 mb-2">Chưa có nội dung phù hợp</h3>
    <p className="text-zinc-500 mb-8">Chúng tôi sẽ sớm cập nhật các bài viết mới nhất trong danh mục này. Vui lòng quay lại sau hoặc liên hệ hỗ trợ.</p>
    <button className="bg-brand-red text-white px-8 py-3 rounded-sm font-bold shadow-lg shadow-red-500/20">
      QUAY LẠI TRANG CHỦ
    </button>
  </div>
);

export const ErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="py-20 text-center bg-red-50 border border-red-100 rounded-lg max-w-2xl mx-auto px-6">
    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <h3 className="text-xl font-bold text-red-900 mb-2">Có lỗi xảy ra, vui lòng thử lại</h3>
    <p className="text-red-700/70 mb-8">Hệ thống đang gặp sự cố tạm thời khi tải dữ liệu bài viết.</p>
    <button 
      onClick={onRetry}
      className="bg-red-600 text-white px-8 py-3 rounded-sm font-bold"
    >
      THỬ TẢI LẠI TRANG
    </button>
  </div>
);
