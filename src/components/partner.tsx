'use client'

import Image, { StaticImageData } from 'next/image'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Partner = () => {
    return ( 
        <section className='pt-24 pb-24'>
            <div className='container'>
                <h1 className="text-xl md:text-3xl font-bold">
                    ADEN <span className="text-green-700 border-b p-2 border-green-500">Partners </span>
                </h1>

                
                    <div className='mt-20'>
                        <div className='grid max-w-[700px] m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
                            
                            <a href="https://acenpee.abu.edu.ng" target="_blank" rel="noopener noreferrer">
                                <div  className='relative rounded-md overflow-hidden w-full h-full card  shadow-md border-l-2 p-4'>
                                    <div className='relative aspect-square rounded-md'>
                                        <Image
                                            src='/images/partners/acenpee.jpg'
                                            alt='image'
                                            fill
                                            className='object-cover rounded-md'
                                        />
                                    </div>
                                    <div className='card-body absolute left-0 bottom-[-100%] bg-slate-700/70 h-full w-full backdrop:blur-lg transition-all'>
                                        <p className='text-xs text-slate-50 p-2'>
                                            Africa Centre of Excellence on New Pedagogies in Engineering Education (ACENPEE), Ahmadu Bello University (ABU), Zaria, Nigeria.
                                        </p>

                                    </div>
                                </div>
                            </a>

                            <a href="https://acetel.nou.edu.ng" target="_blank" rel="noopener noreferrer">
                                <div  className='relative rounded-md overflow-hidden w-full h-full card  shadow-md border-l-2 p-4'>
                                    <div className='relative aspect-square'>
                                        <Image
                                            src='/images/partners/acetel.jpg'
                                            alt='image'
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                    <div className='card-body absolute left-0 bottom-[-100%] bg-slate-700/70 h-full w-full backdrop:blur-lg transition-all'>
                                        <p className='text-xs text-slate-50 p-2'>
                                            Africa Centre of Excellence on Technology Enhanced Learning (ACETEL), National Open University of Nigeria (NOUN), Abuja
                                        </p>

                                    </div>
                                </div>
                            </a>

                            <a href="https://lasu-aceitse.org.ng/" target="_blank" rel="noopener noreferrer">
                                <div  className='relative rounded-md overflow-hidden w-full h-full card  shadow-md border-l-2 p-4'>
                                    <div className='relative aspect-square'>
                                        <Image
                                            src='/images/partners/aceit.png'
                                            alt='image'
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                    <div className='card-body absolute left-0 bottom-[-100%] bg-slate-700/70 h-full w-full backdrop:blur-lg transition-all'>
                                        <p className='text-xs text-slate-50 p-2'>
                                            Africa Centre of Excellence for Innovative and Transformative STEM Education (ACEITSE), Lagos State University (LASU), Lagos, Nigeria 
                                        </p>

                                    </div>
                                </div>
                            </a>

                            <a href="https://www.cea-ms4ssa.org/" target="_blank" rel="noopener noreferrer">
                            <div  className='relative rounded-md overflow-hidden w-full h-full card  shadow-md border-l-2 p-4'>
                                    <div className='relative aspect-square'>
                                        <Image
                                            src='/images/partners/ceai.jpg'
                                            alt='image'
                                            fill
                                            className='object-cover'
                                        />
                                    </div>

                                    <div className='card-body absolute left-0 bottom-[-100%] bg-slate-700/70 h-full w-full backdrop:blur-lg transition-all'>
                                        <p className='text-xs text-slate-50 p-2'>
                                            Africa Centre of Excellence for Teaching/Learning Mathematics and Science for Sub-Saharan Africa (CEA MS4SSA), Abdou Moumouni University of Niamey, Republic of Niger.
                                        </p>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                

            </div>
        </section>
     );
}
 
export default Partner;