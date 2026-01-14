// src/pages/Formation.jsx
import React from 'react';
import { BookOpen, Code, Layers, FileText } from 'lucide-react'; 

// Dados do Curso e Módulos
const formationData = {
    course: "Técnico em Programação Full Stack",
    institution: "Senac Americana",
    duration: "Início: 2025 – Em andamento – Conclusão 09/2026",
    modules: [
        {
            title: "Gestão e Planejamento",
            icon: BookOpen,
            description: "Focado em processos de organização e pré-desenvolvimento.",
            details: [
                "Gestão de projetos (Kanban, Mockups, Briefing)",
                "Documentação (Diagrama de requisitos, Diagrama caso de uso)",
            ]
        },
        {
            title: "Front-End Development",
            icon: Code,
            status: "Concluído",
            description: "Criação de interfaces responsivas e dinâmicas.",
            details: [
                "Web Base: HTML, CSS, JavaScript, Bootstrap",
                "Ambiente: XAMPP, WordPress, Instalação Linux (VM), Servidor Apache",
                "Ferramentas: Vercel, Figma, React",
            ]
        },
        {
            title: "Back-End e Bancos de Dados",
            icon: Layers,
            status: "Desenvolvendo",
            description: "Construção de APIs robustas e persistência de dados.",
            details: [
                "Lógica de Programação (Portugol e JavaScript)",
                "Bancos de Dados: SQL (mySQL), NoSQL (mongoDB, DBReaver)",
                "Desenvolvimento Server-Side: Node.js, Express.js (criação de API e tratamento de rotas)",
                "Ferramentas: Miro",
            ]
        },
        {
            title: "Desenvolvimento Mobile",
            icon: Layers,
            status: "Próximo",
            description: "Desenvolver aplicativos Mobile responsivos e interativos.",
            details: [
                "React Native",
                
            ]
        }
    ]
};

const Formation = () => {
    return (
        <section id="formacao" className="bg-gray-800 text-white py-16 px-4 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
                
                {/* Título da Seção */}
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-teal-400">
                    Minha Formação
                </h2>
                
                {/* Informações do Curso */}
                <div className="text-center mb-10 max-w-4xl mx-auto p-4 border border-gray-700 rounded-lg bg-gray-900/50">
                    <p className="text-xl font-semibold text-cyan-400">{formationData.course}</p>
                    <p className="text-lg text-gray-300">{formationData.institution}</p>
                    <p className="text-md italic text-gray-500">{formationData.duration}</p>
                </div>

                {/* Grid de Módulos */}
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
                    Grade Curricular
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {formationData.modules.map((module, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg transition duration-500 border border-teal-500 hover:border-cyan-500">
                            
                            <module.icon className="w-8 h-8 mb-4 text-teal-400" />
                            
                            <h4 className="text-xl font-semibold mb-2 text-cyan-400">
                                {module.title}
                                {module.status && (
                                    <span className="text-xs font-normal ml-2 px-2 py-1 bg-teal-600/50 rounded-full text-white">
                                        {module.status}
                                    </span>
                                )}
                            </h4>
                            
                            <p className="text-gray-400 mb-4 text-sm">{module.description}</p>
                            
                            {/* Lista de Tópicos */}
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                                {module.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="hover:text-cyan-300 transition duration-200">
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Formation;