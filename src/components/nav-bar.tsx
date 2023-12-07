import Image from 'next/image'
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Logo from './logo';
const Navbar = () => {
    return ( 
        <header className="bg-slate-50  w-full shadow-md fixed  z-50 top-0">
            <nav className='flex items-center justify-between px-5 py-2'>
                <Logo/>
                <ul className='hidden md:flex items-center justify-between gap-4 text-slate-700'>
                    <li className='text-slate-500 hover:text-sky-700'><Link href='/about'>About Us</Link></li>
                    <li className='text-slate-500 hover:text-sky-700'><Link href='/media'>Media</Link></li>
                    <li className='text-slate-500 hover:text-sky-700'><Link href='/Events'>Events</Link></li>
                    <li className='text-slate-500 hover:text-sky-700'><Link href='/Events'>Contact Us</Link></li>
                </ul>
                
                <MobileMenu/>
                
                
            </nav>
        </header>
     );
}
 
export default Navbar;