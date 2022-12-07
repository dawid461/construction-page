import Box from "./components/box";
import {motion} from "framer-motion";

const Boxes = () => {
    return (
        <>
            <div className='flex w-11/12 max-w-screen-2xl flex-col justify-center items-center
            sm:mt-24 lg:mt-24 lg:mb-10'>

                <motion.div animate={{x: [-100, 0]}}
                            transition={{duration: 1, ease: "easeOut",}}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            className='flex w-full flex-col mb-20'>
                    <h3 className='h-6 text-thirdColor text-2xl font-light'>Zapraszamy do sprawdzenia naszej oferty</h3>
                    <div className='border-b-2 w-4 h-1 border-primaryColor'/>
                </motion.div>

                <div
                    className='flex sm:w-9/12 lg:w-8/12 xl:w-1/2  sm:flex-col md:flex-row items-center justify-evenly
                    lg:mb-16'>
                    <Box title='Budownictwo' number='01' urlPage='/budownictwo'/>
                    <Box title='Drogownictwo' number='02' urlPage='/drogownictwo' delayTime='0.2'/>
                </div>

                <div className='flex sm:w-9/12 lg:w-8/12 xl:w-1/2 sm:flex-col md:flex-row items-center justify-evenly'>
                    <Box title='Kolejnictwo' number='03' urlPage='/kolejnictwo' delayTime='0.4'/>
                    <Box title='Wynajem' number='04' urlPage='/wynajem-maszyn' delayTime='0.6'/>
                </div>
            </div>
        </>
    );
}
export default Boxes;