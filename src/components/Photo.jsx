"use client";
import Image from "next/image";
import { motion } from "motion/react"

const Photo = () => {
  return (
    <div className="w-full h-full relative items-center justify-center">
      <motion.div 
      initial={{opacity:0}}
      animate={{
        opacity: 1,
        transition: {delay:2, duration: 0.4, ease: "easeIn"},
      }}
      >
        {/* Image */}
        <motion.div
        initial={{opacity:0}}
        animate={{
        opacity: 1,
        transition: {delay:2.4, duration: 0.4, ease: "easeInOut"},
      }}
        className="w-[298px] h-[298px] mix-blend-lighten absolute">
          <Image 
          src="/aklima.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
          />
        </motion.div>

        {/* circle */}
        <motion.svg 
        className="w-[300px] h-[300px] "
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/200/svg"
        > 
        <motion.circle 
        cx= "253"
        cy="253"
        r= "250"
        stroke= "#C5775B"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ strokeDasharray: "24 10 0 0" }}
        animate={{
          strokeDasharray: ["15 120 25 25", "16 25 92 72","4 250 22 22"],
          rotate: [120, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"

        }}
        />

       

        </motion.svg>

      </motion.div>
    </div>
  )
}

export default Photo
