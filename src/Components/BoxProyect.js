import React from 'react'
import { Link } from 'react-router-dom'

export default function BoxProyect(props) {
    return (
       <div className='w-auto h-auto' data-aos="zoom-out-up">
         <section className=' bg-gray-700 rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5 dark:bg-slate-600'>
             <figure className="bg-blue-800 w-10 h-10 p-2 rounded-md">
                 <svg width="24" height="24"><path d="M18.799 7.038c-.496-.535-.799-1.252-.799-2.038 0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3c-.146 0-.29-.01-.431-.031l-3.333 6.032c.475.53.764 1.231.764 1.999 0 1.656-1.344 3-3 3s-3-1.344-3-3c0-.583.167-1.127.455-1.587l-2.565-3.547c-.281.087-.58.134-.89.134l-.368-.022-3.355 6.069c.451.525.723 1.208.723 1.953 0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3c.186 0 .367.017.543.049l3.298-5.967c-.52-.539-.841-1.273-.841-2.082 0-1.656 1.344-3 3-3s3 1.344 3 3c0 .617-.187 1.191-.507 1.669l2.527 3.495c.307-.106.637-.164.98-.164.164 0 .325.013.482.039l3.317-6.001zm-3.799 7.962c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-6-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill="#FFFFFF" /></svg>
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
