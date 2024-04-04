import React from 'react'
import FooterLinkElement from './FooterLinkElement'

export default function FooterLinkV({footerDatum}) {
  return (
    <div className='flex flex-row w-full justify-between'>
     {footerDatum?.elem.map(footerDat=>{
      return <FooterLinkElement key={footerDat.id}  footerDat={footerDat}  />
    })}
   
    </div>
  )
}
