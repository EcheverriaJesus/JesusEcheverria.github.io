import React from 'react'
import InformationProyect from '../Views/InformationProyect'
import { Carousel } from 'flowbite-react';
import { TitleCinteolt } from '../Variables/Variables'

export default function Cinteotl() {
  return (
    <div className='flex flex-col h-screen w-full  pt-7 px-8 lg:px-24 md:pt-5 md:justify-start aparecer'>
    <InformationProyect/>

    <h3 className='text-center font-bold text-3xl pt-7 pb-4 md:text-5xl md:text-justify md:pb-3 lg:hidden'>CINTEOLT</h3>
    <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-14 lg:h-full'>
      <section className='flex h-72 w-full md:h-80 lg:h-5/6 rounded-lg FondoF'>
        <Carousel>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteolt.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl2.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl3.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl4.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl5.png" />
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='hidden md:pb-3 lg:flex justify-center font-bold text-3xl'> {TitleCinteolt} </h3>
        <h3 className='text-base text-justify font-semibold te border-b pb-5'>Este proyecto representó mi primera experiencia en el desarrollo web.</h3>
        <p className='text-base leading-6 text-gray-600'>Cinteotl se enfoca en la gestión integral de un restaurante. Durante este proyecto, se desarrolló la interfaz final para los clientes, que incluye un menú interactivo en línea, y también se implementó la sección del backoffice destinada a los administradores del restaurante.</p>
      </section>
    </div>
  </div>
  )
}
