import AboutUs from "@/components/about-us";
import HeroSection from "@/components/hero";
import MediaHero from "./_components/media-hero";

import Image from "next/image";
import { View } from "lucide-react";

const Media = () => {
    return ( 
        <div className="h-full w-full">
            <MediaHero/>

            <section className=" container  pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

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

                    <div className='relative aspect-video rounded-md overflow-hidden'>
                        <Image
                            alt='gallery image'
                            src='/images/gallery/2.jpeg'
                            fill
                            className='object-cover'
                        />
                        <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                            <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                
                                ADEN Supervisory Management Committee members with representative of ACE Project National Coordinator at the inaugural meeting.
                            </p>
                        </div>
                    </div>

                    <div className='relative aspect-video rounded-md overflow-hidden'>
                        <Image
                            alt='gallery image'
                            src='/images/gallery/3.jpeg'
                            fill
                            className='object-cover'
                        />
                        <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                            <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                
                                The ADEN inaugural meeting in session at Newton Park Hotel, Abuja.
                            </p>
                        </div>
                    </div>

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
                </div>

               
            </section>
        </div>
     );
}
 
export default Media;