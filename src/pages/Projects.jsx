// src/pages/Projects.jsx
import React from 'react';
import { Github, ExternalLink } from 'lucide-react'; // Ícones para links externos/GitHub

const projectList = [
    {
        title: "Nome do Projeto 1 (React/Tailwind)",
        description: "Breve descrição do projeto. Foco na tecnologia Front-end utilizada e no desafio que ele resolveu. Este projeto demonstra proficiência em Hooks e componentes funcionais.",
        tags: ["React", "Tailwind CSS", "Vite", "SPA"],
        githubLink: "#", // Substitua pelo link real do GitHub
        liveLink: "#",   // Substitua pelo link da demo
    },
    {
        title: "Nome do Projeto 2 (Node/API)",
        description: "Projeto Back-end focado em API RESTful, utilizando Node.js e Express. Demonstra integração com banco de dados (ex: MongoDB ou PostgreSQL).",
        tags: ["Node.js", "Express", "MongoDB", "REST API"],
        githubLink: "#",
        liveLink: "#",
    },
    // Adicione mais projetos aqui...
];

const Projects = () => {
    return (
        // O ID é crucial para a navegação por âncora (#projetos)
        <section id="projetos" className="min-h-screen bg-gray-900 text-white pt-16 py-12 px-4 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-500">
                    Projetos Recentes
                </h2>
                <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                    Alguns dos meus trabalhos que demonstram minhas habilidades de desenvolvimento Full-Stack.
                </p>

                {/* Grid de Projetos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-xl transition duration-300 transform hover:scale-[1.02] hover:shadow-cyan-500/50 border border-gray-700">
                            
                            {/* Título do Projeto */}
                            <h3 className="text-2xl font-semibold mb-3 text-cyan-400">{project.title}</h3>
                            
                            {/* Descrição */}
                            <p className="text-gray-400 mb-4 h-20 overflow-hidden">{project.description}</p>
                            
                            {/* Tags/Tecnologias */}
                            <div className="flex flex-wrap gap-2 mb-4 border-t pt-4 border-gray-700">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-xs font-medium bg-teal-900 text-teal-300 px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Links */}
                            <div className="flex space-x-4 mt-4">
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-300 hover:text-cyan-400 flex items-center transition duration-200"
                                >
                                    <Github className="w-5 h-5 mr-1" />
                                    Código
                                </a>
                                <a 
                                    href={project.liveLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-gray-300 hover:text-cyan-400 flex items-center transition duration-200"
                                >
                                    <ExternalLink className="w-5 h-5 mr-1" />
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chamada para o LinkedIn, que está salvo! */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-300 mb-4">
                        Veja mais detalhes sobre meus projetos e experiência completa no meu LinkedIn:
                    </p>
                    <a
                        href="https://www.linkedin.com/in/roberto-mazor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-teal-500 text-base font-medium rounded-md shadow-sm text-teal-400 hover:bg-teal-900 transition duration-300"
                    >
                        Visitar Perfil LinkedIn
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Projects;