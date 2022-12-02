import {motion} from "framer-motion";
const Description = (props) => {
    return (
        <>
            <motion.p  animate={{y:[50,0]}}
                       transition={{duration:1, ease:"easeOut", delay: 0.3}}
                       initial={{ opacity: 0}}
                       whileInView={{ opacity: 1}}
                       viewport={{ once: true }}
                className='sm:w-full lg:w-3/4 text-md text-thirdColor text-left font-light leading-6'>
                <span className='text-primaryColor font-semibold'>{props.spanText} </span>
                {props.description}
            </motion.p>
        </>
    );
}
export default Description;
