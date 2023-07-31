import React from 'react'
import { Link } from 'react-router-dom'

export default function CardProyect(props) {
    return (
        <div className='flex flex-col w-full h-80 rounded-b-2xl shadow-2xl mb-5' data-aos="zoom-out-up">
            <figure className='flex justify-center bg-gradient-to-t from-[#50a7cf] to-[#254d72] w-full h-1/2 rounded-t-2xl p-2'>
                <img className="h-6/7 rounded-lg hover:scale-[1.05] ease-in-out duration-300" src={props.image} alt="" />
            </figure>
            <div className='flex flex-col h-1/2 px-5 py-4 rounded-b-2xl bg-white'>
                <h4 className='font-semibold text-sm'>{props.title}</h4>
                <p className='font-semibold text-gray-700 pt-2'>Hecho con:</p>
                <p className='font-normal text-slate-500 text-xs pb-3'>{props.made}</p>
                <div className='flex justify-center'>
                    <Link to={props.url}>
                        <div className='flex gap-2 py-2 px-5 rounded-2xl cursor-pointer bg-[#e3fff9] hover:scale-[1.1] ease-in duration-300 hover:text-black hover:font-semibold'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                            </svg>
                            <button className='text-gray-700'> Ver mas</button>
                        </div>
                    </Link>
                </div>

            </div>

        </div>
    )
}

