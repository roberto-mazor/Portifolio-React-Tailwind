// src/components/HeroSection.jsx (Ajuste de Velocidade)
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
    // 1. Definições e Constantes
    const staticText = "Desenvolvedor Full-Stack em formação | "; 
    const keywords = ['React', 'Node.js', 'Mobile', 'SQL']; 
    const colors = ['text-cyan-400', 'text-green-400', 'text-yellow-400', 'text-blue-400']; 
    
    // NOVO: Valores ajustados para animação mais suave
    const typingSpeed = 120; // Mais lento: 120ms (era 100ms)
    const pauseTime = 2000;  // Mais tempo de pausa: 2 segundos (era 1.5s)

    // ... (restante dos states e do useEffect) ...
    // O useEffect e o JSX abaixo continuam os mesmos da etapa anterior, 
    // garantindo que o ciclo de digitação e exclusão funcione apenas nas keywords.

    // ... (restante do código) ...
    
    // O código completo corrigido com os novos tempos:

    const [displayedKeyword, setDisplayedKeyword] = useState(''); 
    const [keywordIndex, setKeywordIndex] = useState(0); 
    const [isDeleting, setIsDeleting] = useState(false); 
    const [currentColor, setCurrentColor] = useState(colors[0]); 

    useEffect(() => {
        const fullWord = keywords[keywordIndex];

        let timer = setTimeout(() => {
            if (isDeleting) {
                // Modo APAGANDO: remove um caractere por vez
                setDisplayedKeyword(prev => prev.slice(0, prev.length - 1));
            } else {
                // Modo DIGITANDO: adiciona um caractere por vez
                if (displayedKeyword.length < fullWord.length) {
                    setDisplayedKeyword(prev => fullWord.substring(0, prev.length + 1));
                }
            }
        }, isDeleting ? typingSpeed / 2 : typingSpeed);

        // Lógica de Transição (Pause e Mudança de Palavra)
        if (!isDeleting && displayedKeyword === fullWord) {
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } 
        else if (isDeleting && displayedKeyword === '') {
            setIsDeleting(false);
            const nextIndex = (keywordIndex + 1) % keywords.length;
            setKeywordIndex(nextIndex);
            setCurrentColor(colors[nextIndex]);
        }

        return () => clearTimeout(timer); 
    }, [displayedKeyword, isDeleting, keywordIndex, typingSpeed, pauseTime, keywords, colors]); // Adicionado todas as dependências

    
    const particles = Array.from({ length: 10 }, (_, i) => <li key={i} />);


    return (
        <section 
            id="inicio" 
            className="relative w-full min-h-screen flex items-center justify-center text-white p-8 overflow-hidden pt-16"
        >
            <ul className="bg-animation">
                {particles}
            </ul>

            {/* Conteúdo do Hero (Acima da Animação) */}
            <div className="relative z-10 text-center max-w-4xl backdrop-blur-sm bg-gray-900/30 p-8 rounded-xl shadow-2xl transition duration-500 hover:shadow-cyan-500/50 border border-gray-700">
                
                {/* Título Principal */}
                <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
                    Olá, eu sou <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-500">Roberto Mazor</span>
                </h1>
                
                {/* Sub-headline com o Efeito de Ciclo Suavizado */}
                <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-8 h-8">
                    {/* Texto Fixo - GARANTIDO QUE ESTE TEXTO NÃO MUDE */}
                    {staticText} 
                    
                    {/* Palavra em Ciclo (com cor dinâmica) */}
                    <span className={`font-semibold ${currentColor}`}>
                        {displayedKeyword}
                    </span>
                    
                    {/* Cursor que pisca */}
                    <span className="inline-block w-0.5 h-6 bg-cyan-400 animate-pulse ml-1 align-middle"></span>
                </p>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#projetos"
                        className="px-8 py-3 text-lg font-semibold rounded-lg bg-cyan-600 hover:bg-cyan-500 transition duration-300 shadow-md shadow-cyan-500/50 transform hover:scale-105"
                    >
                        Ver Projetos Recentes
                    </a>
                    <a
                        href="https://www.linkedin.com/in/roberto-mazor/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 text-lg font-semibold rounded-lg border border-teal-500 text-teal-400 hover:bg-teal-900 transition duration-300 transform hover:scale-105"
                    >
                        Conecte-se no LinkedIn
                    </a>
                </div>
                
                {/* Referência a tecnologias */}
                <div className="mt-8 text-sm text-gray-500">
                    <span className="font-mono">Tecnologias: </span> 
                    <span className="font-mono text-cyan-400">{'<React>'}</span> / 
                    <span className="font-mono text-green-400">{'<Node>'}</span> / 
                    <span className="font-mono text-yellow-400">{'<Mobile>'}</span> / 
                    <span className="font-mono text-blue-400">{'<SQL>'}</span>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;