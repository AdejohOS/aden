'use client'

import Link from "next/link";



const NavList = () => {
    return ( 
        
        <ul className='hidden md:flex items-center justify-between gap-4'>
                    <li className='text-slate-500 hover:text-green-700'><Link href='/about'>About Us</Link></li>
                    <li className='text-slate-500 hover:text-green-700'><Link href='/media'>Media</Link></li>
                    <li className='text-slate-500 hover:text-green-700'><Link href='/upcoming-events'>Events</Link></li>
                    <li className='text-slate-500 hover:text-green-700'><Link href='/contact-us'>Contact Us</Link></li>
        </ul>

     );
}
 
export default NavList;