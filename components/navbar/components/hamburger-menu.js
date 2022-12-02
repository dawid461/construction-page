import Image from 'next/image'
const HamburgerMenu
    = () => {
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
                        <Image src='/media/navbar/hamburger.svg' alt="" width={32} height={16} />
                    </button>
                </div>

                <div className='overlay sm:absolute lg:hidden' id='myNav'>
                    <button className="closebtn" onClick={closeNavMobile}>
                        &times;
                    </button>

                    <ul className='overlay-content'>
                        <li>
                            <a href="#">O nas</a>
                        </li>

                        <li>
                            <a href="#">Oferta</a>
                        </li>

                        <ul>
                            <li>
                                <a href="#">Budownictwo</a>
                            </li>

                            <li>
                                <a href="#">Drogownictwo</a>
                            </li>

                            <li>
                                <a href="#">Kolejnictwo</a>
                            </li>

                            <li>
                                <a href="#">Wynajem Maszyn</a>
                            </li>
                        </ul>

                        <li>
                            <a href="#">Nasze realizacje</a>
                        </li>

                        <li>
                            <a href="#">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
export default HamburgerMenu;