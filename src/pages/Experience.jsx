// src/pages/Experience.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const experienceData = [
    {
        title: "Nome do Cargo Atual/Recente",
        company: "Nome da Empresa",
        duration: "Jan 2024 – Presente",
        description: [
            "Responsável pelo desenvolvimento e manutenção de componentes front-end usando React e Tailwind CSS.",
            "Colaboração em equipes ágeis (Scrum) para entrega de novas funcionalidades.",
            "Integração com APIs RESTful construídas em Node.js.",
        ],
        type: "Profissional",
    },
    {
        title: "Estágio/Projeto Pessoal de Impacto",
        company: "Projeto X / Empresa Y",
        duration: "Jun 2023 – Dez 2023",
        description: [
            "Criação de um sistema de gestão de estoque do zero, utilizando Node.js, Express e PostgreSQL.",
            "Otimização de consultas ao banco de dados, reduzindo o tempo de resposta em 30%.",
        ],
        type: "Desenvolvimento",
    },
    // Adicione mais experiências aqui...
];

const Experience = () => {
    return (
        // O ID é crucial para a navegação por âncora (#experiencia)
        <section 
            id="experiencia" 
            className="min-h-screen bg-gray-900 text-white pt-16 py-12 px-4 sm:px-8 lg:px-12"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
                    💼 Experiência Profissional
                </h2>

                <div className="relative border-l border-gray-700 space-y-12 ml-4 md:ml-20">
                    {experienceData.map((item, index) => (
                        <div key={index} className="mb-8 flex items-start">
                            {/* Ícone e Linha do Tempo */}
                            <div className="absolute w-6 h-6 bg-cyan-500 rounded-full mt-1.5 -left-3 border-4 border-gray-900 flex items-center justify-center shadow-lg">
                                <Briefcase className="w-4 h-4 text-gray-900" />
                            </div>
                            
                            {/* Conteúdo do Card */}
                            <div className="flex-1 ml-10 p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-cyan-500/30 transition duration-300 border border-gray-700">
                                <h3 className="text-2xl font-semibold mb-1 text-gray-100">{item.title}</h3>
                                <p className="text-lg font-medium text-teal-400 mb-2">{item.company}</p>
                                <p className="text-sm italic text-gray-500 mb-4">{item.duration}</p>
                                
                                <ul className="list-disc list-inside space-y-2 text-gray-400">
                                    {item.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Chamada para o LinkedIn */}
                <div className="text-center mt-16">
                    <a
                        href="https://www.linkedin.com/in/roberto-mazor/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 text-lg font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 transition duration-300 shadow-md shadow-indigo-500/50 transform hover:scale-105"
                    >
                        Ver Perfil Completo no LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;