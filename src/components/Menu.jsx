// src/components/Menu.jsx

// Use somente useState e o Link para o Logo, ou remova se for usar apenas <a>

import React, { useState } from 'react';
// Não precisamos do Link e useLocation para os links de navegação principais
import { Link } from 'react-router-dom'; // Mantido apenas para o Logo

function Menu() {
 const [menuAberto, setMenuAberto] = useState(false);
 
 const alternarMenu = () => setMenuAberto(!menuAberto);

 const fecharMenu = () => {
  setMenuAberto(false);
  // Adiciona um pequeno atraso para que o scroll não seja instantâneo (opcional)
  setTimeout(() => {
   window.scrollTo(0, 0); 
  }, 100); 
 };
 
 // Lista de links (correto)
 const navLinks = [
  { href: "#inicio", label: "Início" }, 
  { href: "#sobre-mim", label: "Sobre Mim" },
  { href: "#projetos", label: "Projetos" },
  { href: "#formacao", label: "Formação" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
 ];

 // Função para renderizar links (correto)
 const renderLinks = (isMobile = false) => (
  <ul className={isMobile ? 'flex flex-col' : 'flex space-x-6'}>
   {navLinks.map(link => (
    <li key={link.href}>
     <a // Voltamos a usar a tag <a>
      href={link.href} 
      onClick={fecharMenu}
      className={`
       font-semibold transition duration-300 hover:text-cyan-400 
       ${isMobile ? 'text-lg text-gray-200 hover:text-teal-400' : 'text-gray-300'}
      `}
     >
      {link.label}
     </a>
    </li>
   ))}
  </ul>
 );

 return (
  <>
   <header className="fixed top-0 left-0 w-full z-20 bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700">
    <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
     
     {/* Logo/Nome do Portfólio (INÍCIO) */}
     <div className="text-2xl font-extrabold tracking-wider">
      {/* CORREÇÃO: bg-linear-to-r não é uma classe Tailwind. Deve ser bg-gradient-to-r */}
      <a href="#inicio" className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-500">
       Roberto Mazor <span className="hidden sm:inline"> | Full-Stack</span>
      </a>
     </div>
     
     {/* 1. MENU DESKTOP (Inserido aqui) */}
     <nav className="hidden sm:flex space-x-6">
      {renderLinks(false)}
     </nav>
     {/* 2. BOTÃO DO MENU MOBILE (Inserido aqui) */}
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
    
    {/* 3. MENU MOBILE OVERLAY (Inserido aqui) */}
    <nav 
     id="mobile-menu-items"
     // A classe 'mobile-menu-overlay' está no seu index.css
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