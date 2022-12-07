import {motion} from "framer-motion";

const Subtitles = () => {
    return (
        <>
            <div
                className='w-full h-96 max-w-screen-2xl flex flex-col items-center sm:justify-center md:justify-end
                xl:justify-center'>
                <motion.div animate={{x: [-100, 0]}}
                            transition={{duration: 1, ease: "easeOut",}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='flex bg-white sm:pb-1 xl:pb-2 sm:pt-1 xl:pt-2 sm:pr-3 xl:pr-6 sm:pl-3 xl:pl-6'>
                    <h3 className='sm:text-md xl:text-3xl text-secondaryColor text-center font-extrabold'>Rzetelność</h3>
                </motion.div>

                <motion.div animate={{x: [-100, 0]}}
                            transition={{duration: 1, delay: 0.3, ease: "easeOut",}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='flex bg-primaryColor sm:pb-1 xl:pb-2 sm:pt-1 xl:pt-2 sm:pr-6 xl:pr-8 sm:pl-6
                            xl:pl-8 sm:mt-3'>
                    <h2 className='sm:text-lg xl:text-4xl text-white text-center font-extrabold'>Terminowość</h2>
                </motion.div>

                <motion.div animate={{x: [-100, 0]}}
                            transition={{duration: 1, delay: 0.6, ease: "easeOut",}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='flex bg-secondaryColor sm:pb-2 xl:pb-4 sm:pt-2 xl:pt-4 sm:pr-6 xl:pr-8 sm:pl-6
                            xl:pl-8 sm:mt-3'>
                    <h1 className='sm:text-xl xl:text-5xl text-goldSmoke text-center font-extrabold'>Budownictwo pod
                        klucz</h1>
                </motion.div>
            </div>
        </>
    );
}
export default Subtitles;