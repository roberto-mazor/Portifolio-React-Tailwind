// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Componentes Layout
import Menu from './components/Menu';
import Footer from './components/Footer';

// Seções/Componentes
import HeroSection from './components/HeroSection';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Formation from './pages/Formation';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Componente que agrupa todas as Seções da Home
const HomeSections = () => (
    <>
      <HeroSection /> 
      <AboutMe />
      <Projects />
      <Formation />
      <Experience />
      <Contact />
    </>
);

// ... (Mantenha o componente RedirectToSection do passo anterior se quiser rotas amigáveis) ...

// ... (Mantenha o componente NotFound do passo anterior) ...

function App() {
  return (
    // Certifique-se que o App.jsx use o esquema de navegação por âncora
    <div className="bg-gray-900 font-sans min-h-screen">
      <Menu /> 
      
      <main>
        {/* Renderiza todas as seções na rota principal (HomeSections) */}
        <HomeSections /> 
        
        {/* Se você ainda quiser rotas amigáveis (ex: /projetos) redirecionando:
        <Routes>
          <Route path="/" element={<HomeSections />} />
          <Route path="/projetos" element={<RedirectToSection hash="#projetos" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        */}
      </main>

      <Footer />
    </div>
  );
}

export default App;