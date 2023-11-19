import React from 'react'
import Slider from '../../Components/Slider'
import ContributionComponent from '../../Components/ContributionComponent'
export default function Experiencia() {
  return (
    <div className='flex flex-col h-auto w-full'>

      <section className='relative bg-gray-800 flex items-center w-full h-80 md:h-60 lg:h-64 px-5 lg:px-10 overflow-hidden rounded-sm'>
        <div className='font-roboto space-y-2 z-50'>
          <h3 className='text-base lg:text-lg text-white'>Mi Experiencia en el Mundo del</h3>
          <h3 className='text-2xl lg:text-4xl font-bold text-cyan-300'>Desarrollo de Software !👨‍💻</h3>
          <p className='text-gray-200 text-sm lg:text-base'>He colaborado activamente en equipos de desarrollo, contribuyendo tanto en el desarrollo del Front end como en el Back end. Además, realizó componentes con Tailwind css libres de uso.</p>
        </div>
        <div className="w-60 h-48 absolute inset-10 m-auto blur-3xl rounded-full bg-indigo-900"></div>
      </section>

      <section className=''>
        <h3 className='text-2xl lg:text-5xl font-semibold font-acme text-gray-900 dark:text-white'>¡Contribuciones!</h3>
        <div className="space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <ContributionComponent title="Instituto Tecnólogico de Iguala" year="2023" description="Contribuí en el mantenimiento de la página del departamento de Sistemas y Computacion en el Tecnólogico de Iguala." />
          <ContributionComponent title="Sistema de Control Escolar" year="2023" description="Realicé un proyecto de un control escolar para una secundaria junto con un equipo de desarrollo." />
          <ContributionComponent title="Curso" year="2023" description="Impartí un curso de programacion en el tecnologico de Iguala." />
        </div>
      </section>

      <div className='flex flex-col items-center w-full gap-0 lg:gap-10 lg:flex-row'>
        <section className='font-roboto space-y-2 lg:space-y-7 w-full lg:w-1/2'>
          <div className='flex'>
            <h3 className='flex justify-center items-center gap-4 text-xl lg:text-5xl font-semibold font-acme text-gray-700 dark:text-gray-200'><div className='h-3 w-3 rounded-full bg-green-500 animate-pulse'></div>Estado Laboral___</h3>
          </div>
          <p className='text-gray-700 text-sm lg:text-base dark:text-gray-400'>Actualmente estoy laborando en una consultoria de software, llevando a cabo la implementacion de nuevos procesos en el sitio web ZazilTunich y Fisher’s.</p>
          <div className='flex justify-around items-center'>
            <a className="hover:-translate-y-2 duration-300" href='https://zaziltunich.com/' target='_blank' rel="noopener noreferrer">
              <img className='brightness-50 w-16 h-16' src='https://zaziltunich.com/wp-content/uploads/2020/06/logo-zazil-tunich-blanco-01.png' alt='' />
            </a>
           <a className="hover:-translate-y-2 duration-300" href='https://fishers.com.mx/' target='_blank' rel="noopener noreferrer">
             <img className='w-16 h-6' src='https://d15k2d11r6t6rl.cloudfront.net/public/users/Integrators/09889db2-a6dc-4a03-beb1-87e4423dc993/test1-clientside/LOGO_FISHERS_png_.png' alt='' />
           </a>
          </div>
        </section>
        <section className='w-full lg:w-1/2'>
          <img src='/JesusEcheverria.github.io/Images/laboral.png' alt='' />

        </section>
      </div>


      <section className='flex flex-col items-center space-y-2 lg:space-y-7'>
        <div className='text-center'>
          <h3 className='text-xl pb-5 lg:text-5xl font-semibold font-acme text-gray-800 dark:text-white'>¡¡ Tecnologias !!🛠️</h3>
          <h3 className='text-base pb-5 lg:text-base font-semibold font-roboto text-slate-500 dark:text-yellow-300'>-Cada dia se aprende algo nuevo-</h3>
        </div>
        <Slider />
        <Slider />
      </section>
     


    </div>
  )
}
