import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
import Image from 'next/image'
import Link from "next/link";

const HeroSection = () => {
    return ( 
        <div className=" md:h-screen  w-full bg-gradient-to-l from-sky-300/20 ...">
            <section className="pt-24 pb-7 w-full ">
            
                <div className="container space-y-5 md-space-y-0 md:grid md:grid-cols-2 md:gap-4 items-center justify-center">
                        <div className="hero-text">
                            <h1 className="text-center text-4xl md:text-left md:text-5xl font-bold mb-4 text-slate-700"><span className="text-green-700"> Africa&#39;s</span> Growth is our <span className="border-b border-green-200 pb-[2px]">responsibility!</span></h1>
                            <p className="text-center md:text-left mb-4 text-slate-500">Digital education has the potential to overcome some of the traditional barriers to education in
                                Africa, such as the lack of physical infrastructure and the shortage of qualified teachers.
                            </p>

                            <div className="text-center md:text-left">
                                <Link
                                    href='about'
                                >
                                    <Button variant='secondary' className="text-slate-500 text-center">
                                        Learn More
                                    </Button>
                                
                                </Link>
                                
                                
                            </div>
                            
                        </div>

                        <div className="relative aspect-square">
                            <Image
                                src='/images/hero.png'
                                alt="HeroImage"
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                            

                        
                </div>
            </section>
        </div>
     );
}
 
export default HeroSection;