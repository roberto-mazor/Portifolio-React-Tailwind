// src/pages/Formation.jsx
import React from 'react';
import { BookOpen, Code, Layers, Award, CheckCircle2 } from 'lucide-react'; 

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
                "Desenvolvimento Server-Side: Node.js, Express.js (API e rotas)",
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
    ],
    complementary: [
        { year: "2024", title: "Skills para liderar", org: "SEBRAE" },
        { year: "2021", title: "Certificação em Liderança, Capacidade de Aprender e Resiliência", org: "PUCRS" },
        { year: "2019", title: "Boas práticas em desenvolvimento de software", org: "TIM Tec" },
        { year: "2019", title: "Gestão de Projetos", org: "FGV Online" },
        { year: "2019", title: "Tecnologia da Informação nos negócios", org: "Unieducar" },
        { year: "2019", title: "Processo de desenvolvimento de software", org: "Fundação Bradesco" },
        { year: "2008", title: "Administração tecnológica (Microsoft Office)", org: "Euro Data" },
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
                
                {/* Informações do Curso Principal */}
                <div className="text-center mb-10 max-w-4xl mx-auto p-4 border border-gray-700 rounded-lg bg-gray-900/50">
                    <p className="text-xl font-semibold text-cyan-400">{formationData.course}</p>
                    <p className="text-lg text-gray-300">{formationData.institution}</p>
                    <p className="text-md italic text-gray-500">{formationData.duration}</p>
                </div>

                {/* Grid de Módulos (Senac) */}
                <h3 className="text-2xl font-bold text-center mb-8 text-gray-300">
                    Grade Curricular
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {formationData.modules.map((module, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-xl shadow-lg transition duration-500 border border-teal-500 hover:border-cyan-500">
                            <module.icon className="w-8 h-8 mb-4 text-teal-400" />
                            <h4 className="text-lg font-semibold mb-2 text-cyan-400">
                                {module.title}
                                {module.status && (
                                    <div className="mt-1">
                                        <span className="text-[10px] font-bold px-2 py-0.5 bg-teal-600/50 rounded-full text-white uppercase tracking-wider">
                                            {module.status}
                                        </span>
                                    </div>
                                )}
                            </h4>
                            <p className="text-gray-400 mb-4 text-xs italic leading-tight">{module.description}</p>
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

                {/* Seção de Cursos Complementares */}
                <div className="mt-20 pt-12 border-t border-gray-700">
                    <h3 className="text-2xl font-bold text-center mb-10 text-teal-400 flex items-center justify-center gap-3">
                        <Award className="w-8 h-8" /> Cursos Complementares
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                        {formationData.complementary.map((curso, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-900/40 border border-gray-700/50 hover:border-cyan-500/50 transition-all group">
                                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-gray-200 font-medium leading-snug">{curso.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        <span className="text-teal-500 font-semibold">{curso.year}</span> — {curso.org}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Formation;