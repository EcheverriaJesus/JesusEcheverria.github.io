import React from 'react'
import InformationProyect from '../Views/InformationProyect'
import { Carousel } from 'flowbite-react';
/* import ButtonIcon from '../Components/ButtonIcon'; */
import { TitleCrud } from '../Variables/Variables'

export default function PosSystem() {
  return (
    <div className='flex flex-col h-screen w-full  pt-7 px-8 lg:px-24 md:pt-5 md:justify-start aparecer'>
    <InformationProyect/>

    <h3 className='text-center font-bold text-3xl pt-7 pb-4 md:text-5xl md:text-justify md:pb-3 lg:hidden'>Pos System CRUD</h3>
    <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-14 lg:h-full'>
      <section className='flex h-72 w-full md:h-80 lg:h-5/6 FondoF rounded-lg'>
        <Carousel>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem2.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem3.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem4.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem5.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem6.png" />
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='hidden md:pb-3 lg:flex justify-center font-bold text-3xl'> {TitleCrud} </h3>
        <h3 className='text-base text-justify font-semibold te border-b pb-5'>He llevado a cabo este pequeño proyecto con el propósito de fortalecer mi conocimiento en el framework Laravel.</h3>
        <p className='text-base leading-6 text-gray-600'>El objetivo de este proyecto consiste en encontrar formas de optimizar el código y aprovechar todos los componentes que ofrece la librería Jetstream. Gracias a esto, logré implementar un CRUD de manera sencilla y organizada, haciendo un uso eficiente de sus funcionalidades.</p>
      </section>
    </div>
  </div>
  )
}
