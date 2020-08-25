import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon';

type Props = {
    src?: string;
    allowFullScreen?: boolean;
    img?: string;
    description?: string;
    videoTitle?: string;
    autoplay?: boolean;
};

/**
 * Status: *finished*
 * Category: ImageAndVideo
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const Video = ({ className, src, allowFullScreen, img, description, videoTitle, autoplay, ...rest }: Props) => (
  <div
    className={classnames('video', {
      [className]: className,
      'video--with-custom-thumbnail': img,
    })}
    {...rest}
  >
    <div className="video__iframe-wrapper">
      {img && !autoplay && (
        <div className="video__custom_details">
          <img src={img} alt="" className="video__thumbnail" />
          <div className="video__details">
            <SvgIcon className="video__icon" iconName="ico_video_play" color="white" />
            <h2 className="video__title">{description}</h2>
          </div>
        </div>
      )}
      <iframe
        src={src + (autoplay ? '?rel=0&autoplay=1' : '')}
        className="video__iframe"
        allowFullScreen={allowFullScreen}
        title={videoTitle}
      />
    </div>
    {!img && <div className="caption">{description}</div>}
  </div>
);

export default Video;
