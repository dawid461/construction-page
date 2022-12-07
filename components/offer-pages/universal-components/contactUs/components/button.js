import Link from "next/link";

const Button = () => {
    return (
        <>
            <div className='flex flex-col sm:justify-center lg:justify-end sm:items-center lg:items-start'>
                <Link href='/nasze-realizacje'>
                    <a href="#" className="cursor-pointer flex items-center w-60 h-16 border border-px px-9 hover:px-3
                hover:border-none duration-500 justify-between border-white text-white font-light tracking-wider
                stroke-white hover:stroke-black hover:bg-white hover:text-black uppercase">
                        Napisz do nas
                        <div className="h-6 w-6 block">
                            <svg viewBox="0 0 64 64" fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="transform rotate-90 stroke-2 stroke-current">
                                <path d="M32 58.667V5.333M21.333 16L32 5.333 42.667 16"></path>
                            </svg>
                        </div>
                    </a>
                </Link>
            </div>
        </>
    );
}
export default Button;