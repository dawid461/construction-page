import {motion} from "framer-motion";
const PhotoWithBg1 = () => {
    return (
        <>
            <div className='relative sm:w-48 sm:h-40 lg:w-60 lg:h-52 bg-bgPhoto border-2 border-bgPhoto rounded-2xl
           sm:ml-20 md:ml-48 lg:ml-0 shadow-2xl shadow-bgPhoto'>
                <motion.div animate={{x:[-50,0]}}
                            transition={{duration:1, ease:"easeOut"}}
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            viewport={{ once: true }}
                            className='absolute sm:w-48 sm:h-40 lg:w-60 lg:h-52 bg-image-railway-page-4 bg-cover
                            bg-no-repeat bg-left-bottom rounded-2xl top-4 right-4 z-20'/>
            </div>
        </>
    );
}
export default PhotoWithBg1;