
import { partners } from "../../images";
import Image from 'next/image'
import Partner from "./partner";

const Partners = () => {
    return ( 
        <div className=" w-full bg-gradient-to-l from-sky-300/20 ...">
            <section className="container  pt-24 pb-24">
                <div className="text-center flex items-center justify-center flex-col mb-14">

                    <h1 className="text-xl md:text-3xl font-bold">
                        ADEN&#39;s <span className="text-sky-700 border-b p-2 border-sky-500">Partners </span>
                    </h1>
                    <p className="mt-2 text-slate-500">Dive into a  world of great possibilities. </p>
                </div>

                <div>
                    <div className="grid grid-cols-4  sm:grid-cols-5  gap-4 items-center justify-center">
                        {partners.map((partner, item) => (
                            <div
                                key={item}
                                className="aspect-square shadow-sm rounded-md overflow-hidden"
                            >
                                <Image 
                                    src={partner.src}
                                    alt={partner.alt}
                                    className="object-fit"
                                />
                            </div>
                        ))}
                    </div>

                </div>

            </section>
        </div>
        
     );
}
 
export default Partners;