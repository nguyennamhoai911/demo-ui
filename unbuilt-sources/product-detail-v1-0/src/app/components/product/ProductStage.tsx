import { ImageWithFallback } from "../figma/ImageWithFallback";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: "lg" | "md" | "sm";
};

export function ProductStage({ src, alt, className = "", size = "lg" }: Props) {
  return (
    <div className={`relative aspect-square w-full ${className}`}>
      {/* soft red glow outside image */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[28px] blur-2xl opacity-60"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(225,28,43,0.18) 0%, rgba(225,28,43,0) 70%)",
        }}
      />
      <div className="relative h-full w-full overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-100">
        {/* corner ticks */}
        <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-neutral-300" />
        <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-neutral-300" />
        <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-neutral-300" />
        <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-neutral-300" />
        <ImageWithFallback
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
        />
        {/* subtle bottom shadow */}
        <div
          aria-hidden
          className="absolute inset-x-8 bottom-2 h-3 rounded-full blur-md opacity-40"
          style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(0,0,0,0.4) 0%, transparent 100%)" }}
        />
      </div>
    </div>
  );
}
