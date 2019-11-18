import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import HorizontalRule from '../../atoms/HorizontalRule/HorizontalRule';

/**
 * Status: *in progress*
 * Category: ImageAndVideo
 */
const ImageHeadingLink = ({ children, className, src, alt, ...rest }) => (
    <a
        className={classnames('image-heading-link heading-link', {
            [className]: className,
        })}
        {...rest}>
        <img className="image-heading-link__image" src={src} alt={alt} />
        <div className="image-heading-link__box heading-link--focus-area">
            <h2 className="image-heading-link__heading">
                {children}
            </h2>
            <HorizontalRule short />
        </div>
    </a>
);
const Small = ({ children, className, ...rest }) => (
    <span
        className={classnames('image-heading-link__heading--small', {
            [className]: className,
        })}
        {...rest}>
        {children}
    </span>
);
ImageHeadingLink.Small = Small

ImageHeadingLink.propTypes = {
    children: PropTypes.node,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
};

export default ImageHeadingLink;