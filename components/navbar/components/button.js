import Image from 'next/image'
import Link from "next/link";
const Button = () => {
    return (
        <>
            <div className='w-1/4 sm:hidden lg:flex items-center justify-end'>
                <Link href='/kontakt'>
                <button className='flex justify-center items-center h-12 w-40 bg-primaryColor hover:bg-secondaryColor
                transition delay-75 hover:scale-90 ease-in-out duration-200 rounded-3xl drop-shadow-md'>
                <Image src="/media/navbar/pen.svg" width={16} height={16} alt=""/>
                <p className='ml-1.5 text-white text-md font-bold'>Napisz do nas</p>
                </button>
                </Link>
            </div>
        </>
    );
}
export default Button;