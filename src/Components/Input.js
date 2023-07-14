import React from 'react'

export default function Input(props) {
    return (
        <div>
            <input className='flex text-white text-xs w-80 h-auto bg-transparent border-none' placeholder={ props.description } type={ props.type }></input>
            <span className='absolute w-80 border-b border-white'></span>
        </div>
    )
}
