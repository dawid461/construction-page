import {motion} from "framer-motion";
import Link from "next/link";

const Button = () => {
    return (
        <>
            <motion.div animate={{x: [-100, 0]}}
                        transition={{duration: 1.5, ease: "easeOut", delay: 0.6}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='w-11/12 flex flex-col justify-center items-start mt-6'>
                <Link href='/nasze-realizacje'>
                    <a href="#" className="cursor-pointer flex items-center w-60 h-16 border border-px px-9
                    hover:px-3 hover:border-none duration-500 justify-between border-white text-white font-light
                    tracking-wider stroke-white hover:stroke-black hover:bg-white hover:text-black">
                        Sprawdź
                        <div className="h-6 w-6 block">
                            <svg viewBox="0 0 64 64" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="transform rotate-90 stroke-2 stroke-current">
                                <path d="M32 58.667V5.333M21.333 16L32 5.333 42.667 16"></path>
                            </svg>
                        </div>
                    </a>
                </Link>

            </motion.div>
        </>
    );
}
export default Button;