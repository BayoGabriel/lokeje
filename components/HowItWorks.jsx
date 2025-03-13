import w1 from "@/public/w1.svg"
import w2 from "@/public/w2.svg"
import w3 from "@/public/w3.svg"
import Image from "next/image"

export default function HowItWorks() {
    return (
      <div className="w-full flex flex-col items-center justify-center my-20 px-[80px] max-lg:px-2 max-lg:my-4">
        <div className="text-center">
          <h2 className="text-[55px] font-bold text-[#E97124] text-nowrap text-center mb-20 max-lg:mb-2 uppercase max-lg:text-[24px]">HOW IT WORKS</h2>
        </div>
  
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:px-[80px] px-2">
          {/* Step 1 */}
          <div className="rounded-2xl bg-[#42A6C5] max-lg:p-4 p-12 text-white">
            <div className="mb-4">
              <h3 className="text-[25px] font-semibold mb-2 max-lg:text-[14px]">STEP 1</h3>
              <p className="font-medium text-[20px] max-lg:text-[10px]">Tell Us What You Need</p>
              <p className="text-[14px] mt-2 opacity-90">Share the details of your project or service requirements.</p>
            </div>
           <div className="w-full flex justify-end max-md:justify-center">
           <div className="mt-4 h-20 w-20 rounded-full bg-white/20 flex items-center justify-center p-2" >
            <Image src={w1} alt="t"/>
           </div>
           </div>
          </div>
  
          {/* Step 2 */}
          <div className="rounded-2xl bg-[#F17F1A] p-12 text-white max-lg:p-4">
            <div className="mb-4">
              <h3 className="text-[25px] font-semibold mb-2 max-lg:text-[14px]">STEP 2</h3>
              <p className="font-medium text-[20px] max-lg:text-[10px]">Get Matched Instantly</p>
              <p className="text-sm mt-2 opacity-90 max-lg:text-[8px] text-[14px]">We'll connect you with the best artisan for the job in your area.</p>
            </div>
            <div className="w-full flex justify-end max-md:justify-center">
           <div className="mt-4 h-20 w-20 rounded-full bg-white/20 flex items-center justify-center p-2" >
            <Image src={w2} alt="t"/>
           </div>
           </div>
          </div>
  
          {/* Step 3 */}
          <div className="rounded-2xl bg-[#8B6F47] p-12 text-white max-lg:p-4">
            <div className="mb-4">
              <h3 className="text-[25px] font-semibold mb-2 max-lg:text-[14px]">STEP 3</h3>
              <p className="font-medium text-[20px] max-lg:text-[10px]">Enjoy Hassle-Free Service</p>
              <p className="text-sm mt-2 opacity-90 max-lg:text-[8px] text-[14px]">Sit back and relax while our professional gets the job done.</p>
            </div>
            <div className="w-full flex justify-end max-md:justify-center">
           <div className="mt-4 h-20 w-20 rounded-full bg-white/20 flex items-center justify-center p-2" >
            <Image src={w3} alt="t"/>
           </div>
           </div>
          </div>
        </div>
      </div>
    )
  }
  
  