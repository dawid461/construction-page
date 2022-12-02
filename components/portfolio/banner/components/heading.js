import {motion} from "framer-motion";

const Heading = (props) => {
    return (
        <>
            <motion.div animate={{x: [-100, 0]}}
                        transition={{duration: 1.5, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='w-full flex flex-col justify-center'>
                <h3 className='flex justify-start sm:text-3xl lg:text-4xl text-secondaryColor font-semibold sm:mt-5 lg:mt-0'>
                    {props.title}
                </h3>
            </motion.div>
        </>
    );
}
export default Heading;