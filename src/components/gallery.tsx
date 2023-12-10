import { View } from 'lucide-react';
import Image from 'next/image'

const Gallery = () => {
    return ( 
        <section className="container  pt-24 pb-24">
            <>
                <div className="text-center flex items-center justify-center flex-col mb-14">

                    <h1 className="text-xl md:text-3xl font-bold">
                        ADEN&#39;s <span className="text-sky-700 border-b p-2 border-sky-500">Gallery </span>
                    </h1>
                    <p className="mt-2 text-slate-500">Dive into a  world of great possibilities. </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                    <div className='relative aspect-video rounded-md overflow-hidden'>
                        <Image
                            alt='gallery image'
                            src='/images/gallery/1.jpeg'
                            fill
                            className="object-cover"
                        />
                        <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                            <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                <View className='w-4 h-4 text-slate-200'/>
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
                                <View className='w-4 h-4 text-slate-200'/>
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
                                <View className='w-4 h-4 text-slate-200'/>
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
                                <View className='w-4 h-4 text-slate-200'/>
                                Representative of the National Coordinator, ACE Impact Project giving a goodwill message at the meeting.

                            </p>
                        </div>
                    </div>

                    <div className='relative aspect-video rounded-md overflow-hidden'>
                        <Image
                            alt='gallery image'
                            src='/images/gallery/5.jpeg'
                            fill
                            className='object-cover'
                        />
                        <div className='absolute bottom-0 left-0 w-full bg-black/40 p-2'>
                            <p className='text-white flex items-center text-xs w-full h-full gap-2'>
                                <View className='w-4 h-4 text-slate-200'/>
                                 
                                Discussion session at the ADEN meeting in Abuja.

                            </p>
                        </div>
                    </div>

                    
                </div>
            </>
        </section>
     );
}
 
export default Gallery;