"use client"
import { useState } from 'react'
import Image from 'next/image'
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
      // Replace this URL with your actual Google Form submission URL
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc3yy_suxrpTSIIEIpOsLza1mlxnNb2rAQpgpfIMeNT9TI1fA/formResponse'
      
      // Replace 'entry.123456789' with your actual form field entry ID
      const formData = new FormData()
      formData.append('entry.123456789', email)
      
      // Use fetch to submit the form
      const response = await fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Google Forms requires no-cors mode
      })
      
      // Since we're using no-cors, we can't actually check the response status
      // We'll assume it was successful
      setSubmitStatus({
        success: true,
        message: 'Thank you for joining our waitlist!'
      })
      setEmail('')
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full flex items-center justify-center p-[80px] max-lg:px-0 max-md:p-6 relative" id="waitlist">
      <Image src={svg} alt="svg" className="absolute left-0 max-lg:hidden -z-0 -top-2" />
      <div className="w-full wait rounded-[30px] px-[100px] py-20 max-lg:py-8 max-lg:px-6 max-md:px-4 max-lg:flex-col flex items-center z-[2] gap-[50px] max-lg:gap-6">
        <h3 className="font-[800] text-[40px] text-white max-lg:text-[28px] max-md:text-[20px] text-center max-lg:text-center">
          Enjoy a <span className="text-[#94D227]">5%</span> discount on your first 3 orders when we launch.
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
            className="text-white bg-[#F9A607] lg:hidden absolute top-1/2 -translate-y-1/2 px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-[10px] right-4 hover:bg-[#e69806] transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting ? '...' : 'Join'}
          </button>
          
          {/* Status message */}
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