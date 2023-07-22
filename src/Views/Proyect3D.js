import React from 'react'
import InformationProyect from '../Views/InformationProyect'
import { Carousel } from 'flowbite-react';

export default function Proyect3D() {
  return (
    <div className='flex flex-col h-screen w-full pt-7 px-8 lg:px-24 md:pt-5 md:justify-start aparecer'>
    <InformationProyect/>

    <h3 className='text-center font-bold text-3xl pb-4 pt-7 md:text-5xl md:text-justify md:pb-3 lg:hidden'>Objectos 3D</h3>
    <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-14 lg:h-full'>
      <section className='flex h-72 w-full md:h-80 lg:h-5/6 bg-[#1f2937] rounded-lg'>
        <Carousel>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Barril_3D.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Bote_3D.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Bote_3D_2.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Casa_3D.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cañon_3D.jpg" />
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='hidden md:pb-3 lg:flex justify-center font-bold text-3xl'>Objectos 3D</h3>
        <h3 className='text-sm text-justify font-semibold te border-b pb-5'>Aprendí a utilizar blender por pasatiempo. Me gusta la tecnologia 3D asi como las cosas que se pueden crear en ella.</h3>
        <p className='font-normal text-xs text-justify text-slate-700'>Gracias a esto, he adquirido experiencia para lograr modelar Objectos sencillos, ademas tengo los conocimientos básicos de renderizar texturas en mis objectos asi como la luz y movimiento de camaras que ofrece blender.</p>
      </section>
    </div>
  </div>
  )
}
