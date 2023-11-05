import React from 'react'

export default function Proyectos() {
  return (
    <div className='h-auto flex flex-col justify-center items-center'>
    
      <section className='flex flex-col justify-center items-center w-full'>
        <h3 className='text-gray-900 text-3xl pb-2 lg:text-4xl font-semibold dark:text-gray-200 font-roboto'>Algunos de mis Proyectos</h3>
        <p className='text-gray-600 text-md lg:text-lg dark:text-gray-400 font-roboto'>Interfaces atractivas,  intuitivas y con un buen flujo de UX</p>
        
      </section>
       <section className='flex relative justify-center items-center w-full h-full'>
       
        {/* <article className='absolute top-10 left-0 w-72 h-56 rounded-md p-2 bg-white flotar z-10'>
        <img className="w-full rounded-md" src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK2.png" alt="" />
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h5 className='pt-3 text-base lg:text-md font-semibold font-roboto'>SchoolBook (Sistema Escolar)</h5>
         <div className='flex gap-5'>
           <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor"></path></svg>
           <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"></path></svg>
         </div>
        </div>
        </article>

        <article className='absolute bottom-10 left-10 w-64 h-56 rounded-md p-2 bg-white flotar z-10'>
        <img className="w-full rounded-md" src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl3.png" alt="" />
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h5 className='pt-3 text-base lg:text-md font-semibold font-roboto'>Cinteolt (sitio Web Restaurante)</h5>
          <div className='flex gap-5'>
            <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor"></path></svg>
            <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"></path></svg>
          </div>
        </div>
        </article>

        <article className='absolute bottom-0 w-64 h-40 rounded-md p-2 bg-white flotar z-10'>
        <img className="w-full rounded-md" src="/JesusEcheverria.github.io/Images/Developers/Developers3.jpg" alt="" />
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h5 className='pt-3 text-base lg:text-md font-semibold font-roboto'>Developers (Página ITI)</h5>
         <div className='flex gap-5'>
           <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor"></path></svg>
           <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"></path></svg>
         </div>
        </div>
        </article>

        <article className='absolute bottom-10 right-10 w-72 h-56 rounded-md p-2 bg-white flotar z-10'>
        <img className="w-full rounded-md" src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem6.png" alt="" />
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h5 className='pt-3 text-base lg:text-md font-semibold font-roboto'>Sistema Punto de Venta</h5>
          <div className='flex gap-5'>
            <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor"></path></svg>
            <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"></path></svg>
          </div>
        </div>
        </article>

        <article className='absolute top-10 right-0 w-72 h-auto rounded-md p-2 bg-white flotar z-10'>
        <img className="w-full rounded-md" src="/JesusEcheverria.github.io/Images/3D/Barril_3D.jpg" alt="" />
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h5 className='pt-3 text-base lg:text-md font-semibold font-roboto'>Modelos 3D (Autoaprendizaje)</h5>
        </div>
        <div className='flex justify-center pt-2'>
        <svg className='w-5 hover:scale-125 duration-200 hover:cursor-pointer' viewBox="0 0 15 15"><path d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"></path></svg>
        </div>
        </article> */}
          {/* <img className="absolute bottom-14 left-80 w-12 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Laravel.png" alt="" /> */}
          {/* <img className="absolute -bottom-8 right-6 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Java.png" alt="" /> */}
          {/* <span className="w-12 h-12 bg-transparent rounded-full absolute border  animate-pulse border-gray-300 dark:border-gray-700"></span>
          <span className="w-32 h-32 bg-transparent rounded-full absolute border animate-pulse border-gray-200 dark:border-gray-800"></span>
          <span className="w-64 h-64 bg-transparent rounded-full absolute border border-gray-200 dark:border-gray-800"></span>
          <span className="w-96 h-96 bg-transparent rounded-full absolute border border-gray-200 dark:border-gray-800"></span>
          <span className="w-[550px] h-[550px] bg-transparent rounded-full absolute border border-gray-100 dark:border-gray-900"></span> */}
          {/* <span className="w-16 h-16 bg-[#180828] rounded-full absolute dark:bg-[#A2E9C1] animate-ping"></span> */}
      </section>
      <section className='grid grid-cols-1 w-full py-14 gap-16 md:grid-cols-2 md:gap-10 lg:grid-cols-3 2xl:grid-cols-2'>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>SchoolBook 📒</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Encontraras botones y cards para poder utilizar en tus proyectos.
            </p>
          </div>
          <div>
            <a href='https://uiverse.io/profile/EcheverriaJesus' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/SchoolBook/SCHOOLBOOK2.png" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Cinteolt 🥗</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Te compartó los paso para traducir Laravel Breeze y Jetstream a español.
            </p>
          </div>
          <div>
            <a href='https://dev.to/echeverriajesus/breeze-y-jetstream-en-espanol-4onn' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/Cinteolt/Cinteotl3.png" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Modelos 3D 🎲</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Te compartó los paso para traducir Laravel Breeze y Jetstream a español.
            </p>
          </div>
          <div>
            <a href='https://dev.to/echeverriajesus/breeze-y-jetstream-en-espanol-4onn' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/3D/Barril_3D.jpg" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Developers 👨‍💻</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Encontraras botones y cards para poder utilizar en tus proyectos.
            </p>
          </div>
          <div>
            <a href='https://uiverse.io/profile/EcheverriaJesus' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/Developers/Developers3.jpg" alt="" />
            </a>
          </div>
        </article>
        <article className='w-full h-auto space-y-7'>
          <div className='text-center w-full'>
            <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>Pos System 🛒</h4>
            <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
              Te compartó los paso para traducir Laravel Breeze y Jetstream a español.
            </p>
          </div>
          <div>
            <a href='https://dev.to/echeverriajesus/breeze-y-jetstream-en-espanol-4onn' target='_blank' rel='noopener noreferrer'>
              <img className="rounded-lg hover:scale-95 duration-200" src="/JesusEcheverria.github.io/Images/PosSystem/PosSystem6.png" alt="" />
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}
