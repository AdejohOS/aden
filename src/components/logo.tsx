import Image from 'next/image'

const Logo = () => {
    return ( 
        <Image
            src="./images/logo.svg"
            alt='aden logo'
            height={20}
            width={20}
        />
     );
}
 
export default Logo;