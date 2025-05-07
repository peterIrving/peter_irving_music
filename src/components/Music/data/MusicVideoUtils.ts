import { videoData, VideoType } from "./VideoData";

export function getVideosForVideoType(videoType: VideoType) {
    return videoData.filter((video) => video.videoType === videoType);
}