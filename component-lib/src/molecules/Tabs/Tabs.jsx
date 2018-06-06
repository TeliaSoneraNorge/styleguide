import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import TabHeading from './TabHeading';

const Tabs = ({ children, selectedIndex, onSelect }) =>
    <div className="tabs">
        <ul className="tabs__list">
            {children.map((element, index) =>
                <TabHeading
                    key={index}
                    index={index}
                    isSelected={selectedIndex === index}
                    heading={element.props.heading}
                    onSelect={onSelect} />
            )}
            <span className="tabs__underline">
            </span>
        </ul>
        {children.map((element, index) =>
            React.cloneElement(element, { key: index, index, isSelected: index === selectedIndex }))}
    </div>;

Tabs.propTypes = {
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
};

Tabs.defaultProps = {
    selectedIndex: 0
};

export default Tabs;