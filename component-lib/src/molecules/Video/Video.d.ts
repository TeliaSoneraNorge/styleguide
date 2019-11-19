import * as React from 'react';

export interface VideoProps {
    src?: string;
    allowFullScreen?: boolean;
    img?: string;
    description?: string;
    videoTitle?: string;
    autoplay?: boolean;
}

const Video: React.FC<VideoProps>;

export default Video;
