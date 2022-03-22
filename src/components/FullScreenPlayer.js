import React from 'react'
import { useAudio } from 'react-use'
import { useSelector } from 'react-redux'
import CustomRange from 'CustomRange'
import { Icon } from 'Icons'
import { secondsToTime } from 'utils'

function FullScreenPlayer({ state, controls, toggle }) {

    const { current } = useSelector(state => state.player)

  return (
    <div className='bg-black-300 h-full'>
       <div className='w-full absolute bottom-4 flex flex-col px-4 items-center'>
            <div className='flex items-center gap-x-2'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="shuffle" size={24}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerPrev" size={24}/>
                </button>
                <button 
                onClick={controls[state?.playing ? 'pause' : 'play']}
                className='w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]'>
                    <Icon name={state?.playing ? 'pause' : 'play'} size={64}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerNext" size={24}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="repeat" size={24}/>
                </button>
            </div>
            <div className='w-full flex items-center gap-x-2'>
                <div className='text-[0.688rem] text-white text-opacity-70'>
                    {secondsToTime(state?.time)}
                </div>
                <CustomRange 
                step={0.1}
                min={0}
                max={state?.duration || 1}
                value={state?.time}
                onChange={value => controls.seek(value)}
                />
                <div className='text-[0.688rem] text-white text-opacity-70'>
                    {secondsToTime(state?.duration)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenPlayer