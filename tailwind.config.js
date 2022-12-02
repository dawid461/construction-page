module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-image': "url('/media/main-page/banner/banner.webp')",
        'image-architect': "url('/media/main-page/about-us/architect.webp')",
        'image-offer-1': "url('/media/main-page/offer/image-offer-1.webp')",
        'image-offer-2': "url('/media/main-page/offer/image-offer-2.webp')",
        'image-cranes':"url('/media/main-page/why-us/cranes.webp')",
        'image-man':"url('/media/main-page/why-us/man.webp')",
        'image-steelLine':"url('/media/main-page/our-projects/steel-line.webp')",
        'image-construction':"url('/media/main-page/our-projects/construction.webp')",
        'image-worker':"url('/media/main-page/our-projects/worker.webp')",
        'image-offer-page':"url('/media/offer-page/architect.webp')",
        'image-construction-page-1':"url('/media/construction-page/banner-crane.webp')",
        'image-construction-page-2':"url('/media/construction-page/human.webp')",
        'image-construction-page-3':"url('/media/construction-page/excavator.webp')",
        'image-construction-page-4':"url('/media/construction-page/house.webp')",
        'image-road-construction-page-1':"url('/media/road-construction-page/road-construction.webp')",
        'image-road-construction-page-2':"url('/media/road-construction-page/workers.webp')",
        'image-road-construction-page-3':"url('/media/road-construction-page/highway.webp')",
        'image-road-construction-page-4':"url('/media/road-construction-page/road.webp')",
        'image-railway-page-1':"url('/media/railways-page/tracks.webp')",
        'image-railway-page-2':"url('/media/railways-page/trainstation.webp')",
        'image-railway-page-3':"url('/media/railways-page/excavator.webp')",
        'image-railway-page-4':"url('/media/railways-page/bridge.webp')",
        'image-rental-page-1':"url('/media/rental-page/bulldozer.webp')",
        'image-rental-page-2':"url('/media/rental-page/truck.webp')",
        'image-rental-page-3':"url('/media/rental-page/excavator-rental.webp')",
        'image-contact-page':"url('/media/contact-page/buisness-man.webp')",
        'image-portfolio':"url('/media/our-projects/tower.webp')",
      },
    },
    screens: {
      'sm': '1px',
      // => @media (min-width: 300px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primaryColor: '#EA1616',
      secondaryColor:'#1D1D1D',
      thirdColor: '#272727',
      trueGray700: '#404040',
      trueGray800: '#262626',
      Gray800: '#27272A',
      Yellow:'#E3A817',
      goldSmoke:'#E8BD54',
      white: '#FFFFFF',
      whiteSmoke: '#FCFCFC',
      black: '#000000',
      colorOffer:'#C2C2C2',
      bgPhoto:'#444444',
      bg44444:'#444444',
      bgOurProjects:'#F5F5F5',
      footerColor:'#A9A9A9',
      footerSecondColor: '#6A6A6A',
      lightGrey:'#F2F2F2',
      contactForm: '#F9F9F9',
      colorFormBorder:'#161616',
    },
  },
  plugins: [],
}
