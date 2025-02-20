export default function WaitlistForm() {
    const handleSubmit = (e) => {
      e.preventDefault()
      // Add your form submission logic here
    }
  
    return (
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-[#362A2A] p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Enjoy a <span className="text-[#9FD33A]">5%</span> discount on your first 3 orders when we launch.
                </h2>
              </div>
  
              <form onSubmit={handleSubmit} className="w-full sm:w-auto flex-1">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 min-w-0 rounded-lg px-4 py-2.5 bg-white/10 text-white placeholder:text-white/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                    required
                  />
                  <button
                    type="submit"
                    className="whitespace-nowrap rounded-lg bg-[#F17F1A] px-4 py-2.5 text-white font-medium hover:bg-[#F17F1A]/90 focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    Join the waitlist
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  