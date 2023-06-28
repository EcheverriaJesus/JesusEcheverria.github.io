import React from 'react'
import { Navbar } from 'flowbite-react';

export default function NavBar() {
  return (
    <div>
      <Navbar className='text-black md:text-white md:bg-blue-900' fluid rounded>
  <Navbar.Brand href="/JesusEcheverria.github.io" className='lg:pl-10'>
    <img alt="" className="mr-3 h-8 sm:h-9 rounded-full" src="/JesusEcheverria.github.io/Images/Perfil.jpg"/>
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Jesus Echeverria
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className='lg:pr-10'>
    <Navbar.Link active href="#" className='md:text-white'>
      <p className="text-yellow-200"> Home </p>
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      <p>
        About Me
      </p>
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      Experience
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      Services
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      Contact
    </Navbar.Link>
{/* Prueba */}
    <Navbar.Link href="/JesusEcheverria.github.io/Documents/CV_JN.pdf" className='md:text-white'>
    <svg className='hidden w-6 md:flex hover:scale-125 ease-in duration-300' viewBox="0 0 24 24" fillRule="evenodd">
      <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="#FFFFFF"/>
    </svg>
    
    <svg className='flex hover:scale-125 ease-in duration-300 md:hidden w-6' viewBox="0 0 24 24" fillRule="evenodd">
      <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" fill="#000000"/>
    </svg>
    </Navbar.Link>

  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
