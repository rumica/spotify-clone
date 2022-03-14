import React from 'react';
import { Icon } from 'Icons';
import { Menu } from '@headlessui/react'

function Auth() {
  return (
    <Menu as="nav" className={"relative"}>
        {({ open }) => (
            <>
                <Menu.Button className={`flex items-center justify-around h-8 rounded-3xl w-44 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
        <Icon name="user" />
        <span className='text-sm font-semibold'>Rümeysa Var</span>
        <span className={open && 'rotate-180'}>
            <Icon name="down" />
        </span>
    </Menu.Button>
    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2 p-1 rounded"}>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex justify-between items-center px-2 text-sm font-semibold ${active && 'bg-white bg-opacity-10 rounded'}`}
            href="#" rounded
          >
            Hesap
            <Icon name="external"/>
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex items-center px-2 text-sm font-semibold  ${active && 'bg-white bg-opacity-10 rounded'}`}
            href="#"
          >
            Profil
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`h-10 flex items-center px-2 text-sm font-semibold ${active && 'bg-white bg-opacity-10 rounded'}`}
            href="#"
          >
            Oturumu kapat
          </a>
        )}
      </Menu.Item>
    </Menu.Items>
            </>
        )}
  </Menu>
  )
}

export default Auth