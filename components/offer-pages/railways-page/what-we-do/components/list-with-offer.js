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
                <li>budowa, przebudowa oraz naprawa głównych linii i stacji kolejowych, oraz obiektów związanych
                    z infrastrukturą kolejową</li>
                <li>naprawy główne, bieżące oraz konserwacja torów</li>
                <li>budowa i modernizacja odwodnienia układu torowego</li>
                <li>budowa peronów, wiat, modernizacja stacji i przystanków</li>
                <li>budowa podtorza i nawierzchni torowych</li>
                <li>modernizacja dworców</li>
                <li>budowa nasypów kolejowych</li>
            </motion.ul>
        </>
    );
}
export default OneImage;
