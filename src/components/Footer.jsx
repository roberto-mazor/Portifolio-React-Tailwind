// src/components/Footer.jsx
import React, { useState } from 'react'; // IMPORTAR useState
import { Linkedin, Github, Mail } from 'lucide-react'; 
import { Link } from 'react-router-dom';

const Footer = () => {
    const [copied, setCopied] = useState(false); // NOVO: Estado para feedback de cópia
    const EMAIL_ADDRESS = 'roberto.mazor@gmail.com'; // Constante para o email

    // NOVO: Função para copiar o email para a área de transferência
    const handleEmailClick = (e) => {
        e.preventDefault(); 
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(EMAIL_ADDRESS).then(() => {
                setCopied(true);
                // Reseta o feedback após 2 segundos
                setTimeout(() => setCopied(false), 2000); 
            }).catch(() => {
                // Em caso de falha na cópia, não faz nada
            });
        }
    };

    return (
        <footer className="bg-gray-800 text-gray-400 text-center p-8 border-t border-gray-700">
            <div className="max-w-4xl mx-auto">
                
                {/* Links de Mídia Social/Contato */}
                <div className="flex justify-center space-x-6 mb-6">
                    
                    {/* LinkedIn */}
                    <a 
                        href="https://www.linkedin.com/in/roberto-mazor/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-cyan-400 transition"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    
                    {/* GitHub */}
                    <a 
                        href="https://github.com/roberto-mazor" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-cyan-400 transition"
                        title="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>

                    {/* E-mail (AGORA COM LÓGICA DE CÓPIA) */}
                    <a 
                        // Usamos o href com mailto como fallback e para acessibilidade,
                        // mas o onClick vai prevenir a ação e executar a cópia.
                        href={`mailto:${EMAIL_ADDRESS}`} 
                        onClick={handleEmailClick} // NOVO: Chama a função de cópia
                        className={`
                            text-gray-400 hover:text-cyan-400 transition cursor-pointer 
                            ${copied ? 'text-green-400' : ''} 
                        `}
                        title={copied ? 'Email Copiado!' : 'Clique para Copiar o Email'} // Feedback visual no tooltip
                    >
                        <Mail className="w-6 h-6" />
                        
                        {/* NOVO: Feedback visual ao lado do ícone, opcionalmente */}
                        {copied && <span className="text-sm font-semibold ml-2">Copiado!</span>}
                    </a>
                </div>

                {/* Link para a Página de Contato */}
                <Link 
                    to="/contato" 
                    className="text-teal-400 hover:text-teal-300 font-semibold transition duration-300 block mb-4"
                >
                    Mais Opções de Contato
                </Link>

                {/* Copyright */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Roberto Mazor | Desenvolvedor Full-Stack.
                </p>
            </div>
        </footer>
    );
};

export default Footer;