import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default function ExpanderElement({expanderDatum}) {
  return (
    <div className='w-full border flex flex-row px-[20px] py-[10px] my-[10px] justify-between rounded-[10px] items-center'>
    <span className=' text-xl'>
    {expanderDatum}
    </span> 
    <FontAwesomeIcon className='text-2xl' icon={faChevronRight} />
    </div>
  )
}
