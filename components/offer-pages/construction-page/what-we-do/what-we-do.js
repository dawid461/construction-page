import Heading from "../../universal-components/heading";
import OneImage from "./components/one-image";
import ListWithOffer from "./components/list-with-offer";

const WhatWeDo = () => {
    return (
        <>
            <div className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl sm:flex-col lg:flex-row items-start justify-evenly
            mt-24 lg:mb-24'>

                <div className='w-full flex items-start justify-evenly sm:flex-col lg:flex-row'>

                    <div className='sm:w-full lg:w-1/2 flex flex-col justify-center items-center sm:mb-10 lg:mb-0'>
                        <OneImage/>
                    </div>

                    <div className='sm:w-full lg:w-1/2 flex flex-col'>
                        <Heading heading='Wykonujemy'/>
                         <ListWithOffer/>
                    </div>

                </div>
            </div>
        </>
    );
}
export default WhatWeDo;