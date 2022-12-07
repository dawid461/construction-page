import {motion} from "framer-motion";

const Image1 = () => {
    return (
        <>
            <motion.div animate={{x: [-50, 0]}}
                        transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-image-construction bg-cover bg-no-repeat bg-center'/>
        </>
    );
}
export default Image1;