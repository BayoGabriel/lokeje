import Image from "next/image";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import hm from "@/public/hm.svg";
import { FaGoogle } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="min-h-[173px] bg-[#012D26] relative w-full flex items-center justify-between px-[100px] max-lg:px-6 max-md:px-4 max-sm:flex-col max-sm:items-center max-sm:py-6">
      <Image src={hm} alt="tudgv" className="absolute left-0 top-0 max-sm:hidden" />
      
      {/* Footer Text & Links */}
      <div className="flex items-center gap-6 max-sm:flex-col max-sm:gap-3">
        <span className="text-white text-[20px] max-sm:text-[16px] text-center">
          © 2025 Lokraft.com Ltd. All rights reserved.
        </span>
        <div className="flex items-center gap-3 text-[20px] max-sm:text-[16px] max-sm:flex-col max-sm:gap-2">
          <Link href="#" className="text-white">Terms of Service</Link>
          <Link href="#" className="text-white">Privacy Policy</Link>
        </div>  
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-4 max-sm:gap-3 max-sm:mt-4">
        {[
          { icon: <FaXTwitter />, link: "#" },
          { icon: <FaGoogle />, link: "#" },
          { icon: <FaFacebookF />, link: "#" },
          { icon: <IoLogoInstagram />, link: "#" },
          { icon: <FaLinkedinIn />, link: "#" }
        ].map((item, index) => (
          <Link key={index} href={item.link} className="rounded-full border-white text-white border p-2 flex items-center justify-center w-10 h-10">
            {item.icon}
          </Link>
        ))}
      </div>
    </footer>
  );
}
