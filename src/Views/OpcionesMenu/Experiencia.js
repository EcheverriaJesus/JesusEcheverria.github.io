import React from 'react'

export default function Experiencia() {
  return (
    <div className='flex flex-col h-auto w-full'>
      <section className='flex flex-col w-full h-screen sm:items-center sm:flex-row md:space-x-16'>
        <article className=''>
          <h3 className='text-3xl pb-5 lg:text-4xl font-semibold font-roboto dark:text-white'>Mi Experiencia en el Mundo del Desarrollo!!</h3>
          <p className='text-gray-600 text-md lg:text-lg dark:text-gray-400 font-roboto'>Actualmente estoy laborando en una consultoria de software, llevando a cabo la implementacion de algunos procesos de la aplicacion del sitio web ZazilTunich y Fisher's.</p>
          <div className='flex justify-center items-end w-12 h-12 rounded-lg bg-white p-1'>
          <img className="" src="/JesusEcheverria.github.io/Images/medalla.gif" alt="" />
          </div>
        </article>
        <article className='flex justify-center w-full h-44 pt-5 sm:justify-end md:h-56'>
          <img className='w-full sm:w-80 md:w-[600px] h-56 rounded-md shadow-xl' src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" alt="" />
        </article>
      </section>
    </div>
  )
}
