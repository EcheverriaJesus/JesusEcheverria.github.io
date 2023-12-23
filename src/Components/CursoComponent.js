import React from 'react';

export default function CursoComponent(props) {
    return (
        <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-indigo-600 mb-1 sm:mb-0 dark:text-orange-500">{ props.title }<span className='pl-3 text-sm text-indigo-500 dark:text-orange-400'>{ props.next }</span></div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-gray-200 rounded-full">{ props.year }</time>
                <div className="text-xl font-bold text-slate-900 dark:text-gray-200">{ props.subtitle }</div>
            </div>
            <p className="text-slate-500 dark:text-gray-300">{ props.description }</p>
            <a href={ props.url } target='_blank' rel='noopener noreferrer' className={`${props.habilitado} text-blue-600 dark:text-blue-300 hover:font-semibold`}>Ver Contenido &rarr;</a>
        </div>
    )
}