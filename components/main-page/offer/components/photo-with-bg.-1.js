import {motion} from "framer-motion";

const PhotoWithBg1 = () => {
    return (
        <>
            <div
                className='relative w-60 h-52 bg-bgPhoto border-2 border-bgPhoto rounded-2xl shadow-2xl shadow-bgPhoto'>
                <motion.div animate={{x: [-50, 0]}}
                            transition={{duration: 1, ease: "easeOut"}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='absolute w-60 h-52 bg-image-offer-1 bg-cover bg-no-repeat bg-left-bottom
                            rounded-2xl top-4 right-4 z-20'/>
            </div>
        </>
    );
}
export default PhotoWithBg1;