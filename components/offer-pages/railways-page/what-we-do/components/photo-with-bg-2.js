import {motion} from "framer-motion";

const PhotoWithBg2 = () => {
    return (
        <>
            <div
                className='relative sm:w-48 sm:h-40 lg:w-60 lg:h-52 bg-bgPhoto border-2 border-bgPhoto rounded-2xl
                shadow-2xl shadow-bgPhoto sm:ml-6 md:ml-0'>
                <motion.div animate={{x: [-50, 0]}}
                            transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='absolute sm:w-48 sm:h-40 lg:w-60 lg:h-52 bg-image-railway-page-3 bg-cover bg-no-repeat
                    bg-center rounded-2xl
                    bottom-4 left-4'/>
            </div>
        </>
    );
}
export default PhotoWithBg2;