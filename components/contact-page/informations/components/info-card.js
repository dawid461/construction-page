import Image from "next/image";
import {motion} from "framer-motion";
const InfoCard = (props) => {

const timeDelay=(props.delayTime);
    return (
        <>
            <motion.div animate={{y:[50,0]}}
                        transition={{duration:1, ease:"easeOut", delay:(timeDelay)}}
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1}}
                        viewport={{ once: true }}
                        className='sm:w-10/12 sm:h-52 md:w-80 md:h-52 flex flex-col justify-center items-center border-2 border-thirdColor
                        shadow-md shadow-colorOffer text-thirdColor duration-200 rounded-lg
                        ease-in hover:border-thirdColor hover:border-b-8 hover:border-r-8 md:mx-4 lg:mx-0 lg:mr-11
                        2xl:mr-16 sm:mb-10 lg:mb-0'>

                <div className='flex justify-center'>
                    <Image src={props.iconUrl} alt='' width={40} height={40}/>
                </div>

                <h5 className='mt-1.5 font-medium text-xl'>{props.title}</h5>

                <div className='flex flex-col justify-center'>
                <p className='mt-1.5 font-light text-md text-left leading-4'>
                    {props.description1}
                </p>
                <p className='mt-1.5 font-light text-md text-left leading-4'>
                    {props.description2}
                </p>
                <p className='mt-1.5 font-light text-md text-left leading-4'>
                    {props.description3}
                </p>
                </div>

            </motion.div>
        </>
    );
}
export default InfoCard;