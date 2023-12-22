
import { Antenna, CircuitBoard, Settings } from "lucide-react";
import Image from 'next/image'
import { Separator } from "./ui/separator";
import Link from "next/link";

const News = () => {
    return ( 
        <section className="container  pt-24 pb-24">
            <>
                <h1 className="text-xl md:text-3xl font-bold">
                    ADEN&#39;s <span className="text-green-700 border-b p-2 border-green-500">News </span>
                </h1>
                <p className="mt-4 text-slate-500">Dive into a  world of great possibilities. </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-20 gap-5">

                    <div className="bg-slate-50 rounded-md flex flex-col items-center justify-center space-y-4 shadow-md">
                        
                        <div className="relative aspect-square w-full"> 
                            <Image
                                src='/images/aden.png'
                                alt="newsImage"
                                width={500}
                                height={500}
                                className="object-cover w-full h-auto"
                            />
                        </div>

                        <div className="text-slate-500 space-y-2 relative px-2 pb-2">
                            <h2 className="font-semibold">Bridging the Gap of Excellence</h2>
                            <p className="">Lorem ipsum dolor, sit amet consectetur </p>
                    
                        </div>

                    </div>
                    
                    
                    
                   

                    
                    
                    
                </div>

                <Separator className="mt-8" />
                <div>
                    <Link
                        href='/news'
                        className="text-xs text-sky-300 hover:underline"
                    >
                        &#171;Older post
                    </Link>
                </div>
            </>
            
        </section>
     );
}
 
export default News;