import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CalendarCheck, Facebook, Instagram,  MapPin, Twitter } from 'lucide-react';
import Image from 'next/image'

const EventItem = () => {
    return ( 
        <section>
            <div className="pt-24 pb-20">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                    <div className="relative aspect-square">
                        <Image
                            src='/images/events/3.jpg'
                            alt="event"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className='space-y-4 text-slate-500'>
                        <h1 className='text-2xl font-bold'>Inaugural meeting of NSC, 2021.</h1>
                        <div className='flex items-center'>
                            <CalendarCheck className='h-5 w-5 mr-2 text-red-400' />
                            <span>
                                <h3>Thursday Febuary, 19 2024 12:30PM</h3>
                                <h3>Thursday December, 19 2024 12:30PM</h3>
                            </span>
                        </div>

                        <div className='flex items-center'>
                            <MapPin className='h-5 w-5 mr-2 text-red-400' />
                            <span>
                                <h3>Conference Hall, Bolingo Hotel & Towers Abuja, Nigeria.</h3>
                                
                            </span>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>What this is about:</h2>
                            <p>This event is about building a strong cord for the generality of the african child all over the world.</p>
                        </div>

                        <div>
                            <h2 className='font-semibold text-lg'>Share event:</h2>
                            <div className='flex gap-2'>
                                <Twitter  className='h-4 w-4'/>
                                <Facebook className='h-4 w-4'/>
                                <Instagram className='h-4 w-4'/>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className='mt-10'/>

            </div>

            <div className='py-20'>
                <div className='container'>
                    <h2 className='mb-10 font-semibold text-slate-500'>Related events</h2>
                

                    <div className='grid grid-cols-4 gap-5'>
                        <div className='bg-slate-50 rounded-md shadow overflow-hidden'>
                            <div className="relative aspect-square">
                                <Image
                                    src='/images/events/2.jpg'
                                    alt="event"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className='space-y-3 p-2'>
                                <Badge variant='outline' className="text-xs text-slate-500">
                                    Development
                                </Badge>
                                <p className="text-xs text-slate-500">Tue, 22 June 2023</p>
                                <h2 className="text-slate-500 font-semibold">Inaugural meeting of NSC, 2021.</h2>
                                
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </section>
     );
}
 
export default EventItem;