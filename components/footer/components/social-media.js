import Image from "next/image";

const SocialMedia = () => {
    return (
        <>
            <div className='sm:w-full md:w-1/4 xl:w-full flex sm:justify-start lg:justify-end sm:mt-10 md:mt-0'>
                <a href='' className='flex hover:opacity-50 duration-300 delay-75 mr-2'>
                    <Image src='/media/footer/facebook.svg' alt='' width={20} height={20}/>
                </a>
                <a href='' className='flex hover:opacity-50 duration-300 delay-75 ml-2 mr-2'>
                    <Image src='/media/footer/share.svg' alt='' width={20} height={20}/>
                </a>
                <a href='' className='flex hover:opacity-50 duration-300 delay-75 ml-2 mr-2'>
                    <Image src='/media/footer/youtube.svg' alt='' width={20} height={20}/>
                </a>
            </div>
        </>
    );
}
export default SocialMedia;