import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <>
            <div className='sm:w-full md:w-1/4 xl:w-full flex justify-start'>
                <Link href='/' className='flex'>
                    <Image src='/media/footer/gf-logo.png' alt='gf logo in white colors'
                           className='cursor-pointer'
                           width={110} height={37}/>
                </Link>
            </div>
        </>
    );
}
export default Logo;