
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
      <div id="header" className='margen'>
        <Header />
      </div>
      <div className='pb-10'>
        <DescriptionEceprience/>
      </div>
      <main className='margen space-y-10 pb-24'>
        <div id="Experiencia">
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
