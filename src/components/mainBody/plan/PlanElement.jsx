import React from 'react'

export default function PlanElement({planDatum}) {

  return (
    <div style={{background:planDatum.cardBg, color : planDatum.cardTextCol}} className={`w-[250px] m-5 h-[500px] px-3 py-7 flex flex-col justify-start border relative overflow-hidden`}>
    {planDatum.popular ? <div className='bg-yellow-400 origin-[40%_50%] right-0 rotate-45 pl-[75%] w-[200%]'> Popular </div>:<></>}
    <h2 className='text-xl font-bold mb-[20px]'>{planDatum.planName}</h2>
    <h1 className='text-4xl mb-[20px]'> {isNaN(parseInt(planDatum.price)/1) ?"":"$"}{planDatum.price}{isNaN(parseInt(planDatum.price)/1) ?<></>:<span className='text-base'>/seat/month</span>}</h1>
    <p className='text-gray-400'>{planDatum.planDetail}</p>
    <button style={{borderColor:planDatum.buttonBorder, background:planDatum.buttonBg, color:planDatum.buttonTextCol}} className={`rounded-[10px] w-3/4 h-[10%] border-2  absolute bottom-[12px] mx-[10%]`}>{planDatum.buttonText}</button>
    </div>
  )
}
