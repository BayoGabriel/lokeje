import Image from 'next/image'
import svg from '@/public/svg.svg'

const Waitlist = () => {
  return (
    <div className='w-full flex items-center justify-center p-[80px] relative' id='waitlist'>
        <Image src={svg} alt='svg' className='absolute left-0 -z-0 -top-2'/>
      <div className="w-full wait rounded-[30px] p-[100px] flex items-center z-[2]">
        <h3 className="font-[800] text-[40px] text-white">Enjoy a <span className="text-[#94D227]">5%</span> discount on your first 3 orders when we launch.</h3>
      </div>
    </div>
  )
}

export default Waitlist