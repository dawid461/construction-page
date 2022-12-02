import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

const Card = (props) => {
    return (
        <>
            <Link href={props.linkToPage}>
                <a className='sm:w-64 lg:w-96 grid text-secondaryColor hover:text-whiteSmoke hover:bg-thirdColor
                duration-300 cursor-pointer'>
                    <Image
                        className='grid duration-500'
                        src={props.ImageUrl}
                        alt=''
                        layout='responsive'
                        width={500}
                        height={400}
                        objectFit='cover'
                    />
                    <div className='flex flex-col w-full justify-center items-center pt-5 pb-5'>
                        <h5 className='text-md font-normal'>{props.title}</h5>
                        <div className='w-10 border-primaryColor border-b-2 mt-1'/>
                    </div>
                </a>
            </Link>
        </>
    );
}
export default Card;