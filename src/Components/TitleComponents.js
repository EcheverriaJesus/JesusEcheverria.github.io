import React from 'react'

export default function TitleComponents(props) {
    return (
        <h3 className='text-2xl font-semibold font-signika text-center text-gray-800 capitalize lg:text-3xl dark:text-white'>{props.title}</h3>
    )
}
