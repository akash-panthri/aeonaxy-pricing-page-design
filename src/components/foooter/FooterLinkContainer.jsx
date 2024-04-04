import React from 'react'
import FooterLinkV from './FooterLinkV'
import footerData from '../../data/footerData.json'
export default function FooterLinkContainer() {
  return (
    <div className='w-[60%]'>
   {footerData?.map(footerDatum=>{
      return <FooterLinkV key={footerDatum.id}  footerDatum={footerDatum}  />
    })}
   
   
    </div>
  )
}
