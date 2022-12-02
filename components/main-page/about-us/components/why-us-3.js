import Image from "next/image";
import {motion} from "framer-motion";
const WhyUs3 = () => {
    return (
        <>
            <motion.div animate={{y:[50,0]}}
                        transition={{duration:1, ease:"easeOut", delay:0.6}}
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                className='lg:w-8/12 sm:w-full flex sm:flex-col lg:flex-row sm:items-center md:items-stretch lg:items-end lg:justify-end sm:mt-6 lg:mt-3 mb-3'>
                <Image src='/media/main-page/about-us/icon-3.svg' alt="" width={58} height={58}/>
                <p className='lg:w-8/12 text-md text-thirdColor text-left font-light mt-4 lg:ml-6 leading-5'>
                    <span className='text-primaryColor font-semibold'>Terminowość </span>
                    – Wszystkie etapy inwestycji realizujemy w ściśle określonym w umowie przedziale czasowym.</p>
            </motion.div>
        </>
    );
}
export default WhyUs3;