import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TabElement = ({ children, isSelected }) =>
    <div className={classnames(
        'tabs__content',
        { 'tabs__content--selected': isSelected })}>
        {children}
    </div>;

TabElement.propTypes = {
    isSelected: PropTypes.bool,
    heading: PropTypes.string
};

export default TabElement;