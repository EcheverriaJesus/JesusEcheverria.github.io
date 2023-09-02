import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-blue-500 p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-white font-bold text-2xl'>
          <a href='#'>Jesus Echeverria</a>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:w-auto`}
        >
          <ul className='md:flex md:space-x-4'>
            <li>
              <a href='#' className='text-white'>
                Experiencia
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Proyectos
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Acerca de
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Componentes
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Cursos
              </a>
            </li>
            <li>
              <a href='#' className='text-white'>
                Contacto
              </a>
            </li>
          </ul>
          {/* Iconos */}
          <div className='flex gap-2 md:ml-4'>
            {/* Agrega aquí tus íconos */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
