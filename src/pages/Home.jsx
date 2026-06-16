export default function Home() {
  return (
    <div className="flex flex-col items-center gap-24 w-full pb-16">

      {/* Hero Banner */}
      <section className="relative w-full max-w-7xl mx-auto aspect-[4/5] md:aspect-[21/9] bg-brand-pureBlack overflow-hidden flex flex-col justify-center items-center select-none">

        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        ></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center pointer-events-none opacity-[0.03] md:opacity-5">
          <span className="text-[120px] md:text-[250px] font-black text-white uppercase tracking-tighter leading-none whitespace-nowrap">
            FUNCTION
          </span>
          <span
            className="text-[120px] md:text-[250px] font-black text-transparent uppercase tracking-tighter leading-none whitespace-nowrap"
            style={{ WebkitTextStroke: '2px white' }}
          >
            COMPANY
          </span>
        </div>

        <div className="absolute top-16 md:top-20 -left-10 w-[120%] h-8 md:h-10 bg-brand-yellow -rotate-3 flex items-center overflow-hidden pointer-events-none shadow-[0px_4px_20px_rgba(245,209,6,0.3)]">
          <div className="flex text-black font-black text-xs md:text-sm uppercase tracking-widest whitespace-nowrap opacity-80">
            <span>✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP ✦ NEW DROP</span>
          </div>
        </div>

        <div className="absolute bottom-16 md:bottom-20 -right-10 w-[120%] h-8 md:h-10 bg-brand-yellow -rotate-3 flex items-center overflow-hidden pointer-events-none shadow-[0px_4px_20px_rgba(245,209,6,0.3)]">
          <div className="flex text-black font-black text-xs md:text-sm uppercase tracking-widest whitespace-nowrap opacity-80">
            <span>✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦ NO LIMITS ✦</span>
          </div>
        </div>

        {/* Bloco Central */}
        <div className="relative z-10 flex flex-col items-center group">
          <div className="bg-brand-yellow text-black px-8 py-5 md:px-16 md:py-8 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-transform duration-500 group-hover:scale-105 cursor-default border-2 border-black">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none text-center">
              Drop 01
            </h2>
          </div>

          <div className="mt-8 bg-black border border-zinc-700 px-6 py-3 shadow-2xl backdrop-blur-sm">
            <p className="text-white font-bold tracking-[0.4em] uppercase text-xs md:text-sm animate-pulse">
              System Loading...
            </p>
          </div>
        </div>

      </section>

      {/* Video Section */}
      <section className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="w-full flex justify-between items-end mb-6 border-b-2 border-black pb-2">
          <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-black">
            Manifesto
          </h3>
          <span className="text-brand-yellow font-black uppercase tracking-widest text-sm bg-black px-3 py-1">
            Play
          </span>
        </div>

        <div className="w-full aspect-video bg-zinc-200 relative overflow-hidden border-2 border-black">
          <iframe
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            src="https://www.youtube.com/embed/srqBRo1x7Ko"
            title="Video Manifesto"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}