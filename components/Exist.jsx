import Image from 'next/image'
import existImage from '@/public/exist.png'
import plus from '@/public/add.svg'

const Exist = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-20 px-[80px]">
        <h2 className="text-[55px] font-bold text-[#E97124] text-center mb-20 uppercase">We exist to</h2>
        <div className='w-full flex items-center justify-between'>
            <div className="flex flex-col gap-8 w-[40%]">
                <div className="px-[45px] flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px]'>Give you peace of mind</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
                <div className="px-[45px] flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px]'>Offer value for your 
                    hard-earned money.</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
                <div className="px-[45px] flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px]'>Save your precious time</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
                <div className="px-[45px] flex items-center justify-between w-full shadow-lg rounded-[20px] py-[38px]">
                    <span className='text-[24px]'>Ensure your safety.</span>
                    <Image src={plus} alt='plf' className='size-[39px]'/>
                </div>
            </div>
            <Image src={existImage} alt='exist' className='rounded-[20px]'/>
        </div>
    </div>
  )
}

export default Exist