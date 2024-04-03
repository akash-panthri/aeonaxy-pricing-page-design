import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAppleAlta } from "@fortawesome/free-solid-svg-icons";
import { faApple, faGooglePlay ,faTwitter, faFacebookF, faInstagram, faLinkedinIn, faYoutube} from "@fortawesome/free-brands-svg-icons";
export default function EasyAhead() {
  return (
    <div className='flex flex-col  justify-evenly px-[7.55%]'>
    <span className='text-5xl font-bold'>Easy</span>
    <span className='text-5xl font-bold text-cyl-blue'>ahead</span>
    <span className='text-lg'>We take the work out of connecting with others so you can accomplish more.</span>
    
    <select className='border-2 h-[50px]' id="language">
  <option value="english">English</option>
  <option value="hindi">Hindi</option>
  <option value="telgu">Telgu</option>
  <option value="tamil">Tamil</option>
</select>

<div className="flex flex-row ">
    <div className="flex flex-row justify-evenly bg-black text-white text-[40px] h-[60px] w-[175px] py-2 px-1 mr-3 rounded-md">
    <FontAwesomeIcon icon={faApple} />
    <p className='flex flex-col text-[10px]'>Download on the <span className='text-[20px]'>App Store</span></p>
    </div>
    <div className="flex flex-row justify-evenly bg-black text-white text-[40px] h-[60px] w-[175px] py-2 px-1 mr-3 rounded-md">
    <FontAwesomeIcon icon={faGooglePlay} />
    <p className='flex flex-col text-[10px]'>Get it on<span className='text-[20px]'>Play Store</span></p>
    </div>
</div>
    <div className="text-4xl flex flex-row justify-between w-3/4">
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faFacebookF} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faLinkedinIn} />
    <FontAwesomeIcon icon={faYoutube} />
    </div>
    
    </div>
  )
}
