// src/pages/Contact.jsx
import React, { useState } from 'react'; // Importar useState
import { Linkedin, Github, Mail, Smartphone } from 'lucide-react';

const Contact = () => {
  const [emailVisivel, setEmailVisivel] = useState(false); // NOVO: Estado para exibir o email
  const [copied, setCopied] = useState(false); // NOVO: Estado para feedback de cópia

  // Dados de contato, facilitando a atualização futura
  const contactLinks = [
    // ... (LinkedIn e GitHub permanecem os mesmos) ...
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/roberto-mazor/', 
      description: 'Conecte-se e veja meu histórico profissional.' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/roberto-mazor', 
      description: 'Explore meus projetos e códigos-fonte.' 
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:roberto.mazor@gmail.com', 
      value: 'roberto.mazor@gmail.com', // NOVO: Adiciona o valor do email
      description: 'Clique para ver ou copiar o endereço de e-mail.' 
    },
    { 
      name: 'WhatsApp', 
      icon: Smartphone, 
      href: 'https://wa.me/5519920061358', // Corrigido para URL universal (wa.me)
      description: 'Entre em contato direto por mensagem.' 
    },
  ];
  
  // NOVO: Função para copiar email
  const handleEmailClick = (e, emailValue) => {
    e.preventDefault(); // Impede que o link nativo seja ativado

    if (navigator.clipboard) {
        // Tenta copiar para a área de transferência
        navigator.clipboard.writeText(emailValue).then(() => {
            setEmailVisivel(true); // Mostra o email
            setCopied(true); // Define como copiado
            setTimeout(() => setCopied(false), 2000); // Remove o feedback após 2s
        }).catch(() => {
            // Se a cópia falhar (permissão), apenas mostra
            setEmailVisivel(true);
        });
    } else {
        // Solução alternativa se o navegador não suportar clipboard
        setEmailVisivel(true);
    }
  };

  return (
    <section 
      id="contato-page" 
      className="min-h-screen pt-24 pb-16 bg-gray-900 text-white flex flex-col items-center px-4"
    >
      <div className="max-w-3xl w-full text-center">
        
        {/* ... (Título e Subtítulo) ... */}

        {/* Container dos Cards de Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => {
             
             // Define o conteúdo e a ação para o CARD DE EMAIL
             if (link.name === 'Email') {
                 return (
                    <div
                        key={index}
                        onClick={(e) => handleEmailClick(e, link.value)} // Chama a função customizada
                        className="group flex flex-col items-center justify-center p-6 border border-gray-700 rounded-xl bg-gray-800 
                                   shadow-xl transition duration-300 transform hover:scale-[1.03] hover:border-cyan-500 hover:shadow-cyan-500/30 cursor-pointer" // Adiciona cursor-pointer
                    >
                       <link.icon className="w-8 h-8 mb-3 text-cyan-400 group-hover:text-teal-400 transition duration-300" />
                       
                       {/* Exibição do Conteúdo/Feedback */}
                       {copied ? (
                           <h3 className="text-xl font-semibold mb-1 text-green-400">Copiado! ✅</h3>
                       ) : emailVisivel ? (
                           <h3 className="text-xl font-semibold mb-1 text-gray-100">{link.value}</h3> // Mostra o email
                       ) : (
                           <h3 className="text-xl font-semibold mb-1 group-hover:text-cyan-400">{link.name}</h3> // Mostra o nome
                       )}
                       
                       <p className="text-sm text-gray-500">{link.description}</p>
                   </div>
                 );
             }

             // Renderiza os outros CARDS como links normais
             return (
               <a 
                 key={index}
                 href={link.href}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group flex flex-col items-center justify-center p-6 border border-gray-700 rounded-xl bg-gray-800 
                            shadow-xl transition duration-300 transform hover:scale-[1.03] hover:border-cyan-500 hover:shadow-cyan-500/30"
               >
                 <link.icon className="w-8 h-8 mb-3 text-cyan-400 group-hover:text-teal-400 transition duration-300" />
                 <h3 className="text-xl font-semibold mb-1 group-hover:text-cyan-400">{link.name}</h3>
                 <p className="text-sm text-gray-500">{link.description}</p>
               </a>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;