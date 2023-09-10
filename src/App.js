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

        {/* <div className='h-screen bg-white px-6 sm:px-8 md:px-10 lg:px-16 xl:px-24 2xl:px-64 dark:bg-gradient-to-r from-black to-gray-900'>
          <Navbar />
          <section className='flex fle-col w-full h-full lg:flex-row'>
            <div className='flex flex-col items-center justify-center w-full h-full lg:w-1/2' data-aos="fade-up-right">
              <div className='flex flex-col gap-2 text-white font-bold text-4xl font-acme lg:text-5xl'>
                <span className='text-black dark:text-white'>Hola, Soy</span>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600'>Jesús Noé Echeverria Medina</h1>
                <span className='text-4xl text-black dark:text-white lg:text-5xl'>Ingeniero en Sistemas Computacionales.</span>
              </div>

              <div className='flex w-full pt-9 gap-16'>
                <a href='https://github.com/EcheverriaJesus' target='_blank' rel='noopener noreferrer' >
                  <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                    Github
                  </button>
                </a>
                <div className='flex justify-center items-center'>
                  <a href='mailto:jesus.echeverria017@gmail.com' target="_blank" rel="noopener noreferrer">
                    <p className='text-lg text-gray-900 font-semibold hover:font-bold hover:scale-110 duration-200 dark:text-gray-300 dark:hover:text-white'>Contactame &rarr;</p>
                  </a>
                </div>
              </div>

             
              <div className='md:hidden justify-center items-center'>
              <div className='relative pt-24 w-full h-full flex justify-center items-center'>
                <div className='flex justify-center items-center w-56 h-40 rotate-2 rounded-md shadow-md shadow-blue-900 bg-gradient-to-r from-blue-800 to-gray-300'>
                  <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                    <img className="w-32 rounded-full hover:scale-150 duration-200" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" alt="" />
                  </a>
                </div>
                  <img className="absolute -bottom-14 left-8 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/React.png" alt="" />
                  <img className="absolute -bottom-8 right-6 w-12 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                  <img className="absolute top-32 -right-10 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Laravel.png" alt="" />
                  <img className="absolute top-36 right-56 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                  <img className="absolute bottom-36 -left-4 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Git.png" alt="" />
                  <img className="absolute top-4 right-2 w-14 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Java.png" alt="" />
                  <img className="absolute top-4 right-28 w-9 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
              </div>
            </div>
            </div>

            
            <div className='hidden lg:flex flex-col justify-center items-center w-1/2 h-full'>
              <div className='relative w-full h-full flex justify-center items-center'>
                <div className='flex justify-center items-center w-80 h-56 rotate-2 rounded-md shadow-md shadow-blue-900 bg-gradient-to-r from-blue-800 to-gray-300'>
                  <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                    <img className="w-48 rounded-full hover:scale-150 duration-200 hover:grayscale" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" alt="" />
                  </a>
                </div>
                  <img className="absolute top-36 right-32 w-10 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Laravel.png" alt="" />
                  <img className="absolute top-64 left-28 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                  <img className="absolute top-32 left-44 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/React.png" alt="" />
                  <img className="absolute top-40 right-56 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                  <img className="absolute bottom-36 right-56 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Git.png" alt="" />
                  <img className="absolute bottom-48 left-24 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Java.png" alt="" />
                  <img className="absolute bottom-64 right-28 w-12 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
                
              </div>
            </div>

          </section>
        </div> */}


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
