import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon';

/**
 * Status: *finished*
 * Category: ImageAndVideo
 */
const Video = ({ className, src, allowFullScreen, img, description, videoTitle, autoplay, ...rest }) => (
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

Video.propTypes = {
  src: PropTypes.string,
  allowFullScreen: PropTypes.bool,
  img: PropTypes.string,
  description: PropTypes.string,
  videoTitle: PropTypes.string,
  autoplay: PropTypes.bool,
};

export default Video;
