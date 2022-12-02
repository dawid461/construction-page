import InfoCard from "./components/info-card";
import ImageInfo from "./components/image";

const Informations = () => {
    return (
        <>
            <div className='flex sm:w-11/12 xl:w-9/12 max-w-screen-2xl sm:flex-col-reverse lg:flex-row items-center
            justify-center mt-2 mb-20'>

                <div className='flex sm:w-full lg:w-8/12 flex-col'>
                    <div className='flex sm:w-full 2xl:w-10/12 sm:flex-col md:flex-row justify-center items-center
                    lg:mb-10'>
                        <InfoCard iconUrl='/media/contact-page/paper.svg' title='Dane firmy'
                                  description1='Grupa Fewaterm Sp. z o.o. s.k.'
                                  description2='Nip: 873 32 60 480'
                                  description3='Regon: 365 639 630'
                                  delayTime='0.2'
                        />

                        <InfoCard iconUrl='/media/contact-page/location.svg' title='Siedziba firmy'
                                  description1='ul. Krynicka 4'
                                  description2='33-180 Gromnik'
                                  delayTime='0.4'
                        />
                    </div>

                    <div className='flex sm:w-full 2xl:w-10/12 sm:flex-col md:flex-row justify-center items-center'>
                        <InfoCard iconUrl='/media/contact-page/phone.svg' title='Telefon'
                                  description1='+48 14 65 14 369'
                                  delayTime='0.6'
                        />

                        <InfoCard iconUrl='/media/contact-page/watch.svg' title='Godziny pracy'
                                  description1='Pon - Pt: 8.00 - 16.00'
                                  delayTime='0.8'
                        />
                    </div>
                </div>


                <div className='flex sm:w-full lg:w-4/12 flex-col sm:items-center lg:items-start justify-center sm:mt-10
                lg:mt-0'>
                    <ImageInfo/>
                </div>

            </div>
        </>
    );
}
export default Informations;