import React from 'react'
import Menu from './Sidebar/Menu'
import logo from 'images/logo.svg'

function Sidebar() {
  return (
    <aside className='w-60 py-6 flex flex-col'>
        <a href="#" className='mb-7 px-6'>
          <img src={logo} alt="" className='h-10' />
        </a>

        <Menu />
    </aside>
  )
}

export default Sidebar