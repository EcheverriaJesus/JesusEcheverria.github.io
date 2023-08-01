/* import React from 'react' */
import { useState, useEffect } from 'react';
import { Navbar } from 'flowbite-react';

export default function NavBar() {
  const [theme, setTheme] = useState("light");
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  /* Variable para realizar el efecto Scroll */
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  /* Funcion para verfiifcar el Efecto de Dark */
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


  return (
    <div>
      <Navbar className='fixed top-0 left-0 w-full z-50 text-black md:text-white md:bg-blue-900 lg:px-16' fluid rounded>
        <Navbar.Brand href="#home" className='lg:pl-10' onClick={scrollToSection}>
          <img alt="" className="mr-3 h-8 sm:h-9 rounded-full" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" />
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

            {/* Cuando el Dark esta desactivado */}
            <svg className='flex hover:scale-125 ease-in duration-300 md:hidden w-6 dark:hidden' viewBox="0 0 24 24" fillRule="evenodd">
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="#000000" />
            </svg>
            <svg className='hidden dark:flex w-6 hover:scale-125 ease-in duration-300 md:hidden md:dark:hidden' viewBox="0 0 24 24" fillRule="evenodd">
              <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="#FFFFFF" />
            </svg>
          </Navbar.Link>

          <Navbar.Link className='' onClick={handleThemeSwitch}>
            <svg className='cursor-pointer dark:hidden h-5  hover:scale-125 ease-in duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.719 2.082c-2.572 2.028-4.719 5.212-4.719 9.918 0 4.569 1.938 7.798 4.548 9.895-4.829-.705-8.548-4.874-8.548-9.895 0-5.08 3.808-9.288 8.719-9.918zm1.281-2.082c-6.617 0-12 5.383-12 12s5.383 12 12 12c1.894 0 3.87-.333 5.37-1.179-3.453-.613-9.37-3.367-9.37-10.821 0-7.555 6.422-10.317 9.37-10.821-1.74-.682-3.476-1.179-5.37-1.179zm0 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001z" fill='#FFFFFF' /></svg>

            <svg className='cursor-pointer hidden dark:flex h-5  hover:scale-125 ease-in duration-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.088 13.126l1.912-1.126-1.912-1.126c-1.021-.602-1.372-1.91-.788-2.942l1.093-1.932-2.22-.02c-1.185-.01-2.143-.968-2.153-2.153l-.02-2.219-1.932 1.093c-1.031.583-2.34.233-2.941-.788l-1.127-1.913-1.127 1.913c-.602 1.021-1.91 1.372-2.941.788l-1.932-1.093-.02 2.219c-.01 1.185-.968 2.143-2.153 2.153l-2.22.02 1.093 1.932c.584 1.032.233 2.34-.788 2.942l-1.912 1.126 1.912 1.126c1.021.602 1.372 1.91.788 2.942l-1.093 1.932 2.22.02c1.185.01 2.143.968 2.153 2.153l.02 2.219 1.932-1.093c1.031-.583 2.34-.233 2.941.788l1.127 1.913 1.127-1.913c.602-1.021 1.91-1.372 2.941-.788l1.932 1.093.02-2.219c.011-1.185.969-2.143 2.153-2.153l2.22-.02-1.093-1.932c-.584-1.031-.234-2.34.788-2.942zm-10.117 6.874c-4.411 0-8-3.589-8-8s3.588-8 8-8 8 3.589 8 8-3.589 8-8 8zm6.029-8c0 3.313-2.687 6-6 6s-6-2.687-6-6 2.687-6 6-6 6 2.687 6 6z" fill='#FFFFFF' /></svg>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
