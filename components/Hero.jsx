"use client";

import Image from "next/image";
import Link from "next/link";

import greenbg from "@/public/herobg.svg";
import heroImage from "@/public/HeroImage.png";
import one from "@/public/1.svg";
import two from "@/public/2.svg";
import three from "@/public/3.svg";
import four from "@/public/4.svg";
import five from "@/public/5.svg";

const tooltipData = [
  { src: one, text: "Find skilled tailors easily!", top: "-360px", left: "4px" },
  { src: two, text: "Get high-quality service!", top: "-320px", left: "190px" },
  { src: three, text: "Verified and trusted artisans!", top: "-200px", left: "600px" },
  { src: four, text: "Hire in just 3 minutes!", top: "-320px", right: "150px" },
  { src: five, text: "No more missed deadlines!", top: "-160px", right: "4px" },
];

const Hero = () => {
  return (
    <div className="flex flex-col w-full min-h-screen mt-10 max-lg:my-2">
      <div className="w-full flex flex-col items-center justify-center max-lg:gap-4 gap-8 my-10">
        <h1 className="text-[114px] text-[#282928] tracking-[0px] font-bold text-center leading-[1em] max-md:text-[60px] max-sm:text-[30px]">
          Find A Trusted <br /> <span className="text-[#02846B]">Tailor</span> Near You!
        </h1>
        <p className="text-[22px] lg:max-w-[478px] max-lg:px-4 text-center leading-[33px] text-[#282928] tracking-[0] max-md:text-[18px] max-sm:text-[16px]">
          Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in 3 minutes and 5 clicks.
        </p>
        <Link
          href="#waitlist"
          className="bg-[#F9A607] px-8 py-3 rounded-[10px] text-white hover:bg-primary animate-pulse ease-in-out max-sm:px-6 max-sm:py-2"
        >
          Get Started
        </Link>
      </div>
      <div className="w-full px-[80px] max-lg:mt-0 mt-[250px] max-md:px-[40px] max-sm:px-[20px]">
        <div className="w-full relative">
          <Image src={greenbg} alt="greenbg" className="w-full object-contain" />
          <Image
            src={heroImage}
            alt="hero"
            className="absolute bottom-0 max-md:w-[80%] max-md:left-[50%] max-md:translate-x-[-50%]"
          />

          {/* Floating Images with Tooltips */}
          {tooltipData.map((item, index) => (
            <div
              key={index}
              className="absolute max-md:hidden z-[2] animate-float group"
              style={{
                top: item.top,
                left: item.left || "auto",
                right: item.right || "auto",
              }}
            >
              <Image src={item.src} alt={`icon-${index + 1}`} className="hover:scale-110 transition-transform" />
              {/* <span className="absolute left-1/2 -translate-x-1/2 -top-24 w-40 px-3 py-1 bg-transparent text-primary text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300">
                {item.text}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
