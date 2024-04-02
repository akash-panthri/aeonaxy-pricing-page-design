import React from 'react'
import FeatureCardTop from './FeatureCardTop'
import FeatureCardElement from './FeatureCardElement'

export default function FeatureCardContainer() {
  return (
    <div className='flex flex-row justify-between my-7'>
    <FeatureCardTop />
    <FeatureCardElement />
    <FeatureCardElement />
    <FeatureCardElement />
    <FeatureCardElement />
    <FeatureCardElement />

    </div>
  )
}
