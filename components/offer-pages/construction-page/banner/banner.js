import Heading from "./components/heading";
import Description from "./components/description";
import Button from "./components/button";
import Arrow from "./components/arrow";

const BannerConstruction = () => {
    return (
        <>
            <div className='flex w-full items-center max-w-screen-2xl flex-col sm:pt-24 xl:pt-32
            sm:mt-2 lg:mt-4 lg:mb-16 overlay-banner-construction'>
                <div className='flex w-11/12 h-96 flex-col justify-end'>
                    <Heading/>
                    <Description/>
                    <Button/>
                </div>
                <div className='flex sm:h-72 lg:h-80 items-end'>
                    <Arrow/>
                </div>
            </div>
        </>
    );
}
export default BannerConstruction;