
import Image from 'next/image'
import Link from 'next/link';

const Logo = () => {

    return ( 
        <Link
            href='/'
        >
            <Image
                src="/images/aden.png"
                alt='aden logo'
                height={60}
                width={60}
                className='cursor-pointer'
            />
        </Link>
        
     );
}
 
export default Logo;