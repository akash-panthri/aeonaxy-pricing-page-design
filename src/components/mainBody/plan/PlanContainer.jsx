import React from 'react'
import PlanElement from './PlanElement'
import planData from '../../../data/featureCardData.json'

export default function PlanContainer() {
  return (
    <div className='flex flex-row justify-between' >

    {planData?.map(planDatum=>{
      return <PlanElement key={planDatum.id}  planDatum={planDatum}  />
    })}
    
   
    </div>
  )
}
