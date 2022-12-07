import {motion} from "framer-motion";

const ImageSmall = () => {
    return (
        <>
            <motion.div animate={{y: [50, 0]}}
                        transition={{duration: 1, ease: "easeOut"}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='flex sm:w-32 h-40 md:w-56 md:h-72 bg-image-man bg-cover bg-no-repeat bg-center'/>
        </>
    );
}
export default ImageSmall;
