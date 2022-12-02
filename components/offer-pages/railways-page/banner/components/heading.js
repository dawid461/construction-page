import {motion} from "framer-motion";

const Heading = () => {
    return (
        <>
            <motion.div animate={{x: [-100, 0]}}
                        transition={{duration: 1.5, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='w-11/12 flex flex-col justify-center'>
                <h3 className='flex justify-center w-64 text-4xl text-thirdColor font-semibold bg-whiteSmoke pl-4 pr-4
                pt-2 pb-2'>
                    Kolejnictwo
                </h3>
            </motion.div>
        </>
    );
}
export default Heading;