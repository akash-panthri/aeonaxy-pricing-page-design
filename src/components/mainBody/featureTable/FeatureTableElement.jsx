import React from 'react'

export default function FeatureTableElement(featureDatum) {
  console.log("featureDatum start")
  console.log(featureDatum)
  console.log("featureDatum mids")
  console.log(featureDatum.fmain)

  console.log("featureDatum tops")
  console.log(featureDatum.fbody)
  console.log("featureDatum ends ")
  return (
    <div className='flex flex-row'>
    <div className="w-[20%] p-[10px] border">{featureDatum.featureDatum.fmain}</div>
    <div className="w-[16%] p-[10px] border">{featureDatum.featureDatum.fbody.Basic}</div>
    <div className="w-[16%] p-[10px] border">{featureDatum.featureDatum.fbody.Free}</div>
    <div className="w-[16%] p-[10px] border">{featureDatum.featureDatum.fbody.Pro}</div>
    <div className="w-[16%] p-[10px] border">{featureDatum.featureDatum.fbody.Team}</div>
    <div className="w-[16%] p-[10px] border">{featureDatum.featureDatum.fbody.Enterprise}</div>
    
    </div>
  )
}
