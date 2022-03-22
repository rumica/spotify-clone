import React, { useMemo } from 'react'
import { useAudio } from 'react-use'
import { useSelector } from 'react-redux'
import CustomRange from 'CustomRange'
import { Icon } from 'Icons'
import { secondsToTime } from 'utils'

function FullScreenPlayer({ state, controls, toggle, volumeIcon }) {

    const { current } = useSelector(state => state.player)

  return (
    <div className='h-full relative'>
        <div className='flex items-center justify-evenly w-full h-full'>
           <img src={current.image} alt="" width="400px"/>
           <h6 className='font-semibold'>{current.title}</h6>
       </div> 
       <div className='absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30' style={{backgroundImage: `url(${current.image})`}}></div>
       <div className='w-full absolute bottom-4 flex flex-col-reverse px-8 items-center'>
            
            
            <div className='w-full flex items-center mb-1.5 gap-x-2'>
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
            <div className='flex items-center justify-between w-full'>
                <div>sol</div>
                <div className='flex items-center gap-x-5 '>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name="shuffle" size={24}/>
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name="playerPrev" size={24}/>
                    </button>
                    <button 
                    onClick={controls[state?.playing ? 'pause' : 'play']}
                    className='w-16 h-16 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]'>
                        <Icon name={state?.playing ? 'pause' : 'play'} size={24}/>
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name="playerNext" size={24}/>
                    </button>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                        <Icon name="repeat" size={24}/>
                    </button>
                </div>
                <div className='flex items-center gap-x-3'>
                <button 
                className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'
                onClick={controls[state.muted ? 'unmute' : 'mute']}
                >
                    <Icon name={volumeIcon} />
                </button>
                <div className='w-[5.813rem] max-w-full'>
                    <CustomRange 
                    step={0.01}
                    min={0}
                    max={1}
                    value={state.muted ? 0 : state?.volume}
                    onChange={value => {
                        controls.unmute()
                        controls.volume(value)
                    }}
                    />
                </div>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100' onClick={toggle}>
                    <Icon name="fullScreen" size={24} />
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenPlayer