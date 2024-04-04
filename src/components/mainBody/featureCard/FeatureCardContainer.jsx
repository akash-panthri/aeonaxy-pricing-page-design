import React from 'react'
import FeatureCardTop from './FeatureCardTop'
import FeatureCardElement from './FeatureCardElement'

import planData from '../../../data/featureCardData.json'

export default function FeatureCardContainer() {
  return (
    <div className='flex flex-row justify-between my-7'>
    <FeatureCardTop />
    {planData?.map(planDatum=>{
      return <FeatureCardElement key={planDatum.id}  planDatum={planDatum}  />
    })}
 

    </div>
  )
}
