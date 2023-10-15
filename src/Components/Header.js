import NavBar from '../Components/NavBar';

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
                <a href='https://github.com/EcheverriaJesus' target='_blank' rel='noopener noreferrer' >
                  <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-10 py-2.5 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                    Github
                  </button>
                </a>
                <div className='flex justify-center items-center'>
                  <a href='mailto:jesus.echeverria017@gmail.com' target="_blank" rel="noopener noreferrer">
                    <p className='text-lg text-gray-900 font-semibold hover:font-bold hover:scale-110 duration-200 dark:text-gray-300 dark:hover:text-white'>Contactame &rarr;</p>
                  </a>
                </div>
              </div>


              <div className='lg:hidden justify-center items-center'>
                <div className='relative pt-24 w-full h-full flex justify-center items-center'>
                  <div className='flex justify-center items-center w-56 h-40 rotate-2 rounded-md shadow-md shadow-blue-900 bg-gradient-to-r from-blue-800 to-gray-300'>
                    <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                      <img className="w-32 rounded-full hover:scale-150 duration-200" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" alt="" />
                    </a>
                  </div>
                  <img className="absolute -bottom-14 left-8 w-12 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/React.png" alt="" />
                  <img className="absolute -bottom-8 right-6 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Java.png" alt="" />
                  <img className="absolute top-32 -right-10 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Laravel.png" alt="" />
                  <img className="absolute top-36 right-56 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                  <img className="absolute bottom-36 -left-4 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Git.png" alt="" />
                  <img className="absolute top-4 right-2 w-12 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                  <img className="absolute top-4 right-28 w-9 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
                </div>
              </div>
            </div>


            <div className='hidden lg:flex flex-col justify-center items-center w-1/2 h-full '>
              <div className='relative w-full max-h-40 flex justify-center items-center'>
                <div className='flex justify-center items-center w-96 h-64 rotate-2 rounded-md shadow-md shadow-blue-900 bg-gradient-to-r from-blue-800 to-gray-300'>
                  <a className='abosulute' href='https://www.instagram.com/jesus_echeverria_01/' target='_blank' rel="noopener noreferrer">
                    <img className="w-56 rounded-full hover:scale-150 duration-200 hover:grayscale" src="/JesusEcheverria.github.io/Images/PerfilN.jpg" alt="" />
                  </a>
                </div>
                <img className="absolute top-4 right-16 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Laravel.png" alt="" />
                <img className="absolute top-48 right-16 w-16 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Electronjs.png" alt="" />
                  <img className="absolute bottom-52 left-14 w-20 girarLogo" src="/JesusEcheverria.github.io/Images/LogoHerramientas/React.png" alt="" />
                <img className="absolute top-52 right-64 w-16 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Tailwind.png" alt="" />
                <img className="absolute top-48 left-16 w-12 flotar" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Git.png" alt="" />
                <img className="absolute bottom-20 left-8 w-14 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/Java.png" alt="" />
                <img className="absolute bottom-56 right-40 w-12 flotarIcono" src="/JesusEcheverria.github.io/Images/LogoHerramientas/C.png" alt="" />
              </div>
            </div>
          </section>
    </header>
  )
}
