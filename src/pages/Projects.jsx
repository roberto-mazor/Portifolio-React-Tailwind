import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const projectList = [
    {
        title: "Dashboard Financeiro Inteligente (Full-Stack)",
        image: "/public/previa_dashboard_financeiro.png", // Adicione suas imagens na pasta public
        description: "Gestão financeira completa com visualização de dados em tempo real e suporte a temas dinâmicos (Light/Dark). O projeto implementa uma arquitetura robusta com autenticação JWT e uma estratégia exclusiva de 'Wake-up Call' para otimizar o tempo de resposta do banco de dados PostgreSQL serverless.",
        tags: ["React", "Node.js", "PostgreSQL(Neon)", "MUI X Charts", "Tailwind CSS"],
        githubLink: "https://github.com/roberto-mazor/dashboard-financeiro-projeto-pi",
        liveLink: "https://dashboard-financeiro-projeto-pi-web.vercel.app/",
    },
    {
        title: "Nome do Projeto 2",
        image: "/print-api.png",
        description: "Projeto Back-end focado em API RESTful, utilizando Node.js e Express. Demonstra integração com banco de dados (ex: MongoDB ou PostgreSQL). Possui documentação completa das rotas e tratamento de erros centralizado.",
        tags: ["Node.js", "Express", "MongoDB", "REST API"],
        githubLink: "#",
        liveLink: "#",
    },
];

// Componente de Card Individual para gerenciar o estado de expansão
const ProjectCard = ({ project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transition duration-300 transform hover:scale-[1.02] hover:shadow-cyan-500/50 border border-gray-700 flex flex-col">
            
            {/* 1. Imagem de Prévia (Após o título no fluxo, mas aqui no topo para melhor design) */}
            <div className="h-48 overflow-hidden border-b border-gray-700 bg-gray-900">
                <img 
                    src={project.image} 
                    alt={`Preview do ${project.title}`}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Preview+Indispon%C3%ADvel"; }}
                />
            </div>

            <div className="p-6 flex flex-col grow">
                {/* 2. Título */}
                <h3 className="text-2xl font-semibold mb-3 text-cyan-400 leading-tight">
                    {project.title}
                </h3>

                {/* 3. Descrição com Botão de Expansão */}
                <div className="relative">
                    <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? 'mb-4' : 'line-clamp-3 mb-2'}`}>
                        {project.description}
                    </p>
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-cyan-500 hover:text-cyan-300 text-xs font-bold flex items-center mb-4 transition-colors"
                    >
                        {isExpanded ? (
                            <>Recolher <ChevronUp className="w-4 h-4 ml-1" /></>
                        ) : (
                            <>Ler mais <ChevronDown className="w-4 h-4 ml-1" /></>
                        )}
                    </button>
                </div>

                {/* 4. Tags (Sempre no final do bloco de texto) */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                    {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-[10px] uppercase tracking-wider font-bold bg-teal-900/50 text-teal-300 px-2 py-1 rounded border border-teal-800">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* 5. Links */}
                <div className="flex justify-between items-center mt-6">
                    <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white flex items-center text-sm transition-colors"
                    >
                        <Github className="w-4 h-4 mr-1" /> Código
                    </a>
                    <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center transition-all shadow-lg shadow-cyan-900/20"
                    >
                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projetos" className="min-h-screen bg-gray-900 text-white pt-24 py-12 px-4 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-500 leading-normal">
                    Projetos Recentes
                </h2>
                <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                    Alguns dos meus trabalhos que demonstram minhas habilidades de desenvolvimento Full-Stack.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>

                {/* Rodapé LinkedIn */}
                <div className="text-center mt-20 p-8 border-t border-gray-800">
                    <p className="text-gray-400 mb-6">Quer ver mais detalhes técnicos? Vamos conversar!</p>
                    <a
                        href="https://www.linkedin.com/in/roberto-mazor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 bg-[#0077b5] hover:bg-[#005f91] text-white font-bold rounded-full transition-all transform hover:scale-105"
                    >
                        Visitar Perfil no LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;