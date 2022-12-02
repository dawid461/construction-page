import {motion} from "framer-motion";

const Heading = () => {
    return (
        <>
            <motion.div animate={{y:[50,0]}}
                        transition={{duration:1, ease:"easeOut",}}
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-start w-full sm:mb-5 lg:mb-0'>
                <h3 className='text-2xl font-light'>Co nas wyróżnia?</h3>
                <div className='flex flex-row mt-1'>
                    <span className='mt-1.5 ml-0.5 absolute w-2.5 border-b-2 border-primaryColor'></span>
                    <p className='ml-4 text-xs text-primaryColor font-light'>Grupa Fewaterm</p>
                </div>
            </motion.div>
        </>
    );
}
export default Heading;