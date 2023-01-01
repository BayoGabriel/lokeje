import Image from 'next/image'
import svg from '@/public/svg.svg'

const Waitlist = () => {
  return (
    <div className='w-full flex items-center justify-center p-[80px] relative' id='waitlist'>
        <Image src={svg} alt='svg' className='absolute left-0 -z-0 -top-2'/>
      <div className="w-full wait rounded-[30px] px-[100px] py-20 flex items-center z-[2] gap-[50px]">
        <h3 className="font-[800] text-[40px] text-white">Enjoy a <span className="text-[#94D227]">5%</span> discount on your first 3 orders when we launch.</h3>
        <div className="relative w-[691px] h-[90px]">
          <input type="email" name='email' className='size-full rounded-[10px] py-4 px-8 placeholder:text-white text-white bg-[#5E5D5C] outline-none' placeholder='Your email' />
          <button className="text-white bg-[#F9A607] absolute translate-y-1/2 px-12 py-4 rounded-[10px] right-4">Join the waitlist</button>
        </div>
      </div>
    </div>
  )
}

export default Waitlist