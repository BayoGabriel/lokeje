"use client"
import { useState } from 'react'
import Image from 'next/image'
import las from '@/public/las.svg'
import svg from '@/public/svg.svg'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address'
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Call our API endpoint instead of Google Forms directly
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you for joining our waitlist!'
        })
        setEmail('')
      } else {
        throw new Error(data.message || 'Something went wrong')
      }
    } catch (error) {
      console.error('Waitlist submission error:', error)
      setSubmitStatus({
        success: false,
        message: error.message || 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full flex items-center justify-center p-[80px] max-md:mt-[80px] max-lg:px-0 max-md:py-6 max-md relative" id="waitlist">
      <Image src={svg} alt="svg" className="absolute left-0 max-md:hidden -z-0 -top-2" />
      <Image src={las} alt="svg" className="absolute left-0 md:lg:hidden -z-0 -top-16" />
      <div className="w-full wait rounded-[30px] max-lg:py-8 max-lg:px-8 max-md:px-6 max-lg:flex-col flex md:items-center md:justify-between py-10 max-md:py-6 px-[80px] z-[2] gap-[50px] max-lg:gap-6">
        <h3 className="font-[800] text-[40px] max-md:mb-4 text-white max-lg:text-[28px] max-md:text-[20px]">
          Enjoy a <span className="text-[#94D227]">5%</span> <br className="md:hidden"/> discount on <br className="max-md:hidden"/> your first <br className="md:hidden"/> 3 requests <br className=""/> when we launch.
        </h3>
        <form onSubmit={handleSubmit} className="relative w-[691px] h-[90px] max-lg:w-full max-lg:h-[70px]">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-full rounded-[10px] py-4 px-8 max-lg:px-2 placeholder:text-white text-white bg-[#5E5D5C] outline-none"
            placeholder="Your email"
            disabled={isSubmitting}
          />
          <button 
            type="submit" 
            className="text-white bg-[#F9A607] max-lg:hidden absolute top-1/2 -translate-y-1/2 px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-[10px] right-4 hover:bg-[#e69806] transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Join the waitlist'}
          </button>
          <button 
            type="submit" 
            className="text-white bg-[#F9A607] lg:hidden absolute top-1/2 -translate-y-1/2 px-6 py-3 max-lg:px-4 max-lg:py-2 h-full rounded-[10px] right-0 hover:bg-[#e69806] transition-colors text-[10px]"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Join the waitlist'}
          </button>
          
          {submitStatus && (
            <div className={`absolute -bottom-8 left-0 text-sm ${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Waitlist