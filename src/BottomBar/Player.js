import React from 'react'
import { Icon } from 'Icons'

function Player() {
  return ( 
    <div className='flex justify-between items-center h-full px-4'>
        <div className='min-w-[11.25rem] w-[30%]'>
            sol
        </div>
        <div className='flex flex-col items-center'>
            <div className='flex items-center gap-x-2'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="shuffle" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerPrev"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="play"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerNext"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="repeat"/>
                </button>
            </div>
            <div>
                bot
            </div>
        </div>
        <div className='min-w-[11.25rem] w-[30%] flex justify-end'>
            sağ
        </div>
    </div>
  )
}

export default Player