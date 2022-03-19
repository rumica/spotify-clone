import React, { useMemo, useEffect } from 'react'
import { useAudio } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'Icons'
import CustomRange from 'CustomRange';
import { secondsToTime } from 'utils';
import { setPlaying, setControls, setSidebar } from 'stores/player';


function Player() {

    const dispatch = useDispatch()
    const { current, sidebar } = useSelector(state => state.player)

    const [audio, state, controls, ref] = useAudio({
        src: current?.src,
      });

    useEffect(() => {
        controls.play()
    }, [current])  

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing])

    useEffect(() => {
        dispatch(setControls(controls))
    }, [])  
    
      const volumeIcon = useMemo(() =>{
        if(state.volume === 0 || state.muted)
        return 'volumeMute'

        if(state.volume > 0 && state.volume < 0.33)
        return 'volumeLow'

        if(state.volume >= 0.33 && state.volume < 0.66)
        return 'volumeNormal'

        return 'volumeFull'
      },[state.volume, state.muted])

  return ( 
    <div className='flex justify-between items-center h-full px-4'>
        <div className='min-w-[11.25rem] w-[30%]'>
            {current && (
                <div className='flex items-center'>
                    <div className='flex items-center mr-3'>
                     {!sidebar && (
                            <div className='w-14 h-14 mr-3 flex-shrink-0 relative group'>
                            <img src={current.image} alt="" />
                            <button
                            onClick={() => dispatch(setSidebar(true))}
                            className='w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.2] flex items-center justify-center rotate-90 rounded-full absolute top-1 right-1'>
                                <Icon name="arrowUp" size={18}/>
                            </button>
                        </div>
                     )}
                        <div>
                            <h3 className='text-sm line-clamp-1'>{current.title}</h3>
                            <p className='text-s text-link'>{current.artist}</p>
                        </div>
                    </div>
                    <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="emptyHeart"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="pictureInPicture"/>
                </button>
                </div>
            )}
        </div>
        <div className='max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center'>
            <div className='flex items-center gap-x-2'>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="shuffle" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerPrev"/>
                </button>
                <button 
                onClick={controls[state?.playing ? 'pause' : 'play']}
                className='w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]'>
                    <Icon name={state?.playing ? 'pause' : 'play'} size={16}/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="playerNext"/>
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="repeat"/>
                </button>
            </div>
            <div className='w-full flex items-center gap-x-2'>
               {audio}
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
        <div className='min-w-[11.25rem] w-[30%] flex items-center justify-end'>
            <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="microphone" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="queue" />
                </button>
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name="device" />
                </button>
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
                <button className='w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100'>
                    <Icon name={"fullScreen"} />
                </button>
        </div>
    </div>
  )
}

export default Player