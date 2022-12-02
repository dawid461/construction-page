import {motion} from "framer-motion";
const ImageInfo = (props) => {
    return (
        <>
            <motion.div animate={{y:[50,0]}}
                        transition={{duration:1, ease:"easeOut",}}
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        className='sm:w-56 h-72 lg:w-80 lg:h-96 shadow-md shadow-colorOffer bg-cover
                        bg-no-repeat bg-image-contact-page bg-center sm:mb-32 lg:mb-0'>

            </motion.div>
        </>
    );
}
export default ImageInfo;