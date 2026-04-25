import { TrustSection } from './components/TrustSection';

export default function App() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Spacer to simulate page content before trust section */}
      <div className="h-[20vh] flex items-center justify-center border-b border-slate-100 italic text-premium-gray/30 font-display tracking-[0.5em] text-xs uppercase">
        SCROLL TO REVEAL
      </div>

      <TrustSection />

      {/* Spacer after trust section */}
      <div className="h-[100vh] flex items-center justify-center bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-ivory to-transparent z-10" />
        <p className="text-premium-gray/20 font-display text-8xl font-bold select-none tracking-tighter">
          EXPERIENCE QUALITY
        </p>
      </div>
    </main>
  );
}
