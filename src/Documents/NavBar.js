import React, { useState } from 'react';

const Navbar = () => {
  const [abierto, setAbierto] = useState(false);

  const status = () => {
    setAbierto(!abierto);
  };

  let Links = [
    {name:"Experiencia",link:"/"},
    {name:"Proyectos",link:"/"},
    {name:"Acerca de",link:"/"},
    {name:"Componentes",link:"/"},
    {name:"Cursos",link:"/"},
    {name:"Contacto",link:"/"}
  ]

  return (
    <div className=''>
      <nav className='flex flex-col items-start w-full bg-gray-900 fixed top-0 left-0 z-50 pt-2 px-4 sm:px-6 md:px-8 md:flex-row lg:px-12 lg:bg-inherit xl:px-24 2xl:px-48  lg:py-5 lg:items-end'>
      {/* Nombre en el NavBar */}
       <div className='flex items-center justify-between w-full h-10 lg:w-auto'>
         <div className='text-white font-bold text-2xl pr-9'>
           <a href='/' className='flex gap-2'>
             <p className='first-letter:text-3xl first-letter:text-blue-400'>Jesus</p>
             <p className='first-letter:text-3xl first-letter:text-blue-400'>Echeverria</p>
           </a>
         </div>
        
         {/* Boton Hamburguesa */}
         <div className='flex pt-2 lg:hidden'>
           <button onClick={status} className='text-white'>
             <svg className='h-7 w-7' fill='none'
               viewBox='0 0 24 24'
               stroke='currentColor'>
               {abierto ? (
                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
               ) : (
                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
               )}
             </svg>
           </button>
         </div>
       </div>
      
        <div className={`${abierto ? 'block' : 'hidden'} pt-3 lg:flex lg:items-center lg:w-auto`}>
          <ul className='space-y-3 lg:flex lg:space-x-5 lg:space-y-0'>
          {
            Links.map((link, index) => (
            <li className='hover:scale-105 duration-200' key={index}>
              <a className='text-gray-300 hover:text-white' href={link.link}>{link.name}</a>
            </li>
          ))
          }
          </ul>
      
          {/* Iconos */}
          <div className='flex pt-4 gap-2 lg:ml-4 lg:pt-0 lg:pl-4'>
          {/* Icono Github */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/'>
                <svg viewBox="0 0 24 24" className="w-5 stroke-white stroke-2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </li>
                {/* Icono Linkeind */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/'>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 stroke-white stroke-2 feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </li>
      
            {/* Icono Instagram */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/'>
              <svg className='w-5 fill-white' viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </li>
            
            {/* Icono Youtube */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/'>
              <svg viewBox="0 0 24 24" className="w-5 stroke-white stroke-2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </li>
            
            {/* Icono Facebook */}
            <li className='list-none hover:scale-125 duration-200'>
              <a href='/'>
              <svg viewBox="0 0 24 24" className="w-5 stroke-white stroke-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>

  );
};
export default Navbar;
