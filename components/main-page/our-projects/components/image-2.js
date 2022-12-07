import {motion} from "framer-motion";

const Image2 = () => {
    return (
        <>
            <motion.div animate={{x: [-50, 0]}}
                        transition={{duration: 1, ease: "easeOut", delay: 0.6}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='sm:w-40 sm:h-20 lg:w-60 lg:h-32 bg-image-worker bg-cover bg-no-repeat bg-top sm:mt-4
                        lg:mt-5 2xl:mt-10'/>
        </>
    );
}
export default Image2;