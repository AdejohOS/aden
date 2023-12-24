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
                        src="/images/about.jpg"
                        alt="about" 
                        height={250}
                        width={250}
                        className='object-cover rounded-md'
                    />
                </div>
                <div className='md:absolute top-[50%] 
                                md:translate-y-[-50%] 
                                bg-slate-50/60 shadow 
                                md:left-[150px]  rounded-md
                                '
                >
                    <div className='p-3 w-full h-full flex flex-col items-center justify-center'>
                        <h2 className='text-2xl font-bold mt-2 text-slate-700 border-b-2 pb-1'>Welcome!!</h2>
                        
                        <p className="my-2 text-slate-500 text-center ">The African Digital Education Network’s (ADEN) core mandates include raising awareness about the benefits of digital education across Africa and sharing resources with African institutions of higher education. <Link href='/about-us' className='text-xs text-sky-300  hover:underline'>Learn more &#187; </Link> </p>
                        
                        
                        <div className='flex flex-col items-center justify-center mt-2'>
                            <p>
                                Dr. Joseph Aloyafin
                            
                            </p>
                            <span className='italic text-xs text-slate-400'>Director</span>
                        </div>
                        
                        
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default AboutUs;