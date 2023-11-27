import React from 'react'
import BotonGitHub from '../../Components/BotonGitHub'

export default function Componentes() {
  return (
    <div className='flex items-center flex-col 2xl:justify-center'>
      <h3 className='text-2xl lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white'>Recursos web 🤖👨‍🔧!!</h3>
      <p className='text-gray-800 dark:text-gray-300 font-roboto text-base pt-3'>Me gusta aportar contenido a la comunidad del desarrollo de software, y aqui esta mi granito de arena, he creado algunos componentes para el desarrollo web, estos componentes estan realizados con la tecnologia Tailwind css.</p>
      <section className='grid grid-cols-1 w-full pt-14 gap-16 md:grid-cols-2 md:gap-10 lg:grid-cols-2'>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>UIVERSE</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Encontraras botones y cards para poder utilizar en tus proyectos.
            </p>
          </div>
          <div>
            <a href='https://uiverse.io/profile/EcheverriaJesus' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/Readme/UIVERSE.png" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Blog 📝</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Te compartó los paso para traducir Laravel Breeze y/o Jetstream a español.
            </p>
          </div>
          <div>
            <a href='https://dev.to/echeverriajesus/breeze-y-jetstream-en-espanol-4onn' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/Readme/JBEspañol.png" alt="" />
            </a>
          </div>
        </article>
        <article className='flex flex-col justify-center items-center text-center w-full space-y-7 2xl:pt-5'>
          <div className=''>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Componente NavBar</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Navbar de esta pagina, esta creado para React.js con Tailwind css.
            </p>
          </div>
          <p className='font-roboto text-sm text-gray-600 dark:text-gray-400'>No olvides dejarme una ⭐</p>
          <BotonGitHub url='https://github.com/EcheverriaJesus/Component_NavBar_React'/>
        </article>
        
      </section>
    </div>
  )
}
