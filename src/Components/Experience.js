import React from 'react'
import CardProyect from './CardProyect'

export default function Experience() {
  return (
    <div>
    
    <div className='flex flex-col px-8 pb-7 md:px-12 md:py-5 lg:px-24'>
      <h2 className='font-bold text-3xl md:text-5xl text-blue-600 pb-4'>Mi Experiencia</h2>
      <p className='font-normal text-sm text-justify text-slate-600'>Durante mi carrera en el mundo del desarrollo de software, he tenido la oportunidad de trabajar en proyectos colaborativos en equipo, estas experiencias me han permitido adquirir un conjunto de habilidades y conocimientos, algunos de mis proyectos son:</p>
    </div>
    <section className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 w-full h-auto md:gap-7 px-8 md:px-12 md:py-7 lg:px-24'>
      <CardProyect image="/JesusEcheverria.github.io/Images/Page_Developers_iti.jpg" title="DEVELOPERS (Página en ITI)" made="HTML, Tailwind CSS & Framework-gob mx" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/Cinteolt.jpg" link="https://github.com/EcheverriaJesus/Cinteotl" title="CINTEOTL (Sitio Web Restaurante)" made="Framework Laravel & SASS" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/SCHOOLBOOK3.jpg" link="https://github.com/EcheverriaJesus/SCHOOLBOOK" title="SCHOOL BOOK (Sistema de Control Escolar)" made="Framework Laravel, Tailwind CSS & Livewire" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/sistemaVenta.jpg" link="https://github.com/EcheverriaJesus/SistemaPuntoVenta" title="Punto de Venta (CRUD)" made="Framework Laravel, Tailwind CSS & Livewire" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/Bote_3D.png" link="https://github.com/EcheverriaJesus" title="Objectos 3D (Autoaprendizaje)" made="Blender" url="#" 
        
      />
    </section>
  </div>
  )
}
