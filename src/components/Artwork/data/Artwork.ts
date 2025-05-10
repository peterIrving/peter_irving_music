import type { ImageMetadata } from 'astro';
import type { ArtworkOrientation } from './ArtworkOrientation';

export interface Artwork {
    id: string;
    title: string;
    description: string;
    image: ImageMetadata;
    orientation: ArtworkOrientation;
}


