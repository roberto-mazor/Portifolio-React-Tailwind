// src/pages/Experience.jsx
import React from 'react';
import { Briefcase } from 'lucide-react';

const experienceData = [
    {
        title: " Analista COP Rede I",
        company: "Claro S.A.",
        duration: "Mar 2019 – Ago 2023",
        description: [
            "Monitoramento ativo da rede HFC em 26 cidades da região metropolitana de São Paulo.",
            "Análise preventiva e corretiva de infraestrutura (Data Center, DHCP, DNS, tráfego).",
            "Interpretação de gráficos Nagios para identificar falhas críticas",
            "Garantia de indicadores de qualidade e cumprimento de SLAs.",
            "Ferramentas: Nagios, Visum, Atlas, OptNet, AutoCAD, Qualinet, NetSms, New Monitor.",
            "Acionamento logístico e gerenciamento de equipes externas para resolução rápida",
            "Leitura e interpretação de projetos coaxiais (AutoCAD) para localização de falhas.",
            "Interface com NOC Brasil, Data Center e COP para solução de eventos massivos.",
            "Atualização de projetos em conjunto com equipe de projetos e gestores",
            "Treinamento de novos colaboradores",
        ],
        type: "Profissional",
    },
    {
        title: "Estagiário de Suporte T.I.",
        company: "SEDUC Americana - Secretaria da Educação",
        duration: "Nov 2017 – Nov 2018",
        description: [
            "Diagnóstico e resolução de problemas de software e hardware, fornecendo suporte a aplicativos.",
            "Análise e desenvolvimento de sistemas, websites e testes/qualidade de software.",
            "Análise de topologias de rede da instituição.",
        ],
        type: "Desenvolvimento",
    },
    {
    "title": "Assistente Administrativo",
    "company": "Auto Escola Cillos",
    "duration": "Nov 2013 – Nov 2015",
    "description": [
        "Responsável por rotinas Fiscais e Financeiras, incluindo a emissão de Notas Fiscais de Serviço Eletrônica (NFSE) e fechamento financeiro mensal.",
        "Contabilização de entradas de contratos e declaração de vendas.",
        "Prospecção de clientes empresariais para serviços externos, realizando orçamentos, agendamentos e concretização de vendas.",
        "Atendimento e suporte contínuo a clientes e professores.",
        "Gerenciamento do controle de estoque de materiais, coordenação de processos de alunos e organização de arquivos.",
        "Realização de cotações de serviços, materiais e pagamentos. (compras e contas)."
    ],
    "type": "Profissional"
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
                <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-cyan-500">
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