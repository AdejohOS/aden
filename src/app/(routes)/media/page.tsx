import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
import AboutUs from "@/components/about-us";
import HeroSection from "@/components/hero";
import MediaHero from "./_components/media-hero";

import Image from "next/image";
import { SearchIcon, View } from "lucide-react";
import { Input } from "@/components/ui/input";
import Slider from "./_components/slider";
import { heros } from "../../../../hero";

const Media = () => {
    return ( 
        <div className="h-full w-full">
            <MediaHero/>

            <section className=" container  pb-24">
                <div className="flex-grow   relative mb-8">
                    <Input
                        placeholder="Search for an event"
                        className="w-full pl-8"
                    />
                    <SearchIcon className="w-4 h-4 text-slate-500 absolute top-[50%] translate-y-[-50%] left-3"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    
                        {heros.map((hero, index) => (
                            <Dialog
                                key={index}
                            >
                                    <DialogTrigger>
                            <div className='relative aspect-video rounded-md overflow-hidden'>
                                <Image
                                    alt={hero.title}
                                    src={hero.src}
                                    fill
                                    className="object-cover"
                                />
                                <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                                <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                    
                                    {hero.desc}
                                </p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="min-h-screen max-w-full">
                            
                            
                                    
                                   
                                    <Slider/>
                                   
                               
                        </DialogContent>

                             </Dialog>
                        ))}
                        
                   
                    

                    
                    
                </div>

               
            </section>
        </div>
     );
}
 
export default Media;