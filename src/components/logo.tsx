'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter()

    return ( 
        <Image
            src="/images/aden.png"
            alt='aden logo'
            height={60}
            width={60}
            className='cursor-pointer'
            onClick={() => {
                router.push('/')
            }}
        />
     );
}
 
export default Logo;