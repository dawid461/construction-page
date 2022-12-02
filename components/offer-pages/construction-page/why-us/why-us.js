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
                        <Heading heading='Współpraca'/>
                        <Description spanText='Posiadamy korzystne warunki handlowe'
                                     description=' na zakup materiałów budowlanych co zapewnia naszym Klientom niższe koszty budowy.
                Dysponujemy bogatym parkiem maszynowym co wpływa korzystnie na czas realizacji inwestycji.
                Nasz personel jest wykwalifikowany, zapewniając tym samym najwyższą jakość wykonywanych prac.'
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