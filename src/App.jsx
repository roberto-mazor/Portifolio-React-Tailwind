// src/App.jsx (Versão Corrigida e Completa)
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Componentes de Layout e Seções
import Menu from './components/Menu';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Projects from './pages/Projects';
import Contact from './pages/Contact'; 
import AboutMe from './pages/AboutMe';
import Formation from './pages/Formation';
import Experience from './pages/Experience';
import NotFound from './pages/NotFound';

// ... (HomePage e AboutMePage permanecem os mesmos) ...

// Componente para a Página Inicial (Home)
const HomePage = () => (
    <>
        <HeroSection /> 
        <Projects /> 
    </>
);

// Componente para a Página Sobre Mim (Agrupamento)
const AboutMePage = () => (
    <>
        <AboutMe />
        <Formation />
        <Experience />
    </>
);


function App() {
    const location = useLocation();

    // Efeito 1: Forçar o scroll para o topo se não houver hash
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]); // Executa apenas quando a ROTA principal (pathname) muda

    // Efeito 2: ANCORAGEM (Correção do problema de navegação entre páginas)
    useEffect(() => {
        // Se houver um hash (ex: #projetos)
        if (location.hash) {
            const targetId = location.hash.substring(1); // Remove o '#'
            const targetElement = document.getElementById(targetId);
            
            // Só tenta rolar se o elemento estiver presente (ou seja, se já carregou)
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location.hash, location.pathname]); // Executa quando a rota OU o hash muda

    return (
        <div className="bg-gray-900 font-sans min-h-screen">
            <Menu /> 
            
            <main className="pt-16">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sobre-mim" element={<AboutMePage />} />
                    <Route path="/contato" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;