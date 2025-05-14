export enum VideoType {
    Originals = "Originals",
    Traditional = "Traditional",
}

export interface MusicVideo {
    name: string; // plan name
    description: string; // plan description
    videoURL: string; // video URL
    vertical: boolean; // optional property to indicate vertical video
    videoType: VideoType; // optional property to indicate video type
}


// This is designed for 3 pricing items, but can be modified to support more
export const videoData: MusicVideo[] = [
    {
        name: "The Blackest Crow",
        description: "Played on a gourd banjo from gourdbanjosbybarry.com",
        videoURL: "https://www.youtube.com/embed/JfXgfRpcCzg?si=EFXAF87rCia9242t",
        vertical: true,
        videoType: VideoType.Traditional,
    },
    {
        name: "Angeline the Baker",
        description: "with the five piece band",
        videoURL: "https://www.youtube.com/embed/S9tJVVt5GPc",
        vertical: true,
        videoType: VideoType.Traditional,

    },
    // greasy coat 
    {
        name: "Greasy Coat",
        description: "A song about a greasy coat",
        videoURL: "https://www.youtube.com/embed/zZEJXJgDxjw",
        vertical: true,
        videoType: VideoType.Traditional,
    },
    {
        name: "Creel of Turf",
        description: "A basket of grass in irish vernacular",
        videoURL: "https://www.youtube.com/embed/5qXdwW-d6bM",
        vertical: true,
        videoType: VideoType.Traditional,

    },

    {
        name: "Tattered Blinds",
        description: "Inspired by the likes of Hank Williams and Watchhouse (Mandolin Orange)",
        videoURL: "https://www.youtube.com/embed/dYXIs1S_lPU",
        vertical: false,
        videoType: VideoType.Originals,
    },
    {
        name: "Lilacs in the Spring",
        description: "A waltz about taking chances, loss and growth",
        videoURL: "https://www.youtube.com/embed/CLNVRkpKI1s",
        vertical: false,
        videoType: VideoType.Originals,
    },
    {
        name: "Hamster Wheel",
        description: "A ragtime song of sorts about the challenges of excessive introversion",
        videoURL: "https://www.youtube.com/embed/MNIcTCC2R9Y",
        vertical: false,
        videoType: VideoType.Originals,
    },
];