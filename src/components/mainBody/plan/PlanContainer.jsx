import React from 'react'
import PlanElement from './PlanElement'
import planData from '../../../data/featureCardData.json'

export default function PlanContainer() {
  return (
    <div className='flex flex-row flex-wrap justify-between items-center mt-9 ml-[calc(50vw_-_125px)] md:ml-0' >

    {planData?.map(planDatum=>{
      return <PlanElement key={planDatum.id}  planDatum={planDatum}  />
    })}
    
   
    </div>
  )
}
