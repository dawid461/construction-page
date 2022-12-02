import Logo from "./components/logo";
import Menu from "./components/menu";
import SocialMedia from "./components/social-media";
import Copyright from "./components/copyright";
const Footer = () => {
    return (
        <>
            <div className='flex flex-col items-center w-full h-full max-w-screen-2xl sm:pt-10 md:pt-16 lg:pt-24'>
                <div className='flex w-11/12 sm:flex-col md:flex-row sm:items-start lg:items-center'>
                    <Logo/>
                    <Menu/>
                    <SocialMedia/>
                </div>
                <div className='flex w-11/12 h-1 border-b-2 border-footerSecondColor mt-10'/>
                <Copyright/>

                <p className="text-xs text-center text-white sm:mt-10 xl:mt-16 mb-5">Made with ❤️ by
                    <a href='https://dinkystudio.pl/' className='hover:text-primaryColor duration-300 delay-75'> dinkystudio.pl</a>
                </p>
            </div>
        </>
    );
}
export default Footer;