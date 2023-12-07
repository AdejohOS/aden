
import { cn } from "@/lib/utils";
import Logo from "./logo";
import { Calendar, CalendarCheck, Layout, PhoneCallIcon, User2Icon, Video, } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileLinks from "./mobile-links";



const linkRoutes = [
    {
        icon: Layout,
        label: 'Home',
        href: "/"
    },

    {
        icon: User2Icon,
        label: 'About Us',
        href: "/about-us"
    },
    {
        icon: Video,
        label: 'Media',
        href: "/media"
    },
    {
        icon: Calendar,
        label: 'Events',
        href: "/events"
    },
    {
        icon: PhoneCallIcon,
        label: 'Contact Us',
        href: "/contact-us"
    },
];



const MobileRoutes = () => {

    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
            <div className="p-6 flex items-center justify-center gap-2">

                <Logo />
            </div>
            <div className="flex flex-col w-full">
                {linkRoutes.map((route) => (
                    <MobileLinks 
                        key={route.label}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default MobileRoutes;