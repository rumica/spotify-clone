import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from 'stores/player'
import { Icon } from 'Icons'

function SidebarCover() {

  const dispatch = useDispatch() 
  const current = useSelector(state => state.player.current)

  return (
    <div className='pt-[100%] bg-black relative group'>
        <img className='w-full h-full object-cover absolute top-0 left-0' src={current.image} alt="" />
        <button
        onClick={() => dispatch(setSidebar(false))}
        className='w-6 h-6 bg-black opacity-0 group-hover:opacity-80 hover:!opacity-100 hover:scale-[1.2] flex items-center justify-center -rotate-90 rounded-full absolute top-1 right-1'>
            <Icon name="arrowUp" size={18}/>
        </button>
    </div>
  )
}

export default SidebarCover