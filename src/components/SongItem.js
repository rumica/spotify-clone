import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent } from 'stores/player'
import { Icon } from 'Icons'

function SongItem({ item }) {

    const dispatch = useDispatch()
    const { current } = useSelector(state => state.player)

    const updateCurrent = () => {
        dispatch(setCurrent(item))
    }

  return (
    <NavLink 
    className={"bg-footer p-4 rounded hover:bg-active group duration-300 mb-7"}
    key={item.id} 
    to="/">
        <div className='pt-[100%] relative mb-4'>
            <img className='absolute inset-0 w-full h-full object-cover rounded' src={item.image} alt="" />
            <button
             onClick={updateCurrent}
             className='w-10 h-10 rounded-full bg-primary absolute
             group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center hidden'>
                 <Icon name={current?.id === item.id ? 'pause' : 'play' } size={16} />
            </button>
        </div>
        <div className='font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap text-base'>
            {item.title}
        </div>
        <p className='line-clamp-2 text-sm text-link mt-1 mb-5'>
            {item.description}
        </p>
    </NavLink>
  )
}

export default SongItem