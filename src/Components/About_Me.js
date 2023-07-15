import React from 'react'

export default function About_Me() {
  return (
    <div className='flex flex-col justify-between md:flex-row'>
      <section className='text-justify  w-auto md:w-8/12'>
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
      </section>
    </div>
  )
}
