import Image from 'next/image'
import svg from '@/public/svg.svg'

const Waitlist = () => {
  return (
    <div className="w-full flex items-center justify-center p-[80px] max-lg:px-0 max-md:p-6 relative" id="waitlist">
      <Image src={svg} alt="svg" className="absolute left-0 max-lg:hidden -z-0 -top-2" />
      <div className="w-full wait rounded-[30px] px-[100px] py-20 max-lg:py-8 max-lg:px-6 max-md:px-4 max-lg:flex-col flex items-center z-[2] gap-[50px] max-lg:gap-6">
        <h3 className="font-[800] text-[40px] text-white max-lg:text-[28px] max-md:text-[20px] text-center max-lg:text-center">
          Enjoy a <span className="text-[#94D227]">5%</span> discount on your first 3 orders when we launch.
        </h3>
        <div className="relative w-[691px] h-[90px] max-lg:w-full max-lg:h-[70px]">
          <input
            type="email"
            name="email"
            className="w-full h-full rounded-[10px] py-4 px-8 max-lg:px-2 placeholder:text-white text-white bg-[#5E5D5C] outline-none"
            placeholder="Your email"
          />
          <button className="text-white bg-[#F9A607] max-lg:hidden absolute top-1/2 -translate-y-1/2 px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-[10px] right-4">
            Join the waitlist
          </button>
          <button className="text-white bg-[#F9A607] lg:hidden absolute top-1/2 -translate-y-1/2 px-6 py-3 max-lg:px-4 max-lg:py-2 rounded-[10px] right-4">
            Join
          </button>
        </div>
      </div>
    </div>
  )
}

export default Waitlist
