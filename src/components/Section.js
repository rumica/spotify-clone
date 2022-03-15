import React from 'react'
import { NavLink } from 'react-router-dom'

function Section({ title, more = false, items}) {
  return (
    <section>
       <header className='flex items-center justify-between mb-4'>
            <h3 className='text-2xl text-white font-semibold tracking-tight'>{title}</h3>
            {more && (
                <NavLink className={"text-xs hover:underline font-semibold uppercase text-link"} to={more}>
                    HEPSİNİ GÖR 
                </NavLink>
            )}
       </header>
       <div className='grid grid-cols-6 gap-x-6'>
            {items.map(item =>(
                <NavLink 
                className={"bg-footer p-4 rounded"}
                key={item.id} 
                to="/">
                    <div className='pt-[100%] relative'>
                        <img className='absolute inset-0 w-full h-full object-cover rounded' src={item.image} alt="" />
                    </div>
                    <div className='font-semibold line-clamp-1'>
                        {item.title}
                    </div>
                </NavLink>
            ))}
       </div>
    </section>
  )
}

export default Section