import Card from "./components/Card";

const PortfolioItems = [
    {
        id: 1,
        title: 'Blok mieszkalny Gliwice',
        link: '/nasze-realizacje/blok-mieszkalny-w-gliwicach',
        photoSrc: '/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-1.webp'
    },
    {
        id: 2,
        title: 'Park wodny Ząbkowice Śląskie',
        link: '/nasze-realizacje/park-wodny-w-zabkowicach-slaskich',
        photoSrc: '/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-5.webp'
    },
    {
        id: 3,
        title: 'Blok mieszkalny Nowy Targ',
        link: '/nasze-realizacje/blok-mieszkalny-w-nowym-targu',
        photoSrc: '/media/our-projects/portfolio/nowy-targ-block-of-flat/nowy-targ-block-of-flat-3.webp'
    },
    {
        id: 4,
        title: 'Linia kolejowa Kraków-Medyka',
        link: '/nasze-realizacje/roboty-budowlane-na-lini-kolejowej-krakow-medyka',
        photoSrc: '/media/our-projects/portfolio/krakow-medyka-building-tracks/krakow-medyka-building-tracks-4.webp'
    },
    {
        id: 5,
        title: 'Basen Głuchołazy',
        link: '/nasze-realizacje/basen-w-glucholazach',
        photoSrc: '/media/our-projects/portfolio/glucholazy-swimming-pool/glucholazy-swimming-pool-1.webp'
    },
    {
        id: 6,
        title: 'Linia kolejowa Stróże ',
        link: '/nasze-realizacje/modernizacja-linii-kolejowej-numer-108-stroze',
        photoSrc: '/media/our-projects/portfolio/stroze-building-tracks/stroze-building-tracks-4.webp'
    },
    {
        id: 7,
        title: 'Szpital',
        link: '/nasze-realizacje/szpital',
        photoSrc: '/media/our-projects/portfolio/hospital/hospital-6.webp'
    },
    {
        id: 8,
        title: 'Hala sportowa Szczawno-Zdrój',
        link: '/nasze-realizacje/hala-sportowa-w-szczawnie-zdroj',
        photoSrc: '/media/our-projects/portfolio/szczawno-zdroj-sports-hall/szczawno-zdroj-sports-hall-5.webp'
    },
    {
        id: 9,
        title: 'Sieć wodociągowa Nowy Sącz',
        link: '/nasze-realizacje/budowa-sieci-wodociagowej-i-kanalizacyjnej-w-nowym-saczu',
        photoSrc: '/media/our-projects/portfolio/nowy-sacz-waterworks/nowy-sacz-waterworks-2.webp'
    },
    {
        id: 10,
        title: 'Zabudowa szeregowa Brzozówka',
        link: '/nasze-realizacje/zabudowa-szeregowa-w-brzozowce',
        photoSrc: '/media/our-projects/portfolio/brzozowka-houses/brzozowka-houses-2.webp'
    },
    {
        id: 11,
        title: 'Blok mieszkalny w Tarnowie',
        link: '/nasze-realizacje/blok-mieszkalny-w-tarnowie',
        photoSrc: '/media/our-projects/portfolio/wieniawskiego-block-of-flats/wieniawskiego-block-of-flats-2.webp'
    },
    {
        id: 12,
        title: 'Basen Żmigród',
        link: '/nasze-realizacje/basen-w-zmigrodzie',
        photoSrc: '/media/our-projects/portfolio/zmigrod-swimming-pool/zmigrod-swimming-pool-2.webp'
    },
    {
        id: 13,
        title: 'Basen Świebodzice',
        link: '/nasze-realizacje/basen-w-swiebodzicach',
        photoSrc: '/media/our-projects/portfolio/swiebodzice-swimming pool/swiebodzice-swimming-pool-1.webp'
    },
    {
        id: 14,
        title: 'Basen Piwniczna-Zdrój',
        link: '/nasze-realizacje/basen-w-piwnicznej-zdroj',
        photoSrc: '/media/our-projects/portfolio/piwniczna-zdroj-swimming-pool/piwniczna-zdroj-swimming-pool-9.webp'
    },
    {
        id: 15,
        title: 'Basen Radzyń-Podlaski',
        link: '/nasze-realizacje/basen-w-radzyniu-podlaskim',
        photoSrc: '/media/our-projects/portfolio/radzyn-podlaski-swimming-pool/radzyn-podlaski swimming-pool-1.webp'
    },
    {
        id: 16,
        title: 'Miejski dom sportu Tarnów',
        link: '/nasze-realizacje/miejski-dom-sportu-w-tarnowie',
        photoSrc: '/media/our-projects/portfolio/tarnow-public-house-of-sport/tarnow-public-house-of-sport-7.webp'
    },
    {
        id: 17,
        title: 'Szkoła Lipnica Mała',
        link: '/nasze-realizacje/szkola-w-lipnicy-malej',
        photoSrc: '/media/our-projects/portfolio/lipnica-mala-school/lipnica-mala-school-2.webp'
    },
    {
        id: 18,
        title: 'Basen Czarna',
        link: '/nasze-realizacje/basen-w-czarnej',
        photoSrc: '/media/our-projects/portfolio/czarna-swimming-pool/czarna-swimming-pool-2.webp'
    },
    {
        id: 19,
        title: 'Szkoła Bukowice',
        link: '/nasze-realizacje/rozbudowa-szkoly-w-bukowicach',
        photoSrc: '/media/our-projects/portfolio/bukowice-school/bukowice-school-8.webp'
    },
    {
        id: 20,
        title: 'Szkoła Gromnik',
        link: '/nasze-realizacje/hala-sportowa-i-szkola-w-gromniku',
        photoSrc: '/media/our-projects/portfolio/gromnik-school/gromnik-school-2.webp'
    },
    {
        id: 21,
        title: 'Przedszkole Zawiercie',
        link: '/nasze-realizacje/przedszkole-w-zawierciu',
        photoSrc: '/media/our-projects/portfolio/zawiercie-school/zawiercie-school-1.webp'
    },
    {
        id: 22,
        title: 'Szkoła Tuchów',
        link: '/nasze-realizacje/rozbudowa-i-przebudowa-szkoly-w-tuchowie',
        photoSrc: '/media/our-projects/portfolio/tuchow-school/tuchow-school-2.webp'
    },
    {
        id: 23,
        title: 'Szkoła Karwodrza',
        link: '/nasze-realizacje/remont-szkoly-w-karwodrzy',
        photoSrc: '/media/our-projects/portfolio/karwodrza-school/karwodrza-school.webp'
    },
    {
        id: 24,
        title: 'Wieża widokowa Jodłówka Tuchowska',
        link: '/nasze-realizacje/wieza-widokowa-w-jodlowce-tuchowskiej',
        photoSrc: '/media/our-projects/portfolio/jodlowka-tuchowska-tower/jodlowka-tuchowska-tower.webp'
    }
]

const Portfolio = () => {
    return (
        <>
            <div className='sm:w-11/12 xl:w-10/12 max-w-screen-2xl flex flex-col sm:mt-20 lg:mt-10 mb-24'
                 id='sprawdz-portfolio'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5
                justify-items-center content-center'>

                    {PortfolioItems.map(item => (
                        <Card key={item.id}
                              title={item.title}
                              linkToPage={item.link}
                              ImageUrl={item.photoSrc}
                        />
                    ))}

                </div>
            </div>
        </>
    );
}
export default Portfolio;