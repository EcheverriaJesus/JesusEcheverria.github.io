import React from 'react'

export default function ProjectComponent(props) {
    return (
        <article className='w-full h-auto space-y-7'>
            <div className='text-center w-full'>
                <h4 className='text-xl lg:text-2xl font-semibold font-roboto dark:text-white'>{props.title}</h4>
                <p className='font-roboto text-sm text-gray-700 dark:text-gray-400'>
                   {props.description}
                </p>
            </div>
            <div className='overflow-hidden rounded-lg'>
                <a href={props.url} target='_blank' rel='noopener noreferrer'>
                    <img className="duration-300 hover:scale-105" src={props.img} alt="Project" />
                </a>
            </div>
        </article>
    )
}