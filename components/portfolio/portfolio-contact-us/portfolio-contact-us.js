import Button from "./components/button";

const PortfolioContactUs = () => {
    return (
        <>
            <div className='flex w-full items-center justify-center overlay-contact-us-portfolio sm:py-20 lg:py-36'>
                <div className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl flex-col justify-center items-center mt-10'>
                    <h2 className='text-4xl text-whiteSmoke text-center font-light mb-7'>
                        Masz projekt w którym możemy pomóc?
                    </h2>
                    <Button/>
                </div>
            </div>

        </>
    );
}
export default PortfolioContactUs;