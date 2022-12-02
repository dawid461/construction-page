import Image from 'next/image'
import Link from "next/link";
const Logo = () => {
    return (
        <>
            <div className='w-1/4 flex justify-start items-center'>
                <Link href='/'>
                    <Image src='/media/navbar/gf-logo.png' width={140} height={56}
                           alt="logo's gf with black and red text" className='cursor-pointer'/>
                </Link>
            </div>
        </>
    );
}
export default Logo;