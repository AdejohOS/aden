import Image from 'next/image'
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Logo from './logo';
import Search from './search';
import NavList from './nav-list';
import NavItems from './nav-items';
const Navbar = () => {
    return ( 
        <header className="bg-slate-50 shadow w-full fixed  z-50 top-0">
            <nav className='flex items-center justify-between h-16  py-2 px-5'>
                <Logo/>
                
                <div className='hidden md:block '>
                    <NavItems />
                </div>
                
                
                <MobileMenu/>
                
                
            </nav>
        </header>
     );
}
 
export default Navbar;