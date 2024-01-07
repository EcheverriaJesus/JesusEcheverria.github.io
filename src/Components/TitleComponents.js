import React from 'react'

export default function TitleComponents(props) {
    return (
        <h3 className='text-2xl text-left lg:text-center lg:text-5xl font-semibold font-signika text-gray-700 dark:text-white pb-3'>{props.title}</h3>
    )
}
