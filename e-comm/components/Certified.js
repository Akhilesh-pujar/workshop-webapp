import React from 'react'
import {FcApproval} from "react-icons/fc"
function Certified() {
  return (
    <div>
      <div className='bg-black p-8 '>
            <h3 className='text-yellow-500  font-bold text-center text-4xl'>Get Certified</h3>
            <h4 className='text-white text-center text-2xl'> Yes! You will be certified by <span className='text-yellow-500 underline'>SKILL NATION</span> which brings a lot of credibility to your certificate & your resume.</h4>
        </div>
        <div className='flex flex-col xl:text-left md:text-left p-5'>
        <h4 className='font-bold text-4xl text-center'>You should join this workshop if </h4>
       
        <p className=' font-medium text-2xl mt-3 inline-flex '>You want to learn the skill of using Google Ads to 3x YOUR business profit<FcApproval/></p>
        <p className='font-medium text-2xl mt-3 inline-flex'>You want to build an amazing career in Digital Marketing<FcApproval/></p>
        <p className='font-medium text-2xl mt-3 inline-flex'>You want to Master Google Ads from a NMIMS Faculty <FcApproval/></p>
        <p className='font-medium text-2xl mt-3 inline-flex'>You want to earn money as a Google Ads Consultant <FcApproval/></p>
        </div>
        <div className="flex justify-center mt-5 mb-5">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg FiArrowRight">Book your seat spot now (Only Rs 99)</button>
        
      </div>
        
    </div>
  )
}

export default Certified
