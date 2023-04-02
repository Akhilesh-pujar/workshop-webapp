import Head from 'next/head'


import Navbar from '@/components/Navbar'

import Banner from '@/components/Banner'
import Downofbanner from '@/components/Downofbanner'
import Aboutclass from '@/components/Aboutclass'
import Aboutbusiness from '@/components/Aboutbusiness'
import Bonuses from '@/components/Bonuses'
import Aboutteacher from '@/components/Aboutteacher'
import Certified from '@/components/Certified'
import Faq from '@/components/Faq'
import Cheeckout from '@/components/Cheeckout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Skill nation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <Banner/>
        <Downofbanner/>
        <Aboutclass/>
        <Aboutbusiness/>
        <Bonuses/>
        <Certified/>
        <Aboutteacher/>
        <Faq/>

        

    
    </>
  )
}
