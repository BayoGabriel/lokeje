import Image from "next/image";
import im from "@/public/footer.svg"
export default function Footer() {
  return (
    <footer className="min-h-[173px]">
      <Image src={im} alt="gfod" className="w-full h-full"/>
    </footer>
  )
}

