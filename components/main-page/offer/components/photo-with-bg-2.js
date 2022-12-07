import {motion} from "framer-motion";

const PhotoWithBg2 = () => {
    return (
        <>
            <div
                className='relative w-60 h-52 bg-bgPhoto border-2 border-bgPhoto rounded-2xl shadow-2xl shadow-bgPhoto'>
                <motion.div animate={{x: [-50, 0]}}
                            transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='absolute w-60 h-52 bg-image-offer-2 bg-cover bg-no-repeat bg-left-bottom
                            rounded-2xl bottom-4 left-4'/>
            </div>
        </>
    );
}
export default PhotoWithBg2;