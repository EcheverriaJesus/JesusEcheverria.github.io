import './App.css';
import React from 'react';
import Header from './Components/Header';
import Experiencia from './Views/OpcionesMenu/Experiencia';
import Proyectos from './Views/OpcionesMenu/Proyectos';
import Componentes from './Views/OpcionesMenu/Componentes';
import Cursos from './Views/OpcionesMenu/Cursos';
import FooterComponent from './Components/FooterComponent';
import DescriptionEceprience from './Components/DescriptionEceprience';
import Prueba from './Components/Prueba';

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
        <div><Prueba />
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
 {/*      <div class='flex justify-center w-full'>
        <div class='flex flex-col items-center bg-white w-72 h-auto pt-5 pb-7 border border-gray-200 rounded-lg space-y-8'>
          <section class='flex flex-col text-center space-y-1'>
            <h2 class='text-2xl font-bold tracking-tight text-gray-900'>Title of your Card</h2>
            <p class="text-slate-500 text-sm">Subtitle on your Card</p>
          </section>
          <section class='space-y-2'>
            <div class="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-500 text-sm">Name Product</span>
            </div>
            <div class="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-500 text-sm">Name Product</span>
            </div>
            <div class="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              <span class="text-slate-500 text-sm">Name Product</span>
            </div>
          </section>
          <section class='flex w-full flex-col space-y-2 px-9'>
            <button class="py-3 font-medium tracking-wide capitalize transition-colors duration-300 transform bg-gray-100 rounded-md hover:bg-gray-200 text-sm text-gray-600">
              First Buttom
            </button>
            <button class="py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600">
              Accept
            </button>
          </section>
        </div>
      </div> */}
      <div>
        <FooterComponent />
      </div>
    </div>

  );
}
export default App;
