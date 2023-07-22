import React from 'react'
import { Link } from 'react-router-dom'

export default function InformationProyect(props) {
  return (
    <div className=''>
      <Link to="/" className='flex items-center w-48 h-auto'>
        <img alt="" className="mr-3 h-8 sm:h-9 rounded-full flotar" src="/JesusEcheverria.github.io/Images/Perfil.jpg" />
        <span className="text-lg font-bold">
          Jesus Echeverria
        </span>
      </Link>
    </div>
  )
}
