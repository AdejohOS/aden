'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import  "swiper/css/bundle";

import Image from "next/image"
import { partners } from "../../images";




const Place = () => {
    const myPartners = partners;
    return ( 
        <div className=" w-full bg-gradient-to-l from-sky-300/20 ...  h-screen" >
            <div className=" w-full">
            <div className="container">
                <Swiper
                    
                    
                    navigation={true}
                    autoplay={{delay: 2500,}}
                    modules={[Autoplay,Navigation, Pagination]}
                    className=" w-full rounded-md"
                >   
                    {myPartners.map((partner, index) => (
                        <SwiperSlide key={index}>

                            <div className="flex h-full w-full items-center justify-center">
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    className="block h-full w-full object-cover"
                                />
                            </div>

                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>
            </div>
            
            
        </div>
     );
}
 
export default Place;