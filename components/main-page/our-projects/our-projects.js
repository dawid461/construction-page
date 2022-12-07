import Heading from "./components/heading";
import Image1 from "./components/image-1";
import Image2 from "./components/image-2";
import Image3 from "./components/image-3";
import Description from "./components/Description";
import Button from "./components/button";

const OurProjects = () => {
    return (
        <>
            <div
                className='flex sm:w-full lg:w-11/12 xl:w-9/12 max-w-screen-2xl h-full flex-col sm:mt-24 lg:mt-16
                lg:mb-16'>
                <div className='sm:hidden lg:flex w-full flex-col'>
                    <Heading/>
                </div>

                <div
                    className='flex w-full items-center sm:flex-col lg:flex-row bg-bgOurProjects sm:pt-5 sm:pb-5
                    lg:p-10'>
                    <div className='flex sm:flex-col lg:flex-row sm:w-11/12 lg:w-full'>

                        <div className='sm:flex lg:hidden w-full mb-4'>
                            <Heading/>
                        </div>

                        <div
                            className='flex sm:w-full lg:w-2/4 items-center sm:justify-center lg:justify-start
                            2xl:justify-center sm:mb-6'>
                            <div className='flex flex-col sm:mr-4 lg:mr-6 2xl:mr-10'>
                                <Image1/>
                                <Image2/>
                            </div>
                            <Image3/>
                        </div>

                        <div
                            className='flex flex-col sm:w-full lg:w-2/4 justify-center sm:items-center lg:items-start
                            lg:ml-10 2xl:ml-0'>
                            <Description/>
                            <Button/>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}
export default OurProjects;