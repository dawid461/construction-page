import {motion} from "framer-motion";

const OneImage = () => {
    return (
        <>
            <motion.ul animate={{y: [50, 0]}}
                       transition={{duration: 1, ease: "easeOut"}}
                       initial={{opacity: 0}}
                       whileInView={{opacity: 1}}
                       viewport={{once: true}}
                       className='text-md text-thirdColor text-left font-light leading-6 list-disc list-inside'>
                <li>obiekty zamieszkania zbiorowego – bloki mieszkalne, hotele</li>
                <li>obiekty użyteczności publicznej – szkoły, baseny, hale sportowe</li>
                <li>obiekty z zakresu budownictwa przemysłowego – hale, magazyny</li>
                <li>instalacje wodno-kanalizacyjne</li>
                <li>instalacje centralnego ogrzewania i gazowe</li>
                <li>kotłownie i węzły ciepłownicze</li>
                <li>sieci kanalizacji sanitarnej, deszczowej i wodociągowej</li>
                <li>roboty ziemne – wykopy, niewlacje terenu, transport</li>
                <li>roboty drogowe – drogi dojazdowe, przeciwpożarowe, itp.</li>
                <li>prace brukarskie – place, parkingi z betonowej i granitowej kostki brukowej</li>
            </motion.ul>
        </>
    );
}
export default OneImage;
