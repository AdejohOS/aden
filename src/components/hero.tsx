'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";                                                              
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css"
import  "swiper/css/bundle";
import { heros } from "../../hero";

const HeroSection = () => {
    return ( 
        <div className=" h-screen  w-full bg-gradient-to-l from-sky-300/20 ...">
            <section className="pt-20 pb-7 w-full h-full ">
            
                <div className=" items-center justify-center  h-full w-full">
                        

                        <Swiper
                            navigation={true}
                            autoplay={{delay: 2500,}}
                            modules={[Autoplay,Navigation, Pagination]}
                            className=" w-full  h-full "
                        >

                            {heros.map((hero, index) => (
                                <SwiperSlide key={index}
                                 className="relative"
                                >
                                    <div className="absolute z-10 inset-0  bg-gray-800 bg-opacity-70 w-full h-full">

                                    </div>
                                    <div className="absolute object-center p-6 top-20 left-5 max-w-xl z-20">
                                        <h1 className="text-center text-4xl md:text-left md:text-5xl font-bold mb-4 text-slate-50"><span className="text-sky-300"> Africa&#39;s</span> Growth is our <span className="border-b border-sky-300 pb-[2px]">responsibility!</span></h1>
                                        <p className="text-center md:text-left mb-4 text-slate-50 max-w-xl">Digital education has the potential to overcome some of the traditional barriers to education in
                                        Africa, such as the lack of physical infrastructure and the shortage of qualified teachers.
                                        </p>

                                        <div className="text-center md:text-left">
                                            <Button variant='outline' className="text-slate-500 text-center">
                                                Learn More
                                             </Button>
                                             <Button className="ml-2">
                                                Contact Us
                                            </Button>
                                        </div>
                            
                                    </div>
                
                                    <div className="flex h-full w-full items-center justify-center">
                                        <Image
                                            src={hero.src}
                                            alt={hero.alt}
                                            className="block h-full w-full object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                            
                           
                        </Swiper>
                        
                            

                        
                </div>
            </section>
        </div>
     );
}
 
export default HeroSection;