import React from 'react'

function PlayLists() {
  return (
    <nav className='mx-2 mt-4 py-2 px-3 flex-auto border-t border-white border-opacity-10 overflow-auto'>
        <ul>
            {new Array(20).fill(
                <li>
                <a href="" className='text-s text-link hover:text-white flex h-8 items-center font-semibold'>
                    Duo Mix
                </a>
            </li>
            )}
        </ul>
    </nav>
  )
}

export default PlayLists