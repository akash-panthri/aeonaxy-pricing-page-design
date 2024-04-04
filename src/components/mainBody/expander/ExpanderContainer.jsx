import React from 'react'
import ExpanderElement from './ExpanderElement'
import expanderData from '../../../data/expanderData.json'
export default function ExpanderContainer() {
  return (
    <div className='my-[5vh]'>
    {expanderData?.map((expanderDatum, index)=>{
      return <ExpanderElement key={index}  expanderDatum={expanderDatum}  />
    })}
    </div>
  )
}
