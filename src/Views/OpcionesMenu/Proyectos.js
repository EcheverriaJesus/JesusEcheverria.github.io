import React from 'react'

export default function Proyectos() {
  return (
    <div className='h-auto flex flex-col justify-center items-center'>
    
      <section className='flex flex-col justify-center items-center w-full'>
        <h3 className='text-2xl lg:text-5xl font-semibold font-acme text-gray-700 dark:text-white pb-3'>Algunos de mis Proyectos</h3>
        <p className='text-gray-600 text-md lg:text-lg dark:text-gray-400 font-roboto'>Interfaces atractivas,  intuitivas y con un buen flujo de UX.</p>
        
      </section>
       <section className='flex relative justify-center items-center w-full h-full'>
       
      </section>
      <section className='grid grid-cols-1 w-full py-14 gap-16 md:grid-cols-2 md:gap-10 lg:grid-cols-3 2xl:grid-cols-2'>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>SchoolBook 📒</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
            SchoolBook es un proyecto de Control Escolar Web dirigido al nivel de secundaria.
            </p>
          </div>
          <div>
            <a href='https://github.com/EcheverriaJesus/SCHOOLBOOK' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK2.png" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Cinteolt 🥗</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
            Cinteotl se enfoca en la gestión integral de un restaurante. Incluye un menú interactivo en línea, y también se implementó la sección del backoffice
            </p>
          </div>
          <div>
            <a href='https://github.com/EcheverriaJesus/Cinteotl' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl3.png" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Modelos 3D 🎲</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
            Aprendí a utilizar Blender por pasatiempo, ya que me apasiona la tecnología 3D y las infinitas posibilidades creativas que ofrece.
            </p>
          </div>
          <div>
            <a href='/' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/3D/Barril_3D.jpg" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Developers 👨‍💻</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
            Realicé esta página como parte de mi servicio social en el Tecnológico Nacional de México, Campus Iguala.
            </p>
          </div>
          <div>
            <a href='https://github.com/EcheverriaJesus/DesarrolladoresTECNM_ITI' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/Developers/Developers3.jpg" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Pos System 🛒</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
            El objetivo de este proyecto consiste en encontrar formas de optimizar el código y aprovechar todos los componentes que ofrece la librería Jetstream.
            </p>
          </div>
          <div>
            <a href='https://github.com/EcheverriaJesus/SistemaPuntoVenta' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem6.png" alt="" />
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}
