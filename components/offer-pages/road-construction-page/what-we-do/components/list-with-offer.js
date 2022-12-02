import {motion} from "framer-motion";

const OneImage = () => {
    return (
        <>
            <motion.ul animate={{y: [50, 0]}}
                       transition={{duration: 1, ease: "easeOut",}}
                       initial={{opacity: 0}}
                       whileInView={{opacity: 1}}
                       viewport={{once: true}}
                       className='text-md text-thirdColor text-left font-light leading-6 list-disc list-inside'>
                <li>przygotowanie inwestycji, kompleksowa budowa i modernizacja dróg</li>
                <li>roboty ziemne, roboty rozbiórkowe</li>
                <li>podbudowy betonowe, z kruszyw łamanych oraz bitumiczne</li>
                <li>roboty nawierzchniowe – bitumiczne, z kostki betonowej i kamiennej</li>
                <li>remonty dróg – frezowanie, remonty cząstkowe masami bitumicznymi i grysami</li>
                <li>wynajem sprzętu</li>
            </motion.ul>
        </>
    );
}
export default OneImage;
