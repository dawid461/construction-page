import Heading from "./components/heading";
import Location from "./components/location";
import Client from "./components/client";

const BannerPortfolio = (props) => {
    return (
        <>
            <div className='flex w-11/12 items-center max-w-screen-2xl flex-col
            sm:mt-10 lg:mt-4'>
                <div className='flex w-full h-80 flex-col justify-center'>

                    <Heading title={props.heading}/>

                    <div className='flex sm:flex-col md:flex-row'>
                        <Location location={props.location}/>
                        <Client client={props.client}/>
                    </div>

                </div>
            </div>
        </>
    );
}
export default BannerPortfolio;
