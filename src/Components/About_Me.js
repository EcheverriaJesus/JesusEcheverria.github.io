import React from 'react'

export default function About_Me() {
  return (
    <div className='flex flex-col justify-between md:flex-row'>
      {/* <section className='text-justify  w-auto md:w-8/12'>
        <h2 className='font-bold text-3xl md:text-5xl text-blue-600 py-7'>Quién Soy?</h2>
        <div className='space-y-5'>
          <p>
            Soy Jesus Echeverria, estudiante de ingeniería en sistemas computacionales del TECNM CAMPUS IGUALA GRO, MÉXICO. Actualmente, estoy buscando oportunidades que me permitan aplicar mis conocimientos y habilidades en un entorno del mundo real.
          </p>
          <p>
            Desde muy temprana edad me ha fascinado el mundo de la tecnología y la informática. La forma en que la tecnología puede mejorar nuestras vidas y transformar la sociedad siempre me ha intrigado.
          </p>
        </div>
      </section>
      <section className='flex justify-center items-center py-10 w-auto md:p-0'>
        <a href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
          <img className="h-56 md:h-36 lg:h-64 rounded-full flotar hover:grayscale cursor-pointer" src="/JesusEcheverria.github.io/Images/Perfil.jpg" alt="" />
        </a>
      </section> */}
      <section className='flex flex-col justify-between items-center w-full md:flex-row'>
        <div className='w-full text-justify md:w-7/12' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
          <h3 className='text-center font-bold text-3xl md:text-5xl md:text-justify pb-2'>Jesus Echeverria</h3>
          <p className='font-bold text-base md:text-lg pb-5'>Estudiante de ingeniería en sistemas computacionales del TECNM CAMPUS IGUALA GRO, MÉXICO.</p>
         <div className='font-normal text-sm text-justify text-slate-600 space-y-2'>
           <p>Actualmente rádico en la ciudad de Teloloapan Gro, México, tengo 22 años y estoy cursando el ultimo semestre en la carrera de ingeniería en sistemas computacionales.</p>
           <p>Desde muy temprana edad me ha fascinado el mundo de la tecnología y la informática. La forma en que la tecnología puede mejorar nuestras vidas y transformar la sociedad siempre me ha intrigado.</p>
           <p>Me gusta el desarrollo de software y en lo personal siempre busco la manera de hacer las cosas mas sencillas, ademas de poder compartir mis conocimientos, a personas que al igual que yo tenga les gusta el desarrollo de software.</p>
         </div>
        </div>
        <section className='flex justify-center items-center py-10 w-auto md:p-0'>
        <a href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
          <img className="h-56 md:h-52 lg:h-72 rounded-full flotar hover:grayscale cursor-pointer" src="/JesusEcheverria.github.io/Images/Perfil.jpg" alt="" />
        </a>
      </section>
      </section>
    </div>
  )
}
