// src/pages/Formation.jsx
import React from 'react';
import { BookOpen, Code, Layers, Award, CheckCircle2 } from 'lucide-react'; 

const formationData = {
    course: "Técnico em Programação Full Stack",
    institution: "Senac Americana",
    duration: "Início: 2025 – Em andamento – Conclusão 09/2026",
    modules: [
        {
            title: "Gestão e Planejamento",
            icon: BookOpen,
            details: [
                "Gestão de projetos (Kanban, Mockups, Briefing)",
                "Documentação (Diagrama de requisitos, Diagrama caso de uso)",
            ]
        },
        {
            title: "Front-End Development",
            icon: Code,
            status: "Concluído",
            details: [
                "Web Base: HTML, CSS, JavaScript, Bootstrap",
                "Ambiente: XAMPP, WordPress, Instalação Linux (VM), Servidor Apache",
                "Ferramentas: Vercel, Figma, React",
            ]
        },
        {
            title: "Back-End e Bancos de Dados",
            icon: Layers,
            details: [
                "Lógica de Programação (Portugol e JavaScript)",
                "Bancos de Dados: SQL (mySQL), NoSQL (mongoDB, DBReaver)",
                "Desenvolvimento Server-Side: Node.js, Express.js (APIs e Rotas)",
                "Ferramentas: Miro",
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
                
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-teal-400">
                    Minha Formação
                </h2>
                
                <div className="text-center mb-12 max-w-4xl mx-auto p-6 border border-gray-700 rounded-lg bg-gray-900/50">
                    <p className="text-2xl font-semibold text-cyan-400">{formationData.course}</p>
                    <p className="text-lg text-gray-300">{formationData.institution}</p>
                    <p className="text-sm italic text-gray-500 mt-2">{formationData.duration}</p>
                </div>

                {/* Grade do Senac */}
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Code className="text-teal-400" /> Grade Curricular do Curso
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    {formationData.modules.map((module, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-teal-500 transition-colors shadow-lg">
                            <h4 className="text-xl font-bold mb-4 text-cyan-400 flex items-center justify-between">
                                {module.title}
                                {module.status && <span className="text-[10px] bg-teal-600 px-2 py-1 rounded text-white uppercase tracking-wider">OK</span>}
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {module.details.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-teal-500 mt-1">▹</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Seção de Cursos Complementares */}
                <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-700 shadow-2xl">
                    <h3 className="text-2xl font-bold mb-8 text-teal-400 flex items-center gap-2">
                        <Award className="w-6 h-6" /> Cursos Complementares
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {formationData.complementary.map((curso, index) => (
                            <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-transparent hover:border-gray-600 transition-all group">
                                <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-gray-200 font-medium leading-tight">{curso.title}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        <span className="text-teal-600 font-bold">{curso.year}</span> — {curso.org}
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