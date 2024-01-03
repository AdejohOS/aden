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
            <div className='max-w-[800px] m-auto grid grid-cols-1 md:grid-cols-2 gap-5'>

                <div className='relative aspect-square'>
                    <Image 
                        src="/images/about/cordinator.jpg"
                        alt="about" 
                        fill
                        className='object-cover rounded-md object-top'
                    />
                </div>

                <div className='  rounded-md'>
                    <div className='p-3 w-full h-full flex flex-col items-left justify-center'>
                        <h2 className='text-3xl font-bold mt-2 text-green-700 inline pb-1 '>Welcome to Aden!!</h2>
                        
                        <p className="my-2 text-slate-500  "> I welcome you to the homepage of the African Digital Education Network (ADEN). the program helps graduate students, faculty members, and industry professionals in engineering and allied STEM fields improve their teaching and course design skills.    </p>
                        
                        
                        <div className='flex flex-col   mt-2'>
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