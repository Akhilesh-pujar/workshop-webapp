import React from 'react'
import Link from 'next/link'
import {GoCheck} from "react-icons/go"
import{FcSearch} from "react-icons/fc"
import{BsRocketTakeoff} from "react-icons/bs"
import{AiFillDatabase} from "react-icons/ai"
import{SiAirbnb} from "react-icons/si"
import{TbListSearch} from "react-icons/tb"

function Aboutclass() {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-black">What will you learn in this Masterclass?</h1>
    </div>
    <div className="flex flex-wrap -m-4">


      <div className="p-4 md:w-1/3 shadow-md shadow-black">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <h2 className="text-indigo-500 text-lg title-font font-medium text-center"><SiAirbnb className='inline-flex w-[40px] h-[40px] space-x-3'/>The Logic behind the Algorithm of Google Ads</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Learn how google ads algorithm works across Search, Display and Video Formats</p>
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Learn how to use the algorithm to run successful ads campaigns</p>

          </div>
        </div>

      </div>

      
      <div className="p-4 md:w-1/3 shadow-md shadow-black">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
 
            <h2 className="text-indigo-500 text-lg title-font font-medium text-center"><BsRocketTakeoff className='inline-flex w-[40px] h-[40px]'/>  Launch Google ads for your business effortlessly</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-center"><GoCheck className='inline-flex'/>Learn How to Structure a Campaign in the most seamless manner so as to ensure maximum return in minimum effort</p>
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Understand the right sequence to Launch Google ads in an effective and time bound manner</p>

          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3 shadow-md shadow-black">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
 
            <h2 className="text-indigo-500 text-lg title-font font-medium text-center">Complete framework to run ads that give 3x return on Ad Spend</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Get the Secret Tricks to capture high quality converting leads
Leverage easy & actionable</p>

<p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>optimization tips that will get you automatic leads</p>


          </div>
        </div>
      </div>




      <div className="p-4 md:w-1/3 shadow-md shadow-black">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">

            <h2 className="text-indigo-500 text-lg title-font font-medium text-center" ><TbListSearch className="inline-flex w-[40px] h-[40px]"/>How to Find high converting keywords</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Learn how to discover keywords that are most relevant to your business</p>
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Lean how to leverage competitor keywords to benefit your business goals by ethically stealing their customers</p>

          </div>
        </div>
      </div>


      
      <div className="p-4 md:w-1/3 shadow-md shadow-black">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
  
            <h2 className="text-indigo-500 text-lg title-font font-medium text-center"><FcSearch className="inline-flex w-[40px] h-[40px]"/>How to Spy on competitor keywords</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Learn the Free and the Paid way to find out the keywords used by your competitors</p>
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Learn the Free and the Paid way to find out the keywords used by your competitors</p>

          </div>
        </div>
      </div>


      <div className="p-4 md:w-1/3 shadow-md shadow-black">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
    
            <h2 className="text-indigo-500 text-lg title-font font-medium text-center"><AiFillDatabase className="inline-flex w-[30px] h-[40px]"/>How to ensure to Stay on Page 1 of Google ads</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>Learn the strategies that ensure you stay on Page 1 of the search results
             Learn to attract high spending</p>
           <p className="leading-relaxed text-base text-center"> <GoCheck className='inline-flex'/>customers on your website to get more business</p>


          </div>
        </div>
      </div>


    </div>
    <div className="flex justify-center mt-9">
    <Link href='/payment'><button  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Book your seat spot now (Only Rs 99)</button></Link>
      </div>
      <div className='flex justify-center'>
      <h4 className='p-8 font-bold text-black'>Register before <span className='text-amber-400'>March 30, 2023</span> to unlock bonuses <span className='text-amber-400'>worth Rs 20,000</span> </h4>
        
      </div>
      <div className='flex justify-center p-8 '>
       <h3 className='font-bold text-4xl  text-black'>More than 15,000 students have called it the best way to learn Google Ads</h3>
       </div>
  </div>

</section>


    </div>
  )
}

export default Aboutclass
