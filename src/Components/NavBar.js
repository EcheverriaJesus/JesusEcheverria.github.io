/* import React from 'react' */
import { useState, useEffect } from 'react';
import { Navbar } from 'flowbite-react';

export default function NavBar() {
/*  */
  const [theme,setTheme] = useState("light");
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  /*  */

  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar className='fixed top-0 left-0 w-full z-50 text-black md:text-white md:bg-blue-900 lg:px-16' fluid rounded>
        <Navbar.Brand href="#home" className='lg:pl-10' onClick={scrollToSection}>
          <img alt="" className="mr-3 h-8 sm:h-9 rounded-full" src="/JesusEcheverria.github.io/Images/Perfil.jpg" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Jesus Echeverria
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='lg:pr-10'>
          <Navbar.Link href="#home" className='md:text-white' onClick={scrollToSection}>
            <p className="md:text-white"> Inicio </p>
          </Navbar.Link>
          <Navbar.Link href="#about-me" className='md:text-white' onClick={scrollToSection}>
            <p>
              Acerca De
            </p>
          </Navbar.Link>
          <Navbar.Link href="#experience" className='md:text-white' onClick={scrollToSection}>
            Experiencia
          </Navbar.Link>
          <Navbar.Link href="#Activities" className='md:text-white' onClick={scrollToSection}>
            Otras Actividades
          </Navbar.Link>
          <Navbar.Link href="#footer" className='md:text-white' onClick={scrollToSection}>
            Contacto
          </Navbar.Link>
          <Navbar.Link href="/JesusEcheverria.github.io/Documents/CV_JN.pdf" target="_blank" rel="noopener noreferrer" className='md:text-white'>
            <svg className='hidden w-6 md:flex hover:scale-125 ease-in duration-300' viewBox="0 0 24 24" fillRule="evenodd">
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="#FFFFFF" />
            </svg>

            <svg className='flex hover:scale-125 ease-in duration-300 md:hidden w-6' viewBox="0 0 24 24" fillRule="evenodd">
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="#000000" />
            </svg>
          </Navbar.Link>
          <Navbar.Link className='bg-red-500 dark:bg-white' onClick={handleThemeSwitch}>
            Cambiar Modo
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
