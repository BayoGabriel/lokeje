import greenbg from '@/public/herobg.svg'
import heroImage from '@/public/HeroImage.png'
import Image from 'next/image'
import one from "@/public/1.svg"
import two from "@/public/2.svg"
import three from "@/public/3.svg"
import four from "@/public/4.svg"
import five from "@/public/5.svg"
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col w-full min-h-screen my-10'>
      <div className="w-full flex flex-col items-center justify-center gap-8 my-10">
        <h1 className='text-[114px] text-[#282928] tracking-[0px] font-bold text-center leading-[1em] max-md:text-[60px] max-sm:text-[45px]'>
          Find A Trusted <br /> <span className='text-[#02846B]'>Tailor</span> Near You!
        </h1>
        <p className="text-[22px] max-w-[478px] text-center leading-[33px] text-[#282928] tracking-[0] max-md:text-[18px] max-sm:text-[16px]">
          Tired of unreliable artisans, inconsistent work quality, or missed deadlines? Hire verified skilled workers in 3 minutes and 5 clicks.
        </p>
        <Link href="#waitlist" className="bg-[#F9A607] px-8 py-3 rounded-[10px] text-white max-sm:px-6 max-sm:py-2">Get Started</Link>
      </div>
      <div className="w-full px-[80px] mt-[250px] max-md:px-[40px] max-sm:px-[20px]">
        <div className="w-full relative">
          <Image src={greenbg} alt="greenbg" className="w-full object-contain"/>
          <Image src={heroImage} alt="her" className='absolute bottom-0 max-md:w-[80%] max-md:left-[50%] max-md:translate-x-[-50%]'/>
          <Image src={one} alt="one" className='absolute z-[2] -top-[360px] left-4 max-md:-top-[280px] max-md:left-[20px] max-sm:-top-[150px] max-sm:left-[10px]'/>
          <Image src={two} alt="two" className='absolute z-[2] -top-[320px] left-[190px] max-md:-top-[260px] max-md:left-[100px] max-sm:-top-[130px] max-sm:left-[50px]'/>
          <Image src={three} alt="three" className='absolute z-[2] -top-[200px] left-[600px] max-md:-top-[180px] max-md:left-[50%] max-md:translate-x-[-50%] max-sm:-top-[110px]'/>
          <Image src={four} alt="four" className='absolute z-[2] -top-[320px] right-[150px] max-md:-top-[260px] max-md:right-[80px] max-sm:-top-[130px] max-sm:right-[40px]'/>
          <Image src={five} alt="five" className='absolute z-[2] -top-[160px] right-4 max-md:-top-[140px] max-md:right-[20px] max-sm:-top-[90px] max-sm:right-[10px]'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
