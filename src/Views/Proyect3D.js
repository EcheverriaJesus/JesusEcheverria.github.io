import React from 'react'
import { Carousel } from 'flowbite-react';

export default function Proyect3D() {
  return (
    <div className='flex h-screen flex-col w-full md:p-24 md:flex-row'>
      <div className='flex flex-col justify-center w-full gap-4 pr-10 md:w-1/2'>
      <h2 className='font-bold text-3xl md:text-5xl text-w'>Objectos 3D</h2>
        <h4 className='text-base text-justify font-semibold'>Aprendí a utilizar blender por pasatiempo. Me gusta la tecnologia 3D.</h4>
        <p className='font-normal text-sm text-justify text-slate-600'>Gracias a lo autodidacta he adquirido experiencia para lograr modelar Objectos sencillos, ademas tengo los conocimientos básicos de renderizar texturas en mis objectos asi como la luz y movimiento de camaras que ofrece blender.</p>
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

    </div>
  )
}
