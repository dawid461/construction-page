import {motion} from "framer-motion";

const Image3 = () => {
    return (
        <>
            <motion.div animate={{x:[-50,0]}}
                 transition={{duration:1, ease:"easeOut",}}
                 initial={{ opacity: 0}}
                 whileInView={{ opacity: 1}}
                 viewport={{ once: true }}
                className='sm:w-36 sm:h-52 lg:w-60 lg:h-80 bg-image-steelLine bg-no-repeat bg-cover bg-center'/>
        </>
    );
}
export default Image3;