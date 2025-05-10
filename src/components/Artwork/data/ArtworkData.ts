import type { Artwork } from './Artwork';
import treeAlcoholMarker from '../../../assets/images/artwork/IMG_0066.jpeg';
import greenbeltShrubbery from '../../../assets/images/artwork/IMG_2927.jpeg';
import blueTree from '../../../assets/images/artwork/IMG_2930.jpeg';
import autumnLagoon from '../../../assets/images/artwork/autumn-lagoon.jpg';
import milwaukeeSkylineSunset from '../../../assets/images/artwork/milwaukee-skyline-sunset.jpg';
import { ArtworkOrientation } from './ArtworkOrientation';

export const artworks: Artwork[] = [

    {
        id: '2',
        title: 'Tree in alcohol marker',
        description: 'A vibrant artwork created using alcohol markers, showcasing a tree in full bloom.',
        image: treeAlcoholMarker,
        orientation: ArtworkOrientation.VERTICAL,
    }
    , {
        id: '3',
        title: 'Greenbelt Shrubbery',
        description: 'A detailed painting of shrubbery in a greenbelt, capturing the essence of nature.',
        image: greenbeltShrubbery,
        orientation: ArtworkOrientation.VERTICAL,
    },
    {
        id: '4',
        title: 'Blue Tree',
        description: 'A striking artwork featuring a blue tree, symbolizing tranquility and peace.',
        image: blueTree,
        orientation: ArtworkOrientation.VERTICAL,
    },
    {
        id: '5',
        title: 'Autumn Lagoon',
        description: 'A serene landscape painting depicting a tranquil lagoon surrounded by autumn foliage.',
        image: autumnLagoon,
        orientation: ArtworkOrientation.HORIZONTAL,
    },
    {
        id: '6',
        title: 'Milwaukee Skyline Sunset',
        description: 'A breathtaking view of the Milwaukee skyline during sunset, capturing the city\'s beauty as the sun descends.',
        image: milwaukeeSkylineSunset,
        orientation: ArtworkOrientation.HORIZONTAL,
    }


];