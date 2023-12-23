import React from 'react'
import Slider from '../../Components/Slider'
import ContributionComponent from '../../Components/ContributionComponent'
export default function Experiencia() {
  let certificados = [
    { name: "Constancia de Inglés", number: "1", url: "/JesusEcheverria.github.io/Images/ConstaLogros/C_Ingles.jpg" },
    { name: "Constancia Curso Laravel", number: "2", url: "/JesusEcheverria.github.io/Images/ConstaLogros/R_Laravel.jpg" },
    { name: "Certificado HTML & CSS", number: "3", url: "/JesusEcheverria.github.io/Images/ConstaLogros/CertifiHTMLCSS.png" },
    { name: "Certificado Introducción a la Programación", number: "4", url: "/JesusEcheverria.github.io/Images/ConstaLogros/CertifiProgramation.png" },
    { name: "Certificado Curso Electron", number: "5", url: "/JesusEcheverria.github.io/Images/ConstaLogros/CertifiElectron.png" }
  ]

  let otherAreas = [
    { title: "Redes", description: "Tengo Experiencia en la instalación de CCTV, Realicé una instalación en el Instituto Tecnólogico de Iguala." },
    { title: "Diseño", description: "Realizo diseños para folletos, invitaciones o presentaciones." },
    { title: "Documentación", description: "Tengo experiencia en la elaboración de esquemas y documentación de software." }
  ]

  return (
    <div className='flex flex-col h-auto w-full space-y-20 lg:space-y-28 pb-24'>
      <section>
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
          <p className='text-gray-700 text-sm lg:text-base dark:text-gray-400'>Actualmente estoy laborando en una consultora de software, en la cual estoy desarrollando mis conocimientos tanto para el Back end como para el Front end.</p>
        </article>
        <article className='w-full md:w-1/2'>
          <img src='../../Images/laboral.png' alt='' />
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

      <section>
        <h3 className='text-2xl text-left lg:text-center lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white lg:pb-10'>Experiencia en otras áreas</h3>
        <div className='flex flex-col lg:flex-row lg:gap-10'>
          {
            otherAreas.map((otherArea, index) => (
              <article key={index} className='flex flex-col w-full h-40 py-7'>
                <h3 className='text-xl pb-5 lg:text-3xl font-semibold font-acme text-orange-500'>{otherArea.title}</h3>
                <p className='text-gray-700 dark:text-gray-400'>{otherArea.description}</p>
              </article>
            ))
          }
        </div>
      </section>

      <section className=''>
        <h3 className='text-2xl text-left lg:text-center lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white pb-3'>Certificados o Logros🏅</h3>
        <div className='flex flex-col items-center gap-7 lg:gap-10 lg:flex-row md:justify-between pt-5 lg:pt-10'>
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
