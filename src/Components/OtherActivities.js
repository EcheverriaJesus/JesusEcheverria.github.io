import React from 'react'
import bussiness from '../svg/bussiness.svg'

export default function OtherActivities() {
  return (
    <div className='px-12 md:px-24 space-y-20'>
      <section className='flex flex-col justify-between items-center w-full md:flex-row'>
        <div className='w-full text-justify space-y-3 md:w-5/12' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
          <h3 className='text-center font-bold text-3xl md:text-5xl text-blue-600 md:text-justify'>Curso Laravel</h3>
          <h3 className='font-bold text-base md:text-lg'>Impartí un curso en el Tecnológico Nacional de México Campus Iguala con un compañero.</h3>
          <p className='font-normal text-sm text-justify text-slate-600'>Esta experiencia me ayudó a obtener una comprensión más profunda de esta tecnología y me brindó la oportunidad de compartir mis conocimientos con otras personas, mejorando mis habilidades de enseñanza en el proceso.</p>
          <a href='https://www.canva.com/design/DAFi5arjYKY/WBn-utXa8bTUS6ieFLPzlg/view?utm_content=DAFi5arjYKY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank" rel="noopener noreferrer">
            <p className='font-normal text-sm text-blue-500 pt-4'>Ver Material...</p>
          </a>
        </div>
        <div className='w-full h-full pt-5 md:w-6/12 md:pt-0' data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="900">
          <img className="w-full h-auto md:h-36 lg:h-96" src="/JesusEcheverria.github.io/Images/CursoL.jpg" alt="" />
        </div>
      </section>

      <section className='flex flex-col-reverse justify-between items-center w-full md:flex-row'>
      <div className='w-full h-full pt-5 md:w-6/12 md:pt-0' data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="900">
          <img className='w-96' src={bussiness} alt="" />
        </div>
        <div className='w-full text-justify space-y-3 md:w-7/12' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
          <h3 className='text-center font-bold text-3xl md:text-5xl text-blue-600 md:text-justify'>Instalación de Camaras</h3>
          <h3 className='font-bold text-base md:text-lg'>Durante mi servicio social, Realice una instalacion CCTV junto con otros compañeros.</h3>
          <p className='font-normal text-sm text-justify text-slate-600'>He realizado la instalacion de varias camaras en diferentes laboratorios en el tecnologico, gracias a esta experincia hoy tengo el conocimiento de lo que se requiere para llevar a cabo este proceso en algun otro lugar.</p>
        </div>
        
      </section>
    </div>
  )
}
