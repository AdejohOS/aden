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

                    <Dialog>
                        <DialogTrigger>
                            <div className='relative aspect-video rounded-md overflow-hidden'>
                                <Image
                                    alt='gallery image'
                                    src='/images/gallery/1.jpeg'
                                    fill
                                    className="object-cover"
                                />
                                <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                                <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                    
                                    Inaugural meeting of the network supervisory committee (NSC).
                                </p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This is a slider  of pictures from this particular event
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    

                    <Dialog>
                        <DialogTrigger>
                            <div className='relative aspect-video rounded-md overflow-hidden'>
                                <Image
                                    alt='gallery image'
                                    src='/images/gallery/2.jpeg'
                                    fill
                                    className='object-cover'
                                />
                                <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                                    <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                        
                                        2023 Aden Summit
                                    </p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This is a slider  of pictures from this particular event
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                        
                    </Dialog>
                    
                    <Dialog>
                        <DialogTrigger>
                            <div className='relative aspect-video rounded-md overflow-hidden'>
                                <Image
                                    alt='gallery image'
                                    src='/images/gallery/3.jpeg'
                                    fill
                                    className='object-cover'
                                />
                                <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                                    <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                    
                                    End of the year dinner.
                                    </p>
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This is a slider  of pictures from this particular event
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    

                    <Dialog>
                        <DialogTrigger>
                        <div className='relative aspect-video rounded-md overflow-hidden'>
                            <Image
                                alt='gallery image'
                                src='/images/gallery/4.jpeg'
                                fill
                                className='object-cover'
                            />
                            <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                                <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                    
                                    Representative of the National Coordinator, ACE Impact Project giving a goodwill message at the meeting.

                                </p>
                            </div>
                        </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This is a slider  of pictures from this particular event
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    
                </div>

               
            </section>
        </div>
     );
}
 
export default Media;