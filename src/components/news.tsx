
import { Antenna, ArrowRight, CircuitBoard, Settings, User } from "lucide-react";
import Image from 'next/image'
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Badge } from "./ui/badge";

const News = () => {
    return ( 
        <section className="bg-slate-300/20  pt-20 pb-20">
            <div className="container">
                <h1 className="text-xl md:text-3xl font-bold">
                    <span className="text-green-700 border-b p-2 border-green-500">News </span>
                </h1>
                

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 gap-5">

                    <div className="bg-slate-50 rounded-md flex flex-col space-y-4 shadow-md">
                        
                        <div className="relative aspect-video w-full"> 
                            <Image
                                src='/images/news/ai.png'
                                alt="newsImage"
                                width={500}
                                height={500}
                                className="object-cover w-full h-auto"
                            />
                        </div>

                        <div className="text-slate-500 space-y-2 relative px-2 pb-2">
                            <div className="text-xs flex items-center space-x-2">
                                <User className="h-4 w-4 mr-1" /> | <p> Admin  </p>
                            </div>
                            
                            <Separator />
                            <h2 className="font-semibold">Bridging the Gap of Excellence</h2>
                            
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-slate-500">Dec 11, 2023</p>
                                <span><Badge className=" font-thin  text-xs">project</Badge></span>
                            </div>
                            
                        </div>

                    
                    </div>
                    <div className="bg-slate-50 rounded-md flex flex-col  space-y-4 shadow-md">
                        
                        <div className="relative aspect-video w-full"> 
                            <Image
                                src='/images/news/fund.png'
                                alt="newsImage"
                                width={500}
                                height={500}
                                className="object-cover w-full h-auto"
                            />
                        </div>

                        <div className="text-slate-500 space-y-2 relative px-2 pb-2">
                            <div className="text-xs flex items-center space-x-2">
                                <User className="h-4 w-4 mr-1" /> | <p> Admin  </p>
                            </div>
                            
                            <Separator />
                            <h2 className="font-semibold">Bridging the Gap of Excellence</h2>
                           
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-slate-500">Dec 11, 2023</p>
                                <span><Badge className=" font-thin  text-xs">project</Badge></span>
                            </div>
                            
                        </div>

                    
                    </div>
                    
                    <div className="bg-slate-50 rounded-md flex flex-col  space-y-4 shadow-md">
                        
                        <div className="relative aspect-video w-full"> 
                            <Image
                                src='/images/news/chat.png'
                                alt="newsImage"
                                width={500}
                                height={500}
                                className="object-cover w-full h-auto"
                            />
                        </div>

                        <div className="text-slate-500 space-y-2 relative px-2 pb-2">
                            <div className="text-xs flex items-center space-x-2">
                                <User className="h-4 w-4 mr-1" /> | <p> Admin  </p>
                            </div>
                            
                            <Separator />
                            <h2 className="font-semibold">Bridging the Gap of Excellence</h2>
                            
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-slate-500">Dec 11, 2023</p>
                                <span><Badge className=" font-thin  text-xs">project</Badge></span>
                            </div>
                            
                        </div>

                    
                    </div>
                     
                    
                </div>

                <Separator className="mt-8" />
                <div className="mt-4">
                    <Link
                        href='/news'
                        className="text-xs text-sky-300 hover:underline flex items-center justify-center"
                    >
                        Explore All <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </div>
            </div>
            
        </section>
     );
}
 
export default News;