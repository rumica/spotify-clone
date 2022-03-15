import React from 'react'
import Menu from './Sidebar/Menu'
import PlayLists from './Sidebar/PlayLists'
import DowloadApp from './Sidebar/DowloadApp'
import logo from 'images/logo.svg'
import { Icon } from 'Icons'

function Sidebar() {
  return (
    <aside className='w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
        <a href="#" className='mb-7 px-6'>
          <img src={logo} alt="" className='h-10' />
        </a>

        <Menu />

        <nav className='mt-6'>
          <ul>
            <li>
              <a href="" className='px-4 py-3 flex items-center text-sm text-link font-semibold hover:text-white'>
                <span className='w-6 h-6 flex items-center justify-center bg-opacity-60 group-hover:bg-opacity-100 mr-4 bg-white rounded-sm text-black'>
                    <Icon name="plus" size={12} />
                </span>
                Çalma Listesi OLuştur
              </a>
            </li>
            <li>
              <a href="" className='px-4 py-3 flex items-center text-sm text-link font-semibold hover:text-white'>
                <span className='w-6 h-6 flex items-center justify-center bg-opacity-60 mr-4 bg-gradient-to-br from-indigo-500 text-white to-blue-300 bg-white rounded-sm'>
                    <Icon name="heart" size={12} />
                </span>
                Beğenilen Şarkılar
              </a>
            </li>
          </ul>
        </nav>

        <PlayLists />
        <DowloadApp />

    </aside>
  )
}

export default Sidebar