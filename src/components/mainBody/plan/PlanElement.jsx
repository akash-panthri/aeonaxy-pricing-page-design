import React from 'react'

export default function PlanElement() {
  return (
    <div className={`w-[250px] bg-[#f8f8f8] text-[#000000] h-[500px] px-3 py-7 flex flex-col justify-start  relative`}>
    <h2 className='text-xl font-bold mb-[20px]'>Basic</h2>
    <h1 className='text-5xl mb-[20px]'>  $12<span className='text-base'>/seat/month</span></h1>
    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus labore est repellendus!</p>
    <button className='rounded-[10px] w-3/4 h-[10%] border-2 border-[#1d65e2] bg-[#f8f8f8] text-[#1d65e2] absolute bottom-[12px] mx-auto'>Get Started</button>
    </div>
  )
}
