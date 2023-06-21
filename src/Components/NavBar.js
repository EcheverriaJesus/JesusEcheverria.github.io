import React from 'react'
import { Navbar } from 'flowbite-react';

export default function NavBar() {
  return (
    <div>
      <Navbar className='md:bg-blue-900 text-white' fluid rounded>
  <Navbar.Brand href="/src/App.js" className='lg:pl-10'>
    <img alt="" className="mr-3 h-8 sm:h-9 rounded-full" src="/public/Images/Perfil.jpg"/>
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Jesus Echeverria
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className='lg:pr-10'>
    <Navbar.Link active href="#" className='md:text-white'>
      <p> Home </p>
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      <p>
        About
      </p>
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      Services
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      Pricing
    </Navbar.Link>
    <Navbar.Link href="#" className='md:text-white'>
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
