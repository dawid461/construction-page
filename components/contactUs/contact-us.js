import BigTitle from "./components/big-title";
import Button from "./components/button";
const ContactUs = () => {
    return (
        <>
            <div className='flex sm:flex-col md:flex-row justify-center w-full md:h-32 lg:h-44 xl:h-36 lg:mt-16 bg-bg44444'>
                <div className='flex justify-center items-center sm:w-full lg:w-1/2 max-w-screen-2xl bg-primaryColor sm:pt-7 sm:pb-7 lg:pt-0 lg:pb-0'>
                    <div className='flex justify-center items-center'>
                        <BigTitle/>
                    </div>
                </div>

                <div className='flex justify-center items-center sm:w-full lg:w-1/2 max-w-screen-2xl bg-bg44444 sm:pt-7 sm:pb-7 lg:pt-0 lg:pb-0'>
                    <div className='flex justify-center items-center'>
                       <Button/>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ContactUs;