"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { Description } from "@radix-ui/react-dialog"

const services = [
  {
    num: "01",
    title: "Web Development",
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: ""
  },
   {
    num: "02",
    title: "Ui/Ux Design",
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: ""
  },
  {
    num: "03",
    title: "Logo Design",
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: ""
  },
   {
    num: "04",
    title: "Seo",
    Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    href: ""
  },
]
import { motion } from "motion/react"
const page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
          <motion.div initial={{opacity:0}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4 , duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
            {
              services.map((item, index)=>{
                return (
                  <div key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group">
                    <div className="w-full flex justify-between items-center">
                      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                       
                      <Link href={item.href}
                      className="w-[50px] h-[50px] rounded-full bg-gray-700  group-hover:bg-green-600 transition-all duration-500 flex justify-center items-center text-white hover:-rotate-45">
                         <BsArrowDownRight/>
                      </Link>
                    </div>
                    <h2 className="text-[42px] font-bold leading-none text-gray-700 group-hover:text-green-600 transition-all duration-500">{item.title}</h2>
                    <p className="text-gray-700">{item.Description}</p>
                    <div className="border-b border-gray-700 w-full"></div>
                  </div>
                )
              })
            }

          </motion.div>
      </div>
    </section>
  )
}

export default page
