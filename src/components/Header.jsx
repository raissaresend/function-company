import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full pt-10 pb-6 bg-transparent z-50">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <Link to="/" className="focus:outline-none flex flex-col items-center md:items-start group">
          {/* Box Logo */}
          <div className="bg-black text-white px-3 py-1 transform -skew-x-6 group-hover:bg-brand-yellow group-hover:text-black transition-colors duration-300">
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none">
              Function
            </h1>
          </div>
          {/* Subtítulo */}
          <span className="text-[9px] font-black text-black tracking-[0.4em] uppercase mt-1 pl-1">
            Streetwear Co.
          </span>
        </Link>

        {/* Navegação */}
        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <li>
              <Link to="/" className="text-xs font-black text-black uppercase tracking-widest hover:text-brand-yellow transition-colors">
                Home
              </Link>
            </li>

            {/* Dropdown */}
            <li className="relative group py-2">
              <Link to="/categorias" className="text-xs font-black text-black uppercase tracking-widest hover:text-brand-yellow transition-colors">
                Categorias
              </Link>
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white border border-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-center">
                <li>
                  <Link to="/categorias" className="block px-4 py-3 text-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-colors">
                    Roupas
                  </Link>
                </li>
                <li>
                  <Link to="/categorias" className="block px-4 py-3 text-black text-xs font-bold uppercase border-t border-black hover:bg-black hover:text-white transition-colors">
                    Skateshop
                  </Link>
                </li>
                <li>
                  <Link to="/categorias" className="block px-4 py-3 text-black text-xs font-bold uppercase border-t border-black hover:bg-black hover:text-white transition-colors">
                    Sneakers
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/sobre" className="text-xs font-black text-black uppercase tracking-widest hover:text-brand-yellow transition-colors">
                Sobre Nós
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}