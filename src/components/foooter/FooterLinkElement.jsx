import React from 'react'

export default function FooterLinkElement({footerDat}) {
  return (
    <div className='flex flex-col my-7 w-[27.5%]'>
    <p className='text-base lg:text-2xl  font-extrabold'>{footerDat.fmain}</p>
    <div className="">
    {footerDat.flink.map((link)=>{
      return  <p className='text-xs lg:text-lg mt-7 font-normal'>{link }</p>
    })}
    </div>
  
    </div>
  )
}
