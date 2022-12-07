import Link from "next/link";

const Menu = () => {
    return (
        <>
            <div className='sm:hidden lg:flex w-2/4 justify-center items-center'>
                <ul className='h-6 flex flex-row text-secondaryColor text-md font-bold'>

                    <li className='pl-2 pr-2 ml-2 mr-2 link link-underline link-underline-red'>
                        <Link href='/'>
                            <a>O nas</a>
                        </Link>
                    </li>

                    <li className='w-max h-full flex justify-center list-none pl-2 pr-2 ml-2 mr-2 link link-underline link-underline-red group'>
                        <Link href='/oferta'><a>Oferta</a></Link>
                        <div className='top-12 absolute bg-secondaryColor w-28 h-4 opacity-0'>block</div>
                        <ul className="z-20 absolute mt-1 top-16 transform scale-0 group-hover:scale-100 duration-300 delay-75 ease-in-out text-sm bg-primaryColor rounded-md">
                            <li className='flex justify-center p-2 text-white hover:text-secondaryColor duration-300 ease-in-out'>
                                <Link href='/budownictwo'>
                                <a>Budownictwo</a>
                                </Link>
                            </li>

                            <li className='flex justify-center p-2 text-white hover:text-secondaryColor duration-300 ease-in-out'>
                                <Link href='/drogownictwo'>
                                <a>Drogownictwo</a>
                                </Link>
                            </li>
                            <li className='flex justify-center p-2 text-white hover:text-secondaryColor duration-300 ease-in-out'>
                                <Link href='/kolejnictwo'>
                                <a>Kolejnictwo</a>
                                </Link>
                            </li>

                            <li className='flex justify-center p-2 text-white hover:text-secondaryColor duration-300 ease-in-out'>
                                <Link href='/wynajem-maszyn'>
                                <a>Wynajem maszyn</a>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className='pl-2 pr-2 ml-2 mr-2 link link-underline link-underline-red'>
                        <Link href='/nasze-realizacje'>
                        <a>Nasze realizacje</a>
                        </Link>
                    </li>

                    <li className='pl-2 pr-2 ml-2 mr-2 link link-underline link-underline-red'>
                        <Link href='/kontakt'>
                        <a>Kontakt</a>
                        </Link>
                    </li>
                </ul>

            </div>
        </>
    );
}
export default Menu;