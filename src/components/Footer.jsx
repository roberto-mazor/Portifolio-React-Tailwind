// src/components/Footer.jsx

import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-gray-400 text-center p-4 border-t border-gray-700 mt-12">
        <p>&copy; {new Date().getFullYear()} Roberto Mazor | Desenvolvedor Full-Stack.</p>
        {/* adicionar um link para o seu LinkedIn aqui, se quiser */}
    </footer>
);

export default Footer;