// src/components/HeroSection.jsx
import React, { useEffect, useState } from 'react';
// Não é necessário importar Link pois você usou <a> com href="#projetos"

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Desenvolvedor Full-Stack em formação | React, Node.js, Mobile, e mais.";
  const typingSpeed = 50; 

  // Efeito de "digitação" para a sub-headline
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []);
  
  // Array para renderizar as partículas (10 itens para o efeito)
  const particles = Array.from({ length: 10 }, (_, i) => <li key={i} />);


  return (
    <section 
      id="inicio" // Adicionando o ID para o menu funcionar!
      className="relative w-full min-h-screen flex items-center justify-center text-white p-8 overflow-hidden pt-16" // Adicionado pt-16 para compensar o header
    >
      {/* 1. Removemos: {animationStyles} */}

      {/* 2. O container da animação (agora o CSS é lido do index.css) */}
      <ul className="bg-animation">
        {particles}
      </ul>

      {/* 3. Conteúdo do Hero (Acima da Animação) */}
      <div className="relative z-10 text-center max-w-4xl backdrop-blur-sm bg-gray-900/30 p-8 rounded-xl shadow-2xl transition duration-500 hover:shadow-cyan-500/50 border border-gray-700">
        
        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          Olá, eu sou <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-500">Roberto Mazor</span>
        </h1>
        
        {/* Sub-headline com Efeito de Digitação */}
        <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 mb-8 h-8">
          {typedText}
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