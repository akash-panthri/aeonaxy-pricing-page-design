import React from 'react'
import PlanContainer from './plan/PlanContainer'
import FeatureCardContainer from './featureCard/FeatureCardContainer'
import FeatureTableContainer from './featureTable/FeatureTableContainer'
import ExpanderContainer from './expander/ExpanderContainer'

export default function mainBody() {
  return (
    <div className='lg:px-[2.5%]'>
    <PlanContainer />
    <FeatureCardContainer />
    <FeatureTableContainer />
    <ExpanderContainer />
    </div>
  )
}
