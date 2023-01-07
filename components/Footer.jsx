import Image from "next/image";
import im from "@/public/footer.svg"
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="min-h-[173px] footer w-full flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="text-white text-[20px]">
        © 2025  Lokraft.com Ltd. All rights reserved.
        </span>
        <div className="flex items-center gap-3 text-[20px]">
          <Link href="#" className="text-white">Terms of Service</Link>
          <Link href="#" className="text-white">Privacy Policy</Link>
        </div>  
      </div>
      <div className="flex items-center gap-4">
        <Link href="" className="rounded-full border-white text-white p-2 flex items-center justify-center">
          <FaXTwitter />
        </Link>
      </div>
    </footer>
  )
}

