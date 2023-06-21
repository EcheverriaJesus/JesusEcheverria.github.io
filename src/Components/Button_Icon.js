import React from 'react'

export default function Button_Icon(props) {
    return (
        <div className="hover:scale-150 ease-in duration-300">
            <a href={ props.url} target="_blank" rel="noopener noreferrer">
                <svg className='w-9' viewBox="0 0 24 24">
                    <path
                        d={ props.path}
                        fill="#ffffff" />
                </svg>
            </a>
        </div>
    )
}
