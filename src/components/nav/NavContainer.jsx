import React from 'react'

export default function NavContainer() {
  return (
    <div className='flex flex-row justify-between'>
   

    <img className="h-[60px] w-auto " src="https://logos-world.net/wp-content/uploads/2021/06/Calendly-Logo.png" alt="" />
    
    <div className="flex w-[50%] flex-row justify-between items-center">
        <span>Individual</span>
        <span>Teams</span>
        <span>Enterprise</span>
        <select>
        <option value="product">Product</option>
        </select>
        <span>Pricing</span>
        <select>
        <option value="resources">Resources</option>
        </select>
    </div>

    <div className="">
        <button className='px-5 py-3'>Log in</button>
        <button className='text-white bg-cyl-blue px-5 py-3 rounded-[10px]'>Get started</button>
    </div>
    </div>
  )
}
