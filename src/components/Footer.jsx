export default function Footer() {
  return (
    <footer className="w-full bg-transparent mt-24 pb-8">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Bloco de Marca e Contato */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <h3 className="font-black text-black text-2xl tracking-tighter uppercase">
            Function Co.
          </h3>
          <div className="text-zinc-500 text-sm font-medium space-y-1">
            <p className="hover:text-black transition-colors cursor-pointer">
              functionco@gmail.com
            </p>
            <p className="hover:text-black transition-colors cursor-pointer">
              SAC (11) 1111-1111
            </p>
            <p className="pt-3 text-xs text-zinc-400">
              Seg - Sex: 09h às 18h
            </p>
          </div>
        </div>

        {/* Formulário Raw/Utilitário */}
        <div className="w-full max-w-sm flex flex-col gap-3">
          <p className="text-black text-sm font-black uppercase tracking-widest">
            Newsletter
          </p>
          <form
            className="flex border-b-2 border-black pb-2 group"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Inscrição realizada!");
            }}
          >
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-transparent text-black font-medium text-sm placeholder-zinc-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="text-black font-black uppercase text-sm tracking-widest hover:text-brand-yellow transition-colors cursor-pointer"
            >
              Join
            </button>
          </form>
          <p className="text-xs text-zinc-400 font-medium">
            Acesso antecipado aos próximos drops.
          </p>
        </div>
      </div>

      {/* Rodapé*/}
      <div className="w-full max-w-7xl mx-auto px-6 mt-20 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-400 font-bold uppercase tracking-widest gap-4">
        <p>© 2026 Function Company.</p>

        <div className="flex gap-6">

          {/* Instagram */}
          <a href="#" className="flex items-center gap-1.5 hover:text-black cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Instagram
          </a>

          {/* TikTok */}
          <a href="#" className="flex items-center gap-1.5 hover:text-black cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
            Tiktok
          </a>

          {/* Twitter / X */}
          <a href="#" className="flex items-center gap-1.5 hover:text-black cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
            Twitter
          </a>

        </div>
      </div>
    </footer>
  );
}