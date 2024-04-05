import React from 'react'
import FeatureCardTop from './FeatureCardTop'
import FeatureCardElement from './FeatureCardElement'

import planData from '../../../data/featureCardData.json'

export default function FeatureCardContainer() {
  return (
    <div className='flex flex-row flex-wrap justify-between ml-[calc(50vw_-_125px)] md:ml-0 my-7'>
    <FeatureCardTop />
    {planData?.map(planDatum=>{
      return <FeatureCardElement key={planDatum.id}  planDatum={planDatum}  />
    })}
 

    </div>
  )
}
