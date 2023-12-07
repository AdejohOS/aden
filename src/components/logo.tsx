'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter()

    return ( 
        <Image
            src="/images/adenlogo.svg"
            alt='aden logo'
            height={150}
            width={150}
            className='cursor-pointer'
            onClick={() => {
                router.push('/')
            }}
        />
     );
}
 
export default Logo;