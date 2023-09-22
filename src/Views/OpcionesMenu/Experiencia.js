import React from 'react'

export default function Experiencia() {
  return (
    <div className=''>
      <div className='flex w-full grid-cols-2'>
         <div className='w-1/2'>
           <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#17c935] to-[#6fee8d] text-3xl lg:text-5xl dark:bg-gradient-to-t pt-2 font-acme dark:from-[#68bf8e] dark:to-[#93f4a9]'>Alguno de mis</span>
           <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-800 text-3xl lg:text-5xl dark:bg-gradient-to-t pt-2 font-acme dark:from-purple-400 dark:to-blue-500'> Proyectos</span>💻
           <h4 className='text-2xl text-gray-600 dark:text-white lg:text-2xl font-acme py-2'>No hay mejor maestro que la experiencia.</h4>
           <p className='text-gray-800 dark:text-white w-1/2 font-roboto text-base pt-7'>Durante mi carrera en el mundo del desarrollo de software, he tenido la oportunidad de participar en proyectos colaborativos en equipo. Estas experiencias me han permitido adquirir un valioso conjunto de habilidades y conocimientos. Algunos de los proyectos en los que he trabajado son los siguientes:</p>
         </div>
         <div className='w-1/2 h-full pt-5 md:pt-0' data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="900">
          <img className="w-full h-auto md:h-36 lg:h-96" src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteolt.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}
