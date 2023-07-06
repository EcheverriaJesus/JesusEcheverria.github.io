import React from 'react'

export default function Card_Proyect(props) {
    return (
       
            <div className='flex flex-col w-full h-80 rounded-b-2xl shadow-2xl mb-5'>
                <div className='flex justify-center bg-gradient-to-t from-[#50a7cf] to-[#254d72] w-full h-1/2 rounded-t-2xl p-2'>
                <img className="h-6/7 rounded-lg" src={ props.image } alt="" />
                </div>
                <div className='flex flex-col h-1/2 px-5 py-4 rounded-b-2xl bg-white'>
                    <h4 className='font-semibold text-sm'>{ props.title }</h4>
                    <p className='font-semibold text-gray-700 pt-2'>Made with:</p>
                    <p className='font-normal text-slate-500 text-xs pb-3'>{ props.made }</p>
                    <div className='flex justify-center'>
                        <div className='flex gap-2 py-2 px-5 rounded-2xl cursor-pointer bg-[#e3fff9] hover:scale-[1.1] ease-in duration-300 hover:text-black hover:font-semibold'>
                            <svg className='w-7' viewBox="0 0 24 24">
                                <path
                                    d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
                                    fill="#000000" />
                            </svg>
                            <a href={ props.url } rel="noopener noreferrer">
                                <button className='text-gray-700'> See More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

    )
}
