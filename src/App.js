/* eslint-disable react/jsx-pascal-case */
import './App.css';
import React from 'react';
import Logo_Tecnology from './Components/Logo_Tecnology';
import NavBar from './Components/NavBar';
import ButtonIcon from './Components/ButtonIcon';
import Card_CV from './Components/Card_CV';
import About_Me from './Components/About_Me';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import OtherActivities from './Components/OtherActivities';
import { UrlImg } from './Variables/Variables';
/* import Navbar from './Documents/NavBar'; */


function App() {
  return (
    <div className="">
      <header className="h-auto fondo-H lg:bg-white lg:h-screen">
        <NavBar />
        {/* <nav className='flex flex-col items-start gap-3 md:flex-row'>
          <li className='text-white font-bold text-2xl list-none'>
            <a href='#' className='flex gap-2'>
            <p className='first-letter:text-3xl first-letter:text-blue-400'>Jesus</p>
            <p className='first-letter:text-3xl first-letter:text-blue-400'>Echeverria</p>
            </a>
          </li>
          <li className='text-white font-semibold text-normal list-none'>
            <a href='#' className=''>
              Experiencia
            </a>
          </li>
          <li className='text-white font-semibold text-normal list-none'>
            <a href='#' className=''>
              Proyectos
            </a>
          </li>
          <li className='text-white font-semibold text-normal list-none'>
            <a href='#' className=''>
              Acerca de
            </a>
          </li>
          <li className='text-white font-semibold text-normal list-none'>
            <a href='#' className=''>
              Componentes
            </a>
          </li>
          <li className='text-white font-semibold text-normal list-none'>
            <a href='#' className=''>
              Cursos
            </a>
          </li>
          <li className='text-white font-semibold text-normal list-none'>
            <a href='#' className=''>
              Contacto
            </a>
          </li>
         
         
           <div className='flex gap-2'>
            <li className='list-none hover:scale-125 duration-200'>
              <a href='#'>
              <svg viewBox="0 0 24 24" className="feather feather-moon w-5 stroke-white stroke-2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              </a>
            </li>
            <li className='list-none hover:scale-125 duration-200'>
              <a href='#'>
              <svg viewBox="0 0 24 24" className="feather feather-moon w-5 stroke-white stroke-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </li>
            <li className='list-none hover:scale-125 duration-200'>
              <a href='#'>
              <svg viewBox="0 0 24 24" className="feather feather-moon w-5 stroke-white stroke-2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </li>
            <li className='list-none hover:scale-125 duration-200'>
              <a href='#'>
              <svg className='w-5 stroke-white stroke-2' viewBox="0 0 24 24" stroke-linecap="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </li>
            <li className='list-none hover:scale-125 duration-200'>
              <a href='#'>
              <svg viewBox="0 0 24 24" className="feather feather-moon w-5 stroke-white stroke-2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </li>
            <li className='list-none hover:scale-125 duration-200'>
              <a href='#'>
              <svg viewBox="0 0 24 24" className="feather feather-moon w-5 stroke-white stroke-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </li>
           </div>
        </nav> */}
        <section id='home' className="flex w-full h-auto px-6 sm:h-4/6 pt-6 sm:pt-2 md:px-24 grid-rows-2 fondo_header">
          <section className="flex pt-20 w-full sm:py-24 md:w-2/3 flex-col justify-center items-center gap-4 md:pt-40 aparecer">
            <h2 className="text-center text-2xl lg:text-2xl text-white font-bold tracking-widest">HOLA, SOY JESÚS NOÉ ECHEVERRIA MEDINA</h2>
            <div>
              <h2 className="text-center text-xl lg:text-xl text-yellow-300 font-semibold LilitaOne tracking-widest">INGENIERO EN SISTEMAS COMPUTACIONALES!</h2>
            </div>

            <article className="flex gap-5 pt-5">
              <ButtonIcon url="https://github.com/EcheverriaJesus" path="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" size="w-9" fill="#ffffff" />
              <ButtonIcon url="https://www.linkedin.com/in/jesus-echeverria/" path="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" size="w-9" fill="#ffffff" />
            </article>
          </section>

          {/* Card in the header */}
          <section className="hidden lg:flex w-1/3 pt-16 justify-center hover:scale-110 ease-in duration-300">
            <Card_CV />
          </section>
        </section>

        <section className='flex justify-around w-full py-6 px-8 md:pt-5 lg:px-16 lg:pt-16 aparecer'>
          {[
            "Blender.png",
            "C.png",
            "Git.png",
            "Laravel.png",
            "Java.png"
          ].map((image, index) => (
            <Logo_Tecnology key={index} image={UrlImg + image} alt="" />
          ))}
        </section>

        {/* Card in the header for mobile */}
        <section className="flex w-full justify-center pb-5 sm:hidden">
          <Card_CV />
        </section>
      </header>

      <main className='dark:bg-gray-900 sm:px-5 md:px-4 lg:px-24 duration-1000'>
        <section className="hidden sm:flex py-5 justify-center degradado w-full lg:hidden">
          <Card_CV />
        </section>

        <div id="about-me" className='px-8  md:px-12 lg:px-24 py-24' data-aos="fade-right">
          <About_Me />
        </div>

        <div id="experience" className='pt-16'>
          <Experience />
        </div>

        <div id="Activities" className='pb-20 py-24'>
          <OtherActivities />
        </div>
      </main>

      {/* <div className='flex justify-center items-center '>
        <div className='group relative flex justify-center items-center'> 
          <div className='absolute w-32 h-32 bg-gradient-to-r from-cyan-900 to-purple-500 rounded-full ann'></div>
          <div className='absolute w-52 h-52 bg-gradient-to-r from-cyan-900 to-purple-500 rounded-full ann'></div>
          <div className='w-72 h-72 bg-gradient-to-r from-cyan-900 to-purple-500 rounded-full ann'></div>
        </div>
      </div> */}

      <div id="footer" className='' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
        <Footer />
      </div>

    </div>
  );
}
export default App;
