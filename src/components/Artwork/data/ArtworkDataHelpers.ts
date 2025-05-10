import type { Artwork } from './Artwork';
import { artworks } from './ArtworkData';
import { ArtworkOrientation } from './ArtworkOrientation';

/**
 * Filters artworks by their orientation
 * @param orientation - The orientation to filter by (vertical or horizontal)
 * @returns An array of artworks matching the specified orientation
 */
export function getArtworksByOrientation(orientation: ArtworkOrientation): Artwork[] {

    return artworks.filter(artwork =>
        artwork.orientation === orientation
    );

}

/**
 * Gets all available artworks
 * @returns An array of all artworks
 */
export function getAllArtworks(): Artwork[] {
    return artworks;
}
