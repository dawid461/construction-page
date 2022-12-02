import Image from "next/image";
import {motion} from "framer-motion";
const Offer2 = () => {
    return (
        <>
            <motion.div animate={{y:[50,0]}}
                        transition={{duration:1, ease:"easeOut", delay:0.2}}
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                className='w-64 h-64 flex flex-col justify-center items-center border-2 border-colorOffer
                border-opacity-30 rounded-md shadow-lg shadow-colorOffer sm:mt-5 lg:mt-0 sm:mb-5 lg:mb-0'>

                <div className='flex justify-center w-14 h-14 bg-primaryColor rounded-md'>
                    <Image src='/media/main-page/offer/icon-3.svg' width={40} height={40} alt=''/>
                </div>

                <h5 className='mt-3 text-black font-medium'>Drogownictwo</h5>

                <p className='w-11/12 mt-3 font-light text-sm text-center text-thirdColor leading-4'>
                    Wykopy / Niwelacje terenu / Transport / Drogi dojazdowe / Drogi przeciwpożarowe
                </p>

                <a href="#" className="flex items-center justify-center w-28 h-8 cursor-pointer border hover:pl-10 hover:bg-primaryColor
                 duration-300 delay-100 border-primaryColor text-primaryColor mt-3
                stroke-primaryColor hover:stroke-white ">
                    <div className="h-6 w-8 flex items-center justify-center content-center">
                        <svg viewBox="0 0 64 64" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="transform rotate-90 stroke-2">
                            <path d="M32 58.667V5.333M21.333 16L32 5.333 42.667 16"></path>
                        </svg>
                    </div>
                </a>

            </motion.div>
        </>
    );
}
export default Offer2;