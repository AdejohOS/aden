'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  

import { useState } from "react";

import { Antenna, BarChartBig, Binary, Blocks, ChevronDown, CircuitBoard, Grip, Orbit, Radiation, Settings2, Share2, ShieldCheck, SlidersHorizontal } from "lucide-react";

const AboutUs = () => {

    const [onOpen, setOnOpen] = useState<boolean>(false)

    return ( 
        <section className="container bg-slate-300/20 pt-24 pb-24">
            <div>
                <div className="text-center flex items-center justify-center flex-col mb-14">

                    <h1 className="text-xl md:text-3xl font-bold">
                        ADEN&#39;s <span className="text-sky-700 border-b p-2 border-sky-500">9 Core Mandate </span>
                    </h1>
                    <p className="mt-2 text-slate-500">Promoting digital education in Africa. </p>
                </div>
                
                <div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start mt-6 gap-5">

                        <Accordion type="single" collapsible className=" bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
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


                        <Accordion type="single" collapsible className=" bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Radiation className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Provide digital devices and infrastructure 
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                    ADEN will aim to collaborate with governments, NGOs, and private organizations to provide digital devices and infrastructure to institutions and students in underserved areas.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Antenna className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Develop digital educational resources 
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN would work on developing and promoting digital educational resources, such as e-books, videos, and interactive learning tools that can be used by students and teachers across Africa.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Orbit className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Train teachers and educators
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN could conduct training programs for lecturers and educators on how to use digital tools and resources in the classroom effectively.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <CircuitBoard className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Conduct research on digital education 
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will conduct research on the effectiveness of digital education in Africa and share the findings with policymakers, educators, and other stakeholders.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Share2 className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Foster collaboration and partnerships 
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work on building collaborations and partnerships with governments, NGOs, and private organizations to improve digital education in Africa.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <BarChartBig className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Support innovation in digital education.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will support and promote innovative solutions in digital education, such as virtual laboratories, gamification, adaptive learning, and artificial intelligence.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>

                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <ShieldCheck className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Strengthen feedback mechanisms 
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                ADEN will work to establish and strengthen feedback mechanisms to gather feedback from stakeholders (students and lecturers) that can help to continuously improve the quality and relevance of digital educational resources.
                                </AccordionContent>
                            </AccordionItem>
                            
                        </Accordion>
                        <Accordion type="single" collapsible className="block bg-gradient-to-t shadow from-sky-300/10 ... pr-2 pl-2 rounded-md">
                            <AccordionItem value="item-item">
                                <AccordionTrigger className="font-md text-left">
                                    <div className="bg-white rounded-full shadow-md p-1 mr-2 ">
                                        <Grip className="text-sky-500 h-4 w-4" />
                                    </div>
                                    Promote digital literacy.
                                </AccordionTrigger>
                                <AccordionContent className="pb-2">
                                    ADEN would work on promoting digital literacy among students, lecturers, and parents in Africa to ensure that they are able to use digital tools and resources effectively.

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