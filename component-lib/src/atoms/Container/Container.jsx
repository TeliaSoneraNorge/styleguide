import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *in progress*
 *
 * There are three main container widths: small, medium and large. Body text, such as this one, should be in a small container to reduce line width and make reading easier.
 */
const Container = ({ children, className, size, noMargin, noPadding, noPaddingTop, extraPaddingTop, extraMarginBottom,
    whiteBg, overlappingFullWidthImage, ...rest }) => (
    <div
        className={classnames('container', {
            [className]: className,
            [`container--${size}`]: size,
            'container--no-margin': noMargin,
            'container--no-padding': noPadding,
            'container--no-padding-top': noPaddingTop,
            'container--extra-padding-top': extraPaddingTop,
            'container--extra-margin-bottom': extraMarginBottom,
            'container--white-bg': whiteBg,
            'container--overlapping-full-width-image': overlappingFullWidthImage,
        })}
        {...rest}>
        {children}
    </div>
);

Container.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    noMargin: PropTypes.bool,
    noPadding: PropTypes.bool,
    noPaddingTop: PropTypes.bool,
    extraPaddingTop: PropTypes.bool,
    extraMarginBottom: PropTypes.bool,
    whiteBg: PropTypes.bool,
    overlappingFullWidthImage: PropTypes.bool,
};

export default Container;