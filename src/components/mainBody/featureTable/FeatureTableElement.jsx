import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faMinus, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function FeatureTableElement(featureDatum) {

  return (
    <div className='flex flex-row'>
    <div className="w-[20%] p-[10px] border flex flex-row justify-between">{featureDatum.featureDatum?.fmain}{featureDatum.featureDatum?.detail ? <FontAwesomeIcon className='text-2xl text-sky-300' icon={faCircleInfo} />:<></>}</div>
    {featureDatum.featureDatum?.fbody?.map((featureDat, index)=>{
      return <div style={index === 2 ?{background:"#f2f7fe"}:{}} className="w-[16%] p-[10px] border text-center" key={index} >{(featureDat === "Yes" || featureDat === "No") ? <FontAwesomeIcon  className='text-2xl text-gray-400' icon={featureDat === "Yes" ? faCircleCheck : faMinus} /> : featureDat}</div>
    })}
   
    
    </div>
  )
}
