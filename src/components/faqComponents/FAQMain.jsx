import React from 'react'
import FAQContainer from './FAQContainer'

export default function FAQMain() {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly bg-white-smoke py-[3.5%]'>
<p className='text-4xl lg:text-6xl w-full md:w-[80%] lg:w-[15%] text-center'>

    Frequently Asked Questions 
</p>
    <FAQContainer />
    </div>
  )
}
