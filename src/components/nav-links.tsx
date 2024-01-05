'use client'

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavLinksProps {
    icon: LucideIcon,
    label: string | undefined,
    href: string,

}

const NavLinks = ({label, href, icon:Icon}: NavLinksProps) => {

    const pathName = usePathname()

    const isActive =
                    (pathName === "/" && href === "/") || 
                    pathName === href || 
                    pathName?.startsWith(`${href}/`)

    return (
        <li 
          className={cn(`md:w-auto pl-6 md:p-0 w-full font-semibold
              text-slate-500 hover:text-green-700 transition-all  hover:bg-green-100/20`
              ,isActive && `bg-green-200/20 text-green-700 md:bg-slate-50 md:border-b`)}
        >
          <div className='py-4'>
            <Link
              href={href}
              
            >
              {label}
            </Link>
          </div>
          
        </li>
     );
}
 
export default NavLinks;