
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Experiencia from './Views/OpcionesMenu/Experiencia';
import Proyectos from './Views/OpcionesMenu/Proyectos';
import Componentes from './Views/OpcionesMenu/Componentes';
import Cursos from './Views/OpcionesMenu/Cursos';
import FooterComponent from './Components/FooterComponent';
import DescriptionEceprience from './Components/DescriptionEceprience';

function App() {
  return (
    <div className="bg-white dark:bg-[#002733]">
      <div id="header" className='margen relative isolate overflow-hidden'>
        <div className="absolute inset-0 -z-10 bg-gray-300 dark:bg-[#201734] opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-[#002733]"></div>
        <Header />
      </div>
      <div id="Experiencia" className='pb-10'>
        <DescriptionEceprience />
      </div>
      <main className='margen space-y-10 pb-24'>
        <div>
          <Experiencia />
        </div>
        <div id="Proyectos">
          <Proyectos />
        </div>
        <div id="Componentes">
          <Componentes />
        </div>
        <div id="Cursos">
          <Cursos />
        </div>
      </main>
      <div>
        <FooterComponent />
      </div>
    </div>

  );
}
export default App;
