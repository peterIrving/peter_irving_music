import type { Artwork } from './Artwork';

// Import images properly for Astro optimization
// import autumnLagoon from '../../../assets/images/artwork/autumn_lagoon.png';
import treeAlcoholMarker from '../../../assets/images/artwork/IMG_0066.jpeg';
import greenbeltShrubbery from '../../../assets/images/artwork/IMG_2927.jpeg';
import blueTree from '../../../assets/images/artwork/IMG_2930.jpeg';
// import sunsetCity from '../../../assets/images/artwork/sun sets behind the city.png';

export const artworks: Artwork[] = [
    // {
    //     id: '1',
    //     title: 'Autumn Lagoon',
    //     description: 'A serene landscape painting depicting a tranquil lagoon surrounded by autumn foliage.',
    //     image: autumnLagoon,
    // },
    {
        id: '2',
        title: 'Tree in alcohol marker',
        description: 'A vibrant artwork created using alcohol markers, showcasing a tree in full bloom.',
        image: treeAlcoholMarker,
    }
    , {
        id: '3',
        title: 'Greenbelt Shrubbery',
        description: 'A detailed painting of shrubbery in a greenbelt, capturing the essence of nature.',
        image: greenbeltShrubbery,
    },
    {
        id: '4',
        title: 'Blue Tree',
        description: 'A striking artwork featuring a blue tree, symbolizing tranquility and peace.',
        image: blueTree,
    },

    // {
    //     id: '6',
    //     title: 'Sun Sets Behind the City',
    //     description: 'A captivating cityscape painting depicting a sunset behind the skyline.',
    //     image: sunsetCity,
    // },
];