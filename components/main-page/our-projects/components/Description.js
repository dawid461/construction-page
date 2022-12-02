import {motion} from "framer-motion";
const Description = () => {
    return (
        <>
            <motion.p animate={{y:[50,0]}}
                      transition={{duration:1, ease:"easeOut", delay: 0.3}}
                      initial={{ opacity: 0}}
                      whileInView={{ opacity: 1}}
                      viewport={{ once: true }}
                className='sm:w-full md:w-10/12 lg:w-10/12  text-md text-thirdColor text-left font-light leading-6'>
                Z powodzeniem realizujemy nasz cel jakim jest dostarczanie klientom wysokiej klasy obiektów mieszkalnych,
                biurowych czy użytkowych. Z wieloma z naszych Klientów współpracowaliśmy wielokrotnie.
            </motion.p>
        </>
    );
}
export default Description;
