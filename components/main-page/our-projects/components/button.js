import {motion} from "framer-motion";
const Button = () => {
    return (
        <>
            <motion.div animate={{y:[50,0]}}
                        transition={{duration:1, ease:"easeOut",delay: 0.6}}
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                className='lg:w-4/12 flex flex-col sm:justify-center lg:justify-end sm:items-center lg:items-start mb-5 mt-5'>

                <a href="#" className="cursor-pointer flex items-center w-52 h-16 border border-px px-9 hover:px-3 hover:border-none
                duration-500 justify-between border-primaryColor text-primaryColor font-light tracking-wider
                stroke-primaryColor hover:stroke-white hover:bg-primaryColor hover:text-white">
                    Sprawdź
                    <div className="h-6 w-6 block">
                        <svg viewBox="0 0 64 64" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 stroke-2 stroke-current">
                            <path d="M32 58.667V5.333M21.333 16L32 5.333 42.667 16"></path>
                        </svg>
                    </div>
                </a>

            </motion.div>
        </>
    );
}
export default Button;