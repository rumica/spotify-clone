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
        <span className={open === true && 'rotate-180'}>
            <Icon name="down" />
        </span>
    </Menu.Button>
    <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2 p-3"}>
      <Menu.Item>
        {({ active }) => (
          <a
            className={`${active && 'bg-blue-500'}`}
            href="/account-settings"
          >
            Account settings
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