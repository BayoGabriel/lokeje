"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

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
  // { src: three, text: "Verified and trusted artisans!", top: "-60px", left: "auto", right: "60px", moveX: "0px" },
  { src: four, text: "Hire in just 3 minutes!", top: "-1px", left: "0px", right: "auto", moveX: "-100px" },
  { src: five, text: "No more missed deadlines!", top: "-110px", left: "4px", right: "auto", moveX: "-100px" },
]

const professions = ["Plumber", "Tailor", "Photographer", "Baker", "Tiler"]

const Hero = () => {
  const [professionIndex, setProfessionIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length)
        setIsAnimating(false)
      }, 500) // Half of the animation duration
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  // Animation variants
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
    initial: {
      y: 40,
      opacity: 0,
      rotateX: -90,
    },
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
      },
    },
    exit: {
      y: -40,
      opacity: 0,
      rotateX: 90,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" className="flex flex-col w-full min-h-screen mt-10 max-lg:my-2">
      <div className="w-full flex flex-col items-center justify-center max-lg:gap-4 gap-8 my-10">
        <motion.h1
          variants={headerVariants}
          className="text-[114px] text-[#282928] tracking-[0px] font-bold text-center leading-[1em] max-md:text-[60px] max-sm:text-[30px]"
        >
          Find A Trusted <br />
          <span className="text-[#02846B] inline-block relative">
            <span className="sr-only">{professions[professionIndex]}</span>
            <span className="inline-block h-[1.1em] overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={professionIndex}
                  variants={professionVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute left-0 right-0"
                >
                  {professions[professionIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </span>{" "}
          Near You!
        </motion.h1>

        <motion.p
          variants={descriptionVariants}
          className="text-[22px] lg:max-w-[478px] max-lg:px-4 text-center leading-[33px] text-[#282928] tracking-[0] max-md:text-[18px] max-sm:text-[16px]"
        >
          Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in
          3 minutes and 5 clicks.
        </motion.p>

        <motion.div variants={buttonVariants} whileHover="hover">
          <Link
            href="#waitlist"
            className="bg-[#F9A607] px-8 py-3 rounded-[10px] text-white hover:bg-primary ease-in duration-75 max-sm:px-6 max-sm:py-2"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      <div className="w-full px-[80px] max-md:mt-[150px] max-lg:mt-0 mt-[250px] max-md:px-[40px] max-sm:px-[20px]">
        <div className="w-full relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <Image src={greenbg || "/placeholder.svg"} alt="greenbg" className="w-full object-contain" />
          </motion.div>

          <motion.div variants={heroImageVariants} className="absolute bottom-0 w-full">
            <Image src={heroImage || "/placeholder.svg"} alt="hero" className="w-full h-full" />
          </motion.div>

          {/* Floating Images with Animation */}
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
                  src={item.src || "/placeholder.svg"}
                  alt={`icon-${index + 1}`}
                  className="transition-transform"
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
                  src={item.src || "/placeholder.svg"}
                  alt={`icon-${index + 1}`}
                  className="transition-transform"
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
