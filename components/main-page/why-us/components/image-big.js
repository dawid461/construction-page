import {motion} from "framer-motion";
const ImageBig = () => {
    return (
        <>
            <motion.div  animate={{y:[50,0]}}
                         transition={{duration:1, ease:"easeOut"}}
                         initial={{ opacity: 0}}
                         whileInView={{ opacity: 1}}
                         viewport={{ once: true }}
                className='flex sm:w-40 sm:h-56 md:w-80 md:h-96 bg-image-cranes bg-cover bg-no-repeat bg-center'/>
        </>
    );
}
export default ImageBig;
