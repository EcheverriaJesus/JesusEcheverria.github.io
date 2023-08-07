import React from 'react'

export default function NameSpan(props) {
    return (
        <div className='group relative'>
            <div className='flex h-8 w-8 items-center justify-center'>
                <img className='hover:scale-150 ease-in duration-500' src= { props.img } alt="" />
            </div>
            <span className='absolute -top-14 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100'>{ props.name }</span>
        </div>
    )
}
