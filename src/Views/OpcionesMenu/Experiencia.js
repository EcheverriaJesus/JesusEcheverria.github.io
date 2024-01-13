import React from 'react'
import Slider from '../../Components/Slider'
import ContributionComponent from '../../Components/ContributionComponent'
import TitleComponents from '../../Components/TitleComponents'

export default function Experiencia() {
/*   let certificados = [
    { name: "Constancia de Inglés", number: "1", url: "/JesusEcheverria.github.io/Images/ConstaLogros/C_Ingles.jpg" },
    { name: "Constancia Curso Laravel", number: "2", url: "/JesusEcheverria.github.io/Images/ConstaLogros/R_Laravel.jpg" },
    { name: "Certificado HTML & CSS", number: "3", url: "/JesusEcheverria.github.io/Images/ConstaLogros/CertifiHTMLCSS.png" },
    { name: "Certificado Introducción a la Programación", number: "4", url: "/JesusEcheverria.github.io/Images/ConstaLogros/CertifiProgramation.png" },
    { name: "Certificado Curso Electron", number: "5", url: "/JesusEcheverria.github.io/Images/ConstaLogros/CertifiElectron.png" }
  ] */

  /*   let otherAreas = [
      { title: "Redes", description: "Tengo Experiencia en la instalación de CCTV, Realicé una instalación en el Instituto Tecnólogico de Iguala." },
      { title: "Diseño", description: "Realizo diseños para folletos, invitaciones o presentaciones." },
      { title: "Documentación", description: "Tengo experiencia en la elaboración de esquemas y documentación de software." }
    ] */

  return (
    <div className='flex flex-col h-auto w-full space-y-20 lg:space-y-28 pb-24'>
      <section>
        <div className='pb-10'>
          <TitleComponents title='¡Contribuciones!' />
        </div>
        <div className='space-y-10 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent'>
          <ContributionComponent title="Instituto Tecnólogico de Iguala" year="2023" description="Contribuí en el mantenimiento de la página del departamento de Sistemas y Computacion en el Tecnólogico de Iguala." />
          <ContributionComponent title="Sistema de Control Escolar" year="2023" description="Realicé un proyecto de un control escolar para una secundaria junto con un equipo de desarrollo." />
          <ContributionComponent title="Curso" year="2023" description="Impartí un curso de programacion en el tecnologico de Iguala." />
          <ContributionComponent title="Página Web" year="2023" description="Desarrollé la página web de la consultoria Nissiapp" />
        </div>
      </section>

      <section className='flex flex-col items-center w-full gap-0 lg:gap-10 lg:flex-row'>
        <article className='font-roboto space-y-2 lg:space-y-7 w-full lg:w-1/2'>
          <div className='flex'>
            <span className='h-3 w-3 rounded-full bg-green-500 animate-pulse'></span><TitleComponents title='Estado Laboral__' />
          </div>
          <p className='text-gray-700 text-sm lg:text-base dark:text-gray-400'>Actualmente estoy laborando en una consultora de software, en la cual estoy desarrollando mis conocimientos tanto para el Back end como para el Front end.</p>
        </article>
        <article className='w-full md:w-1/2'>
          <img src='/JesusEcheverria.github.io/Images/laboral.png' alt='' />
        </article>
      </section>


      <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="lg:flex lg:items-center">
            <div class="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br/> awesome Components</h1>

                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configuration</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>

                <div class="md:flex md:items-start md:-mx-4">
                    <span class="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                        </svg>
                    </span>

                    <div class="mt-4 md:mx-4 md:mt-0">
                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>

            <div class="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img class="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem]" src="/JesusEcheverria.github.io/Images/laboral.png" alt=""/>
            </div>
        </div>

       

        <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
         

            

            <div class="flex items-center justify-center col-span-1 md:col-span-3 lg:col-span-1">
                <svg class="h-5 mt-1 text-gray-500 fill-current dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.7 36.3"><g><path class="st0" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6m6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2m-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"></path></g></svg>
            </div>

            <div class="flex items-center justify-center col-span-2 md:col-span-3 lg:col-span-1">
                <svg class="h-8 text-gray-500 fill-current dark:text-gray-300" viewBox="0 0 2270 546" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M888.413 394.397l-31.127 144.717h-71.593L903.977 14.642h84.81l111.28 524.472h-72.371l-30.35-144.717H888.413zm100.373-58.364l-24.124-125.3c-7.003-35.797-14.007-82.463-19.441-119.828h-3.126c-5.434 38.13-13.242 86.365-20.22 119.827l-24.902 125.301h91.813zM1373.34.648v441.205c0 28.806 1.556 70.828 3.1 97.274h-63.02l-4.67-45.9h-2.334c-12.451 26.445-41.244 52.138-79.362 52.138-70.037 0-112.837-76.275-112.837-193.755 0-133.848 56.794-196.881 116.728-196.881 30.336 0 54.46 14.02 67.689 42.8h1.556V.648h73.15zm-73.163 304.258c0-6.991 0-15.551-.778-23.359-3.89-34.227-23.345-63.798-49.79-63.798-45.927 0-61.477 63.798-61.477 133.848 0 77.818 20.232 132.278 59.142 132.278 16.342 0 38.118-8.56 50.569-53.681 1.556-6.226 2.334-15.577 2.334-24.111V304.906zm247.399 240.446c-75.471 0-129.957-64.59-129.957-194.52 0-137.752 64.576-196.116 133.835-196.116 74.705 0 128.387 66.924 128.387 194.546 0 150.19-73.927 196.09-131.5 196.09h-.765zm2.321-57.573c45.122 0 55.251-80.153 55.251-137.726 0-56.82-10.116-137.739-56.794-137.739-48.26 0-57.586 80.919-57.586 137.74 0 63.02 10.895 137.725 58.364 137.725h.765zM1723.938.648h73.137V203.74h1.556c19.455-34.227 45.913-49.025 79.375-49.025 64.577 0 105.055 73.15 105.055 189.099 0 135.391-55.25 201.537-117.506 201.537-37.353 0-58.364-20.246-74.719-53.708h-3.086l-3.904 47.47h-63.02c1.556-25.668 3.112-68.468 3.112-97.274V.648zm73.137 404.618c0 8.586.778 17.146 3.113 23.358 11.66 45.926 34.24 55.251 49.012 55.251 43.579 0 59.92-57.572 59.92-135.391 0-72.371-17.106-130.735-60.698-130.735-24.124 0-43.578 28.793-49.025 56.03-1.557 7.781-2.335 17.91-2.335 25.68v105.807h.013zm293.92-40.453c.779 97.273 42.788 121.384 87.145 121.384 26.458 0 49.025-6.213 65.367-14.007l10.895 52.916c-22.568 11.673-56.808 17.912-90.27 17.912-94.925 0-144.73-71.594-144.73-188.321 0-123.732 56.795-199.994 135.392-199.994s115.172 75.484 115.172 170.435c0 18.664-.792 30.35-1.557 40.453l-177.413-.778zm109.712-52.126c.778-66.924-22.567-102.707-51.347-102.707-38.144 0-55.264 55.251-57.586 102.707h108.933z" fill-rule="nonzero"></path><path d="M373.462 16.043h218.501v523.07L373.462 16.044zm-153.926 0H.88v523.07l218.657-523.07zm76.976 192.77l139.218 330.3H344.5l-41.633-105.197H200.964l95.548-225.103z"></path></g></svg>
            </div>
        </div>
    </div>
</section>

      <section className='flex flex-col space-y-2 lg:space-y-7'>
        <div className='pb-7 text-left lg:text-center'>
          <TitleComponents title='¡¡ Tecnologias !!🛠️' />
          <span className='text-base pb-5 lg:text-base font-semibold font-roboto text-slate-500 dark:text-yellow-300'>-Cada dia se aprende algo nuevo-</span>
          <p className='text-gray-700 text-sm lg:text-base dark:text-gray-400'>Me gusta aprender cosas nuevas, y estoy dispuesto a seguir aprendiendo mas en cada lugar donde me encuentre...</p>
        </div>
        <Slider />
      </section>

      <section>
        <h1 className="text-2xl font-semibold font-signika text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Mi Experiencia En Otras Áreas!! 👨‍💻
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-[#172434]">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Redes</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Tengo Experiencia en la instalación de CCTV, Realicé una instalación en el Instituto Tecnólogico de Iguala.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-[#172434]">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Documentación</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Tengo experiencia en la elaboración de esquemas y documentación de software.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-[#172434]">
            <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Diseño</h1>
            <p className="text-gray-500 dark:text-gray-300">
              Realizo diseños para folletos, invitaciones o presentaciones.
            </p>
          </div>
        </div>
      </section>

      {/*  */}
      <section>
        <h1 className="text-2xl font-semibold font-signika text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          Certificados o Logros🏅
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-5">
          <div className="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Constancia de Inglés</h1>
            <a href="/" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
          <div className="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Constancia Curso Laravel</h1>
            <a href="/" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
          <div className="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Certificado HTML & CSS</h1>
            <a href="/" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
          <div className="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Certificado Introducción a la Programación</h1>
            <a href="/" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>
          <div className="p-7 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Certificado Curso Electron</h1>
            <a href="/" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* <section>
        <TitleComponents title='Certificados o Logros🏅' />
        <div className='flex flex-col items-center gap-7 lg:gap-10 lg:flex-row md:justify-between pt-5 lg:pt-10'>
          {
            certificados.map((certificado, index) => (
              <a key={index} href={certificado.url} target='_blank' rel='noopener noreferrer' className='bg-white shadow-xl flex text-center font-bold  text-gray-700 items-center p-10 rounded-sm hover:scale-95 duration-200 gap-2'><div className='h-7 w-10 rounded-full bg-blue-600 text-white'>{certificado.number}</div>{certificado.name}</a>
            ))
          }
        </div>
      </section> */}
    </div>
  )
}
