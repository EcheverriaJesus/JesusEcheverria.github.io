import React from 'react'
import CardProyect from './CardProyect'
import { Title3D } from '../Variables/Variables'

export default function Experience() {

  return (
    <div>
      <div className='flex flex-col px-8 pb-7 md:px-12 md:py-5 lg:px-24'>
        <h2 className='font-bold text-3xl md:text-5xl text-blue-700 pb-4'>Mi Experiencia</h2>
        <p className='space-y-4 text-base leading-7 text-gray-600'>Durante mi carrera en el mundo del desarrollo de software, he tenido la oportunidad de participar en proyectos colaborativos en equipo. Estas experiencias me han permitido adquirir un valioso conjunto de habilidades y conocimientos. Algunos de los proyectos en los que he trabajado son los siguientes:</p>
      </div>
      <section className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 w-full h-auto md:gap-7 px-8 md:px-12 md:py-7 lg:px-24'>
        <CardProyect image="/JesusEcheverria.github.io/Images/Developers/Developers.jpg" title="DEVELOPERS (Página en ITI)" made="HTML, Tailwind CSS & Framework-gob mx" url="/Developers" />

        <CardProyect image="/JesusEcheverria.github.io/Images/Cinteolt/Cinteolt.jpg" title="CINTEOTL (Sitio Web Restaurante)" made="Framework Laravel & SASS" url="/Cinteotl" />

        <CardProyect image="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK.png" title="SCHOOL BOOK (Sistema de Control Escolar)" made="Framework Laravel, Tailwind CSS & Livewire" url="/SCHOOLBOOK" />

        <CardProyect image="/JesusEcheverria.github.io/Images/PosSystem/PosSystem6.png" title="Punto de Venta (CRUD)" made="Framework Laravel, Tailwind CSS & Livewire" url="/POSCRUD" />

        <CardProyect image="/JesusEcheverria.github.io/Images/3D/Bote_3D.png" title={`${Title3D} (Autoaprendizaje)`} made="Blender" url="/Proyect3D" />
      </section>

    </div>
  )
}
