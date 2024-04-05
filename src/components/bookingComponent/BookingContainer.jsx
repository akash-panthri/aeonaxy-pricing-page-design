import React from 'react'

export default function BookingContainer() {
  return (
    <div className='bg-[#092640] w-full  h-auto lg:h-[70vh]  px-3 lg:px-[20%] py-[3.5%] flex flex-col justify-evenly items-center'>
    <div className="text-white ">

    <h2 className='text-4xl lg:text-6xl text-center font-bold'>
    Easy access for easy bookings
    </h2>
    <p className='text-lg lg:text-3xl text-center font-thin mt-6'>
    Share your Calendly link right from your browser, so you can schedule meetings without the back-and-forth
    </p>
    </div>
    <div className="flex flex-row justify-between text-white w-full my-7 lg:my-1 md:w-[50%] lg:w-[40%]">
      <a href='/'><span className='bg-[#006afe] py-3 px-5 rounded-[7.5%] text-sm lg:text-lg'>Sign up for free</span></a>
      <a href='/'><span className='border-2 border-white py-3 px-5 rounded-[7.5%] text-sm lg:text-lg'>Get a demo</span></a>
    </div>
    </div>
  )
}

