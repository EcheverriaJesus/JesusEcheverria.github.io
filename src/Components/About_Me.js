import React from 'react'

export default function About_Me() {
  return (
    <div className='flex flex-col justify-between md:flex-row'>
      <section className='text-justify  w-auto md:w-8/12'>
        <h2 className='font-bold text-3xl md:text-5xl text-blue-600 py-7'>WHO I'M?</h2>
        <div className='space-y-5'>
          <p>
            I am Jesus Echeverria, a student of computer systems engineering at TECNM CAMPUS IGUALA GRO, MÉXICO. Currently, I am seeking opportunities that allow me to apply my knowledge and skills in a real-world environment.
          </p>
          <p>
            From an early age, I have been fascinated by the world of technology and computer science. The way technology can enhance our lives and transform society has always intrigued me.
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
