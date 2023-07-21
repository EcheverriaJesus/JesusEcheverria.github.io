import React from 'react'
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom'
import RedesSociales from '../Components/RedesSociales';

export default function InformationProyect(props) {
  return (
    <div className='flex flex-col h-screen w-full  pt-7 px-8 md:px-24 md:pt-5 md:justify-start'>
      <Link to="/" className='flex items-center w-auto h-auto'>
        <img alt="" className="mr-3 h-8 sm:h-9 rounded-full flotar" src="/JesusEcheverria.github.io/Images/Perfil.jpg" />
        <span className="text-lg font-bold">
          Jesus Echeverria
        </span>
      </Link>

      <h3 className='text-center font-bold text-3xl pt-7 md:text-5xl te md:text-justify'>Objectos 3D</h3>
      <section className='flex h-72 w-full'>
        <Carousel>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Barril_3D.jpg"/>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Bote_3D.jpg"/>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Bote_3D_2.jpg"/>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Casa_3D.jpg"/>
          <img className='rounded-xl' alt="..." src="/JesusEcheverria.github.io/Images/Cañon_3D.jpg"/>
        </Carousel>
      </section>

      <section className='flex flex-col w-full text-justify space-y-3 md:w-4/12'>
        <h3 className='text-sm text-center font-semibold te border-b pb-5'>Aprendí a utilizar blender por pasatiempo. Me gusta la tecnologia 3D asi como las cosas que se pueden crear en ella.</h3>
        <p className='font-normal text-xs text-center text-slate-700'>Gracias a esto, he adquirido experiencia para lograr modelar Objectos sencillos, ademas tengo los conocimientos básicos de renderizar texturas en mis objectos asi como la luz y movimiento de camaras que ofrece blender.</p>
      </section>

      <section className='flex flex-col justify-center items-center md:grid grid-cols-2 px-24'>
        <div className='flex justify-center items-center flex-col h-auto gap-2 py-5'>
          <svg className='w-9 animate-bounce' viewBox="0 0 24 24"><path d="m9.001 13.022h-3.251c-.412 0-.75.335-.75.752 0 .188.071.375.206.518 1.685 1.775 4.692 4.945 6.069 6.396.189.2.452.312.725.312.274 0 .536-.112.725-.312 1.377-1.451 4.385-4.621 6.068-6.396.136-.143.207-.33.207-.518 0-.417-.337-.752-.75-.752h-3.251v-9.02c0-.531-.47-1.002-1-1.002h-3.998c-.53 0-1 .471-1 1.002zm4.498-8.522v10.022h3.008l-4.507 4.751-4.507-4.751h3.008v-10.022z" fill="#000000" /></svg>
          <a className='flex justify-center items-center bg-[#1f2937] text-white text-xs w-32 h-9 rounded-md hover:scale-90 ease-in duration-300' href='mailto:jesus.echeverria017@gmail.com'>Enviar Mensaje</a>
        </div>
      </section>
    </div>
  )
}
