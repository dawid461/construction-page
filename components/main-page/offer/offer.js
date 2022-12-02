import Heading from "./components/heading";
import Offer1 from "./components/offer-1";
import Offer2 from "./components/offer-2";
import Offer3 from "./components/offer-3";
import Offer4 from "./components/offer-4";
import PhotoWithBg1 from "./components/photo-with-bg.-1";
import PhotoWithBg2 from "./components/photo-with-bg-2";

const Offer = () => {
    return (
        <>
            <div
                className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl flex-col justify-center sm:items-center lg:items-start h-full sm:mt-20 lg:mt-32 lg:mb-32'>
                <Heading/>

                <div className="w-full flex sm:flex-col lg:flex-row">

                    <div className='sm:hidden lg:flex flex-col justify-center items-center w-1/2'>
                        <PhotoWithBg1/>
                        <div className='w-full flex justify-start'>
                            <PhotoWithBg2/>
                        </div>
                    </div>


                    <div className='sm:w-full lg:w-3/4 xl:w-1/2 2xl:w-5/12 flex flex-col'>
                        <div
                            className='flex sm:flex-col md:flex-row sm:items-center md:justify-evenly lg:justify-between 2xl:justify-between sm:mb-0 lg:mb-16'>
                            <Offer1/>
                            <Offer2/>
                        </div>
                        <div
                            className='flex sm:flex-col md:flex-row sm:items-center md:justify-evenly lg:justify-between 2xl:justify-between '>
                            <Offer3/>
                            <Offer4/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Offer;