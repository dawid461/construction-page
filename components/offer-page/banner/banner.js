import {motion} from "framer-motion";

const BannerOffer = () => {
    return (
        <>
            <div className='flex w-full items-center max-w-screen-2xl flex-col bg-lightGrey sm:pb-72 sm:pt-72 xl:pt-80 xl:pb-80 justify-center
            bg-image-offer-page bg-cover bg-no-repeat sm:mt-2
             lg:mt-4 lg:mb-12'>
                <motion.div animate={{x: [-100, 0]}}
                            transition={{duration: 1.5, ease: "easeOut",}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='flex flex-col justify-center items-center'>
                    <h3 className='text-4xl text-whiteSmoke font-semibold bg-primaryColor pl-4 pr-4 pt-2 pb-2'>Oferta</h3>
                </motion.div>
            </div>
        </>
    );
}
export default BannerOffer;