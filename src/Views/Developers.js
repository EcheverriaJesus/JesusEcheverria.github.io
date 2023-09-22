import React from 'react'
import InformationProyect from '../Views/InformationProyect'
import { Carousel } from 'flowbite-react';
import { TitleDevelopers } from '../Variables/Variables'

export default function Developers() {
  return (
    <div className='flex flex-col h-screen w-full  pt-7 px-8 lg:px-24 md:pt-5 md:justify-start aparecer'>
    <InformationProyect/>

    <h3 className='text-center font-bold text-3xl pt-7 pb-4 md:text-5xl md:text-justify md:pb-3 lg:hidden'>Developers</h3>
    <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-14 lg:h-full'>
      <section className='flex h-72 w-full md:h-80 lg:h-5/6 FondoF rounded-lg'>
        <Carousel>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Developers/Developers.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Developers/Developers2.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Developers/Developers3.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Developers/Developers4.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Developers/Developers.jpg" />
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='hidden md:pb-3 lg:flex justify-center font-bold text-3xl'>{TitleDevelopers}</h3>
        <h3 className='text-base text-justify font-semibold te border-b pb-5'>Realicé esta página como parte de mi servicio social en el Tecnológico Nacional de México, Campus Iguala.</h3>
        <p className='text-base leading-5 text-gray-600'>El objetivo de esta página es presentar a los alumnos que se han dedicado a llevar a cabo actualizaciones en el sitio web del Departamento de Sistemas y Computación.</p>
        <p className='text-base leading-5 text-gray-600'>En la elaboración de esta página, se utilizó el framework gob.mx para incorporar el footer y el navbar de la página oficial del gobierno gob.mx.</p>
        <div>
        <p className='text-sm font-semibold pt-2'>Enlace del framework Gob.mx :</p>
            <a className='text-blue-500' href='https://www.gob.mx/guias/grafica/' target='_blank' rel='nooper noreferrer'>https://www.gob.mx/guias/grafica/</a>
        </div>
      </section>
    </div>
  </div>
  )
}
