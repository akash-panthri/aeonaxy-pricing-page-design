import React from 'react'
import Switcher from './Switch'

export default function HeadContainer() {
  return (
    <div className='py-[5%] flex flex-col items-center'>
    <p className='text-5xl text-center flex flex-col font-bold'>
    Scheduling should be easy.
        <span className='text-5xl text-cyl-blue'>
Start  free.
        </span>
    </p>
<Switcher />

    </div>
  )
}
