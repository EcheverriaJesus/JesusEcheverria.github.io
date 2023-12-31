import React from 'react'
import ProjectComponent from '../../Components/ProjectComponent'
import TitleComponents from '../../Components/TitleComponents'

export default function Proyectos() {
  return (
    <div className='h-auto flex flex-col justify-center items-center'>

      <section className='flex flex-col justify-center items-center w-full'>
        <TitleComponents title='Algunos de mis Proyectos' />
        <p className='text-gray-600 text-md lg:text-lg dark:text-gray-400 font-roboto'>Interfaces atractivas,  intuitivas y con un buen flujo de UX.</p>
      </section>

      <section className='grid grid-cols-1 w-full py-14 gap-16 md:grid-cols-2 md:gap-10 lg:grid-cols-3 2xl:grid-cols-2'>
        <ProjectComponent title='Cinteolt 🥗' description='Cinteotl se enfoca en la gestión integral de un restaurante. Incluye un menú interactivo en línea, y también se implementó la sección del backoffice.' url='https://github.com/EcheverriaJesus/Cinteotl' img='/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl3.png' />
        <ProjectComponent title='Modelos 3D 🎲' description='Aprendí a utilizar Blender por pasatiempo, ya que me apasiona la tecnología 3D y las infinitas posibilidades creativas que ofrece.' url='/' img='/JesusEcheverria.github.io/Images/3D/Barril_3D.jpg' />
        <ProjectComponent title='Pos System 🛒' description='El objetivo de este proyecto consiste en encontrar formas de optimizar el código y aprovechar todos los componentes que ofrece la librería Jetstream.' url='https://github.com/EcheverriaJesus/SistemaPuntoVenta' img='/JesusEcheverria.github.io/Images/PosSystem/PosSystem6.png' />
        <ProjectComponent title='SchoolBook 📒' description='SchoolBook es un proyecto de Control Escolar Web dirigido al nivel de secundaria.' url='https://github.com/EcheverriaJesus/SCHOOLBOOK' img='/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK2.png' />
        <ProjectComponent title='Developers 👨‍💻' description='Realicé esta página como parte de mi servicio social en el Tecnológico Nacional de México, Campus Iguala.' url='https://github.com/EcheverriaJesus/DesarrolladoresTECNM_ITI' img='/JesusEcheverria.github.io/Images/Developers/Developers3.jpg' />
      </section>
    </div>
  )
}
