import Exist from '@/components/Exist'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WaitlistForm from '@/components/Waitlist'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <Hero/>
      <Exist/>
      <HowItWorks/>
      <WaitlistForm/>
    </div>
  )
}

export default Home