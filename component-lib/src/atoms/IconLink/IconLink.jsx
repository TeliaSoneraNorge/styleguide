import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import upperFirst from 'lodash/upperFirst';

/**
 * Status: *finished*.
 */
const IconLink = ({ className, iconName, ...rest }) => (
    <a
        className={classnames('icon-link', {
            [className]: className,
        })}
        aria-label={upperFirst(iconName)}
        {...rest}>
        <SvgIcon iconName={iconName} color="black" className="icon-link__icon" />
    </a>
);

IconLink.propTypes = {
    /** One of 'download', 'linkedIn' or 'twitter'. */
    iconName: PropTypes.oneOf(['ico_download', 'linkedin_icon', 'twitter_icon']),
};

export default IconLink;