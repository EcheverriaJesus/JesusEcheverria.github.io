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
/* import Proyect3D from './Views/Proyect3D';
import { Routes, Route } from 'react-router-dom'; */

function App() {
  return (
    <div className="">
      <header className="h-screen fondo-header1 lg:bg-white">
        <NavBar />
        <section id='home' className="flex w-full h-auto px-6 sm:h-4/6 pt-6 sm:pt-2 md:px-24 grid-rows-2 fondo_header">
          <section className="flex pt-20 w-full sm:py-24 md:w-2/3 flex-col justify-center items-center gap-4 md:pt-40 aparecer">
            <h2 className="text-center text-2xl lg:text-3xl text-white font-bold letter font-LilitaOne tracking-widest">HOLA, SOY JESÚS NOÉ ECHEVERRIA MEDINA</h2>
            <div>
              <h2 className="text-center text-xl lg:text-2xl text-yellow-300 font-semibold font-LilitaOne tracking-widest">INGENIERO EN SISTEMAS COMPUTACIONALES!</h2>
            </div>

            <article className="flex gap-5 pt-5">
              <ButtonIcon url="https://github.com/EcheverriaJesus" path="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" size="w-9" />
              <ButtonIcon url="https://www.linkedin.com/in/jesus-echeverria/" path="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" size="w-9" />
            </article>

          </section>
          {/* Card in the header */}
          <section className="hidden lg:flex w-1/3 pt-16 justify-center hover:scale-110 ease-in duration-300">
            <Card_CV />
          </section>
        </section>

        <section className='flex justify-around w-full py-6 px-8 md:pt-5 lg:px-16 lg:pt-16 aparecer'>
          {[
            "/JesusEcheverria.github.io/Images/Blender.png",
            "/JesusEcheverria.github.io/Images/C.png",
            "/JesusEcheverria.github.io/Images/Git.png",
            "/JesusEcheverria.github.io/Images/Laravel.png",
            "/JesusEcheverria.github.io/Images/Java.png"
          ].map((image, index) => (
            <Logo_Tecnology key={index} image={image} alt="" />
          ))}
        </section>

        {/* Card in the header for mobile */}
        <section className="flex w-full justify-center sm:hidden">
          <Card_CV />
        </section>
      </header>

      <main className=''>
        <section className="hidden sm:flex py-5 justify-center degradado w-full lg:hidden">
          <Card_CV />
        </section>

        <div id="about-me" className='px-8 md:px-12 lg:px-24 pt-8' data-aos="fade-right">
          <About_Me />
        </div>

        <div id="experience" className='pt-8'>
          <Experience />
        </div>

        {/* <Routes>
          <Route path='/Experi' element={<Proyect3D />} />
        </Routes> */}

        <div id="Activities" className='pt-8'>
          <OtherActivities />
        </div>

      </main>
      <div id="footer" className='pt-8' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
        <Footer />
      </div>
    </div>
  );
}

export default App;
