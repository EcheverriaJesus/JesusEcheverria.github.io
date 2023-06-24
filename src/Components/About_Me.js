import React from 'react'

export default function About_Me() {
  return (
       <div className='p-6 lg:p-8 bg-gradient-to-r bg-[#f2f7ff] border-gray-200 rounded-lg h-auto'>
          <div className='flex'>
            <h2 className='font-bold text-3xl md:text-5xl text-blue-600'>About Me</h2>
          </div>
          <div className='flex pt-8'>
          </div>
          <section className='flex flex-col w-full h-full gap-5 md:flex-row justify-between'>
          <div className='flex flex-col w-full text-justify md:w-2/3 gap-3'>
            <p className=''>
            I am Jesus Echeverria, a student of computer systems engineering at TECNM CAMPUS IGUALA. Currently, I am seeking opportunities that allow me to apply my knowledge and skills in a real-world environment. I am excited to be part of innovative projects that have a significant impact on the world, whether it's improving the efficiency of existing systems or creating completely new technological solutions.
              </p>
            <p className=''>
              From an early age, I have been fascinated by the world of technology and computer science. The way technology can enhance our lives and transform society has always intrigued me. As I grew up, my passion for programming and system development strengthened, and I realized that I wanted to dedicate my professional life to this ever-evolving field.
              </p>
          </div>
            <div className='flex '>
              <img className="md:h-36 lg:h-64 rounded-full flotar" src="/JesusEcheverria.github.io/Images/Perfil.jpg" alt="" />
            </div>
          </section>
        </div>
  )
}
