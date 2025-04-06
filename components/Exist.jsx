"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import existImage from '@/public/exist.png'
import plus from '@/public/add.svg'
import { FaMinus } from "react-icons/fa6";
import e1 from "@/public/e1.svg"
import e2 from "@/public/e2.svg"
import e3 from "@/public/e3.svg"
import e4 from "@/public/e4.svg"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const Exist = () => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState(null)

  // Toggle accordion item
  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null)
    } else {
      setOpenItem(index)
    }
  }

  // Accordion content
  const accordionItems = [
    {
      title: "Give you peace of mind",
      content: "Every artisan in our network is thoroughly vetted for skills, experience, and professionalism.",
      icon: e1
    },
    {
      title: "Save your precious time",
      content: "Our professionals are committed to delivering quality work within agreed timelines.",
      icon: e3
    },
    {
      title: "Offer value for your hard-earned money",
      content: "No hidden costs, no surprises. Get clear and fair pricing for every project upfront.",
      icon: e2
    },
    {
      title: "Ensure your safety",
      content: "We conduct background checks to ensure you're working with trustworthy individuals.",
      icon: e4
    }
  ]

  return (
    <div className="w-full flex flex-col items-center justify-center my-20 max-lg:my-4 px-[80px] max-lg:px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[55px] font-bold text-[#E97124] text-center mb-20 max-lg:mb-10 uppercase max-lg:text-[24px]"
      >
        We exist to
      </motion.h2>
      
      {/* Desktop view with accordion and image */}
      <div className='w-full max-md:hidden flex items-start justify-between max-lg:flex-col gap-8'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 w-[45%] max-lg:w-full"
        >
          {accordionItems.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="w-full shadow-lg rounded-[20px] overflow-hidden"
            >
              <div 
                className="px-[45px] max-lg:px-4 flex items-center justify-between w-full cursor-pointer py-[38px] hover:bg-gray-50"
                onClick={() => toggleItem(index)}
              >
                <span className='text-[24px] max-lg:text-[18px] font-medium'>{item.title}</span>
                {openItem === index ? (
                  <FaMinus className="size-[24px] text-gray-700" />
                ) : (
                  <Image 
                    src={plus} 
                    alt="expand" 
                    className='size-[39px] transition-transform'
                  />
                )}
              </div>
              
              {openItem === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-[45px] max-lg:px-4 py-4 bg-gray-50 border-t"
                >
                  <p className="text-gray-700 pb-6">{item.content}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-[50%] max-lg:w-full"
        >
          <Image src={existImage} alt='exist' className='rounded-[20px] w-full h-auto' />
        </motion.div>
      </div>
      
      {/* Mobile view with cards */}
      <div className="w-full md:hidden grid my-4 grid-cols-2 gap-3">
        {accordionItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            viewport={{ once: true }}
            className={`${index === 0 ? 'bg-[#054F43]' : 'bg-[#E97124]'} rounded-[12px] items-start flex p-4 flex-col`}
            onClick={() => toggleItem(index)}
          >
            <div className='rounded-full bg-white p-3 mb-4 flex items-center justify-center'>
              <Image src={item.icon} alt='' />
            </div>
            <span className='text-[12px] text-black font-medium'>{item.title}</span>
            
            {openItem === index && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.3 }}
                className="text-black text-[10px] mt-2 opacity-90"
              >
                {item.content}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Exist