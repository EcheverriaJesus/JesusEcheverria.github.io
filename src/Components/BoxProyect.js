import React from 'react'
import { Link } from 'react-router-dom'

export default function BoxProyect(props) {
    return (
       <div className='w-auto h-auto' data-aos="zoom-out-up">
         <section className='bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
             <figure className="bg-blue-800 w-10 h-10 p-2 rounded-md">
                 <svg width="24" height="24"><path d={props.d} fill="#FFFFFF" /></svg>
             </figure>
             <h4 className='text-white font-semibold py-2'>{props.title}</h4>
             <p className='space-y-4 text-base leading-7 text-slate-100 font-semibold dark:text-slate-200'>Realizado con: </p>
             <p className='space-y-4 text-sm leading-7 text-slate-300 dark:text-slate-200'>{props.made}</p>
             <div className='flex justify-center pt-5 pb-2'>
                 <Link to={props.url}>
                     <button className='w-36 h-10 bg-indigo-200 font-semibold rounded-md hover:scale-90 duration-500'> Ver más</button>
                 </Link>
             </div>
         </section>
       </div>
    )
}
