import React from 'react'

export default function RedesSociales(props) {
  return (
    <div className="hover:scale-125 ease-in duration-300">
    <a href={ props.url } target="_blank" rel="noopener noreferrer">
        <svg className={ props.size} viewBox="0 0 24 24">
            <path
                d={ props.path}
                fill="#ffffff" />
        </svg>
    </a>
</div>
  )
}
