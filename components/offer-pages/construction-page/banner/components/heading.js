import {motion} from "framer-motion";

const Heading = () => {
    return (
        <>
            <motion.div animate={{x: [-100, 0]}}
                        transition={{duration: 1.5, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='w-full flex flex-col justify-center'>
                <h3 className='flex justify-center w-64 text-4xl text-whiteSmoke font-semibold bg-primaryColor
                    pl-4 pr-4 pt-2 pb-2'>
                    Budownictwo
                </h3>
            </motion.div>
        </>
    );
}
export default Heading;