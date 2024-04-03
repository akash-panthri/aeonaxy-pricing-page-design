import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser,faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default function ExpanderElement() {
  return (
    <div className='w-full border flex flex-row px-[20px] justify-between text-2xl  items-center'>
    <span>
    ExpanderElement
    </span> 
    <FontAwesomeIcon icon={faChevronRight} />
    </div>
  )
}
