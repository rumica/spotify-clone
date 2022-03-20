import React from 'react'
import { Icon } from 'Icons'

function Search() {
  return (
    <div className='mr-auto ml-4 h-10 relative'>
      <label className='w-12 h-10 flex items-center justify-center absolute top-0 left-0 text-active' htmlFor="search">
        <Icon name="search" /> 
      </label>
      <input 
      id="search-input"
      className='h-10 max-w-full w-[22.75rem] bg-white text-black rounded-3xl text-sm placeholder-active placeholder:font-semibold pl-12 outline-none' type="text" 
      placeholder="Sanatçılar, şarkılar veya podcast'ler"/>
    </div>
  )
}

export default Search