import Head from 'next/head';
import Navbar from "../../components/navbar/navbar";
import BannerPortfolio from "../../components/portfolio/banner/banner";
import Gallery from "../../components/portfolio/gallery/gallery";
import PortfolioContactUs from "../../components/portfolio/portfolio-contact-us/portfolio-contact-us";
import Footer from "../../components/footer/footer";

const BlockOfFlatsInGliwice = () => {

    const Images = [
        {id:1, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-1.webp"},
        {id:2, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-2.webp"},
        {id:3, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-3.webp"},
        {id:4, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-4.webp"},
        {id:5, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-5.webp"},
        {id:6, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-6.webp"},
        {id:7, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-7.webp"},
        {id:8, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-8.webp"},
        {id:9, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-9.webp"},
        {id:10, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-10.webp"},
        {id:11, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-11.webp"},
        {id:12, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-12.webp"},
        {id:13, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-13.webp"},
        {id:14, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-14.webp"},
        {id:15, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-15.webp"},
        {id:16, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-16.webp"},
        {id:17, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-17.webp"},
        {id:18, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-18.webp"},
        {id:19, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-19.webp"},
        {id:20, src:"/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-20.webp"},
    ];

    return (
        <>
            <Head>
                <title>Blok mieszkalny w Gliwicach</title>
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
                    heading='Blok mieszkalny w Gliwicach'
                    location='44-100 Gliwice'
                    client='AB Development sp. z o.o.'/>
                <Gallery Images={Images}/>
                <PortfolioContactUs/>
            </main>

            <footer className='flex flex-col w-full items-center bg-secondaryColor'>
                <Footer/>
            </footer>

        </>
    );
}
export default BlockOfFlatsInGliwice;