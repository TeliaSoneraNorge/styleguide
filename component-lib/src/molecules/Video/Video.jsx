import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const Video = ({ children, className, src, allowFullScreen, ...rest }) => (
    <div
        className={classnames('video', {
            [className]: className,
        })}
        {...rest}>
        <div className="video__iframe-wrapper">
            <iframe
                src={src}
                className="video__iframe"
                allowFullScreen={allowFullScreen} />
        </div>
        {children}
    </div>
);

Video.propTypes = {
    src: PropTypes.string,
    allowFullScreen: PropTypes.bool,
};

export default Video;