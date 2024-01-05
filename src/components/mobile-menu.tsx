'use client'
import { Menu } from "lucide-react";

import {
   Sheet,
   SheetContent,
   SheetTrigger,
 } from "@/components/ui/sheet"

import Logo from "./logo";
import { Separator } from "./ui/separator";
import NavItems from "./nav-items";

 

const MobileMenu = () => {
    return ( 
        <>
         <Sheet>
            <SheetTrigger className="md:hidden align-middle hover:opacity-75">
               <Menu/>
            </SheetTrigger>

           
            
            <SheetContent side={'right'} className="p-0 bg-white">
            <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
               <div className="p-6 flex items-center justify-center gap-2">

                  <Logo />
               </div>
               <Separator className="border border-gray-50"/>
               
               <>
                  <NavItems />
               </>

            </div>
               
               

               
            </SheetContent>
            
         </Sheet>
         
         
        </>
     );
}
 
export default MobileMenu;