import React from 'react'
import PlanElement from './PlanElement'

export default function PlanContainer() {
  return (
    <div className='flex flex-row justify-evenly' >
    <PlanElement />
    <PlanElement />
    <PlanElement />
    <PlanElement />
    <PlanElement />
    </div>
  )
}
