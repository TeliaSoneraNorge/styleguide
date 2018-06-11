import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 */
const Image = ({ children, className, src, alt, inline, ...rest }) => (
    <figure
        className={classnames('image', {
            [className]: className,
            [`image--inline-${inline}`]: inline
        })}>
        <img className="image__img" src={src} alt={alt} {...rest} />
        {children}
    </figure>
);

Image.propTypes = {
    inline: PropTypes.oneOf(['left', 'right'])
};

export default Image;