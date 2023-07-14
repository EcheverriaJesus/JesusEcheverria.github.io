import React from 'react'
import CardProyect from './CardProyect'

export default function Experience() {
  return (
    <div>
    
    <div className='flex flex-col px-8 pb-7 md:px-12 md:py-5 lg:px-24'>
      <h2 className='font-bold text-3xl md:text-5xl text-blue-600 pb-4'>MY EXPERIENCE</h2>
      <p className='font-normal text-sm text-justify text-slate-600'>During my career in the world of software development, I have had the opportunity to work on collaborative team projects, these experiences have allowed me to acquire a set of skills and knowledge, some of my projects are:</p>
    </div>
    <section className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 w-full h-auto md:gap-7 px-8 md:px-12 md:py-7 lg:px-24'>
      <CardProyect image="/JesusEcheverria.github.io/Images/Page_Developers_iti.jpg" title="DEVELOPERS (Page in ITI)" made="HTML, Tailwind CSS & Framework-gob mx" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/Cinteolt.jpg" link="https://github.com/EcheverriaJesus/Cinteotl" title="CINTEOTL (Web Site Restaurant)" made="Framework Laravel & SASS" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/SCHOOLBOOK3.jpg" link="https://github.com/EcheverriaJesus/SCHOOLBOOK" title="SCHOOL BOOK (school management system)" made="Framework Laravel, Tailwind CSS & Livewire" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/sistemaVenta.jpg" link="https://github.com/EcheverriaJesus/SistemaPuntoVenta" title="POS SYSTEM (CRUD)" made="Framework Laravel, Tailwind CSS & Livewire" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/Bote_3D.png" link="https://github.com/EcheverriaJesus" title="OBJECTS 3D (self-learning)" made="Blender" url="#" 
        
      />
    </section>
  </div>
  )
}
