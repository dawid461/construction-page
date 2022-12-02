import {motion} from "framer-motion";
import Heading from "../../universal-components/heading";
import Description from "../../universal-components/description";
import ImageBig from "./components/image-big";
import ImageSmall from "./components/image-small";

const WhyUs = () => {
    return (
        <>
            <div className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl sm:flex-col lg:flex-row items-start justify-evenly
            mt-24 lg:mb-24'>

                <div className='w-full flex items-start justify-center sm:flex-col-reverse lg:flex-row'>

                    <div className='sm:w-full lg:w-1/2 flex flex-col'>
                        <Heading heading='Zaufaj nam!'/>
                        <Description spanText='Nasza firma jest innowacyjna'
                                     description=' i spełniamy najwyższe wymagania stawiane przez klientów i inwestorów.
                                      Proponujemy konkretne rozwiązania, jednocześnie zachowując konkurencyjność cen i
                                       najwyższą jakość usług. Posiadamy kadrę wykwalifikowanych pracowników oraz
                                        dysponujemy odpowiednim sprzętem. Jesteśmy w stanie wykonać szereg usług z
                                        zakresu szeroko rozumianego budownictwa drogowego. Zawsze dobieramy optymalne
                                        rozwiązania, troszcząc się o jakość, skuteczność i trwałość wykonywanych prac.'
                        />
                    </div>

                    <div className='sm:w-full lg:w-1/2 flex flex-row justify-evenly items-center sm:mb-10 lg:mb-0'>
                        <ImageBig/>
                        <ImageSmall/>
                    </div>

                </div>
            </div>
        </>
    );
}
export default WhyUs;