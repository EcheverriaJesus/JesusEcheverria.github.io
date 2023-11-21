import React from 'react'
import Slider from '../../Components/Slider'
import ContributionComponent from '../../Components/ContributionComponent'
export default function Experiencia() {
  let certificados =[
    {name:"Constancia de Inglés", number:"1", url:"/JesusEcheverria.github.io/Documents/CV_JN.pdf"},
    {name:"Constancia Curso Laravel", number:"2", url:"/JesusEcheverria.github.io/Documents/CV_JN.pdf"},
    {name:"Certificado HTML & CSS", number:"3", url:"/JesusEcheverria.github.io/Documents/CV_JN.pdf"},
    {name:"Certificado Introducción a la Programación", number:"4", url:"/JesusEcheverria.github.io/Documents/CV_JN.pdf"},
    {name:"Certificado Curso Electron", number:"5", url:"/JesusEcheverria.github.io/Documents/CV_JN.pdf"}
  ]
  return (
    <div className='flex flex-col h-auto w-full space-y-20 lg:space-y-28'>
      <section className='relative bg-gray-800 flex items-center w-full h-80 md:h-60 lg:h-64 px-5 lg:px-10 overflow-hidden rounded-sm'>
        <div className='font-roboto space-y-2 z-40'>
          <h3 className='text-base lg:text-lg text-white'>Mi Experiencia en el Mundo del</h3>
          <h3 className='text-2xl lg:text-4xl font-bold text-cyan-300'>Desarrollo de Software !👨‍💻</h3>
          <p className='text-gray-200 text-sm lg:text-base'>He colaborado activamente en equipos de desarrollo, contribuyendo tanto en el desarrollo del Front end como en el Back end. Además, realizó componentes con Tailwind css libres de uso.</p>
        </div>
        <div className="w-60 h-48 absolute inset-10 m-auto blur-3xl rounded-full bg-indigo-900"></div>
      </section>

      <section className=''>
        <h3 className='text-2xl text-left lg:text-center lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white pb-5 lg:pb-20'>¡Contribuciones!</h3>
        <div className='space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
          <ContributionComponent title="Instituto Tecnólogico de Iguala" year="2023" description="Contribuí en el mantenimiento de la página del departamento de Sistemas y Computacion en el Tecnólogico de Iguala." />
          <ContributionComponent title="Sistema de Control Escolar" year="2023" description="Realicé un proyecto de un control escolar para una secundaria junto con un equipo de desarrollo." />
          <ContributionComponent title="Curso" year="2023" description="Impartí un curso de programacion en el tecnologico de Iguala." />
          <ContributionComponent title="Página Web" year="2023" description="Desarrollé la página web de la consultoria Nissiapp" />
        </div>
      </section>

      <section className='flex flex-col items-center w-full gap-0 lg:gap-10 lg:flex-row'>
        <article className='font-roboto space-y-2 lg:space-y-7 w-full lg:w-1/2'>
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
        </article>
        <article className='w-full md:w-1/2'>
          <img src='/JesusEcheverria.github.io/Images/laboral.png' alt='' />
        </article>
      </section>


      <section className='flex flex-col space-y-2 lg:space-y-7'>
        <div className='pb-7 text-left lg:text-center'>
          <h3 className='text-2xl lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white pb-3'>¡¡ Tecnologias !!🛠️</h3>
          <h3 className='text-base pb-5 lg:text-base font-semibold font-roboto text-slate-500 dark:text-yellow-300'>-Cada dia se aprende algo nuevo-</h3>
          <p className='text-gray-700 text-sm lg:text-base dark:text-gray-400'>Me gusta aprender cosas nuevas, y estoy dispuesto a seguir aprendiendo mas en cada lugar donde me encuentre...</p>
        </div>
        <Slider />
      </section>

      <section className=''>
        <h3 className='text-2xl text-left lg:text-center lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white lg:pb-10'>Experiencia en otras áreas</h3>
        <div className='flex flex-col lg:flex-row lg:gap-10'>
          <article className='flex flex-col w-full h-40 py-7'>
            <h3 className='text-xl pb-5 lg:text-3xl font-semibold font-acme text-blue-700 dark:text-gray-300'>Redes</h3>
            <p className='text-gray-500'>Tengo Experiencia en la instalación de CCTV, Realicé una instalación en el Instituto Tecnólogico de Iguala.</p>
          </article>
          <article className='flex flex-col w-full h-40 py-7'>
            <h3 className='text-xl pb-5 lg:text-3xl font-semibold font-acme text-blue-700 dark:text-gray-300'>Diseño</h3>
            <p className='text-gray-500'>Realizo diseños para folletos, invitaciones o presentaciones.</p>
          </article>
          <article className='flex flex-col w-full h-40 py-7'>
            <h3 className='text-xl pb-5 lg:text-3xl font-semibold font-acme text-blue-700 dark:text-gray-300'>Documentación</h3>
            <p className='text-gray-500'>Tengo experiencia en la elaboración de esquemas y documentación de software.</p>
          </article>
        </div>

      </section>

      <section className=''>
        <h3 className='text-2xl text-left lg:text-center lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white pb-3'>Certificados o Logros🏅</h3>
        <div className='flex flex-col items-center gap-7 lg:gap-10 lg:flex-row md:justify-between pt-5'>
        {
          certificados.map((certificado, index) => (
            <a key={index} href={certificado.url} target='_blank' rel='noopener noreferrer' className='bg-white shadow-xl flex text-center font-bold  text-gray-700 items-center p-4 rounded-sm hover:scale-95 duration-200 gap-2'><div className='h-7 w-10 rounded-full bg-blue-600 text-white'>{certificado.number}</div>{certificado.name}</a>
          ))
        }
        </div>
      </section>
    </div>
  )
}
