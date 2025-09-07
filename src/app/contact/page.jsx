"use client";

import { Button } from"@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
}from "@/components/ui/select"
import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+88013254687'
  },
    {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'aklimaakter20@gmail.com'
  },
    {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Dhaka, Bangladesh',
  },
];
import { motion } from "motion/react";

const Contact = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="">
      <div className="mx-auto py-12 bg-[#1C1B22]">
           <div className="container flex flex-col xl:flex-row gap-[30px] items-center justify-around">
        
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl px-5">
             <h3 className="text-green-600 text-4xl">Lets work together</h3>
             <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, pariatur. Nostrum delectus exercitationem inventore, eaque repellendus dolor doloremque similique quis.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type= "first-name" placeholder="First Name" />
                <Input type="last-name" placeholder="Last Name"/>
                <Input type="email" placeholder="Email Address"/>
                <Input type="phone" placeholder="Phone Number"/>
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value= "est">Web Development</SelectItem>
                     <SelectItem value= "cst">UI/UX Design</SelectItem> 
                     <SelectItem value= "mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[200px]" placeholder="Type your message here" />
                <Button size="lg" className="max-w-40">Send Message</Button>
             </form>
        </div>
        <div className=" flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {
              info.map((item,index)=> {
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-green-600 rounded-md flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-500">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 text-white">
                      <p>{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>

                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      </div>
    
    </motion.div>
  )
}

export default Contact
