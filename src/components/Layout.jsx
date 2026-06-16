import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {

  const MarqueeMessage = () => (
    <div className="flex items-center gap-8 md:gap-16">
      <span className="text-black font-black text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap">
        FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 199
      </span>
      <span className="text-black text-[10px] md:text-xs">
        ✦
      </span>
      <span className="text-black font-black text-[10px] md:text-xs uppercase tracking-[0.2em] whitespace-nowrap">
        USE O CUPOM 'FUNCTION10' PARA 10% OFF NA PRIMEIRA COMPRA
      </span>
      <span className="text-black text-[10px] md:text-xs">
        ✦
      </span>
    </div>
  );

  const MarqueeGroup = () => (
    <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
      <MarqueeMessage />
      <MarqueeMessage />
      <MarqueeMessage />
      <MarqueeMessage />
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen w-full bg-white">

      {/* Announcement Bar */}
      <div className="w-full bg-brand-yellow border-b-2 border-black overflow-hidden relative z-[60]">

        <div className="animate-marquee py-2.5 flex items-center">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>

      </div>

      <Header />

      <main className="flex-grow w-full mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}