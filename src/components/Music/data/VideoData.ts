
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
        description: "An engaging music video with stunning visuals.",
        videoURL: "https://www.youtube.com/embed/JfXgfRpcCzg?si=EFXAF87rCia9242t",
        vertical: false,
        videoType: VideoType.Traditional,
    },
    {
        name: "Angeline the Baker",
        description: "A beautiful music video showcasing the artist's talent.",
        videoURL: "https://www.youtube.com/embed/S9tJVVt5GPc",
        vertical: false,
        videoType: VideoType.Traditional,

    },
    {
        name: "Creel of Turf",
        description: "A basket of grass in irish vernacular",
        videoURL: "https://www.youtube.com/embed/5qXdwW-d6bM",
        vertical: false,
        videoType: VideoType.Traditional,

    }

];