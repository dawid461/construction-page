import Head from 'next/head';
import Navbar from "../../components/navbar/navbar";
import BannerPortfolio from "../../components/portfolio/banner/banner";
import Gallery from "../../components/portfolio/gallery/gallery";
import PortfolioContactUs from "../../components/portfolio/portfolio-contact-us/portfolio-contact-us";
import Footer from "../../components/footer/footer";

const SwimmingPoolZabkowice = () => {

    const ImagesZabkowice = [
        {id: 1, src: "/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-1.webp"},
        {id: 2, src: "/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-5.webp"},
        {id: 3, src: "/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-3.webp"},
        {id: 4, src: "/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-4.webp"},
        {id: 5, src: "/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-2.webp"},
        {id: 6, src: "/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-6.webp"},
    ];

    return (
        <>
            <Head>
                <title>Park wodny w Ząbkowicach Śląskich</title>
                <meta name="description"
                      content="Zajmujemy się szeroko rozumianym budownictwem, kolejnictwem oraz drogownictwem.
                      Jesteśmy innowacyjną grupą stawiającą sobie jak najwyższe poprzeczki, przez co ciągle się
                      rozwijamy i potrafimy spełnić każde oczekiwania klientów."/>
                <meta name="robots" content="follow"/>
                <meta charset="utf-8"/>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title"
                      content="Budownictwo pod klucz, szybki termin realizacji i wysoka jakość wykonania."/>
                <meta property="og:site_name" content="Grupa Fewaterm"/>
                <meta property="og:url" content="#"/>
                <meta property="og:description"
                      content="Zajmujemy się szeroko rozumianym budownictwem, kolejnictwem oraz drogownictwem.
                      Jesteśmy innowacyjną grupą stawiającą sobie jak najwyższe poprzeczki, przez co ciągle się
                      rozwijamy i potrafimy spełnić każde oczekiwania klientów."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="#"></meta>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap"
                      rel="stylesheet"/>
            </Head>

            <nav className='flex flex-col w-full items-center bg-white'>
                <Navbar/>
            </nav>

            <main className='flex flex-col w-full items-center'>
                <BannerPortfolio
                    heading='Park wodny w Ząbkowicach Śląskich'
                    location='57-200 Ząbkowice Śląskie'
                    client='Gmina Ząbkowice Śląskie'
                />
                <Gallery Images={ImagesZabkowice}/>
                <PortfolioContactUs/>
            </main>

            <footer className='flex flex-col w-full items-center bg-secondaryColor'>
                <Footer/>
            </footer>

        </>
    );
}
export default SwimmingPoolZabkowice;