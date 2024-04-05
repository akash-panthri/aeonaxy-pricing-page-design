import React from 'react'
import FAQQuery from './FAQQuery'
import faqQuestions from '../../data/faqQuestions.json'

export default function FAQContainer() {
  return (
    <div className='flex flex-col w-full md:w-[80%] lg:w-[25%]  md:mx-[10%] lg:mx-0'>
    {faqQuestions?.map((faqQuestion, index)=>{
      return <FAQQuery key={index}  faqQuestion={faqQuestion}  />
    })}
   
    </div>
  )
}
