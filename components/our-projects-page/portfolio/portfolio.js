import Card from "./components/Card";

const PortfolioItems = [
    {
        id: 1,
        title: 'Blok mieszkalny w Gliwicach',
        link: '/nasze-realizacje/blok-mieszkalny-w-gliwicach',
        photoSrc: '/media/our-projects/portfolio/gliwice-block-of-flats/gliwice-block-of-flats-1.webp'
    },
    {
        id: 2,
        title: 'Park wodny w Ząbkowicach Śląskich',
        link: '/nasze-realizacje/park-wodny-w-zabkowicach-slaskich',
        photoSrc: '/media/our-projects/portfolio/zabkowice-slaskie-swimming-pool/zabkowice-slaskie-swimming-pool-5.webp'
    },
    {
        id: 3,
        title: 'Blok mieszkalny w Nowym Targu',
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
        title: 'Basen w Głuchołazach',
        link: '/nasze-realizacje/basen-w-glucholazach',
        photoSrc: '/media/our-projects/portfolio/glucholazy-swimming-pool/glucholazy-swimming-pool-1.webp'
    },
    {
        id: 6,
        title: 'Modernizacja lini kolejowej Stróże ',
        link: '/nasze-realizacje/modernizacja-linii-kolejowej-numer-108-stroze',
        photoSrc: '/media/our-projects/portfolio/glucholazy-swimming-pool/glucholazy-swimming-pool-1.webp'
    },
]

const Portfolio = () => {
    return (
        <>
            <div className='sm:w-11/12 xl:w-10/12 max-w-screen-2xl flex flex-col sm:mt-20 lg:mt-10 mb-24'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5
                justify-items-center content-center'>

                    {PortfolioItems.map(item => (
                        <Card   key={item.id}
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