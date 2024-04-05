import React from 'react'
import Switcher from './Switch'

export default function HeadContainer() {
  return (
    <div className='py-[5%] h-[60vh] md:h-[30vh] lg:h-[55vh] flex flex-col items-center justify-between'>
    <p className='text-5xl text-center flex flex-col font-bold'>
    Scheduling should be easy.
        <span className='mt-7 text-5xl text-cyl-blue'>
Start  free.
        </span>
    </p>
<Switcher />

    </div>
  )
}
