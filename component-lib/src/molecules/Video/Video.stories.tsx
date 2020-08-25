import React, { useState } from 'react';
import { Video } from '../../index';

export default {
  title: 'Component library/Molecules/Video',
  component: Video,
};

export const Default = () => (
  <Video
    src="https://www.youtube.com/embed/-yWZdilQQnk"
    description="Videotext here"
    videoTitle="A random video"
  ></Video>
);


export const VideoWithCustomThumbnail = () => {
  const [autoplay, setAutoplay] = useState(false);

  const handleClick = () => setAutoplay(true)
  
  return (
    <Video
      autoplay={autoplay}
      img="https://images.pexels.com/photos/210647/pexels-photo-210647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      src="https://www.youtube.com/embed/-yWZdilQQnk"
      description="Videotext here"
      videoTitle="A random video"
      // @ts-expect-error ts-migrate(2322) FIXME: Property 'onClick' does not exist on type 'Intrins... Remove this comment to see the full error message
      onClick={handleClick}
    ></Video>
  );
}
