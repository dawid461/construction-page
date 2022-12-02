import Link from "next/link";

const Menu = () => {
    return (
        <>
            <div className='flex sm:flex-col w-full sm:items-start md:items-center sm:mt-10 md:mt-0'>
                <ul className='flex sm:flex-col md:flex-row text-footerColor text-sm font-bold'>
                    <li className='transform duration-300 delay-100 hover:text-whiteSmoke sm:pt-2 sm:pb-2 md:pl-2 md:pr-2 md:ml-2 md:mr-2'>
                        <Link href='/'>
                            <a href="#">O nas</a>
                        </Link>
                    </li>

                    <li className='transform duration-300 delay-100 hover:text-whiteSmoke sm:pt-2 sm:pb-2 md:pl-2 md:pr-2 md:ml-2 md:mr-2'>
                        <Link href="/oferta">
                            <a>Oferta</a>
                        </Link>
                    </li>

                    <li className='transform duration-300 delay-100 hover:text-whiteSmoke sm:pt-2 sm:pb-2 md:pl-2 md:pr-2 md:ml-2 md:mr-2'>
                        <Link href='/nasze-realizacje'>
                            <a href="#">Nasze realizacje</a>
                        </Link>
                    </li>

                    <li className='transform duration-300 delay-100 hover:text-whiteSmoke sm:pt-2 sm:pb-2 md:pl-2 md:pr-2 md:ml-2 md:mr-2'>
                        <Link href='/kontakt'>
                            <a href="#">Kontakt</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
        ;
}
export default Menu;