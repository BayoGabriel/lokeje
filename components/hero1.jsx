"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import greenbg from "@/public/herobg.svg"
import heroImage from "@/public/HeroImage.png"

// Define unique colors for each tooltip
const tooltipColors = [
  { border: "#8E59FF", text: "#8E59FF" }, // Coral
  { border: "#E97124", text: "#E97124" }, // Green
  { border: "#FBBB00", text: "#FBBB00" }, // Blue
  { border: "#53B175", text: "#53B175" }, // Magenta
  { border: "#054F43", text: "#054F43" }, // Orange
]

const tooltipData = [
  { text: "Plumber", top: "-560px", left: "auto", right: "45px", moveX: "1000px" },
  { text: "Plumber", top: "-160px", left: "auto", right: "60px", moveX: "1000px" },
  { text: "Plumber", top: "-360px", left: "auto", right: "4px", moveX: "1000px" },
  { text: "Technician", top: "-320px", left: "auto", right: "190px", moveX: "1000px" },
  { text: "Hair Stylist", top: "-100px", left: "auto", right: "600px", moveX: "0px" },
  { text: "Fashion Designer", top: "-200px", left: "auto", right: "600px", moveX: "0px" },
  { text: "Electrician", top: "-520px", left: "10px", right: "auto", moveX: "-1000px" },
  { text: "Makeup Artist", top: "-320px", left: "150px", right: "auto", moveX: "-1000px" },
  { text: "Carpentry", top: "-160px", left: "4px", right: "auto", moveX: "-1000px" },
]

const mobileTooltip = [
  { text: "Plumber", top: "-40px", left: "auto", right: "4px", moveX: "100px" },
  { text: "Technician", top: "-120px", left: "auto", right: "4px", moveX: "100px" },
  { text: "Hair Stylist", top: "-60px", left: "auto", left: "60px", moveX: "0px" },
  { text: "Fashion Designer", top: "-60px", left: "auto", right: "60px", moveX: "0px" },
  { text: "Makeup Artist", top: "-1px", left: "0px", right: "auto", moveX: "-100px" },
  { text: "Carpentry", top: "-110px", left: "4px", right: "auto", moveX: "-100px" },
]

const Hero = () => {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col w-full min-h-screen mt-10 max-lg:mt-5 max-md:mt-3"
    >
      <div className="w-full flex flex-col items-center justify-center max-lg:gap-4 gap-8 my-10 px-4">
        <motion.h1
          variants={headerVariants}
          className="text-[114px] text-[#282928] tracking-[0px] font-bold text-center leading-[1em] max-lg:text-[80px] max-md:text-[60px] max-sm:text-[40px]"
        >
          Find A Trusted <br /> <span className="text-[#02846B]">Tailor</span> Near You!
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

      <div className="w-full px-[80px] max-md:mt-[100px] max-lg:mt-[50px] mt-[200px] max-md:px-[40px] max-sm:px-[20px]">
        <div className="w-full relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <Image src={greenbg || "/placeholder.svg"} alt="greenbg" className="w-full object-contain" />
          </motion.div>

          <motion.div variants={heroImageVariants} className="absolute bottom-0 w-full">
            <Image src={heroImage || "/placeholder.svg"} alt="hero" className="w-full h-full" />
          </motion.div>

          {/* Floating Images with Animation - Desktop */}
          {tooltipData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={floatingIconVariants}
              className="absolute max-md:hidden z-10 floating-animation"
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
                style={{
                  border: `2px solid ${tooltipColors[index % tooltipColors.length].border}`,
                  color: tooltipColors[index % tooltipColors.length].text,
                  padding: "10px 14px",
                  borderRadius: "68px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  fontWeight: "bold",
                }}
              >
                <span className="transition-transform">{item.text}</span>
              </motion.div>
            </motion.div>
          ))}

          {/* Floating Images with Animation - Mobile */}
          {mobileTooltip.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={floatingIconVariants}
              className="absolute md:hidden z-10"
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
                style={{
                  border: `2px solid ${tooltipColors[index % tooltipColors.length].border}`,
                  color: tooltipColors[index % tooltipColors.length].text,
                  padding: "6px 10px",
                  borderRadius: "68px",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  fontWeight: "700",
                  fontSize: "7px",
                  fontFamily: ""
                }}
              >
                <span className="transition-transform">{item.text}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Hero

