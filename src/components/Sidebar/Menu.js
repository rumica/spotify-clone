import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { Icon } from 'Icons'

function Menu() {
  return (
    <nav className='px-2'>
        <ul className='flex flex-col'>
            <li>
                <NavLink activeClassName="bg-active text-white" exact to={"/"} href="" className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                    <span>
                        <Icon name="home" />
                    </span>
                    Ana sayfa</NavLink>
            </li>
            <li>
                <NavLink activeClassName="bg-active text-white" exact to={"/search"}className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                    <span>
                        <Icon name="search" />
                    </span>
                    Ara</NavLink>
            </li>
            <li>
                <NavLink activeClassName="bg-active text-white" exact to={"/collection"} className='h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded'>
                    <span>
                        <Icon name="book" />
                    </span>
                    Kitaplığın</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu