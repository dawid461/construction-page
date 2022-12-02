import Image from "next/image";
const ImageWithSquare = () => {
    return (
        <>
            <div className='flex justify-end w-full mb-5 sm:mt-12 sm:mb-14 lg:mt-24 lg:mb-24'>
                <div className='relative sm:w-16 sm:h-16 lg:w-28 lg:h-28 lg:top-44 sm:top-16 lg:left-14 sm:left-8'>
                    <Image src='/media/main-page/about-us/square.svg' alt='' layout="fill"/>
                </div>
                <div className='w-8/12 lg:h-60 sm:h-24 bg-image-architect bg-no-repeat bg-cover bg-center'></div>
            </div>
        </>
    );
}
export default ImageWithSquare;