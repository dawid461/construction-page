import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import BannerConstruction from "../components/offer-pages/construction-page/banner/banner";
import WhyUs from "../components/offer-pages/construction-page/why-us/why-us";
import Footer from "../components/footer/footer";
import WhatWeDo from "../components/offer-pages/construction-page/what-we-do/what-we-do";
import ContactUs from "../components/offer-pages/universal-components/contactUs/contact-us";

const Budownictwo = () => {
    return (
        <>
            <Head>
                <title>Grupa Fewaterm</title>
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
                <script src="https://www.google.com/recaptcha/api.js"
                        async
                        defer
                ></script>

            </Head>

            <nav className='flex flex-col w-full items-center bg-white'>
                <Navbar/>
            </nav>

            <main className='flex flex-col w-full items-center'>
                <BannerConstruction/>
                <WhyUs/>
                <WhatWeDo/>
                <ContactUs text='W zależności od skali trudności wykonawstwa inwestycji, zadania remontowego,
                 czy określonej adaptacji obiektu, przyjmujemy zawsze na siebie odpowiedzialność za cały
                 zakres zadań oraz ustalamy dla niego gwarancje.'
                />
            </main>

            <footer className='flex flex-col w-full items-center bg-secondaryColor'>
                <Footer/>
            </footer>

        </>
    );
}
export default Budownictwo;