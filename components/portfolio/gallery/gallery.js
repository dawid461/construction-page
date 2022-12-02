import {motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";


const Gallery = (props) => {

    const GalleryImagesUrl = props.Images;

    const [model, setModel] = useState(false);
    const [tempingSrc, setTempImgSrc] = useState('');


    const getImg = (src) => {
        setTempImgSrc(src);
        setModel(true);
    }


    return (
        <>
            <div className='sm:w-11/12 xl:w-10/12 max-w-screen-2xl flex flex-col sm:mt-20 lg:mt-10 mb-24'>

                <div className={model? "model open" : "model"}>
                    <img src={tempingSrc} alt=""/>
                    <button className='close-button-gallery' onClick={()=>setModel(false)}>X</button>
                    <button className='left-button'> &larr; </button>
                    <button className='right-button'> &rarr; </button>
                </div>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10
                justify-items-center content-center'>

                    {GalleryImagesUrl.map(item => (
                        <motion.a transition={{duration: 1, ease: "easeOut",}}
                                  initial={{opacity: 0}}
                                  whileInView={{opacity: 1}}
                                  viewport={{once: true}}
                                  key={item.id}
                                  onClick={()=>getImg(item.src)}
                                  className='w-full sm:h-52 xl:h-80 2xl:h-96 grid bg-secondaryColor duration-500
                                  cursor-pointer'>

                            <Image
                                className='grid duration-500 hover:opacity-70'
                                src={item.src}
                                alt=''
                                layout='responsive'
                                width={500}
                                height={400}
                                objectFit='cover'
                            />
                        </motion.a>
                    ))}
                </div>

            </div>
        </>
    );
}
export default Gallery;