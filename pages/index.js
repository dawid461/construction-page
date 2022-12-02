import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar/navbar';
import Banner from '../components/main-page/banner/banner';
import AboutUs from "../components/main-page/about-us/about-us";
import Offer from "../components/main-page/offer/offer";
import Seperator from "../components/main-page/seperator/seperator";
import WhyUs from "../components/main-page/why-us/why-us";
import OurProjects from "../components/main-page/our-projects/our-projects";
import ContactUs from "../components/contactUs/contact-us";
import Footer from "../components/footer/footer";

const Home = () => {
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
                <Banner/>
                <AboutUs/>
                <Offer/>
                <OurProjects/>
                <Seperator/>
                <WhyUs/>

                <ContactUs/>
            </main>

            <footer className='flex flex-col w-full items-center bg-secondaryColor'>
                <Footer/>
            </footer>

        </>
    );
}
export default Home;