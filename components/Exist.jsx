"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import existImage from "@/public/exist.png"
import plus from "@/public/add.svg"
import { FaMinus } from "react-icons/fa6"
import e1 from "@/public/e1.svg"
import e2 from "@/public/e2.svg"
import e3 from "@/public/e3.svg"
import e4 from "@/public/e4.svg"
import { motion, AnimatePresence } from "framer-motion"

const Exist = () => {
  const [openItem, setOpenItem] = useState(null)
  const toggleItem = useCallback((index) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === index ? null : index))
  }, [])
  const accordionItems = [
    {
      title: "Give you peace of mind",
      content: "Every artisan in our network is thoroughly vetted for skills, experience, and professionalism.",
      icon: e1,
      bgColor: "bg-[#E8F0EE]", // Light mint/teal
    },
    {
      title: "Save your precious time",
      content: "Our professionals are committed to delivering quality work within agreed timelines.",
      icon: e3,
      bgColor: "bg-[#FAEEE5]", // Light peach/orange
    },
    {
      title: "Offer value for your hard-earned money",
      content: "No hidden costs, no surprises. Get clear and fair pricing for every project upfront.",
      icon: e2,
      bgColor: "bg-[#FAEEE5]", // Light peach/orange
    },
    {
      title: "Ensure your safety",
      content: "We conduct background checks to ensure you're working with trustworthy individuals.",
      icon: e4,
      bgColor: "bg-[#E8F0EE]", // Light mint/teal
    },
  ]
  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
        opacity: { duration: 0.2 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.2 },
        opacity: { duration: 0.1 },
      },
    },
  }

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }

  return (
    <div className="w-full flex flex-col items-center justify-center my-20 max-lg:my-4 px-[80px] max-lg:px-4">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-[55px] font-bold text-[#E97124] text-center mb-20 max-lg:mb-6 uppercase max-lg:text-[24px]"
      >
        We exist to
      </motion.h2>

      <div className="w-full max-md:hidden flex items-start justify-between max-lg:flex-col gap-8">
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
              layout
            >
              <div
                className="px-[45px] max-lg:px-4 flex items-center justify-between w-full cursor-pointer py-[38px] hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <span className="text-[24px] max-lg:text-[18px] font-medium">{item.title}</span>
                <motion.div
                  variants={iconVariants}
                  animate={openItem === index ? "open" : "closed"}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  {openItem === index ? (
                    <FaMinus className="size-[24px] text-gray-700" />
                  ) : (
                    <Image src={plus || "/placeholder.svg"} alt="expand" className="size-[39px]" />
                  )}
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {openItem === index && (
                  <motion.div
                    key={`content-${index}`}
                    variants={accordionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-[45px] max-lg:px-4 py-0 bg-gray-50 border-t overflow-hidden"
                  >
                    <div className="py-4">
                      <p className="text-gray-700 pb-2">{item.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <Image src={existImage || "/placeholder.svg"} alt="exist" className="rounded-[20px] w-full h-auto" priority />
        </motion.div>
      </div>

      {/* Mobile version with accordion functionality */}
      <div className="w-full md:hidden grid my-4 grid-cols-2 gap-4">
        {accordionItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            viewport={{ once: true }}
            className={`${item.bgColor} rounded-[12px] p-5 flex flex-col items-start cursor-pointer`}
            onClick={() => toggleItem(index)}
            layout
          >
            <div className="rounded-full bg-white p-3 mb-4 flex items-center justify-center w-12 h-12">
              <Image src={item.icon || "/placeholder.svg"} alt={`icon-${index}`} width={24} height={24} />
            </div>
            <span className="text-[14px] text-[#282928] font-medium leading-tight">{item.title}</span>

            <AnimatePresence initial={false}>
              {openItem === index && (
                <motion.div
                  key={`mobile-content-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      height: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2, delay: 0.1 },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      height: { duration: 0.2 },
                      opacity: { duration: 0.1 },
                    },
                  }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-[12px] text-[#282928] opacity-80">{item.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Exist
