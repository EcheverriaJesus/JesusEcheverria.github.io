
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Experiencia from './Views/OpcionesMenu/Experiencia';
import Proyectos from './Views/OpcionesMenu/Proyectos';
import AcercaDe from './Views/OpcionesMenu/AcercaDe';
import Componentes from './Views/OpcionesMenu/Componentes';
import Cursos from './Views/OpcionesMenu/Cursos';
import Contacto from './Views/OpcionesMenu/Contacto';

function App() {
  return (
    <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-64 bg-white dark:bg-gradient-to-r from-black to-gray-900">
      <Header />

      <main>
        <div id="Experiencia" className='py-20 border-b border-gray-400 dark:border-gray-600'>
          <Experiencia />
        </div>
        <div id="Proyectos" className='py-20 border-b border-gray-400 dark:border-gray-600'>
          <Proyectos />
        </div>
        <div id="AcercaDe" className='py-20 border-b border-gray-400 dark:border-gray-600'>
          <AcercaDe />
        </div>
        <div id="Componentes" className='py-20 border-b border-gray-400 dark:border-gray-600'>
          <Componentes />
        </div>
        <div id="Cursos" className='py-20 border-b border-gray-400 dark:border-gray-600'>
          <Cursos />
        </div>
        <div id="Contacto" className='py-20 border-b border-gray-400 dark:border-gray-600'>
          <Contacto />
        </div>
      </main>
    </div>
  );
}
export default App;
