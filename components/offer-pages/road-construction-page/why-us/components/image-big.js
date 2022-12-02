import {motion} from "framer-motion";

const ImageBig = () => {
    return (
        <>
            <motion.div animate={{y: [50, 0]}}
                        transition={{duration: 1, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='sm:w-40 sm:h-64 md:w-52 md:h-72 xl:w-56 xl:h-80 2xl:w-72 2xl:h-96
                       bg-image-road-construction-page-2 bg-cover bg-center bg-no-repeat'>
            </motion.div>
        </>
    );
}
export default ImageBig;
