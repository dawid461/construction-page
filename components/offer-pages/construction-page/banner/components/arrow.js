import Image from "next/image";
import {motion} from "framer-motion";

const Arrow = () => {
    return (
        <>
            <motion.div
                          viewport={{ once: true }}
                          animate={{y:[-20,8,-20]}}
                          transition={{duration:4,
                                        repeat:Infinity,
                                        ease:"easeOut",
                          }}
                        className='flex max-w-screen-2xl items-center justify-end sm:mb-3 xl:mb-4'>
                <Image src='/media/main-page/banner/arrow.svg' alt="" width={32} height={32}/>
            </motion.div>
        </>
    );
}
export default Arrow;