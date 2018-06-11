import React from 'react';
import classnames from 'classnames';
import HorizontalRule from '../../atoms/HorizontalRule/HorizontalRule';

/**
 * Status: *in progress*
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
ImageHeadingLink.Small = ({ children, className, ...rest }) => (
    <span
        className={classnames('image-heading-link__heading--small', {
            [className]: className,
        })}
        {...rest}>
        {children}
    </span>
);

export default ImageHeadingLink;