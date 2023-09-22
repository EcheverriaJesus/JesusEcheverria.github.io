import React from 'react'
import InformationProyect from '../Views/InformationProyect'
import { Carousel } from 'flowbite-react';
import { TitleSchoolBook } from '../Variables/Variables'

export default function SchoolBook() {
  return (
    <div className='flex flex-col h-screen w-full  pt-7 px-8 lg:px-24 md:pt-5 md:justify-start aparecer'>
    <InformationProyect/>

    <h3 className='text-center font-bold text-3xl pt-7 pb-4 md:text-5xl md:text-justify md:pb-3 lg:hidden'>SchoolBook</h3>
    <div className='flex flex-col md:flex-row-reverse md:items-center md:gap-14 lg:h-full'>
      <section className='flex h-72 w-full md:h-80 lg:h-5/6 FondoF rounded-lg'>
        <Carousel>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK2.png" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK3.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK4.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK5.jpg" />
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK6.png" />
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='hidden md:pb-3 lg:flex justify-center font-bold text-3xl'> {TitleSchoolBook} </h3>
        <h3 className='text-base text-justify font-semibold te border-b pb-5'>SchoolBook es un proyecto de Control Escolar Web dirigido al nivel de secundaria.</h3>
        <p className='text-sm leading-5 text-gray-600'>El objetivo de este proyecto es administrar el registro de los alumnos, maestros, materias y calificaciones, así como permitir a los alumnos consultar sus calificaciones del ciclo escolar. Además, proporciona a los profesores una plataforma para evaluar a sus alumnos de manera efectiva. </p>
        <p className='text-sm leading-5 text-gray-600'>SchoolBook cuenta con implementación de autenticación de usuarios y seguridad de sesiones para garantizar la privacidad y protección de los datos. Asimismo, se ha desarrollado una amplia variedad de procesos, como CRUDS (Crear, Leer, Actualizar, Eliminar), validaciones, rutas, permisos y componentes, con el fin de cumplir cabalmente con los objetivos establecidos.</p>
      </section>
    </div>
  </div>
  )
}
