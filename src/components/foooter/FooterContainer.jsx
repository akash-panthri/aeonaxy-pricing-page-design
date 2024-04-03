import React from 'react'
import EasyAhead from './EasyAhead'
import FooterLinkContainer from './FooterLinkContainer'

export default function FooterContainer() {
  return (
    <footer className='h-[70vh] px-[2.5%] py-[1.2%]'>FooterContainer
    <div className="flex flex-row justify-between">
        <EasyAhead />
        <FooterLinkContainer />
    </div>
    <p>
        <span>Copyright Calendly 2022 </span>
        <span>privacy / Terms and Conditions</span>
    </p>
    </footer>
  )
}
