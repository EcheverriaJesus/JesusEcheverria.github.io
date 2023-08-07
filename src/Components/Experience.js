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

        <BoxProyect title={`${TitleSchoolBook} (Sistema Escolar)`} made="Framework Laravel, Livewire & Tailwind CSS" url="/SCHOOLBOOK" d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
        <BoxProyect title={`${TitleCinteolt} (Sitio Web Restaurante)`} made="Framework Laravel & Sass" url="/Cinteotl" d="M11.415 12.393l1.868-2.289c.425-.544.224-.988-.055-2.165-.205-.871-.044-1.854.572-2.5 1.761-1.844 5.343-5.439 5.343-5.439l.472.37-3.693 4.728.79.617 3.87-4.59.479.373-3.558 4.835.79.618 3.885-4.58.443.347-3.538 4.85.791.617 3.693-4.728.433.338s-2.55 4.36-3.898 6.535c-.479.771-1.425 1.161-2.334 1.167-1.211.007-1.685-.089-2.117.464l-2.281 2.795c2.445 2.962 4.559 5.531 5.573 6.829.771.987.065 2.421-1.198 2.421-.42 0-.853-.171-1.167-.573l-8.36-10.072s-.926.719-1.944 1.518c-3.172-5.184-6.267-11.661-6.267-13.955 0-.128-.034-.924.732-.924.245 0 .493.116.674.344.509.642 5.415 6.513 10.002 12.049m-2.952 3.617l1.953 2.365-4.115 5.055c-.295.378-.736.576-1.182.576-1.198 0-1.991-1.402-1.189-2.428l4.533-5.568z" />
        <BoxProyect title={`${TitleCrud} (CRUD)`} made="Framework Laravel, Livewire & Tailwind CSS" url="/POSCRUD" d="M7 24h-5v-9h5v1.735c.638-.198 1.322-.495 1.765-.689.642-.28 1.259-.417 1.887-.417 1.214 0 2.205.499 4.303 1.205.64.214 1.076.716 1.175 1.306 1.124-.863 2.92-2.257 2.937-2.27.357-.284.773-.434 1.2-.434.952 0 1.751.763 1.751 1.708 0 .49-.219.977-.627 1.356-1.378 1.28-2.445 2.233-3.387 3.074-.56.501-1.066.952-1.548 1.393-.749.687-1.518 1.006-2.421 1.006-.405 0-.832-.065-1.308-.2-2.773-.783-4.484-1.036-5.727-1.105v1.332zm-1-8h-3v7h3v-7zm1 5.664c2.092.118 4.405.696 5.999 1.147.817.231 1.761.354 2.782-.581 1.279-1.172 2.722-2.413 4.929-4.463.824-.765-.178-1.783-1.022-1.113 0 0-2.961 2.299-3.689 2.843-.379.285-.695.519-1.148.519-.107 0-.223-.013-.349-.042-.655-.151-1.883-.425-2.755-.701-.575-.183-.371-.993.268-.858.447.093 1.594.35 2.201.52 1.017.281 1.276-.867.422-1.152-.562-.19-.537-.198-1.889-.665-1.301-.451-2.214-.753-3.585-.156-.639.278-1.432.616-2.164.814v3.888zm3.79-19.913l3.21-1.751 7 3.86v7.677l-7 3.735-7-3.735v-7.719l3.784-2.064.002-.005.004.002zm2.71 6.015l-5.5-2.864v6.035l5.5 2.935v-6.106zm1 .001v6.105l5.5-2.935v-6l-5.5 2.83zm1.77-2.035l-5.47-2.848-2.202 1.202 5.404 2.813 2.268-1.167zm-4.412-3.425l5.501 2.864 2.042-1.051-5.404-2.979-2.139 1.166z" />
        <BoxProyect title={`${TitleDevelopers} (Página ITI)`} made="HTML, CSS & Framework-gob mx" url="/Developers" d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
        <BoxProyect title={`${Title3D} (Autoaprendizaje)`} made="Blender" url="/Proyect3D" d="m3.514 6.61c-.317.179-.514.519-.514.887v8.95c0 .37.197.708.514.887 1.597.901 6.456 3.639 8.005 4.512.152.085.319.128.487.128.164 0 .328-.041.477-.123 1.549-.855 6.39-3.523 7.994-4.408.323-.177.523-.519.523-.891v-9.055c0-.368-.197-.708-.515-.887-1.595-.899-6.444-3.632-7.999-4.508-.151-.085-.319-.128-.486-.128-.168 0-.335.043-.486.128-1.555.876-6.405 3.609-8 4.508m15.986 2.115v7.525l-6.75 3.722v-7.578zm-15 7.425v-7.458l6.75 3.75v7.511zm.736-8.769 6.764-3.813 6.801 3.834-6.801 3.716z" />
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
          <p className='space-y-4 text-base leading-7 text-gray-600 lg:px-44 dark:text-slate-200'>Soy una persona muy curiosa con las tecnologias, gracias a esto he tenido la experiencia en muchas plataformas, plataformas que usan Inteligencia Artificial, Diseño, Administración en el proceso del desarrollo de software, lenguajes de programación, etc. Además de mis proyectos anteriores tengo la experiencia de trabajar con muchas otras herramientas.
          </p>
        </div>

        <div className='flex flex-col w-full gap-16 pt-24 md:flex-row justify-center lg:px-40' data-aos="fade-up" data-aos-delay="100" data-aos-duration="900">
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

          <div className='flex gap-5 md:w-9/12'>
            <div className="bg-blue-800 w-10 h-10 p-2 rounded-xl">
              <svg width="24" height="24"><path d="M17.959 24c-1.729 0-3.376-.742-4.522-2.037-1.146-1.293-1.683-3.018-1.474-4.731.042-.343-.08-.693-.325-.938l-4.198-4.208c-.274-.274-.654-.432-1.043-.432l-.111.004c-1.683.129-3.373-.481-4.584-1.692-1.098-1.099-1.702-2.561-1.702-4.117 0-1.044.293-2.385.715-3.278l3.81 3.811c.435-.074.967-.394 1.404-.935.283-.35.427-.675.466-.91l-3.826-3.827c.889-.418 2.219-.71 3.255-.71 1.533 0 3.043.601 4.143 1.702 1.239 1.241 1.82 2.881 1.679 4.743-.023.328.096.651.329.885l4.3 4.31c.248.249.593.369.943.325 3.609-.46 6.782 2.411 6.782 5.994 0 3.331-2.71 6.041-6.041 6.041zm-11.563-14.343c.915 0 1.81.371 2.456 1.018l4.2 4.208c.676.678 1.009 1.646.892 2.593-.139 1.145.221 2.299.987 3.165.768.867 1.871 1.363 3.027 1.363 2.229 0 4.044-1.814 4.044-4.043 0-2.398-2.123-4.323-4.536-4.013-.981.122-1.923-.212-2.606-.896l-4.3-4.312c-.643-.647-.973-1.537-.906-2.445.097-1.283-.273-2.353-1.1-3.181-.493-.492-1.098-.833-1.758-1l1.49 1.491c.217 1 .125 1.946-.804 3.097-1.004 1.246-2.297 1.93-3.878 1.585l-1.49-1.491c.166.661.508 1.266 1 1.76.797.795 1.9 1.201 3.017 1.112l.265-.011zm11.275 7.222l1.079.289.289 1.079-.791.791-1.079-.29-.29-1.079.792-.79zm-.447-1.671l-2.015 2.014.737 2.75 2.749.738 2.014-2.014-.736-2.75-2.749-.738z" fill="#FFFFFF" /></svg>
            </div>
            <div>
              <h3 className='font-bold text-blue-700 text-base md:text-lg dark:text-white'>herramientas</h3>
              <div className='grid grid-cols-5 gap-10 pt-5 md:grid-cols-6'>


                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Electron.js</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/Logos/Laravel.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Laravel</span>
                </div>
                
                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/React.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>React.js</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Asp.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Asp.Net</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Node.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Node.js</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Livewire.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Livewire</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Sass.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Sass</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>TailwindCss</span>
                </div>
                
                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Bootstrap.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Bootstrap</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Android.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Android</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>C#</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/Logos/Java.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Java</span>
                </div>
                
                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/Logos/Git.png"alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Git</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/Logos/Blender.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Blender</span>
                </div>
                
                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Canva.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Canva</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Figma.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Figma</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Lucid.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Lucid</span>
                </div>

                <div className='group relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500'>
                    <img className='hover:scale-150 ease-in duration-500' src="/JesusEcheverria.github.io/Images/LogoHerramientas/Monday.png" alt="" />
                  </div>
                  <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>Monday</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  )
}