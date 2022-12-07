import Image from 'next/image';
import Link from "next/link";

const HamburgerMenu = () => {
    const openNav = () => {
        document.getElementById("myNav").style.width = "100%";
    }

    const closeNavMobile = () => {
        document.getElementById("myNav").style.width = "0%";
    }
    return (
        <>
            <div className='flex  lg:hidden justify-center items-center'>
                <button className='cursor-pointer' onClick={openNav}>
                    <Image src='/media/navbar/hamburger.svg' alt="" width={32} height={16}/>
                </button>
            </div>

            <div className='overlay sm:absolute lg:hidden' id='myNav'>
                <button className="closebtn" onClick={closeNavMobile}>
                    &times;
                </button>

                <ul className='overlay-content text-lg'>
                    <li className='my-5 hover:text-primaryColor focus:text-primaryColor duration-300 ease-in-out'>
                        <Link href='/'>
                            <a>O nas</a>
                        </Link>
                    </li>

                    <li className='my-5 hover:text-primaryColor focus:text-primaryColor duration-300 ease-in-out'>
                        <Link href='/budownictwo'>
                            <a>Budownictwo</a>
                        </Link>
                    </li>

                    <li className='my-5 hover:text-primaryColor focus:text-primaryColor duration-300 ease-in-out'>
                        <Link href='/drogownictwo'>
                            <a>Drogownictwo</a>
                        </Link>
                    </li>

                    <li className='my-5 hover:text-primaryColor focus:text-primaryColor duration-300 ease-in-out'>
                        <Link href='/kolejnictwo'>
                            <a>Kolejnictwo</a>
                        </Link>
                    </li>

                    <li className='my-5 hover:text-primaryColor focus:text-primaryColor duration-300 ease-in-out'>
                        <Link href='/wynajem-maszyn'>
                            <a>Wynajem maszyn</a>
                        </Link>
                    </li>

                    <li className='my-5 hover:text-primaryColor focus:text-primaryColor duration-300 ease-in-out'>
                        <Link href='/nasze-realizacje'>
                            <a>Nasze realizacje</a>
                        </Link>
                    </li>

                    <li className='my-5 hover:text-primaryColor focus:text-primaryColor duration-300 ease-in-out'>
                        <Link href='/kontakt'>
                            <a>Kontakt</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default HamburgerMenu;