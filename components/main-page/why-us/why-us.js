import Heading from "./components/heading";
import Description from "./components/description";
import ImageBig from "./components/image-big";
import ImageSmall from "./components/image-small";

const WhyUs = () => {
    return (
        <>
            <div
                className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl h-full sm:flex-col-reverse lg:flex-row justify-center items-center sm:mt-8 sm:mb-24 lg:mt-12 lg:mb-12 xl:mt-24 xl:mb-24'>
                <div className='flex sm:w-full lg:w-2/4 flex-col'>
                    <Heading/>
                    <Description/>
                </div>

                <div className='flex sm:w-full lg:w-3/4 flex-row justify-evenly items-center sm:mb-10 lg:ml-2 xl:ml-0 xl:mb-0'>
                    <ImageBig/>
                    <ImageSmall/>
                </div>

            </div>
        </>
    );
}
export default WhyUs;