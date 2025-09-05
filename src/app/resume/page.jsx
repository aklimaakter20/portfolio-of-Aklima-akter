"use client"
import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs  } from "react-icons/si";

// about data
const about= {
  title: "about me",
  description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Aklima Akter"
    },
    {
      fieldName: "Phone",
      fieldValue: "+880 2654878522"
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ years"
    },
    {
      fieldName: "Skype",
      fieldValue: "aklimaakter20"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Email",
      fieldValue: "aklimaakter20@gmailcom"
    },{
      fieldName: "Freelance",
      fieldValue: "Available"
    },{
      fieldName: "Language",
      fieldValue: "Bangla, English"
    },
  ]
};
// experience data
  const experience = {
    icon: "/resume/badge.svg",
    title : "My Experience",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    items: [ 
      {
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        duration: "2022-present"
      },
      {
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        duration: "2022-present"
      },
      {
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        duration: "2022-present"
      },
      {
        company: "Tech Solutions Inc.",
        position: "Full Stack Developer",
        duration: "2022-present"
      },
      
    ]
  };
  // education data
  const education = {
    icon: "/resume/cap.svg",
    title : "My Education",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    items: [ 
      {
        institution: "Bangladesh University of Business & Technology.",
        degree: "Bsc in CSE",
        duration: "2022-present"
      },
        {
        institution: "Bangladesh University of Business & Technology.",
        degree: "Bsc in CSE",
        duration: "2022-present"
      },
        {
        institution: "Bangladesh University of Business & Technology.",
        degree: "Bsc in CSE",
        duration: "2022-present"
      },
        {
        institution: "Bangladesh University of Business & Technology.",
        degree: "Bsc in CSE",
        duration: "2022-present"
      },
      
      
      
    ]
  };  // skills data
  const skills = {
  
    title : "My Skills",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    skillList: [ 
      {
      icon: <FaHtml5/>,
      name: "html 5"
      },
         {
      icon: <FaCss3/>,
      name: "Css3"
      },   {
      icon: <FaJs/>,
      name: "Javascript"
      },   {
      icon: <FaReact/>,
      name: "React.js"
      },   {
      icon: <SiNextdotjs />,
      name: "Next.js"
      },   {
      icon: <SiTailwindcss/>,
      name: "Tailwindcss"
      },   {
      icon: <FaNodeJs/>,
      name: "Node.js"
      },
         {
      icon: <FaFigma/>,
      name: "figma"
      },
        
      
      
      
    ]
  };
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
  import { ScrollArea } from "@/components/ui/scroll-area";
  import { motion } from "motion/react";

  const page = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,
      transition: {delay:2.4, duration:0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-16"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue= "experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0
          gap-6">
             <TabsTrigger value="experience">Experience</TabsTrigger>
             <TabsTrigger value="education">Education</TabsTrigger>
             <TabsTrigger value="skills">Skills</TabsTrigger>
             <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
                      {/* experience part */}
            <TabsContent value="experience" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-gray-600 xl:mx-0">
                  {experience.description}</p>


                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-5">
                    {experience.items.map((item,index)=>{
                      return (
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-white">
                        <span className="text-green-600">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-600"></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                      );
                    })}
                  
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
                      {/* education part */}
              <TabsContent value="education" className="w-full h-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-gray-600 xl:mx-0">
                  {education.description}</p>


                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mx-5">
                    {education.items.map((item,index)=>{
                      return (
                      <li key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-white">
                        <span className="text-green-600">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-600"></span>
                          <p>{item.institution}</p>
                        </div>
                      </li>
                      );
                    })}
                  
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
                      {/* skills part */}
              <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
               <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-gray-900 mx-auto xl:mx-0">{skills.description}</p>
               </div>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4  gap-4 xl:gap-[30px] mt-10">
                {skills.skillList.map((item,index)=> {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-5xl text-white group-hover:text-green-600 transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                   
                    </li>
                  )
                })}
              </ul>
            </TabsContent>
              <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-capitalize">{about.title}</h3>
                <p className="max-w-[600px] text-gray-600 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-green-600">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default page
