// src/components/Menu.jsx

import React, { useState } from 'react';
// Importe useNavigate e Link do React Router DOM
import { Link, useNavigate } from 'react-router-dom'; 

function Menu() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate(); // NOVO: Inicializa o navigate
  
  const alternarMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false);

  // ... (navLinks e renderLinks permanecem os mesmos, mas vamos refatorar o handler)

  // NOVO: Função auxiliar para lidar com a navegação por âncora
  const handleAnchorClick = (e, href) => {
    // Se for um link de âncora (começa com # ou /#)
    if (href.startsWith('#') || href.startsWith('/#')) {
        e.preventDefault(); // Impede a ação padrão imediata do Link
        fecharMenu();

        // Usa navigate para forçar a mudança de rota E incluir a âncora na URL.
        // O scroll em si será tratado pelo useEffect no App.jsx após a navegação.
        navigate(href); 
    }
    // Para links que são rotas (/sobre-mim, /contato), o Link já faz a navegação
    fecharMenu();
  };


  const navLinks = [
    { to: "/#inicio", label: "Início", type: 'anchor' }, // Alteramos para âncora para forçar o scroll
    { to: "/#projetos", label: "Projetos", type: 'anchor' }, 
    { to: "/sobre-mim", label: "Sobre Mim", type: 'link' },
    { to: "/contato", label: "Contato", type: 'link' }, 
  ];

  const renderLinks = (isMobile = false) => (
    <ul className={isMobile ? 'flex flex-col' : 'flex space-x-6'}>
      {navLinks.map(link => (
        <li key={link.to}>
            <Link
                to={link.to} 
                // Chamamos o handler para todos os links, ele decide se deve usar navigate ou deixar o Link fazer o trabalho
                onClick={(e) => handleAnchorClick(e, link.to)} 
                className={`
                    font-semibold transition duration-300 hover:text-cyan-400 
                    ${isMobile ? 'text-lg text-gray-200 hover:text-teal-400' : 'text-gray-300'}
                `}
            >
                {link.label}
            </Link>
        </li>
      ))}
    </ul>
  );

return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700">
        
        {/* Container Principal do Cabeçalho */}
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
          
          {/* 1. LOGO/NOME DO PORTFÓLIO (INSERIDO AQUI) */}
          <div className="text-2xl font-extrabold tracking-wider">
            <Link 
                to="/#inicio"
                onClick={(e) => handleAnchorClick(e, '/#inicio')} 
                className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-500"
            >
                Roberto Mazor <span className="hidden sm:inline"> | Full-Stack</span>
            </Link>
          </div>
          
          {/* 2. MENU DESKTOP (Aparece em telas SM e maiores) */}
          <nav className="hidden sm:flex space-x-6">
            {renderLinks(false)}
          </nav>

          {/* 3. BOTÃO DO MENU MOBILE (Aparece somente em telas menores que SM) */}
          <button 
            id="menu-toggle" 
            onClick={alternarMenu} 
            className="sm:hidden text-2xl p-2 rounded-md hover:bg-gray-700 text-cyan-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-150"
            aria-expanded={menuAberto}
            aria-controls="mobile-menu-items"
          >
            {menuAberto ? '✕' : '☰'}
          </button>
          
        </div>
        
        {/* MENU MOBILE OVERLAY (Fora do container principal, mas dentro do header) */}
        <nav 
          id="mobile-menu-items"
          className={`sm:hidden mobile-menu-overlay ${menuAberto ? 'is-open' : ''}`}
          aria-hidden={!menuAberto}
        >
          {renderLinks(true)}
        </nav>
      </header>
    </>
  );
}

export default Menu;