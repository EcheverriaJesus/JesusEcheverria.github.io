import React from 'react'
import { SvgTailwind, SvgElectron, SvgLaravel, SvgGit, SvgBlender, SvgLivewire, SvgAndroid, SvgJava, SvgFigma } from '../../svg/Svgs'
export default function Experiencia() {
  return (
    <div className='flex flex-col h-auto w-full'>
      <section className='flex flex-col w-full h-screen sm:items-center sm:flex-row md:space-x-16'>
        <article>
          <h3 className='text-3xl pb-5 lg:text-4xl font-semibold font-roboto dark:text-white'>Mi Experiencia en el Mundo del Desarrollo!!</h3>
          <p className='text-gray-600 text-md lg:text-lg dark:text-gray-400 font-roboto'>Actualmente estoy laborando en una consultoria de software, llevando a cabo la implementacion de algunos procesos en la aplicacion del sitio web ZazilTunich y Fisher's.</p>
          <div className='flex justify-center items-end w-12 h-12 rounded-lg bg-white p-1'>
          <img className="" src="/JesusEcheverria.github.io/Images/medalla.gif" alt="" />
          </div>
        </article>
        <article className='flex justify-center w-full h-44 pt-5 sm:justify-end md:h-96'>
          <img className='w-full sm:w-80 md:w-[600px] h-96 rounded-md' src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" alt="" />
        </article>
      </section>
      <section className='flex justify-between items-center h-64 w-full shadow-2xl bg-gradient-to-r from-[#72b4d0] from-10% via-[#6f0d78] via-50% to-[#3e065e] to-90% rounded-xl mt-20'>
          <div>
          <svg className='w-10 flotarIcono' viewBox="0 0 24 24"><path fill="currentColor" d={SvgLaravel}/></svg>
          <svg className='w-10 girarLogo' viewBox="0 0 24 24"><path fill="currentColor" d={SvgGit}/></svg>
          <svg className='w-7 girarLogo' viewBox="0 0 24 24"><path fill="currentColor" d={SvgLivewire}/></svg>
          <div dangerouslySetInnerHTML={{ __html: SvgJava }} />
          </div>
          <div>
            <h3 className='text-xl pb-5 lg:text-4xl font-semibold font-acme text-white'>¡¡ Tecnologias !!👨‍💻</h3>
            <h3 className='text-base pb-5 lg:text-base font-semibold font-roboto text-yellow-300'>Cada dia se aprende algo nuevo</h3>
          </div>
          <div>
            <svg className='w-10 girarLogo stroke-1 stroke-white' viewBox="0 0 24 24"><path fill="currentColor" d={SvgElectron}/></svg>
            <svg className='w-10 girarLogo stroke-1 stroke-white' viewBox="0 0 24 24"><path fill="currentColor" d={SvgBlender}/></svg>
            <svg className='w-10 girarLogo stroke-1 stroke-white' viewBox="0 0 24 24"><path fill="currentColor" d={SvgAndroid}/></svg>
            <svg className='w-10 girarLogo stroke-1 stroke-white' viewBox="0 0 24 24"><path fill="currentColor" d={SvgTailwind}/></svg>
            <div className='w-10' dangerouslySetInnerHTML={{ __html: SvgFigma }} />
            
          </div>
        </section>
    </div>
  )
}
