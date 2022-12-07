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
            <div className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl flex-col justify-center sm:items-center
                lg:items-start h-full sm:mt-20 lg:mt-32 lg:mb-32' id='oferta'>
                <Heading/>

                <div className="w-full flex sm:flex-col lg:flex-row items-center">

                    <div className='sm:hidden lg:flex flex-col justify-center items-center w-1/2'>
                        <PhotoWithBg1/>
                        <div className='w-full flex justify-start'>
                            <PhotoWithBg2/>
                        </div>
                    </div>

                    <div className='sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-6/12 grid sm:grid-cols-1 md:grid-cols-2
                    sm:gap-y-14 md:gap-y-10 lg:gap-y-14 sm:gap-x-2 md:gap-x-12 lg:gap-x-12 2xl:gap-x-6 justify-items-center'>
                        <Offer1/>
                        <Offer2/>
                        <Offer3/>
                        <Offer4/>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Offer;