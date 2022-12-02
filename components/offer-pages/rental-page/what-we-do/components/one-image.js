import {motion} from "framer-motion";

const OneImage = () => {
    return (
        <>
            <motion.div animate={{y: [50, 0]}}
                        transition={{duration: 1, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='sm:w-full lg:w-10/12 sm:h-48 md:h-60 lg:h-60 2xl:h-80 bg-image-rental-page-3
                         bg-contain bg-center bg-no-repeat'>
            </motion.div>
        </>
    );
}
export default OneImage;
