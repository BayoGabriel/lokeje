"use client"
import w1 from "@/public/w1.svg"
import w2 from "@/public/w2.svg"
import w3 from "@/public/w3.svg"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HowItWorks() {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3,
          delayChildren: 0.2
        }
      }
    }

    const titleVariants = {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
      }
    }

    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: i => ({
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: i * 0.2, 
          ease: "easeOut" 
        }
      }),
      hover: {
        y: -10,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }
    }

    const iconVariants = {
      hidden: { scale: 0, rotate: -30 },
      visible: {
        scale: 1,
        rotate: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 0.3 }
      },
      hover: {
        rotate: [0, -10, 10, -5, 5, 0],
        transition: { duration: 1 }
      }
    }

    return (
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full flex flex-col items-center justify-center my-20 px-[80px] max-lg:px-2 max-lg:my-4"
      >
        <motion.div 
          variants={titleVariants}
          className="text-center"
        >
          <h2 className="text-[55px] font-bold text-[#E97124] text-nowrap text-center mb-20 max-lg:mb-2 uppercase max-lg:text-[24px]">HOW IT WORKS</h2>
        </motion.div>
  
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:px-[80px] px-2">
         
          <motion.div 
            custom={0}
            variants={cardVariants}
            whileHover="hover"
            className="rounded-2xl bg-[#42A6C5] max-lg:p-4 p-12 text-white"
          >
            <div className="mb-4">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[25px] font-semibold mb-2 max-lg:text-[14px]"
              >
                STEP 1
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="font-medium text-[20px] max-lg:text-[10px]"
              >
                Tell Us What You Need
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-[14px] mt-2 opacity-90"
              >
                Share the details of your project or service requirements.
              </motion.p>
            </div>
            <div className="w-full flex justify-end max-md:justify-center">
              <motion.div 
                variants={iconVariants}
                whileHover="hover"
                className="mt-4 h-20 w-20 rounded-full bg-white/20 flex items-center justify-center p-2"
              >
                <Image src={w1} alt="tell us what you need" />
              </motion.div>
            </div>
          </motion.div>
  
          <motion.div 
            custom={1}
            variants={cardVariants}
            whileHover="hover"
            className="rounded-2xl bg-[#F17F1A] p-12 text-white max-lg:p-4"
          >
            <div className="mb-4">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-[25px] font-semibold mb-2 max-lg:text-[14px]"
              >
                STEP 2
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="font-medium text-[20px] max-lg:text-[10px]"
              >
                Get Matched Instantly
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-sm mt-2 opacity-90 max-lg:text-[8px] text-[14px]"
              >
                We'll connect you with the best artisan for the job in your area.
              </motion.p>
            </div>
            <div className="w-full flex justify-end max-md:justify-center">
              <motion.div 
                variants={iconVariants}
                whileHover="hover"
                className="mt-4 h-20 w-20 rounded-full bg-white/20 flex items-center justify-center p-2"
              >
                <Image src={w2} alt="get matched instantly" />
              </motion.div>
            </div>
          </motion.div>
  
          <motion.div 
            custom={2}
            variants={cardVariants}
            whileHover="hover"
            className="rounded-2xl bg-[#8B6F47] p-12 text-white max-lg:p-4"
          >
            <div className="mb-4">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-[25px] font-semibold mb-2 max-lg:text-[14px]"
              >
                STEP 3
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="font-medium text-[20px] max-lg:text-[10px]"
              >
                Enjoy Hassle-Free Service
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-sm mt-2 opacity-90 max-lg:text-[8px] text-[14px]"
              >
                Sit back and relax while our professional gets the job done.
              </motion.p>
            </div>
            <div className="w-full flex justify-end max-md:justify-center">
              <motion.div 
                variants={iconVariants}
                whileHover="hover" 
                className="mt-4 h-20 w-20 rounded-full bg-white/20 flex items-center justify-center p-2"
              >
                <Image src={w3} alt="enjoy hassle-free service" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
}