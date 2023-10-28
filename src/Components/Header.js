import NavBar from '../Components/NavBar';
import BotonGitHub from './BotonGitHub';

export default function Header() {
  return (
    <header className='h-screen'>
       <NavBar />
          <section className='flex fle-col w-full h-full lg:flex-row border-b border-gray-300 dark:border-gray-600'>
            <div className='flex flex-col items-center justify-center w-full h-full lg:w-1/2 lg:items-start' data-aos="fade-up-right">
              <div className='flex flex-col gap-2 text-white font-bold font-acme'>
                <span className='text-black dark:text-white text-2xl lg:text-3xl pb-3'>Hola 👋, Soy</span>
                <h1 className='bg-clip-text text-transparent bg-gradient-to-l from-violet-800 to-cyan-500 text-4xl lg:text-5xl dark:from-yellow-300 dark:to-cyan-500'>Jesús Noé Echeverria Medina</h1>
                <span className='text-3xl text-black dark:text-white lg:text-3xl font-roboto'>Ingeniero en Sistemas Computacionales</span>
                <span className='bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-fuchsia-600 text-2xl lg:text-3xl dark:bg-gradient-to-t pt-2'>Web Developer!!</span>
              </div>

              <div className='flex w-full pt-9 gap-16'>
                <BotonGitHub url='https://github.com/EcheverriaJesus'/>
                <div className='flex justify-center items-center'>
                  <a href='mailto:jesus.echeverria017@gmail.com' target="_blank" rel="noopener noreferrer">
                    <p className='text-lg text-gray-900 font-semibold hover:font-bold hover:scale-110 duration-200 dark:text-gray-300 dark:hover:text-white'>Contactame &rarr;</p>
                  </a>
                </div>
              </div>

              <div className='md:hidden justify-center items-center'>
                <div className='relative pt-24 w-full h-full flex justify-center items-center'>
                  <div className='flex justify-center items-center w-56 h-40 rotate-2 rounded-md shadow-md shadow-blue-900 bg-gradient-to-r from-blue-800 to-gray-300'>
                    <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                      <img className="w-32 rounded-full hover:scale-150 duration-200" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" alt="" />
                    </a>
                  </div>
                  <img className="absolute -bottom-14 left-8 w-12 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/logo192.png" alt="" />
                  <img className="absolute -bottom-8 right-6 w-14 animate-bounce" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Java.png" alt="" />
                  <img className="absolute top-32 -right-10 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Laravel.png" alt="" />
                  <img className="absolute top-36 right-56 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                  <img className="absolute bottom-36 -left-4 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Git.png" alt="" />
                  <img className="absolute top-4 right-2 w-12 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                  <img className="absolute top-4 right-28 w-9 animate-bounce" src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
                </div>
              </div>
            </div>

            <div className='hidden md:flex flex-col justify-center items-center w-1/2 h-full '>
              <div className='relative w-full max-h-40 flex justify-center items-center'>
                <div className='flex justify-center items-center w-96 h-64 rotate-2 rounded-md shadow-md shadow-blue-900 bg-gradient-to-r from-blue-800 to-gray-300'>
                  <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                    <img className="w-56 rounded-full hover:scale-150 duration-200 hover:grayscale" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" alt="" />
                  </a>
                </div>
                <img className="absolute top-4 right-16 w-12 animate-bounce" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Laravel.png" alt="" />
                <img className="absolute top-48 right-16 w-16 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                  <img className="absolute bottom-52 left-14 w-20 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/logo192.png" alt="" />
                <img className="absolute top-52 right-64 w-16 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                <img className="absolute top-48 left-16 w-12 animate-bounce" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Git.png" alt="" />
                <img className="absolute bottom-20 left-8 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Java.png" alt="" />
                <img className="absolute bottom-56 right-40 w-12 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
              </div>
            </div>
          </section>
    </header>
  )
}
