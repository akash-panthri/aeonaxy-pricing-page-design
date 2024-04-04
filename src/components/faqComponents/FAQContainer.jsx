import React from 'react'
import FAQQuery from './FAQQuery'
import faqQuestions from '../../data/faqQuestions.json'

export default function FAQContainer() {
  return (
    <div className='flex flex-col w-[25%]'>
    {faqQuestions?.map((faqQuestion, index)=>{
      return <FAQQuery key={index}  faqQuestion={faqQuestion}  />
    })}
   
    </div>
  )
}
