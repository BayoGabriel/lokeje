"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import greenbg from "@/public/herobg.svg"
import heroImage from "@/public/HeroImage.png"
import one from "@/public/1.svg"
import two from "@/public/2.svg"
import three from "@/public/3.svg"
import four from "@/public/4.svg"
import five from "@/public/5.svg"

const tooltipData = [
  { src: one, text: "Find skilled tailors easily!", top: "-360px", left: "auto", right: "4px", moveX: "1000px" },
  { src: two, text: "Get high-quality service!", top: "-320px", left: "auto", right: "190px", moveX: "1000px" },
  { src: three, text: "Verified and trusted artisans!", top: "-200px", left: "auto", right: "600px", moveX: "0px" },
  { src: four, text: "Hire in just 3 minutes!", top: "-320px", left: "150px", right: "auto", moveX: "-1000px" },
  { src: five, text: "No more missed deadlines!", top: "-160px", left: "4px", right: "auto", moveX: "-1000px" },
]

const mobileTooltip = [
  { src: one, text: "Find skilled tailors easily!", top: "-40px", left: "auto", right: "4px", moveX: "100px" },
  { src: two, text: "Get high-quality service!", top: "-120px", left: "auto", right: "4px", moveX: "100px" },
  { src: four, text: "Hire in just 3 minutes!", top: "-1px", left: "0px", right: "auto", moveX: "-100px" },
  { src: five, text: "No more missed deadlines!", top: "-110px", left: "4px", right: "auto", moveX: "-100px" },
]

const professions = ["Plumber", "Tailor", "Photographer", "Baker", "Tiler"]

const Hero = () => {
  const [profession, setProfession] = useState("Tailor")
  const [index, setIndex] = useState(1) 

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % professions.length
      setIndex(nextIndex)
      setProfession(professions[nextIndex])
    }, 5000)

    return () => clearInterval(interval)
  }, [index])

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#E97124",
      transition: { duration: 0.2 },
    },
  }

  const heroImageVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.7, ease: "easeOut" },
    },
  }

  const floatingIconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1 + i * 0.2,
        ease: "easeOut",
      },
    }),
  }

  const professionVariants = {
    animate: {
      opacity: 1,
      transition: { duration: 2.8, ease: "easeInOut" },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col w-full min-h-screen mt-10 max-lg:mt-6 max-md:mt-4 max-sm:mt-2"
    >
      <div className="w-full flex flex-col items-center justify-center max-lg:gap-4 gap-8 my-10 max-md:my-6 max-sm:my-4 px-4">
        <motion.h1
          variants={headerVariants}
          className="text-[114px] text-[#282928] tracking-[0px] font-bold text-center leading-[1.1em] max-xl:text-[90px] max-lg:text-[70px] max-md:text-[50px] max-sm:text-[36px] max-xs:text-[28px]"
        >
          Find A Trusted <br />
          <motion.span
            key={profession}
            initial={{ opacity: 0 }}
            animate={professionVariants.animate}
            className="text-[#02846B] inline-block min-h-[1.2em]"
          >
            {profession}
          </motion.span>{" "}
          <span className="whitespace-nowrap">Near You!</span>
        </motion.h1>

        <motion.p
          variants={descriptionVariants}
          className="text-[22px] lg:max-w-[550px] max-w-[90%] text-center leading-[1.5] text-[#282928] tracking-[0] max-lg:text-[20px] max-md:text-[18px] max-sm:text-[16px] max-xs:text-[14px]"
        >
          Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in
          3 minutes and 5 clicks.
        </motion.p>

        <motion.div variants={buttonVariants} whileHover="hover">
          <Link
            href="#waitlist"
            className="bg-[#F9A607] px-8 py-3 rounded-[10px] text-white hover:bg-primary ease-in duration-75 max-lg:px-7 max-lg:py-2.5 max-md:px-6 max-md:py-2 max-sm:px-5 max-sm:py-2 text-lg max-sm:text-base"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      <div className="w-full px-[80px] max-xl:px-[60px] max-lg:px-[40px] max-md:px-[20px] max-sm:px-[10px] max-md:mt-[100px] max-lg:mt-[150px] mt-[200px] transition-all duration-300">
        <div className="w-full relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <Image src={greenbg} alt="greenbg" className="w-full object-contain" />
          </motion.div>

          <motion.div variants={heroImageVariants} className="absolute bottom-0 w-full">
            <Image src={heroImage} alt="hero" className="w-full h-full" />
          </motion.div>

          {tooltipData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={floatingIconVariants}
              className="absolute max-md:hidden z-[-2] floating-animation"
              style={{
                top: item.top,
                left: item.left !== "auto" ? item.left : "",
                right: item.right !== "auto" ? item.right : "",
                "--moveX": item.moveX,
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  x: [0, item.moveX === "0px" ? 0 : Number.parseInt(item.moveX) > 0 ? 20 : -20, 0],
                  rotate: [0, item.moveX === "0px" ? 0 : Number.parseInt(item.moveX) > 0 ? 5 : -5, 0],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={item.src}
                  alt={`icon-${index + 1}`}
                  className="transition-transform max-lg:w-[80%] max-lg:h-[80%] max-lg:object-contain"
                />
              </motion.div>
            </motion.div>
          ))}

          {mobileTooltip.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={floatingIconVariants}
              className="absolute h-2 md:hidden z-[-2]"
              style={{
                top: item.top,
                left: item.left !== "auto" ? item.left : "",
                right: item.right !== "auto" ? item.right : "",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, Number.parseInt(item.moveX) > 0 ? 10 : -10, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={item.src}
                  alt={`icon-${index + 1}`}
                  className="transition-transform max-sm:w-[70%] max-sm:h-[70%] max-sm:object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Hero
