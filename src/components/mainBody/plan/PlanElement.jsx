import React from 'react'

export default function PlanElement({planDatum}) {

  return (
    <div style={{background:planDatum.cardBg, color : planDatum.cardTextCol}} className={`w-[250px]   h-[500px] px-3 py-7 flex flex-col justify-start border relative overflow-hidden`}>
    {planDatum.popular ? <div className='bg-yellow-400 origin-[40%_50%] right-0 rotate-45 pl-[75%] w-[200%]'> Popular </div>:<></>}
    <h2 className='text-xl font-bold mb-[20px]'>{planDatum.planName}</h2>
    <h1 className='text-5xl mb-[20px]'> {isNaN(parseInt(planDatum.price)/1) ?"":"$"}{planDatum.price}{isNaN(parseInt(planDatum.price)/1) ?<></>:<span className='text-base'>/seat/month</span>}</h1>
    <p className='text-gray-400'>{planDatum.planDetail}</p>
    <button style={{borderColor:planDatum.buttonBorder, background:planDatum.buttonBg, color:planDatum.buttonTextCol}} className={`rounded-[10px] w-3/4 h-[10%] border-2  absolute bottom-[12px] mx-auto`}>{planDatum.buttonText}</button>
    </div>
  )
}
// { bg-[${planDatum.cardBg}]
//   "id":3, overflow-hidden
//   "cardBg":"#fff",
//   "buttonBg":"#056dff",
//   "cardTextCol":"#000",
//   "buttonTextCol":"#fff",
//   "buttonBorder":"#056dff",
//   "buttonText":"Start Professional",
//   "planName":"Professional",
//   "price":"12",
//   "planDetail":"When you need customization, integrations, and basic team features",
//   "popular":"dd"
// }