import Subtitles from "./components/subtitles";
import Arrow from "./components/arrow";

const Banner = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center w-full max-w-screen-2xl bg-banner-image bg-cover
            h-full bg-no-repeat bg-bottom mt-2 xl:pt-40 2xl:pt-64'>
                <Subtitles/>
                <Arrow/>
            </div>
        </>
    );
}
export default Banner;