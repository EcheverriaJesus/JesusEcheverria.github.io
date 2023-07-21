import React from 'react'
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom'

export default function InformationProyect(props) {
  return (
    <div className='flex flex-col h-screen w-full bg-[#1f2937] justify-center pt-10 md:px-24 md:pt-5 md:justify-start'>
      <Link to="/" className='flex items-center w-auto h-16'>
        <img alt="" className="mr-3 h-8 sm:h-9 rounded-full" src="/JesusEcheverria.github.io/Images/Perfil.jpg" />
        <span className="text-3xl font-bold text-white">
          Jesus Echeverria
        </span>
      </Link>

      <div className='flex justify-center items-center h-full w-full'>


        <section className='flex flex-col justify-between items-center w-full md:flex-row'>
          <div className='w-full text-justify space-y-3 md:w-5/12' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
            <h3 className='text-center font-bold text-3xl md:text-5xl text-white md:text-justify'>Objectos 3D</h3>
            <h3 className='text-base text-justify font-semibold text-orange-400'>Aprendí a utilizar blender por pasatiempo. Me gusta la tecnologia 3D asi como las cosas que se pueden crear en ella.</h3>
            <p className='font-normal text-sm text-justify text-slate-300'>Gracias a esto, he adquirido experiencia para lograr modelar Objectos sencillos, ademas tengo los conocimientos básicos de renderizar texturas en mis objectos asi como la luz y movimiento de camaras que ofrece blender.</p>
            {/* <a href='https://www.canva.com/design/DAFi5arjYKY/WBn-utXa8bTUS6ieFLPzlg/view?utm_content=DAFi5arjYKY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank" rel="noopener noreferrer">
              <p className='font-normal text-sm text-blue-500 pt-4'>Ver Material...</p>
            </a> */}
          </div>
          <div className='w-full h-full pt-5 md:w-6/12 md:pt-0' data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="900">
            <img className="w-full h-auto md:h-36 lg:h-96" src="/JesusEcheverria.github.io/Images/CursoL.jpg" alt="" />
          </div>
        </section>
      </div>

      {/* <div className='flex h-full w-full justify-center items-center'>
      
         <div className='w-full'>
          <p className='font-normal text-sm text-justify text-red-500'>Se sigue trabajando en estos apartados...</p>
          <h2 className='font-bold text-3xl md:text-5xl text-white'>Objectos 3D</h2>
          <h4 className='text-base text-justify font-semibold text-yellow-200'>Aprendí a utilizar blender por pasatiempo. Me gusta la tecnologia 3D.</h4>
          <p className='font-normal text-sm text-justify text-slate-300'>Gracias a lo autodidacta he adquirido experiencia para lograr modelar Objectos sencillos, ademas tengo los conocimientos básicos de renderizar texturas en mis objectos asi como la luz y movimiento de camaras que ofrece blender.</p>
        </div>
        <div className='flex w-full h-1/2 md:h-full'>
          <Carousel>
            <img
              alt="..."
              src="/JesusEcheverria.github.io/Images/Barril_3D.jpg"
            />
            <img
              alt="..."
              src="/JesusEcheverria.github.io/Images/Bote_3D.jpg"
            />
            <img
              alt="..."
              src="/JesusEcheverria.github.io/Images/Bote_3D_2.jpg"
            />
            <img
              alt="..."
              src="/JesusEcheverria.github.io/Images/Casa_3D.jpg"
            />
            <img
              alt="..."
              src="/JesusEcheverria.github.io/Images/Cañon_3D.jpg"
            />
          </Carousel>
        </div>
      </div> */}
    </div>
  )
}
