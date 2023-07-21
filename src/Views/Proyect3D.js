import React from 'react'
import { Carousel } from 'flowbite-react';

export default function Proyect3D() {
  return (
    <div className='flex h-screen flex-col w-full md:p-24 md:flex-row prueba'>
      <div className='bg-red-200'>
        <h3>Trabajando en estas rutas para los proyectos</h3>
      </div>
      <div className='flex w-full h-1/2 md:h-auto'>
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
