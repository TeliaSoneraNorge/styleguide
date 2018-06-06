import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _ from 'lodash';

/**
 * Status: *finished*.
 */
const IconLink = ({ className, kind, ...rest }) => (
    <a
        className={classnames('icon-link', {
            [className]: className,
            [`icon-link--${kind}`]: kind,
        })}
        aria-label={_.upperFirst(kind)}
        {...rest}>
    </a>
);

IconLink.propTypes = {
    /** One of 'download', 'linkedIn' or 'twitter'. */
    kind: PropTypes.oneOf(['download', 'linkedIn', 'twitter']),
};

export default IconLink;