import React from 'react'

export default function About_Me() {
  return (
    <div className='flex flex-col justify-between md:flex-row'>
      <section className='flex flex-col justify-between items-center w-full md:flex-row'>
        <div className='w-full text-justify md:w-7/12' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
          <h3 className='text-center font-bold text-3xl md:text-5xl md:text-justify pb-2 text-blue-700 dark:text-white'>Jesus Echeverria</h3>
          <p className='font-bold text-base md:text-lg pb-5 dark:text-yellow-300'>Estudiante de ingeniería en sistemas computacionales del Tecnológico Nacional de México Campus Iguala Gro, México.</p>
         <div className='space-y-4 text-base leading-5 text-gray-600 dark:text-slate-200'>
           <p>Actualmente resido en la ciudad de Teloloapan, Gro, México, tengo 22 años y estoy cursando el último semestre de la carrera de Ingeniería en Sistemas Computacionales.</p>
           <p>Desde una edad temprana, me ha fascinado el mundo de la tecnología y la informática. La manera en que la tecnología puede mejorar nuestras vidas y transformar la sociedad siempre me ha intrigado.</p>
           <p>Soy una persona autodidacta, y disfruto especialmente del desarrollo de software y constantemente busco formas de simplificar tareas y procesos. Ademas, me gusta compartir mis conocimientos a personas que al igual que yo les guste el desarrollo de software.</p>
         </div>
        </div>
        <section className='flex justify-center items-center py-10 w-auto md:p-0'>
        <a href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
          <img className="h-56 md:h-52 lg:h-80 rounded-full flotar hover:grayscale cursor-pointer" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" alt="" />
        </a>
      </section>
      </section>
    </div>
  )
}
