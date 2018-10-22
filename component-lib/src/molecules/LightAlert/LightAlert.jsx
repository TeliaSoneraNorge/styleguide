import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import Heading from '../../atoms/Heading/Heading';

/**
 * Status: *in progress*.
 */
const LightAlert = ({
    title,
    children,
    className,
}) => (
    <div
        className={classnames('light-alert', {
            [className]: className,
        })}
        role="alert">
        <div className="light-alert__content">
            <div className="light-alert__header-container">
                <Heading level="2" text={title} />
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
    children: PropTypes.node
};

export default LightAlert;
