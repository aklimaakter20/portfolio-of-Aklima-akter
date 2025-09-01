import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='py-8 xl:py-12  bg-[#1c1c22] text-white'>
        <div className='container mx-auto flex items-center justify-between '>
            <Link href="/">
            <h1 className='text-4xl font-semibold'>Aklima Akter<span className='text-[#00ff99]'>.</span></h1>
            </Link>
            {/* Desktop nav */}
            
           <div className="hidden lg:flex items-center gap-8">
             <Nav/>
             <Link href="/contact">
                <Button>Hire me</Button>
             </Link>
           </div>
           {/* Mobile nav */}
           <div className='md:hidden'>
            <MobileNav/>
           </div>
        </div>
      
    </header>
  )
}

export default Header
