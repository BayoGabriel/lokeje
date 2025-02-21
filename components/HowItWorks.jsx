export default function HowItWorks() {
    return (
      <div className="w-full flex flex-col items-center justify-center my-20 px-[80px]">
        <div className="text-center">
          <h2 className="text-[55px] font-bold text-[#E97124] text-center mb-20 uppercase">HOW IT WORKS</h2>
        </div>
  
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:px-[80px]">
          {/* Step 1 */}
          <div className="rounded-2xl bg-[#42A6C5] p-12 text-white">
            <div className="mb-4">
              <h3 className="text-[25px] font-semibold mb-2">STEP 1</h3>
              <p className="font-medium text-[20px]">Tell Us What You Need</p>
              <p className="text-[14px] mt-2 opacity-90">Share the details of your project or service requirements.</p>
            </div>
           <div className="w-full flex justify-end">
           <div className="mt-4 h-20 w-20 rounded-full bg-white/20" />
           </div>
          </div>
  
          {/* Step 2 */}
          <div className="rounded-2xl bg-[#F17F1A] p-12 text-white">
            <div className="mb-4">
              <h3 className="text-[25px] font-semibold mb-2">STEP 2</h3>
              <p className="font-medium text-[20px]">Get Matched Instantly</p>
              <p className="text-sm mt-2 opacity-90 text-[14px]">We'll connect you with the best artisan for the job in your area.</p>
            </div>
            <div className="w-full flex justify-end">
              <div className="mt-4 h-20 w-20 rounded-full bg-white/20" />
            </div>
          </div>
  
          {/* Step 3 */}
          <div className="rounded-2xl bg-[#8B6F47] p-12 text-white">
            <div className="mb-4">
              <h3 className="text-[25px] font-semibold mb-2">STEP 3</h3>
              <p className="font-medium text-[20px]">Enjoy Hassle-Free Service</p>
              <p className="text-sm mt-2 opacity-90 text-[14px]">Sit back and relax while our professional gets the job done.</p>
            </div>
            <div className="w-full flex justify-end">
              <div className="mt-4 h-20 w-20 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  