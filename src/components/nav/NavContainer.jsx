import React,  { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
export default function NavContainer() {
  const [expand, setExpand] = useState(false)
  return (
    <div className='flex flex-row justify-between'>
   

    <img className="h-[60px] w-auto " src="https://logos-world.net/wp-content/uploads/2021/06/Calendly-Logo.png" alt="" />
    <>
      
   
    <div className="flex flex-col w-1/2  lg:w-[75%] relative ">
    <FontAwesomeIcon  className='text-2xl lg:hidden absolute right-[5px] m-3' onClick={()=> setExpand(prev =>!prev)} icon={expand ? faXmark:faBars } />
    <div className={`${expand ?'flex':"hidden"} bg-gray-200 lg:bg-white lg:flex flex-col lg:flex-row justify-between lg:w-full`}>
    <div className={`flex w-[50%] flex-col lg:flex-row justify-between items-start md:mx-[30%] lg:mx-0 lg:items-center text-center mt-7`}>
        <span className='px-5 py-3'>Individual</span>
        <span className='px-5 py-3'>Teams</span>
        <span className='px-5 py-3'>Enterprise</span>
        <select className='px-5 py-3  bg-gray-200 lg:bg-white'>
        <option value="product">Product</option>
        </select>
        <span className='px-5 py-3'>Pricing</span>
        <select className='px-5 py-3  bg-gray-200 lg:bg-white'>
        <option value="resources">Resources</option>
        </select>
    </div>

    <div className="flex flex-col lg:flex-row md:mx-[30%] lg:mx-0 items-start lg:items-center">
        <button className='px-5 py-3'>Log in</button>
        <button className='text-white bg-cyl-blue px-5 py-3 rounded-[10px]'>Get started</button>
    </div>
    </div>
    </div>
    </>
    </div>
  )
}
