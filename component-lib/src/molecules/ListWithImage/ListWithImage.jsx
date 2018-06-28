import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const ListWithImage = ({ children, className, heading, src, alt, imagePosition = 'bottom', listPosition = 'left', hideImageForMobile, ...rest }) => (
    <div
        className={classnames('list-with-image', {
            [className]: className,
            'list-with-image--image-top': imagePosition === 'top',
            'list-with-image--list-right': listPosition === 'right',
            'list-with-image--hide-image-for-mobile': hideImageForMobile,
        })}
        {...rest}>
        <h3 className="heading heading--level-3 heading--pebble list-with-image__heading">{heading}</h3>
        <ul className="list-with-image__list list">
            {children}
        </ul>
        <img className="list-with-image__image" src={src} alt={alt} />
    </div>
);

ListWithImage.Item = ({ children, className, ...rest }) => (
    <li
        className={classnames('list__item', {
            [className]: className,
        })}
        {...rest}>
        {children}
    </li>
);

ListWithImage.Item.propTypes = {};

ListWithImage.propTypes = {
    /** ListWithImage.Item */
    children: PropTypes.node,
    heading: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    /** Position of the image on smaller devices. */
    imagePosition: PropTypes.oneOf(['top', 'bottom']),
    /** Position of the list. */
    listPosition: PropTypes.oneOf(['left', 'right']),
    /** Hides the image on smaller screens. */
    hideImageForMobile: PropTypes.bool,
};

export default ListWithImage;