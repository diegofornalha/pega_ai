import React from 'react';

const CompraPixPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center space-y-6 p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Compra via PIX</h1>
        <p className="text-gray-600">Clique no botão abaixo para acessar a plataforma Transak e realizar sua compra via PIX.</p>
      </div>
      <a 
        href="https://global.transak.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center mt-4 p-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        <span className="mr-2">Acesse Transak</span>
        {/* Adicione um ícone adequado aqui, se desejar. Por exemplo: */}
        {/* <YourIconComponent /> */}
      </a>
    </div>
  );
};

export default CompraPixPage;
