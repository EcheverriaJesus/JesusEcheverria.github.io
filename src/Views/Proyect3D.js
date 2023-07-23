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
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/3D/Barril_3D.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/3D/Bote_3D.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/3D/Bote_3D_2.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/3D/Casa_3D.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/3D/Cañon_3D.jpg" />
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='hidden md:pb-3 lg:flex justify-center font-bold text-3xl'>Objectos 3D</h3>
        <h3 className='text-sm text-justify font-semibold te border-b pb-5'>Aprendí a utilizar Blender por pasatiempo, ya que me apasiona la tecnología 3D y las infinitas posibilidades creativas que ofrece.</h3>
        <p className='font-normal text-xs text-justify text-slate-700'>Gracias a esto, he adquirido experiencia en la creación de modelos de objetos sencillos. Además, cuento con conocimientos básicos para renderizar texturas en mis objetos, así como para manejar la iluminación y el movimiento de cámaras que ofrece Blender.</p>
      </section>
    </div>
  </div>
  )
}
