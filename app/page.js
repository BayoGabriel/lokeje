import Exist from '@/components/Exist'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Hero/>
      <Exist/>
      <HowItWorks/>
      <Footer/>
    </div>
  )
}

export default Home