import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'Icons'

function Section({ title, more = false, items}) {

  return (
    <section>
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
       <div className='grid grid-cols-6 gap-x-6'>
            {items.map(item =>(
                <NavLink 
                className={"bg-footer p-4 rounded hover:bg-active group duration-300 mb-7"}
                key={item.id} 
                to="/">
                    <div className='pt-[100%] relative mb-4'>
                        <img className='absolute inset-0 w-full h-full object-cover rounded' src={item.image} alt="" />
                        <button
                         className='w-10 h-10 rounded-full bg-primary absolute
                         group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center hidden'>
                             <Icon name="play" size={24} />
                        </button>
                    </div>
                    <div className='font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap text-base'>
                        {item.title}
                    </div>
                    <p className='line-clamp-2 text-sm text-link mt-1 mb-5'>
                        {item.description}
                    </p>
                </NavLink>
            ))}
       </div>
    </section>
  )
}

export default Section