"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
const links = [
    {
        name: "home",
        path: "/",
    },
        {
        name: "services",
        path: "/services",
    },
        {
        name: "resume",
        path: "/resume",
    },
        {
        name: "work",
        path: "/work",
    },
        {
        name: "contact",
        path: "/contact",
    },
]
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
     <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#09ff25]"></CiMenuFries>
     </SheetTrigger>
     <SheetContent className="flex flex-col">
        <div className="mt-32 mb-16 text-center text-2xl">
            <Link href="/">
            <h1 className="text-4xl font-semibold">Aklima Akter <span className="text-green-500
            ">.</span></h1>
            </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link,index)=> {
                return(
                    <Link href={link.path}
                     key={index} 
                     className={`${ 
                        link.path === pathname && 
                        "text-green-800 border-b-2 border-green-700"}
                        text-xl capitalize hover:text-green-600 transition-all`}>
                        {link.name}
                        </Link>
                )
            })}
        </nav>
     </SheetContent>
    </Sheet>
  )
}

export default MobileNav
