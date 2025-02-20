export default function HowItWorks() {
    return (
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#FF6B35] mb-12">HOW IT WORKS</h2>
        </div>
  
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="rounded-2xl bg-[#45B1BE] p-8 text-white">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">STEP 1</h3>
              <p className="font-medium">Tell Us What You Need</p>
              <p className="text-sm mt-2 opacity-90">Share the details of your project or service requirements.</p>
            </div>
            <div className="mt-4 h-20 w-20 rounded-full bg-white/20" />
          </div>
  
          {/* Step 2 */}
          <div className="rounded-2xl bg-[#F17F1A] p-8 text-white">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">STEP 2</h3>
              <p className="font-medium">Get Matched Instantly</p>
              <p className="text-sm mt-2 opacity-90">We'll connect you with the best artisan for the job in your area.</p>
            </div>
            <div className="mt-4 h-20 w-20 rounded-full bg-white/20" />
          </div>
  
          {/* Step 3 */}
          <div className="rounded-2xl bg-[#8B6F47] p-8 text-white">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">STEP 3</h3>
              <p className="font-medium">Enjoy Hassle-Free Service</p>
              <p className="text-sm mt-2 opacity-90">Sit back and relax while our professional gets the job done.</p>
            </div>
            <div className="mt-4 h-20 w-20 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    )
  }
  
  