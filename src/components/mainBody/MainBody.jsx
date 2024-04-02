import React from 'react'
import PlanContainer from './plan/PlanContainer'
import FeatureCardContainer from './featureCard/FeatureCardContainer'

export default function mainBody() {
  return (
    <div className='px-[7.5%]'>
    <PlanContainer />
    <FeatureCardContainer />
    </div>
  )
}
