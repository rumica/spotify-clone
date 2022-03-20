import React from 'react'
import { NavLink } from 'react-router-dom'

function Title({ more = false, title }) {
  return (
    <header className='flex items-center justify-between mb-4'>
        <NavLink to={more ?? '#'}>
            <h3 className='text-2xl text-white font-semibold tracking-tight hover:underline'>{title}</h3>
        </NavLink>
        {more && (
            <NavLink className={"text-xs tracking-wider hover:underline font-semibold uppercase text-link"} to={more}>
                HEPSİNİ GÖR 
            </NavLink>
        )}
    </header>
  )
}

export default Title