import * as React from 'react';

declare interface VideoProps {
  src?: string;
  allowFullScreen?: boolean;
  img?: string;
  description?: string;
  videoTitle?: string;
  autoplay?: boolean;
  onClick?: () => void;
}

declare const Video: React.FC<VideoProps>;

export default Video;
