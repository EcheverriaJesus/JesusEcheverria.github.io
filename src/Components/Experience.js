import React from 'react'
/* import CardProyect from './CardProyect' */
import BoxProyect from './BoxProyect'
import { Title3D, TitleCrud, TitleDevelopers, TitleCinteolt, TitleSchoolBook } from '../Variables/Variables'

export default function Experience() {

  return (
    <div>
      {/* <section className='flex flex-col px-8 pb-7 md:px-12 md:py-5 lg:px-24'>
        <h2 className='font-bold text-3xl md:text-3xl text-center text-blue-700 pb-4 dark:text-white'>Mi Experiencia</h2>
        <p className='space-y-4 text-base leading-7 text-gray-600 dark:text-slate-300'>Durante mi carrera en el mundo del desarrollo de software, he tenido la oportunidad de participar en proyectos colaborativos en equipo. Estas experiencias me han permitido adquirir un valioso conjunto de habilidades y conocimientos. Algunos de los proyectos en los que he trabajado son los siguientes:</p>
      </section> */}

      <div className='flex flex-col justify-center text-center w-auto h-auto px-5 py-10 mb-8 md:mx-12 duration-700 lg:mx-24 md:px-12 bg-gray-800 md:rounded-xl dark:bg-slate-600'>
        <h2 className='font-bold text-3xl md:text-3xl text-center text-white pb-4 dark:text-yellow-300'>Mi Experiencia</h2>
        <p className='space-y-4 text-base leading-7 text-slate-200 dark:text-slate-100 text-justify md:text-center'>Durante mi carrera en el mundo del desarrollo de software, he tenido la oportunidad de participar en proyectos colaborativos en equipo. Estas experiencias me han permitido adquirir un valioso conjunto de habilidades y conocimientos. Algunos de los proyectos en los que he trabajado son los siguientes:</p>
      </div>

      <section className='flex flex-col pb-16 sm:grid grid-cols-2 gap-10 md:gap-7 px-8 md:px-12 md:py-7 lg:px-24 lg:grid-cols-3 w-full h-auto'>

        {/* <CardProyect image="/JesusEcheverria.github.io/Images/Developers/Developers.jpg" title={` ${TitleDevelopers} (Página en ITI)`} made="HTML, Tailwind CSS & Framework-gob mx" url="/Developers" />

        <CardProyect image="/JesusEcheverria.github.io/Images/Cinteolt/Cinteolt.jpg" title={` ${TitleCinteolt} (Sitio Web Restaurante)`} made="Framework Laravel & SASS" url="/Cinteotl" />

        <CardProyect image="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK.png" title={` ${TitleSchoolBook} (Sistema de Control Escolar)`} made="Framework Laravel, Tailwind CSS & Livewire" url="/SCHOOLBOOK" />

        <CardProyect image="/JesusEcheverria.github.io/Images/PosSystem/PosSystem6.png" title={`${TitleCrud} (CRUD)`} made="Framework Laravel, Tailwind CSS & Livewire" url="/POSCRUD" />

        <CardProyect image="/JesusEcheverria.github.io/Images/3D/Bote_3D.png" title={`${Title3D} (Autoaprendizaje)`} made="Blender" url="/Proyect3D" /> */}

        <BoxProyect title={ `${TitleSchoolBook} (Sistema Escolar)` } made="Framework Laravel, Livewire & Tailwind CSS" url="/SCHOOLBOOK"/>
        <BoxProyect title={ `${TitleCinteolt} (Sitio Web Restaurante)` } made="Framework Laravel & Sass" url="/Cinteotl"/>
        <BoxProyect title={ `${TitleCrud} (CRUD)` } made="Framework Laravel, Livewire & Tailwind CSS" url="/POSCRUD"/>
        <BoxProyect title={ `${TitleDevelopers} (Página ITI)` } made="HTML, CSS & Framework-gob mx" url="/Developers"/>
        <BoxProyect title={ `${Title3D} (Autoaprendizaje)` } made="Blender" url="/Proyect3D"/>
{/* 
        <div className='w-auto h-auto bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
        <div className="bg-blue-800 w-10 h-10 p-2 rounded-md">
          <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
        </div>
        <h4 className='text-white font-semibold py-2'>School Book (Sistema de Control Escolar)</h4>
        <p className='space-y-4 text-base leading-7 text-slate-100 font-semibold dark:text-slate-200'>Realizado con: </p>
        <p className='space-y-4 text-sm leading-7 text-slate-300 dark:text-slate-200'>Framework Laravel, Tailwind CSS & Livewire </p>
        <div className='flex justify-center pt-5 pb-2'>
          <button className='w-36 h-10 bg-indigo-200 font-semibold rounded-md hover:scale-90 duration-500'>
            Ver más</button>
        </div>
      </div>
      <div className='w-auto h-auto bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
        <div className="bg-blue-800 w-10 h-10 p-2 rounded-md">
          <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
        </div>
        <h4 className='text-white font-semibold py-2'>Developers (Página en ITI)</h4>
        <p className='space-y-4 text-base leading-7 text-slate-100 font-semibold dark:text-slate-200'>Realizado con: </p>
        <p className='space-y-4 text-sm leading-7 text-slate-300 dark:text-slate-200'>Framework Laravel, Tailwind CSS & Livewire </p>
        <div className='flex justify-center pt-5 pb-2'>
          <button className='w-36 h-10 bg-indigo-200 font-semibold rounded-md hover:scale-90 duration-500'>
            Ver más</button>
        </div>
      </div>
      <div className='w-auto h-auto bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
        <div className="bg-blue-800 w-10 h-10 p-2 rounded-md">
          <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
        </div>
        <h4 className='text-white font-semibold py-2'>School Book (Sistema de Control Escolar)</h4>
        <p className='space-y-4 text-base leading-7 text-slate-100 font-semibold dark:text-slate-200'>Realizado con: </p>
        <p className='space-y-4 text-sm leading-7 text-slate-300 dark:text-slate-200'>Framework Laravel, Tailwind CSS & Livewire </p>
        <div className='flex justify-center pt-5 pb-2'>
          <button className='w-36 h-10 bg-indigo-200 font-semibold rounded-md hover:scale-90 duration-500'>
            Ver más</button>
        </div>
      </div>
      <div className='w-auto h-auto bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
        <div className="bg-blue-800 w-10 h-10 p-2 rounded-md">
          <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
        </div>
        <h4 className='text-white font-semibold py-2'>School Book (Sistema de Control Escolar)</h4>
        <p className='space-y-4 text-base leading-7 text-slate-100 font-semibold dark:text-slate-200'>Realizado con: </p>
        <p className='space-y-4 text-sm leading-7 text-slate-300 dark:text-slate-200'>Framework Laravel, Tailwind CSS & Livewire </p>
        <div className='flex justify-center pt-5 pb-2'>
          <button className='w-36 h-10 bg-indigo-200 font-semibold rounded-md hover:scale-90 duration-500'>
            Ver más</button>
        </div>
      </div>
      <div className='w-auto h-auto bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
        <div className="bg-blue-800 w-10 h-10 p-2 rounded-md">
          <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
        </div>
        <h4 className='text-white font-semibold py-2'>School Book (Sistema de Control Escolar)</h4>
        <p className='space-y-4 text-base leading-7 text-slate-100 font-semibold dark:text-slate-200'>Realizado con: </p>
        <p className='space-y-4 text-sm leading-7 text-slate-300 dark:text-slate-200'>Framework Laravel, Tailwind CSS & Livewire </p>
        <div className='flex justify-center pt-5 pb-2'>
          <button className='w-36 h-10 bg-indigo-200 font-semibold rounded-md hover:scale-90 duration-500'>
            Ver más</button>
        </div>
      </div> */}

      </section>


      <section className='flex flex-col items-center px-8 pb-7 md:px-12 md:pt-10 lg:px-24 pt-20'>
        <div className='text-justify md:text-center' data-aos="zoom-in-left" data-aos-delay="100" data-aos-duration="900">
          <h3 className='font-bold text-blue-700 text-center text-base pb-3 md:text-lg dark:text-yellow-300'>Autodidacta</h3>
          <h2 className='font-bold text-3xl md:text-3xl text-blue-800 pb-4 dark:text-white'>Cada día me gusta aprender cosas nuevas</h2>
          <p className='space-y-4 text-base leading-7 text-gray-600 lg:px-44 dark:text-slate-200'>Soy una persona muy curiosa con las tecnologias, gracias a esto he tenido la experiencia en muchas plataformas, plataformas que usan Inteligencia Artificial, Diseño, Administración en el proceso del desarrollo de software, lenguajes de programación, etc. Además de mis proyectos anteriores tengo la experiencia de trabajar con muchas otras herramientas.</p>
        </div>

        <div className='flex flex-col w-full gap-16 pt-24 md:flex-row justify-center lg:px-44' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
          <div className='flex gap-5 md::w-5/12'>
            <div className="bg-blue-800 w-10 h-10 p-2 rounded-xl">
              <svg width="24" height="24" viewBox="0 0 24 24"><path d="M11.25 9.541l-2.25-2.182.929-.929 1.321 1.253 2.821-2.892.929.93-3.75 3.82zm7.676-3.819c-.482 1.41-.484 1.139 0 2.555.05.147.074.297.074.445 0 .449-.222.883-.615 1.156-1.256.87-1.09.651-1.562 2.067-.198.591-.77.99-1.415.99h-.003c-1.549-.005-1.28-.088-2.528.789-.262.184-.569.276-.877.276s-.615-.092-.876-.275c-1.249-.878-.98-.794-2.528-.789h-.004c-.645 0-1.216-.399-1.413-.99-.473-1.417-.311-1.198-1.562-2.067-.395-.274-.617-.708-.617-1.157 0-.148.024-.298.074-.444.483-1.411.484-1.139 0-2.555-.05-.147-.074-.297-.074-.445 0-.45.222-.883.616-1.157 1.251-.868 1.089-.648 1.562-2.067.197-.591.769-.99 1.413-.99h.004c1.545.005 1.271.095 2.528-.79.262-.183.569-.274.877-.274s.615.091.876.274c1.248.878.98.795 2.528.79h.003c.646 0 1.217.399 1.415.99.473 1.416.307 1.197 1.562 2.067.394.273.616.707.616 1.156 0 .148-.024.299-.074.445zm-2.176 1.278c0-2.623-2.127-4.75-4.75-4.75s-4.75 2.127-4.75 4.75 2.127 4.75 4.75 4.75 4.75-2.128 4.75-4.75zm-7.385 7.931c-.766 0-1.371-.074-1.873-.213-.308 3.068-1.359 5.37-3.492 7.592.854.107 1.95-.094 2.833-.56.317.636.65 1.43.767 2.25 2.009-2.299 3.266-5.054 3.734-8.071-.943-.181-1.234-.496-1.969-.998zm5.27 0c-.737.507-1.043.82-1.968.998.47 3.017 1.726 5.772 3.733 8.071.116-.82.449-1.614.767-2.25.883.465 1.979.667 2.833.56-2.13-2.219-3.168-4.531-3.479-7.595-.503.141-1.112.216-1.886.216z" fill="#FFFFFF" /></svg>
            </div>
            <div>
              <h3 className='font-bold text-blue-700 text-base md:text-lg dark:text-white'>Certificados o Logros</h3>
              <a href='/JesusEcheverria.github.io/Images/ConstaLogros/C_Ingles.jpg' target="_blank" rel="noopener noreferrer">
                <p className='text-sky-500 hover:text-sky-700 pt-2 '>Constancia Inglés &rarr;</p>
              </a>
              <a href='/JesusEcheverria.github.io/Images/ConstaLogros/R_Laravel.jpg' target="_blank" rel="noopener noreferrer">
                <p className='text-sky-500 hover:text-sky-700 pt-2 '>Constancia Curso Laravel &rarr;</p>
              </a>
              <a href='/JesusEcheverria.github.io/Images/ConstaLogros/CertifiHTMLCSS.png' target="_blank" rel="noopener noreferrer">
                <p className='text-sky-500 hover:text-sky-700 pt-2 '>Certificado HTML & CSS &rarr;</p>
              </a>
              <a href='/JesusEcheverria.github.io/Images/ConstaLogros/CertifiProgramation.png' target="_blank" rel="noopener noreferrer">
                <p className='text-sky-500 hover:text-sky-700 pt-2 '>Certificado Introducción a la Programación &rarr;</p>
              </a>
              <a href='/JesusEcheverria.github.io/Images/ConstaLogros/CertifiElectron.png' target="_blank" rel="noopener noreferrer">
                <p className='text-sky-500 hover:text-sky-700 pt-2 '>Certificado Curso Electron &rarr;</p>
              </a>
            </div>
          </div>

          <div className='flex gap-5 md:w-7/12'>
            <div className="bg-blue-800 w-10 h-10 p-2 rounded-xl">
              <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
            </div>
            <div>
              <h3 className='font-bold text-blue-700 text-base md:text-lg dark:text-white'>herramientas</h3>
              <div className='grid grid-cols-5 gap-6 pt-5 md:grid-cols-6'>
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/Logos/Laravel.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/React.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Asp.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Node.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Livewire.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Sass.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-10' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Bootstrap.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Android.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-10' src="/JesusEcheverria.github.io/Images/Logos/Java.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/Logos/Git.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/Logos/Blender.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Canva.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Figma.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Lucid.png" alt="" />
                <img className='hover:scale-150 ease-in duration-300 h-8' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Monday.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      </section>


     {/*  <div className='w-auto h-auto bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
        <div className="bg-blue-800 w-10 h-10 p-2 rounded-md">
          <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
        </div>
        <h4 className='text-white font-semibold py-2'>School Book (Sistema de Control Escolar)</h4>
        <p className='space-y-4 text-base leading-7 text-slate-100 font-semibold dark:text-slate-200'>Realizado con: </p>
        <p className='space-y-4 text-sm leading-7 text-slate-300 dark:text-slate-200'>Framework Laravel, Tailwind CSS & Livewire </p>
        <div className='flex justify-center pt-5 pb-2'>
          <button className='w-36 h-10 bg-indigo-200 font-semibold rounded-md hover:scale-90 duration-500'>
            Ver más</button>
        </div>
      </div> */}


    </div>
  )
}