import React from 'react'

function Banner() {
  return (
    <div className='bg-black'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <video className="object-cover object-center rounded" alt="hero" src="https://www.youtube.com/watch?v=0ZJgIjIuY7U"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">Do you want to Master Google Ads & build a Successful Career in Digital Marketing?

      </h1>
      <p className="mb-8 text-white">The 3 Hour Google Ads Workshop is a LIVE Hands-on journey to help go from zero to hero in Google Ads.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg">Book your seat spot now (Only Rs 99)</button>
       
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Banner
