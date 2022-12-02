import Image from 'next/image'
import Logo from './components/logo';
import HamburgerMenu from './components/hamburger-menu';
import Menu from './components/menu';
import Button from './components/button';

const Navbar = () => {
    return (
        <>
            <div className='flex flex-row sm:justify-between lg:justify-center w-11/12 max-w-screen-2xl py-2 sm:mt-2
            lg:mt-4 mb-1'>
                <Logo/>
                <HamburgerMenu/>
                <Menu/>
                <Button/>
            </div>
        </>
    );
}
export default Navbar;