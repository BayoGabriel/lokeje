import Image from "next/image";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import hm from "@/public/hm.svg"
import { FaGoogle } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="min-h-[173px] bg-[#012D26] relative w-full flex items-center justify-between px-[100px]">
      <Image src={hm} alt="tudgv" className="absolute left-0 top-0"/>
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
        <Link href="" className="rounded-full border-white text-white border p-2 flex items-center justify-center">
          <FaXTwitter />
        </Link>
        <Link href="" className="rounded-full border-white text-white border p-2 flex items-center justify-center">
          <FaGoogle />
        </Link>
        <Link href="" className="rounded-full border-white text-white border p-2 flex items-center justify-center">
          <FaFacebookF />
        </Link>
        <Link href="" className="rounded-full border-white text-white border p-2 flex items-center justify-center">
          <IoLogoInstagram />
        </Link>
        <Link href="" className="rounded-full border-white text-white border p-2 flex items-center justify-center">
          <FaLinkedinIn />
        </Link>
      </div>
    </footer>
  )
}

