import Image, { StaticImageData } from 'next/image'

interface PartnerProps {
    src: string | StaticImageData;
    alt:string;
}

const Partner = ({src,alt}:PartnerProps) => {
    return ( 
        <Image
            src={src}
            alt='alt'
        />
     );
}
 
export default Partner;