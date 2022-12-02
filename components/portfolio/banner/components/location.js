import {motion} from "framer-motion";
import Image from "next/image";
const Location = (props) => {
    return (
        <>
            <motion.div animate={{y: [50, 0]}}
                        transition={{duration: 1, ease: "easeOut",}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='w-64 h-24 flex flex-col border-2 border-primaryColor mt-10 md:mr-10
                        justify-center'>
                <Image src='/media/our-projects/location.svg' alt='' width={30} height={30}/>
                <p className='text-sm text-thirdColor text-center font-medium mt-2'>
                    {props.location}
                </p>
            </motion.div>
        </>
    );
}
export default Location;