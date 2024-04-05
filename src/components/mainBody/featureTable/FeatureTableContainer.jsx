import React, { useState } from 'react'
import FeatureTableElement from './FeatureTableElement'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import featureData from '../../../data/featureData.json'
export default function FeatureTableContainer() {
  const [expand, setExpand] = useState(true)
  return (
    <div style={expand ? {borderRadius:"10px", borderWidth:"1px"}:{}}>
    <div style={expand ? {}: {borderRadius:"10px", borderWidth:"1px"}} className='w-full flex flex-row px-[20px] py-[10px] my-[10px] justify-between items-center'>
    <span style={expand ? {color:'DodgerBlue'} : {}} className='text-base lg:text-xl'>
    Core Features
    </span> 
    <FontAwesomeIcon  className='text-lg lg:text-2xl' onClick={()=> setExpand(prev =>!prev)} icon={expand ? faChevronDown: faChevronRight} />
    </div>
    {
      expand ?
      <>
      {featureData?.map((featureDatum)=>{
      return <FeatureTableElement key={featureDatum.id}  featureDatum={featureDatum}  />
    })}
   
      </>
    :
    <></>
    }
    </div>
  )
}
