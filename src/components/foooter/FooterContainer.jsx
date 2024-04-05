import React from 'react'
import EasyAhead from './EasyAhead'
import FooterLinkContainer from './FooterLinkContainer'

export default function FooterContainer() {
  return (
    <footer className='h-auto lg:px-[2.5%] pt-[1.2%] '>
    <div className="flex flex-col lg:flex-row justify-between h-[95%]">
        <EasyAhead />
        <FooterLinkContainer />
    </div>
    <p className='flex flex-row w-[100vw] lg:w-[95%] text-sm lg:text-base justify-between '>
        <span>Copyright Calendly 2022 </span>
        <span>privacy / Terms and Conditions</span>
    </p>
    </footer>
  )
}
