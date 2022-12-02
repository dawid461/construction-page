import {motion} from "framer-motion";

const ImageSmall = () => {
    return (
        <>
            <motion.div animate={{y: [50, 0]}}
                        transition={{duration: 1, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='sm:w-32 sm:h-48 md:w-44 md:h-60 xl:w-44 xl:h-64 2xl:w-56 2xl:h-80
                         bg-image-road-construction-page-3 bg-cover bg-center bg-no-repeat sm:ml-1 md:ml-0'>
            </motion.div>
        </>
    );
}
export default ImageSmall;
