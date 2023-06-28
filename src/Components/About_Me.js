import React from 'react'

export default function About_Me() {
  return (
       <div className='p-6 lg:p-8 shadow-md border-gray-200 rounded-lg h-auto'>
          <div className='flex'>
            <h2 className='font-bold text-3xl md:text-5xl text-blue-600'>WHO I'M?</h2>
          </div>
          <div className='flex pt-8'>
          </div>
          <section className='flex flex-col w-full h-full gap-5 md:flex-row justify-between'>
          <div className='flex flex-col w-full text-justify md:w-2/3 gap-3'>
            <p className=''>
            I am Jesus Echeverria, a student of computer systems engineering at TECNM CAMPUS IGUALA GRO, MÉXICO. Currently, I am seeking opportunities that allow me to apply my knowledge and skills in a real-world environment.
              </p>
            <p className=''>
              From an early age, I have been fascinated by the world of technology and computer science. The way technology can enhance our lives and transform society has always intrigued me.
              </p>
          </div>
            <div className='flex '>
              <img className="md:h-36 lg:h-64 rounded-full" src="/JesusEcheverria.github.io/Images/Perfil.jpg" alt="" />
            </div>
          </section>
        </div>
  )
}
