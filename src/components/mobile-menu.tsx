'use client'
import { Menu } from "lucide-react";

import {
   Sheet,
   SheetContent,
   SheetTrigger,
 } from "@/components/ui/sheet"
import MobileLinks from "./mobile-links";
import MobileRoutes from "./mobile-routes";
 

const MobileMenu = () => {
    return ( 
        <>
         <Sheet>
            <SheetTrigger className="md:hidden hover:opacity-75">
               <Menu/>
            </SheetTrigger>

           
            
            <SheetContent side={'right'} className="p-0 bg-white">
               <MobileRoutes />
            </SheetContent>
            
         </Sheet>
         
         
        </>
     );
}
 
export default MobileMenu;