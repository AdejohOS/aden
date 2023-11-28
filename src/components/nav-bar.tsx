import Image from 'next/image'
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Logo from './logo';
const Navbar = () => {
    return ( 
        <header className="bg-slate-100  w-full shadow-md fixed  z-50">
            <nav className='flex items-center justify-between p-5'>
                <Logo/>
                <ul className='hidden md:flex items-center justify-between gap-4 text-slate-700'>
                    <li className='text-slate-500'><Link href='/about'>About Us</Link></li>
                    <li><Link href='/media'>Media</Link></li>
                    <li><Link href='/Events'>Events</Link></li>
                    <li><Link href='/Events'>Contact Us</Link></li>
                </ul>
                
                <MobileMenu/>
                
                
            </nav>
        </header>
     );
}
 
export default Navbar;