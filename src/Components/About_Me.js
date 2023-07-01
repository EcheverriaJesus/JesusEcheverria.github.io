import React from 'react'

export default function About_Me() {
  return (
       <div className='p-6 lg:p-8 shadow-md rounded-lg h-auto pb-10'>
          <div className='flex'>
            <h2 className='font-bold text-3xl md:text-5xl text-blue-600'>WHO I'M?</h2>
          </div>
          <section className='flex flex-col w-full h-full gap-5 md:flex-row justify-between pt-8'>
          <div className='flex flex-col w-full text-justify md:w-2/3 gap-3'>
            <p className=''>
            I am Jesus Echeverria, a student of computer systems engineering at TECNM CAMPUS IGUALA GRO, MÉXICO. Currently, I am seeking opportunities that allow me to apply my knowledge and skills in a real-world environment.
              </p>
            <p className=''>
              From an early age, I have been fascinated by the world of technology and computer science. The way technology can enhance our lives and transform society has always intrigued me.
              </p>
          </div>
            <div className='flex '>
              <a href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                <img className="md:h-36 lg:h-64 rounded-full flotar hover:grayscale cursor-pointer" src="/JesusEcheverria.github.io/Images/Perfil.jpg" alt="" />
              </a>
            </div>
          </section>
        </div>
  )
}
