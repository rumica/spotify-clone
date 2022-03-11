import React from 'react'
import { Icon } from 'Icons'

function DowloadApp() {
  return (
    <div className='h-10 flex flex-shrink-0 items-center px-2 gap-x-4 text-sm text-link font-semibold hover:text-white'>
        <Icon name="dowload" size={20}/>
        Uygulamayı Yükle
    </div>
  )
}

export default DowloadApp