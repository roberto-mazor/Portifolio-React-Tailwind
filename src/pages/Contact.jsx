// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        // O ID é crucial para a navegação por âncora (#contato)
        <section 
            id="contato" 
            className="min-h-screen bg-gray-900 text-white pt-16 py-12 px-4 sm:px-8 lg:px-12 flex items-center justify-center"
        >
            <div className="max-w-xl mx-auto text-center p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <h2 className="text-4xl font-extrabold mb-4 text-teal-400">
                    Entre em Contato
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                    Vamos discutir seu próximo projeto ou oportunidade de carreira!
                </p>
                {/* Aqui entrará o formulário ou links */}
            </div>
        </section>
    );
};

// ESSA LINHA É A SOLUÇÃO DO SEU ERRO
export default Contact;