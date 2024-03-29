import NavBar from '../Components/NavBar'
import BotonGitHub from './BotonGitHub'
import Perfil from '../Images/PerfilN.jpg'
import LogoReact from '../Images/LogoHerramientas/logo192.png'
import LogoJava from '../Images/LogoHerramientas/Java.png'
import LogoLaravel from '../Images/LogoHerramientas/Laravel.png'
import LogoTailwind from '../Images/LogoHerramientas/Tailwind.png'
import LogoGit from '../Images/LogoHerramientas/Git.png'
import LogoElectron from '../Images/LogoHerramientas/Electronjs.png'
import LogoC from '../Images/LogoHerramientas/C.png'

export default function Header() {
  return (
    <header className='h-screen'>
       <NavBar />
          <section className='flex w-full h-full lg:flex-row'>
            <div className='flex flex-col items-center justify-start pt-24 w-full h-full lg:w-1/2 text-center lg:text-start lg:items-start lg:justify-center' data-aos="fade-up-right">
              <div className='flex flex-col gap-2 text-white font-bold font-roboto pt-0 lg:pt-0'>
                <span className='text-black dark:text-white text-2xl lg:text-3xl pb-3 font-signika 2xl:text-4xl'>Hola 👋, Soy</span>
                <h1 className='hidden lg:flex text-orange-500 text-4xl font-signika 2xl:text-5xl'>Jesús Noé Echeverria Medina</h1>
                <h1 className='text-orange-500 text-4xl font-cantora lg:hidden'>Jesús Echeverria</h1>
                <span className='text-3xl text-black dark:text-white lg:text-3xl font-signika'>Ingeniero en Sistemas Computacionales</span>
                <span className='text-red-500 text-2xl lg:text-3xl pt-2 dark:text-yellow-300 font-cantora'>Web Developer!!</span>
              </div>

              <div className='flex justify-center w-full pt-9 gap-7 md:gap-16 lg:justify-start'>
                <BotonGitHub url='https://github.com/EcheverriaJesus'/>
                <div className='flex justify-center items-center'>
                  <a href='mailto:jesus.echeverria017@gmail.com' target="_blank" rel="noopener noreferrer">
                    <p className='text-base text-gray-900 font-semibold hover:font-bold hover:scale-110 duration-200 dark:text-gray-300 dark:hover:text-white md:text-lg'>Contactame &rarr;</p>
                  </a>
                </div>
              </div>

              <div className='md:hidden justify-center items-center'>
                <div className='relative pt-24 w-full h-full flex justify-center items-center'>
                  <div className='flex justify-center items-center w-56 h-40 rotate-2 rounded-md shadow-md shadow-orange-900 bg-gradient-to-r from-orange-800 to-orange-300'>
                    <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                      <img className="w-32 rounded-full hover:scale-150 duration-200" src={Perfil} alt="" />
                    </a>
                  </div>
                  <img className="absolute -bottom-14 left-8 w-12 girarLogo" src={LogoReact} alt="" />
                  <img className="absolute -bottom-8 right-6 w-14 animate-bounce" src={LogoJava} alt="" />
                  <img className="absolute top-32 -right-10 w-12 flotar" src={LogoLaravel} alt="" />
                  <img className="absolute top-36 right-56 w-14 flotarIcono" src={LogoTailwind} alt="" />
                  <img className="absolute bottom-36 -left-4 w-12 flotar" src={LogoGit} alt="" />
                  <img className="absolute top-4 right-2 w-12 girarLogo" src={LogoElectron} alt="" />
                  <img className="absolute top-4 right-28 w-9 animate-bounce" src={LogoC} alt="" />
                </div>
              </div>
            </div>

            <div className='hidden lg:flex flex-col justify-center items-center w-1/2 h-full'>
              <div className='relative w-full max-h-40 flex justify-center items-center'>
                <div className='flex justify-center items-center w-96 h-64 rotate-2 rounded-md shadow-md shadow-orange-900 bg-gradient-to-r from-orange-800 to-gray-300'>
                  <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                    <img className="w-56 rounded-full hover:scale-150 duration-200 hover:grayscale" src={Perfil} alt="" />
                  </a>
                </div>
                <img className="absolute top-4 right-16 w-12 animate-bounce" src={LogoLaravel} alt="" />
                <img className="absolute top-48 right-16 w-16 girarLogo" src={LogoElectron} alt="" />
                <img className="absolute bottom-52 left-14 w-20 girarLogo" src={LogoReact} alt="" />
                <img className="absolute top-52 right-64 w-16 flotarIcono" src={LogoTailwind} alt="" />
                <img className="absolute top-48 left-16 w-12 animate-bounce" src={LogoGit} alt="" />
                <img className="absolute bottom-20 left-8 w-14 flotarIcono" src={LogoJava} alt="" />
                <img className="absolute bottom-56 right-40 w-12 flotarIcono" src={LogoC} alt="" />
              </div>
            </div>
          </section>
    </header>
  )
}
