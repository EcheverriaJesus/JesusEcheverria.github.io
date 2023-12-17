import React from 'react'

export default function DescriptionEceprience() {
    return (
        <section className='relative bg-gray-800 flex items-center w-full h-80 md:h-60 lg:h-64 px-5 lg:px-10 overflow-hidden rounded-sm'>
            <div className='font-roboto space-y-2 z-40 margen'>
                <h3 className='text-base lg:text-lg text-white'>Mi Experiencia en el Mundo del</h3>
                <h3 className='text-2xl lg:text-4xl font-bold text-cyan-300'>Desarrollo de Software !👨‍💻</h3>
                <p className='text-gray-300 text-sm lg:text-base'>Desarrollador Junior con experiencia en lenguajes de programación como Java, PHP y
                    JavaScript. He trabajado con equipos de desarrollo utilizando herramientas como jira,
                    github, Bitbucket, tambien tengo experiencia en manejo de versiones con Git y realizó
                    componentes web de código libre.<br/><br/>
                    <span className='text-gray-400'>He realizado Api`s con Laravel y Landing pages con React.</span>
                </p>
            </div>
            <div className="w-60 h-48 absolute inset-10 m-auto blur-3xl rounded-full bg-indigo-900"></div>
        </section>
    )
}