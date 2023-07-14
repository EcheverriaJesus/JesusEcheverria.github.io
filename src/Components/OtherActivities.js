import React from 'react'

export default function OtherActivities() {
  return (
    <div className='flex flex-col justify-between items-center w-full px-12 md:px-24 md:flex-row'>
      <div className='w-full text-justify space-y-3 md:w-5/12'>
        <h3 className='font-bold text-3xl md:text-5xl text-blue-600'>Laravel Course</h3>
        <h3 className='font-bold text-base md:text-lg'>I taught a course at the Tecnológico Nacional de México Campus Iguala with a classmate.</h3>
        <p className='font-normal text-sm text-justify text-slate-600'>This experience helped me gain a deeper understanding of this technology and provided me with the opportunity to share my knowledge with others people, enhancing my teaching skills in the process.</p>
        <a href='https://www.canva.com/design/DAFi5arjYKY/WBn-utXa8bTUS6ieFLPzlg/view?utm_content=DAFi5arjYKY&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target="_blank" rel="noopener noreferrer">
          <p className='font-normal text-sm text-blue-500 pt-4'>see material...</p>
        </a>
      </div>
      <div className='w-full h-full pt-5 md:w-6/12 md:pt-0'>
        <img className="w-full h-auto md:h-36 lg:h-96" src="/JesusEcheverria.github.io/Images/CursoL.jpg" alt="" />
      </div>
    </div>
  )
}
