import {motion} from "framer-motion";

const Heading = () => {
    return (
        <>
            <motion.div animate={{y: [50, 0]}}
                        transition={{duration: 1, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='w-full flex flex-col justify-start items-start sm:mb-5 lg:mb-10'>
                <h3 className='h-6 text-2xl font-light'>Dlaczego my?</h3>
                <div className=' border-b-2 w-4 h-1 border-primaryColor'/>
            </motion.div>
        </>
    );
}
export default Heading;