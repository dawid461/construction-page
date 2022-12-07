import {motion} from "framer-motion";

const Description = () => {
    return (
        <>
            <motion.p animate={{y: [50, 0]}}
                      transition={{duration: 1, ease: "easeOut", delay: 0.3}}
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: true}}
                      className='sm:w-full  text-md text-thirdColor text-left font-light leading-6'>
                <span className='text-primaryColor font-semibold'>Grupa Fewaterm </span>
                zrealizowała wiele inwestycji z zakresu budownictwa mieszkaniowego, hale, magazyny, obiekty sprzedażowe.
                Mamy doświadczenie w budowie linii kolejowych i dróg publicznych.
                Współpracujemy z władzami samorządowymi wykonując inwestycje publiczne jak i z inwestorami prywatnymi.
            </motion.p>
        </>
    );
}
export default Description;
