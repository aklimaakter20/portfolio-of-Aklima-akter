import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
  <section className=" ">
    <div className="container mx-auto h-full ">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      
                            {/* text */}

        <div className="text-center xl:text-left order-2 xl:order-none">
        
          <h1 className="text-3xl">
            Hello I'm  <br /> <span className="text-green-600"> Aklima Akter</span>
          </h1>
            <span className="text-xl text-center lg:text-left">
            Software Developer
          </span>
          <p className="max-w-[500px] mb-9 text-dark">I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies </p>
         {/* download btn and social */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
           <Button variant="outline"
         size="lg"
         className= "uppercase flex items-center gap-2 bg-transparent outline text-green-800  outline-green-800 hover:outline-green-500 hover:text-green-600 transition-all duration-500">
          <span className="">Download CV</span>
          <FiDownload className="text-xl"/>
         </Button>
         <div className="mb-8 lg:mb-0"> 
          <Social containerStyles= "flex gap-6" iconStyles="w-9 h-9 border border-green-600 rounded-full flex justify-center items-center text-green-800 text-base hover:text-green-600 hover:transition-all duration-500" />
         </div>
    </div>
        
      </div>
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
      </div>
    </div>
    <Stats/>
  </section>
  );
}
