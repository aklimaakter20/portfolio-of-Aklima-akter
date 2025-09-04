"use client";
import Image from "next/image";
import { motion } from "motion/react"

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* image */}
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lig">
          <Image src="/aklima.png" 
          alt="myPic" 
          priority quality={100}
           fill className="object-contain"/>
        </div>
      </motion.div>

     
    </div>
  )
}

export default Photo
