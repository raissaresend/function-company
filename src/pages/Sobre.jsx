export default function Sobre() {
    const dadosHorarios = [
        { dia: "Segunda a Sexta", hora: "9h - 18h" },
        { dia: "Sábado", hora: "9h - 13h" },
    ];

    return (
        <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto px-6 pb-20 mt-8">

            {/* Bloco 1: O Manifesto */}
            <section className="bg-brand-pureBlack text-white p-8 md:p-14 shadow-[12px_12px_0px_0px_#f5d106] border-2 border-brand-yellow">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-widest mb-10 text-brand-yellow">
                    A Rua é o nosso <br /> Ponto de Partida.
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Coluna da Copy Principal */}
                    <div className="space-y-6 text-sm md:text-base text-zinc-300 leading-relaxed font-medium text-justify">
                        <p>
                            A <strong className="text-white font-bold">Function Company</strong> não nasceu numa sala de reuniões. Nós nascemos no asfalto, da necessidade de criar algo que realmente representasse o ritmo, a atitude e a urgência da cultura urbana. Sabemos que, para você, vestir-se não é apenas cobrir o corpo — é a sua primeira linha de comunicação com o mundo.
                        </p>
                        <p>
                            O mercado atual está saturado de <em className="text-zinc-400">fast-fashion</em>: roupas descartáveis, sem identidade e que não aguentam a rotina de quem vive a cidade de verdade. Nós fomos na contramão. Nosso objetivo desde o dia zero foi resolver o problema de quem busca estética agressiva sem abrir mão da durabilidade.
                        </p>
                        <p>
                            Por isso, cada costura, cada estampa e cada modelagem é projetada com um propósito. Utilizamos tecidos de alta gramatura e processos de fabricação rigorosos. Nós entregamos um *streetwear* funcional, confortável e feito para durar. Mais do que consumidores, estamos a construir uma comunidade de pessoas que ditam as próprias regras.
                        </p>
                    </div>

                    {/* Coluna de Pilares Estratégicos */}
                    <div className="flex flex-col justify-center space-y-8 md:pl-10">
                        <div className="bg-zinc-900/80 p-6 border-l-4 border-brand-yellow">
                            <h3 className="font-black uppercase tracking-widest text-white mb-2">Visão</h3>
                            <p className="text-sm text-zinc-400">Elevar a cultura urbana através de peças de alto desempenho, tornando o design autoral acessível e impactante.</p>
                        </div>
                        <div className="bg-zinc-900/80 p-6 border-l-4 border-brand-yellow">
                            <h3 className="font-black uppercase tracking-widest text-white mb-2">Compromisso</h3>
                            <p className="text-sm text-zinc-400">Produção responsável e sustentável. Priorizamos matérias-primas que agridem menos o planeta, porque o futuro das ruas também depende de nós.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid Suporte + Horários */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">

                {/* Ajuda e Suporte */}
                <section className="bg-white p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_#181818]">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-6 text-black inline-block relative">
                        Central de Apoio
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-yellow"></span>
                    </h2>
                    <p className="text-sm text-gray-600 mb-6 font-medium">A nossa equipa está pronta para garantir que a sua experiência seja impecável, do clique até à entrega.</p>
                    <ul className="space-y-4">
                        {["Rastreie o seu pedido", "Prazos e Entregas", "Trocas e Devoluções", "Perguntas Frequentes"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-800 hover:text-black cursor-pointer transition-colors group uppercase tracking-wider">
                                <span className="text-brand-yellow text-xl group-hover:translate-x-1 transition-transform">➬</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Tabela de Horários */}
                <section className="bg-white p-6 md:p-8 border-4 border-black shadow-[8px_8px_0px_0px_#181818]">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest mb-6 text-black inline-block relative">
                        Horários de Atendimento
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-yellow"></span>
                    </h2>
                    <table className="w-full text-sm text-left mt-2">
                        <tbody className="divide-y-2 divide-gray-100 font-bold text-gray-800 uppercase tracking-wider">
                            {dadosHorarios.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4">{item.dia}</td>
                                    <td className="py-4 text-right">{item.hora}</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="py-4 text-gray-400">Domingo</td>
                                <td className="py-4 text-right text-brand-yellow font-black">FECHADO</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

            </div>

            {/* Localização / Mapa */}
            <section className="bg-white p-6 md:p-10 border-4 border-black shadow-[12px_12px_0px_0px_#181818] flex flex-col md:flex-row items-center gap-8 w-full mt-4">

                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-black mb-4">
                        Base de<br />Operações
                    </h3>
                    <p className="text-gray-600 font-bold text-sm mb-2 uppercase tracking-wider">
                        Univerdecidade
                    </p>
                    <p className="text-gray-500 font-medium text-sm mb-6">
                        Uberaba - MG
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                        O nosso QG é onde desenvolvemos as coleções, testamos os nossos materiais e respiramos a cultura da nossa cidade.
                    </p>
                </div>

                <div className="w-full md:w-2/3 h-80 md:h-96 border-4 border-black bg-gray-200 relative overflow-hidden group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60093.73316548268!2d-48.033991451367164!3d-19.718655099999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bad18160f7b4d3%3A0x5d0c29cbc9d3e469!2sIFTM%20-%20Uberaba%20(Parque%20Tecnol%C3%B3gico)!5e0!3m2!1spt-BR!2sbr!4v1666272144983!5m2!1spt-BR!2sbr"
                        className="absolute inset-0 w-full h-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>

        </div>
    );
}