import React from 'react'
import BotonGitHub from '../../Components/BotonGitHub'
import ProjectComponent from '../../Components/ProjectComponent'
import TitleComponents from '../../Components/TitleComponents'
import UIVERSE from '../../Images/Readme/UIVERSE.png'
import BLOG from '../../Images/Readme/JBEspañol.png'

export default function Componentes() {
  return (
    <div className='flex items-center flex-col 2xl:justify-center'>
      <TitleComponents title='Recursos web 🤖👨‍🔧!!'/>
      <p className='text-gray-800 dark:text-gray-300 font-roboto text-base pt-3'>Me gusta aportar contenido a la comunidad del desarrollo de software, y aqui esta mi granito de arena, he creado algunos componentes para el desarrollo web, estos componentes estan realizados con la tecnologia Tailwind css.</p>
      <section className='grid grid-cols-1 w-full pt-14 gap-16 md:grid-cols-2 md:gap-10 lg:grid-cols-2'>
        <ProjectComponent title='UIVERSE 🚀' description='Encontraras botones y cards para poder utilizar en tus proyectos.' url='https://uiverse.io/profile/EcheverriaJesus' img={UIVERSE} />
        <ProjectComponent title='Blog 📝' description='Te compartó los paso para traducir Laravel Breeze y/o Jetstream a español.' url='https://dev.to/echeverriajesus/breeze-y-jetstream-en-espanol-4onn' img={BLOG} />
        <article className='flex flex-col justify-center items-center text-center w-full space-y-7 2xl:pt-5'>
          <div>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Componente NavBar</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Navbar de esta pagina, esta creado para React.js con Tailwind css.
            </p>
          </div>
          <p className='font-roboto text-sm text-gray-600 dark:text-gray-400'>No olvides dejarme una ⭐</p>
          <BotonGitHub url='https://github.com/EcheverriaJesus/Component_NavBar_React' />
        </article>
      </section>
    </div>
  )
}
