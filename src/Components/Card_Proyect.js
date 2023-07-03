import React from 'react'

export default function Card_Proyect(props) {
    return (
        <div className='flex flex-col items-center w-full h-auto p-5 rounded-lg shadow-lg bg-[#f2f7ff] mb-10'>
            <img className="h-44 w-full rounded-lg hover:scale-[1.1] ease-in duration-300 mb-3" src={props.image} alt="" />
            <section className='flex flex-col mb-3'>
                <title className='flex justify-center items-center h-20'>
                    <h2 className='font-bold text-3xl md:text-3xl text-gray-800 text-center pb-5'>{props.title}</h2>
                </title>
                <div>
                    <p className='text-justify font-normal text-base text-gray-600 pb-5'>{props.description}</p>
                    <p className='font-semibold text-base text-gray-600'>Made with:</p>
                    <p className='font-normal text-sm text-gray-600 pt-1'> {props.made}</p>
                </div>
            </section>
            <div className='flotar hover:scale-125 ease-in duration-300'>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <svg className='w-9' viewBox="0 0 24 24">
                        <path
                            d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z"
                            fill="#000000" />
                    </svg>
                </a>
            </div>

            <div className='flex flex-col w-full h-80 rounded-b-2xl shadow-2xl bg-white'>
                <div className='flex bg-gradient-to-t from-[#50a7cf] to-[#254d72] w-full h-1/2 rounded-t-2xl p-2'>
                
                </div>
                <div className='flex flex-col h-1/2 px-5 pt-5'>
                    <h4 className='font-semibold text-sm'>SCHOOL BOOK "SISTEMA DE CONTROL ESCOLAR WEB</h4>
                    
                        <p className='font-semibold text-gray-700 pt-2'>Made with:</p>
                        <p className='font-normal text-slate-500 text-xs'>Laravel, Tailwind CSS & Livewire</p>
                        <div className=''>
                            <button> See More</button>
                        </div>

                </div>
            </div>

        </div>
    )
}
