import React from 'react';
import { Link } from 'react-router-dom';
import { TriangleAlert } from 'lucide-react'; 

// Remoção da prop { minimal } e da lógica condicional
const NotFound = () => {
    return (
        <section 
            id="not-found" 
            className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 pt-20"
        >
            <div className="text-center max-w-lg p-10 bg-gray-800 rounded-xl shadow-2xl border-t-4 border-red-500">
                
                {/* Ícone e Código de Erro */}
                <TriangleAlert className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h1 className="text-7xl font-extrabold text-red-500 mb-2">404</h1>
                
                {/* Mensagem Explicativa */}
                <h2 className="text-3xl font-bold text-gray-100 mb-4">Página Não Encontrada</h2>
                <p className="text-gray-400 mb-6">
                    A URL que você tentou acessar não corresponde a nenhuma rota mapeada no seu portfólio.
                    Isso geralmente acontece quando o endereço é digitado incorretamente.
                </p>

                {/* Botão para Voltar ao Início */}
                <Link
                    to="/" // Redireciona para a rota Home
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm 
                               text-gray-900 bg-cyan-400 hover:bg-cyan-500 transition duration-300 transform hover:scale-105"
                >
                    Voltar para o Início
                </Link>
            </div>

            <div className="mt-8 text-sm text-gray-600 p-4 border-t border-gray-800">
                <p>
                    <span className="font-semibold text-gray-500">Explicação Técnica:</span> 
                    No `App.jsx`, esta página é definida como a última `<Route path="*" />`, capturando todos os caminhos que falham nas rotas definidas.
                </p>
            </div>
        </section>
    );
};

export default NotFound;