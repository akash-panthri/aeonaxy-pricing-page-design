

import React, { useState } from 'react'

const Switcher = () => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='relative flex flex-row w-1/4  justify-between cursor-pointer select-none items-center'>
      <span className={` ${isChecked ? 'text-[#dddfe1]' : 'text-cyl-blue font-semibold'}`}>Billed Monthly</span>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-[#dddfe1]' : 'bg-cyl-blue'
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full  duration-200 ${
              isChecked ? 'translate-x-6 bg-[#006afe]' : 'bg-[#fff]'
            }`}
          ></span>
        </span>
        <span className={`label flex items-center text-sm font-medium  ${isChecked ? 'text-cyl-blue font-semibold' : 'text-[#dddfe1]'}`}>
          Billed Annually 
        </span>
      <span className={` text-black bg-[#f7faff]`}> Save up to 20%</span>
      </label>

    </>
  )
}

export default Switcher
