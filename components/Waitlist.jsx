"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import las from '@/public/las.svg'
import svg from '@/public/svg.svg'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  // Clear status message after 5 seconds
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [submitStatus])

  // Validate email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Email validation
    if (!email || !isValidEmail(email)) {
      setSubmitStatus({
        success: false,
        message: 'Please enter a valid email address'
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Google Form submission URL
      const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdWcoZ5-yjpITRvxZfSNcHklbQ2rwBK_4ARc7gQOeRnNIitRA/formResponse'
      
      const formData = new FormData()
      formData.append('entry.123456789', email)
      
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
      
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
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="w-full flex items-center justify-center p-20 max-md:mt-20 max-lg:px-0 max-md:py-6 max-md:px-2 relative" 
      id="waitlist"
    >
      <Image 
        src={svg} 
        alt="Background decoration" 
        className="absolute left-0 max-md:hidden -z-0 -top-2"
        priority
      />
      <Image 
        src={las} 
        alt="Background decoration mobile" 
        className="absolute left-0 md:lg:hidden -z-0 -top-16"
        priority
      />
      
      <motion.div 
        className="w-full wait rounded-[30px] px-[100px] py-20 max-lg:py-8 max-lg:px-8 max-md:px-6 max-lg:flex-col flex items-center z-[2] gap-[50px] max-lg:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h3 
          className="font-[800] text-[40px] text-white max-lg:text-[28px] max-md:text-[20px] text-center max-md:text-start"
          variants={itemVariants}
        >
          Enjoy a <span className="text-[#94D227]">5%</span> discount on your first 3 orders when we launch.
        </motion.h3>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="relative w-full max-w-[691px] h-[90px] max-lg:h-[70px]"
          variants={itemVariants}
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-full rounded-[10px] py-4 px-8 max-lg:px-6 placeholder:text-white text-white bg-[#5E5D5C] outline-none transition-all focus:ring-2 focus:ring-[#94D227]"
            placeholder="Your email"
            disabled={isSubmitting}
            aria-label="Email address"
          />
          
          <motion.button 
            type="submit" 
            className="text-white bg-[#F9A607] max-lg:hidden absolute top-1/2 -translate-y-1/2 px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-[10px] right-4 hover:bg-[#e69806] transition-colors disabled:opacity-70"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? 'Submitting...' : 'Join the waitlist'}
          </motion.button>
          
          <motion.button 
            type="submit" 
            className="text-white bg-[#F9A607] lg:hidden absolute top-1/2 -translate-y-1/2 px-6 py-3 max-lg:px-4 max-lg:py-2 h-full rounded-[10px] right-0 hover:bg-[#e69806] transition-colors disabled:opacity-70"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? '...' : 'Join'}
          </motion.button>
          
          {/* Status message with animation */}
          {submitStatus && (
            <motion.div 
              className={`absolute -bottom-8 left-0 text-sm ${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {submitStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Waitlist