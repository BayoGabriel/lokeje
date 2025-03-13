import Image from 'next/image'
import existImage from '@/public/exist.png'
import plus from '@/public/add.svg'
import e1 from "@/public/e1.svg"
import e2 from "@/public/e2.svg"
import e3 from "@/public/e3.svg"
import e4 from "@/public/e4.svg"
const Exist = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-20 max-lg:my-4 px-[80px] max-lg:px-2">
        <h2 className="text-[55px] font-bold text-[#E97124] text-center mb-20 max-lg:mb-2 uppercase max-lg:text-[24px]">We exist to</h2>
        <div className='w-full max-md:hidden flex items-center justify-between max-lg:flex-col'>
            <div className="flex flex-col gap-8 w-[40%] max-lg:w-full">
                <div className="px-[45px] max-lg:px-4 flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px] max-lg:text-[18px]'>Give you peace of mind</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
                <div className="px-[45px] max-lg:px-4 flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px] max-lg:text-[18px]'>Offer value for your 
                    hard-earned money.</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
                <div className="px-[45px] max-lg:px-4 flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px] max-lg:text-[18px]'>Save your precious time</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
                <div className="px-[45px] max-lg:px-4 flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px] max-lg:text-[18px]'>Ensure your safety.</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
            </div>
            <Image src={existImage} alt='exist' className='rounded-[20px]'/>
        </div>
        <div className="w-full md:hidden grid my-4 grid-cols-2 px-2 gap-2">
        
            <div className="bg-[#054F43] rounded-[12px] items-start flex p-4 flex-col">
                <div className='rounded-full bg-white p-3 mb-4 flex items-center justify-center'>
                    <Image src={e2} alt=''/>
                </div>
                <span className='text-[12px] text-black'>Give you peace of mind</span>
            </div>
            <div className="bg-[#E97124] rounded-[12px] items-start flex p-4 flex-col">
                <div className='rounded-full bg-white p-3 mb-4 flex items-center justify-center'>
                    <Image src={e2} alt=''/>
                </div>
                <span className='text-[12px] text-black'>Offer value for your 
                hard-earned money.</span>
            </div>
            <div className="bg-[#E97124] rounded-[12px] items-start flex p-4 flex-col">
                <div className='rounded-full bg-white p-3 mb-4 flex items-center justify-center'>
                    <Image src={e3} alt=''/>
                </div>
                <span className='text-[12px] text-black'>Save your precious time</span>
            </div>
            <div className="bg-[#E97124] rounded-[12px] items-start flex p-4 flex-col">
                <div className='rounded-full bg-white p-3 mb-4 flex items-center justify-center'>
                    <Image src={e4} alt=''/>
                </div>
                <span className='text-[12px] text-black'>Ensure your safety.</span>
            </div>
        </div>
    </div>
  )
}

export default Exist