"use client"

import { motion } from "motion/react";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
    stack: [{ name:"html 5"},{name:"Css 3" },{name:"javascript"}],
    image:"/thumb3.png",
    live: "",
    github:"",
},
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
    stack: [{name:"Tailwindcss"},{name:"Nextjs"}],
    image:"/thumb2.png",
    live: "",
    github:"",
},
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature",
    stack: [{ name:"html 5"},{name:"Css 3" },{name:"javascript"}],
    image:"/thumb1.png",
    live: "",
    github:"",
},
  
  
  
];

const Work = () => {
  
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.div 
    initial= {{opacity: 0}}
    animate={{opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease:"easeIn"}
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 mx-5 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-5xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project-category */}
              <h2 className="text-[32px] font-bold leading-none text-green-600 group-hover:text-gray-600  transition-all duration-500 capitalize">{project.category} project</h2>
                {/* project-description */}
                <p className="text-gray-600">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {
                    project.stack.map((item,index)=> {
                      return (
                        <li key={index} className="text-xl text-green-600 my-2">
                          {item.name}
                          {index !== project.stack.length -1 && ","}
                        </li>
                      )
                    })
                  }
                </ul>
                <div className="border border-gray-500"></div>
                  <div className="flex items-center gap-4">
                    {/* live project button */}
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-gray-600 flex justify-center items-center group">
                            <BsArrowUpRight className="text-3xl group-hover:text-green-600 text-white"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                     <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-gray-600 flex justify-center items-center group">
                            <BsGithub className="text-3xl group-hover:text-green-600 text-white"/>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>GIthub repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
         
            </div>
            </div>
           <div className="w-full xl:w-[50%]">
            <Swiper 
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((item,index)=>{
                return(
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-200">
                    {/* overlay */}
                   
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image src={item.image} fill
                       className="object-cover rounded-md" alt=""/>
                    </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider button */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[50%] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-green-600 hover:bg-green-800 text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"/>
            </Swiper>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work;
