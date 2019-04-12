import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import Heading from '../../atoms/Heading/Heading';

/**
 * Status: *in progress*.
 * Category: Notifications
 */
const LightAlert = ({
    title,
    children,
    className,
    noMargin,
}) => (
    <div
        className={classnames('light-alert', {
            'light-alert--no-margin': noMargin,
            [className]: className,
        })}
        role="alert">
        <div className="light-alert__content">
            <div className="light-alert__header-container">
                <Heading level="2" text={title} className="light-alert__heading" />
                <SvgIcon iconName="ico_info" color="black" className="light-alert__icon" role="presentation" alt="" />
            </div>
            <div className="light-alert__text-container">
                {children}
            </div>
        </div>
    </div>
);

LightAlert.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    noMargin: PropTypes.bool,
    children: PropTypes.node
};

export default LightAlert;
