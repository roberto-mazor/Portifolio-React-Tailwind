// src/pages/AboutMe.jsx (CORRIGIDO)
import React from 'react';
// IMPORTAR useNavigate para lidar com a mudança de rota + âncora
import { Link, useNavigate } from 'react-router-dom'; 
import { Briefcase, Code, GraduationCap, Users } from 'lucide-react'; 

// Dados a serem exibidos (Você pode mover isso para um arquivo de configuração mais tarde)
const aboutData = {
 headline: "Minha Jornada: Paixão por Código e Soluções",
 intro: "Olá! Sou Roberto Mazor. Minha trajetória na tecnologia é movida pela curiosidade e pelo desejo constante de criar soluções que façam a diferença. Como Desenvolvedor Full-Stack em formação, busco combinar a robustez do back-end com a usabilidade e beleza do front-end.",
 focusAreas: [
  { 
   icon: Code, 
   title: "Full-Stack Development", 
   description: "Proficiência em React (Vite) para interfaces dinâmicas e aprendizado contínuo em Node.js para o lado do servidor.",
   color: "text-cyan-400"
  },
  { 
   icon: Users, 
   title: "Aprendizagem Ágil", 
   description: "Capacidade de absorver novas tecnologias rapidamente, focado em metodologias ágeis para entrega contínua de valor.",
   color: "text-teal-400"
  },
  { 
   icon: GraduationCap, 
   title: "Formação em Andamento", 
   description: "Investimento constante em cursos e projetos práticos para solidificar a base de conhecimento e expandir o meu stack.",
   color: "text-indigo-400"
  },
 ],
};

const AboutMe = () => {
    const navigate = useNavigate(); // NOVO: Inicializa o hook de navegação

    // NOVO: Função para forçar a navegação para a Home e a âncora #projetos
    const handleProjectsClick = (e) => {
        e.preventDefault(); // Impede o Link de executar o comportamento padrão
        // Navega para a rota Home E adiciona o hash #projetos
        navigate('/#projetos'); 
    };
    
 return (
  // Seção principal com padding para respeitar o Menu fixo
  <section id="sobre-mim" className="min-h-screen bg-gray-900 text-white pt-16 py-12 px-4 sm:px-8 lg:px-12">
   <div className="max-w-6xl mx-auto">
    
    {/* Título Principal */}
    <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-500">
     Sobre Mim
    </h2>
    
    <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
     {aboutData.headline}
    </p>
    {/* Bloco de Introdução e Imagem/Avatar (opcional) */}
    <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
     
     <div className="md:w-2/3">
      <h3 className="text-3xl font-semibold mb-4 text-gray-100">Quem sou eu?</h3>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
       {aboutData.intro}
      </p>
      
      <p className="text-md text-gray-400 italic border-l-4 border-cyan-500 pl-4 py-2 bg-gray-800/50 rounded-md">
       "A tecnologia de hoje é o alicerce para as inovações de amanhã. Estou pronto para construir."
      </p>
      
      {/* Botão de Ação */}
      <div className="mt-8">
       <Link
        to="/#projetos" // Altera o destino para incluir o hash
        onClick={handleProjectsClick} // NOVO: Chama a função de navegação corrigida
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-cyan-400 hover:bg-cyan-300 transition duration-300 transform hover:scale-105"
       >
        <Briefcase className="w-5 h-5 mr-2" />
        Explorar Projetos
       </Link>
      </div>
     </div>
     
     {/* Espaço para Imagem/Avatar - Substitua pelo seu retrato ou logo */}
     <div className="md:w-1/3 flex justify-center">
      {/*  */}
      <div className="w-60 h-60 bg-gray-800 rounded-full border-4 border-teal-500 flex items-center justify-center text-gray-500 text-3xl font-bold p-2">
       [Seu Avatar Aqui]
      </div>
     </div>
    </div>
    {/* Divisor */}
    <div className="border-t border-gray-700/50 my-12"></div>
    {/* Cards de Áreas de Foco */}
    <h3 className="text-3xl font-bold text-center mb-10 text-teal-400">Minhas Áreas de Foco</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {aboutData.focusAreas.map((area, index) => (
      <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition duration-500 border border-gray-700 hover:border-cyan-500">
       <area.icon className={`w-8 h-8 mb-4 ${area.color}`} />
       <h4 className="text-xl font-semibold mb-2 text-gray-100">{area.title}</h4>
       <p className="text-gray-400">{area.description}</p>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default AboutMe;