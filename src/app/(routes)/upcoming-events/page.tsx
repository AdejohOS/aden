import { Input } from "@/components/ui/input";
import UpcomingHero from "./__components/upcoming-hero";
import Select from "./__components/select";
import { CalendarCheck, SearchIcon } from "lucide-react";
import Image from 'next/image'
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UpcomingEvents = () => {
    return ( 
        <main>
            <UpcomingHero/>
            <section className="container pb-24">
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="flex-grow   relative">
                            <Input
                                placeholder="Search for an event"
                                className="w-full pl-8"
                            />
                            <SearchIcon className="w-4 h-4 text-slate-500 absolute top-[50%] translate-y-[-50%] left-3"/>
                        </div>
                        

                        <div className="w-full">
                            <Select/>
                        </div>
                        
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">

                        <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src='/images/events/3.jpg'
                                    alt="event"
                                    fill
                                    className="object-cover"
                                 />
                            </div>

                            <div className="p-4 space-y-4">
                                <Badge variant='outline' className="text-xs text-slate-500">
                                    Development
                                </Badge>
                                <p className="text-xs text-slate-500 flex items-center"><CalendarCheck className="w-4 h-4 mr-1"/>Tue, 22 June 2023</p>
                                <h2 className="text-slate-500 font-semibold">Inaugural meeting of NSC, 2021.</h2>
                                
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src='/images/events/1.jpg'
                                    alt="event"
                                    fill
                                    className="object-cover"
                                 />
                            </div>

                            <div className="p-4 space-y-4">
                                <Badge variant='outline' className="text-xs text-slate-500">
                                    Education
                                </Badge>
                                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                                <h2 className="text-slate-500 font-semibold">Scholarship Program 2015</h2>
                                
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src='/images/events/2.jpg'
                                    alt="event"
                                    fill
                                    className="object-cover"
                                 />
                            </div>

                            <div className="p-4 space-y-4">
                                <Badge variant='outline' className="text-xs text-slate-500">
                                    Girl Child
                                </Badge>
                                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                                <h2 className="text-slate-500 font-semibold">Scholarship Program 2015</h2>
                                
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src='/images/events/4.webp'
                                    alt="event"
                                    fill
                                    className="object-cover"
                                 />
                            </div>

                            <div className="p-4 space-y-4">
                                <Badge variant='outline' className="text-xs text-slate-500">
                                    Girl Child
                                </Badge>
                                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                                <h2 className="text-slate-500 font-semibold">Scholarship Program 2015</h2>
                                
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src='/images/events/5.jpg'
                                    alt="event"
                                    fill
                                    className="object-cover"
                                 />
                            </div>

                            <div className="p-4 space-y-4">
                                <Badge variant='outline' className="text-xs text-slate-500">
                                    Girl Child
                                </Badge>
                                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                                <h2 className="text-slate-500 font-semibold">Scholarship Program 2015</h2>
                                
                            </div>
                        </div>
                        <div className="rounded-md overflow-hidden shadow-md bg-slate-50">
                            <div className="relative aspect-video w-full">
                                <Image
                                    src='/images/events/2.jpg'
                                    alt="event"
                                    fill
                                    className="object-cover"
                                 />
                            </div>

                            <div className="p-4 space-y-4">
                                <Badge variant='outline' className="text-xs text-slate-500">
                                    Girl Child
                                </Badge>
                                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                                <h2 className="text-slate-500 font-semibold">Scholarship Program 2015</h2>
                                
                            </div>
                        </div>

                    </div>

                    <Separator className="my-7"/>

                    <div className="flex items-center justify-between">
                        <Link 
                            href='/'
                        >
                            <Button
                                variant='outline'
                            >
                                Previous
                            </Button>
                        
                        </Link>
                        <Link 
                            href='/'
                        >
                            <Button
                                
                            
                            >
                                Next
                            </Button>
                        
                        </Link>
                    </div>
                </div>
            </section>
        </main>
     );
}
 
export default UpcomingEvents;