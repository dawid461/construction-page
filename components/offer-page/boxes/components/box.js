import Link from "next/link";
import {motion} from "framer-motion";

const Box = (props) => {
    const delayTime = (props.delayTime);
    return (
        <>
            <motion.div transition={{duration: 1, ease: "easeOut", delay:(delayTime)}}
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        viewport={{once: true}}
                        className='flex justify-center w-52 h-40 rounded-xl border-2 border-bg44444 border-opacity-20
            duration-200 ease-in hover:border-primaryColor hover:border-b-8 hover:border-r-8 sm:mb-10 lg:mb-0
            shadow-lg'>

                <div className='w-3/4 flex flex-col justify-center items-start'>
                    <h1 className='text-2xl text-thirdColor font-light opacity-50'>
                        {props.number}
                    </h1>

                    <h3 className='text-2xl text-thirdColor font-light'>{props.title}</h3>

                    <Link href={props.urlPage}>
                        <a className='flex items-center justify-center w-28 h-8 cursor-pointer border hover:pl-10
                    hover:bg-primaryColor duration-300 delay-75 border-primaryColor text-primaryColor mt-3
                    stroke-primaryColor hover:stroke-white "'>
                            <svg viewBox="0 0 64 64" fill="none"
                                 xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 stroke-2 h-6 w-8">
                                <path d="M32 58.667V5.333M21.333 16L32 5.333 42.667 16"></path>
                            </svg>
                        </a>
                    </Link>
                </div>

            </motion.div>
        </>
    );
}
export default Box;