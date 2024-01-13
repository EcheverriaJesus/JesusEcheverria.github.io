import React from 'react';

const Prueba = () => {
  // Duplicar el contenido del array para que se repita
  const items = [...Array(5 * 2)].map((_, index) => (
    <div key={index} className="flex-none w-64 p-4">
      <div className="bg-gray-200 h-32 rounded-lg shadow-md">
        <p className="text-gray-700">Item {index % 5 + 1}</p>
      </div>
    </div>
  ));

  return (
    <div>
        <div className="flex overflow-x-hidden">
          <div className="flex animate-scroll">{items}</div>
        </div>
    </div>
  );
};

export default Prueba;