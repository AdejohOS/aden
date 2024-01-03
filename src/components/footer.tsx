import Link from "next/link";
import Newsletter  from "./newsletter";
import { Facebook, Instagram, Mail, PhoneCall, Twitter } from "lucide-react";
import { Separator } from "./ui/separator";
import Logo from "./logo";

const Footer = () => {
    return ( 
        <footer className="relative bg-slate-300/20 pt-24 pb-12">
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 pl-6 pr-6 gap-4">

            <div>
                

                <div className="flex flex-col space-y-2">
                   <div className="w-10 h-10 overflow-hidden rounded-full">
                   <Logo/>
                   </div>
                        
                  
                    <address className="text-slate-500 text-sm md:text-base">
                        ACENPEE BUILDING, Adj. Drama Village, 
                        Ahmadu Bello University,
                        Zaria.
                    </address>
                    
                    
                    <p className="truncate text-slate-500 text-sm md:text-base flex items-center hover:text-sky-300">
                        <PhoneCall className="h-4 w-4 mr-2"/>
                        <a  href="tel:123-456-7890">070-634-94394</a>
                    </p>

                    <p className="truncate text-sm md:text-base text-slate-500 flex items-center hover:text-sky-300">
                        <Mail className="h-4 w-4 mr-2"/>
                        <a href = "mailto: info@aden.org.ng">info@aden.org.ng</a>
                    </p>

                    
                    <p className="flex items-center gap-2 text-slate-500">

                        <Link href='https://www.twitter.com/b_skilz' target="_blank" className="hover:text-sky-300">
                            <Twitter className="h-4 w-4"/>
                        </Link>

                        <Link href='https://www.twitter.com/b_skilz' target="_blank" className="hover:text-sky-300">
                            <Facebook className="h-4 w-4"/>
                        </Link>
                        
                        <Link href='https://www.twitter.com/b_skilz' target="_blank" className="hover:text-sky-300">
                            <Instagram className="h-4 w-4"/>
                        </Link>
                        
                    </p>

                    
                    
                </div>
                
            </div>

            <div>
                <h1 className="text-2xl md:text-3xl ">Media</h1>

                <div className="flex flex-col space-y-2 text-sm md:text-base">
                    <Link href='/' className="text-slate-500 hover:text-sky-300">
                        Educational Performance
                    </Link>
                    <Link href='/' className="text-slate-500 hover:text-sky-300">
                        Research and market capitilization
                    </Link>
                    <Link href='/' className="text-slate-500 hover:text-sky-300">
                        Educational Performance
                    </Link>
                </div>
                
            </div>

            <div>
                <h1 className="text-2xl md:text-3xl">Sitemap</h1>

                <div className="flex flex-col space-y-2 text-sm md:text-base">
                    <Link href='/' className="text-slate-500 hover:text-sky-300">
                        About Us
                    </Link>
                    <Link href='/' className="text-slate-500 hover:text-sky-300">
                        Media
                    </Link>
                    <Link href='/' className="text-slate-500 hover:text-sky-300">
                        Events
                    </Link>
                    <Link href='/' className="text-slate-500 hover:text-sky-300">
                        Contact Us
                    </Link>
                </div>
                
            </div>

            <div>
                <h1 className="text-2xl md:text-3xl">Newsletter</h1>

                <div className="flex flex-col space-y-2">
                    <p className="text-slate-500 text-sm md:text-base">
                    Subscribe to our newsletter to instantly receive news about the project.
                    </p>


                    <Newsletter/>
                    
                </div>
                
            </div>
            
            <div>
                
            </div>
           </div>
           <Separator className="mt-4"/>

           <p className="text-center mt-4 text-slate-500 text-sm md:text-base ">
                <a href="https://adejohos.dev" target="_blank" className="hover:text-sky-300">Aden Media</a> &#169; 2023  
           </p>
                
        </footer>
     );
}
 
export default Footer;
