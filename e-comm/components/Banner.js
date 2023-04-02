import checkout from '@/pages/checkout'
import React from 'react'
import Link from 'next/link'

function Banner() {
  return (
  <div className='bg-black'>
      <section className=" body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src='https://static.vecteezy.com/system/resources/previews/006/642/214/original/youtube-icon-logo-symbol-editorial-app-icons-free-vector.jpg'/>
      
      <div className="flex justify-center mt-5">
        <Link href='#Checkout'><button  className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Book your seat spot now (Only Rs 99)</button></Link>
      </div>
    </div>


    <div className="  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className=" title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-400">Do you want to Master Google Ads & build a Successful Career in Digital Marketing?</h1>
      <p className="mb-8 text-white">The 3 Hour Google Ads Workshop is a LIVE Hands-on journey to help go from zero to hero in Google Ads.</p>


      <p className="mb-8 text-white font-bold underline text-2xl">Workshop is on Saturday, 15th April at 7 PM.</p>

      <h1 className="  sm:text-4xl text-sm mb-4 font-thin text-amber-400">Master Google Ads - #1 Skill in Digital Marketing</h1>
      <p className="mb-8 text-white">If you are kickstarting or even trying to grow your career in Digital Marketing, Google Ads is a skill you need to master & this workshop helps you do exactly that.</p>

      <h1 className="  sm:text-4xl text-sm mb-4 font-thin text-amber-400">Learn Google Ads from Visiting Faculty at NMIMS with over 8 years of exp running google ads.</h1>
      <p className="mb-8 text-white">Use Google Ads to take any business to the next level. Reach the right audience at the right time to 3x profits with high ROI driven ads.</p>

      <h1 className="  sm:text-4xl text-sm mb-4 font-thin text-amber-400">Use Google Ads to scale businesses & drive exponential profits</h1>
      <p className="mb-8 text-white">Use Google Ads to take any business to the next level. Reach the right audience at the right time to 3x profits with high ROI driven ads.</p>

      <h1 className="  sm:text-4xl text-sm mb-4 font-thin text-amber-400">Land high paying clients as a Google Ads Consultant</h1>
      <p className="mb-8 text-white">Digital Marketing is the most in-demand skill in the post-pandemic era. Master it to earn up to Rs 80,000 / month as a consultant without leaving your day job.</p>
      


    </div>
  </div>

</section>
   
</div>
  )
}

export default Banner
