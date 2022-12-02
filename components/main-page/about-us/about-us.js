import Heading from "./components/heading";
import Button from "./components/button";
import WhyUs1 from "./components/why-us-1";
import WhyUs2 from "./components/why-us-2";
import WhyUs3 from "./components/why-us-3";
import ImageWithSquare from "./components/image-with-square";

const AboutUs = () => {
    return (
        <>
            <div
                className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl flex-col justify-center sm:items-center lg:items-start h-full sm:mt-24 lg:mt-40 '>
                <Heading/>
                <div className='w-full flex sm:flex-col-reverse lg:flex-row'>
                    <Button/>
                    <div className='w-full flex flex-col justify-end items-end'>
                        <WhyUs1/>
                        <WhyUs2/>
                        <WhyUs3/>
                    </div>
                </div>
            </div>
            <ImageWithSquare/>
        </>
    );
}
export default AboutUs;