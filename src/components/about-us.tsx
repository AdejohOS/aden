'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  

import { useState } from "react";

import { Binary, Blocks, ChevronDown, Settings2, SlidersHorizontal } from "lucide-react";

const AboutUs = () => {

    const [onOpen, setOnOpen] = useState<boolean>(false)

    return ( 
        <section className="container bg-slate-300/20 pt-24 pb-24">
            <div>
                <div className="text-center flex items-center justify-center flex-col mb-14">

                    <h1 className="text-3xl font-bold">
                        ADEN&#39;s <span className="text-sky-700 border-b p-2 border-sky-500">Core Mandate </span>
                    </h1>
                </div>
                
                <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start mt-6 gap-5">

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>


                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Settings2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promoting online learning platforms.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on promoting online learning
                                platforms that are accessible to students in different parts of Africa. The platforms
                                should be user-friendly and accessible on low-bandwidth networks.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        

                        
                      

                        

                        
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default AboutUs;