import {motion} from "framer-motion";

const Description = () => {
    return (
        <>
                <motion.div animate={{x: [-100, 0]}}
                            transition={{duration: 1.5, ease: "easeOut", delay:0.3}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='w-11/12 flex flex-col justify-center mt-6'>
                    <p className='sm:w-3/4 md:w-2/4 lg:w-5/12 xl:w-1/4 text-md text-whiteSmoke font-light'>
                        Jedną z naszych specjalizacji są prace związane z koleją. Zajmujemy się kompleksową budową i
                        remontami w zakresie infrastruktury kolejowej, tramwajowej i obiektów pomocniczych.
                    </p>
                </motion.div>
        </>
    );
}
export default Description;