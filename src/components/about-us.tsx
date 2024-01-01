'use client'
import Image from 'next/image'



import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  

import { useState } from "react";

import { Antenna, ArrowBigLeftDash, ArrowBigRightDash, BarChartBig,   CircuitBoard, Grip, Orbit, Radiation, Settings2, Share2, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import Link from 'next/link';

const AboutUs = () => {


    return ( 
        <section className="container bg-slate-300/20 py-24  w-full">
            <div className='max-w-[800px] m-auto relative flex flex-col items-center justify-center md:block'>

                <div className='relative aspect-auto'>
                    <Image 
                        src="/images/about/cordinator.jpg"
                        alt="about" 
                        height={250}
                        width={250}
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='md:absolute top-[50%] 
                                md:translate-y-[-50%] 
                                bg-slate-50/60 shadow 
                                md:left-[180px]  rounded-md
                                '
                >
                    <div className='p-3 w-full h-full flex flex-col items-center justify-center'>
                        <h2 className='text-3xl font-bold mt-2 text-green-700 border-b-2 pb-1'>Welcome to Aden!!</h2>
                        
                        <p className="my-2 text-slate-500 text-center "> I welcome you to the homepage of the African Digital Education Network (ADEN). the program helps graduate students, faculty members, and industry professionals in engineering and allied STEM fields improve their teaching and course design skills.    </p>
                        
                        
                        <div className='flex flex-col items-center justify-center mt-2'>
                            <p>
                                Prof Raymond B. Bako
                            
                            </p>
                            <span className='italic text-xs text-slate-400'>Co-ordinator</span>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default AboutUs;