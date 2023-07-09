import React from 'react'
import CardProyect from './CardProyect'

export default function Experience() {
  return (
    <div>
    <h2 className='font-bold text-3xl md:text-5xl text-blue-600 px-8 pb-7 md:px-24 md:py-7'>MY EXPERIENCE</h2>
    <section className='flex flex-col sm:grid grid-cols-2 md:grid-cols-3 w-full h-auto md:gap-7 px-8 md:px-24 md:py-7'>
      <CardProyect image="/JesusEcheverria.github.io/Images/Page_Developers_iti.jpg" title="DEVELOPERS (Page in ITI)" made="HTML, Tailwind CSS & Framework-gob mx" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/Cinteolt.jpg" link="https://github.com/EcheverriaJesus/Cinteotl" title="CINTEOTL (Web Site Restaurant)" made="Framework Laravel & SASS" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/SCHOOLBOOK3.jpg" link="https://github.com/EcheverriaJesus/SCHOOLBOOK" title="SCHOOL BOOK (school management system)" made="Framework Laravel, Tailwind CSS & Livewire" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/sistemaVenta.jpg" link="https://github.com/EcheverriaJesus/SistemaPuntoVenta" title="POS SYSTEM (CRUD)" made="Framework Laravel, Tailwind CSS & Livewire" />
    
      <CardProyect image="/JesusEcheverria.github.io/Images/Bote_3D_2.jpg" link="https://github.com/EcheverriaJesus" title="OBJECTS 3D (self-learning)" made="Blender" url="#" />
    </section>
  </div>
  )
}
