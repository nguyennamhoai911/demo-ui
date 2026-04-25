import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCT } from "./data";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Lightbox({
  index,
  onClose,
  onChange,
}: {
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % PRODUCT.gallery.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + PRODUCT.gallery.length) % PRODUCT.gallery.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, onClose, onChange]);

  if (index === null) return null;
  const item = PRODUCT.gallery[index];

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 inline-flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-white/20 text-white"
      >
        <X className="w-5 h-5" />
      </button>
      <button
        onClick={() => onChange((index - 1 + PRODUCT.gallery.length) % PRODUCT.gallery.length)}
        className="absolute left-5 inline-flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-white/20 text-white"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => onChange((index + 1) % PRODUCT.gallery.length)}
        className="absolute right-5 inline-flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-white/20 text-white"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="max-w-3xl w-full">
        <div className="relative aspect-square bg-neutral-900 border border-white/10">
          <ImageWithFallback src={item.src} alt={item.alt} className="w-full h-full object-contain" />
        </div>
        <div className="mt-4 flex items-center justify-between text-white/80 text-sm">
          <span>{item.alt}</span>
          <span className="tracking-widest text-white/50">
            {String(index + 1).padStart(2, "0")} / {String(PRODUCT.gallery.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
