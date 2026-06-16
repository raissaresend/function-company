import { useState } from 'react';
import roupasImg from '../assets/roupas.png';
import skateImg from '../assets/skateshop.png';
import calcadosImg from '../assets/calcados.png';

export default function Categorias() {
  const [filtroAtivo, setFiltroAtivo] = useState('Todos');

  const filtros = ['Todos', 'Masculino', 'Feminino', 'Infantil'];

  const listaCategorias = [
    { id: 'roupas', titulo: "Roupas", img: roupasImg },
    { id: 'skate', titulo: "Skateshop", img: skateImg },
    { id: 'sneakers', titulo: "Sneakers", img: calcadosImg },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 gap-12 pb-20">

      {/* Header do Catálogo */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-black pb-4 gap-6">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
          Shop
        </h1>

        {/* Filtro */}
        <div className="flex flex-wrap gap-5 md:gap-8">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              onClick={() => setFiltroAtivo(filtro)}
              className={`text-xs md:text-sm font-black uppercase tracking-widest pb-1 transition-all duration-300 focus:outline-none cursor-pointer ${filtroAtivo === filtro
                  ? 'text-black border-b-2 border-brand-yellow'
                  : 'text-zinc-400 hover:text-black border-b-2 border-transparent'
                }`}
            >
              {filtro}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {listaCategorias.map((cat) => (
          <div key={cat.id} className="group cursor-pointer flex flex-col">

            <div className="overflow-hidden bg-zinc-100 relative aspect-[3/4] mb-5">
              <img
                src={cat.img}
                alt={cat.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            <div className="flex justify-between items-center px-1">
              <h2 className="text-lg md:text-xl font-black text-black uppercase tracking-widest group-hover:text-brand-yellow transition-colors duration-300">
                {cat.titulo}
              </h2>
              <span className="text-transparent group-hover:text-black font-black transition-colors duration-300">
                ✦
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}