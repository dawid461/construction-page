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
                <li>koparki gąsienicowe</li>
                <li>koparki gąsienicowe typu long</li>
                <li>koparko ładowarki</li>
                <li>żurawie</li>
                <li>ciągniki siodłowe i naczepy</li>
                <li>spychacze</li>
                <li>i wiele innych...</li>
            </motion.ul>
        </>
    );
}
export default OneImage;
