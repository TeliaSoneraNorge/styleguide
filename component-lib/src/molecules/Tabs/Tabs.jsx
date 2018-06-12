import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ uniqueId, children, selectedIndex, onSelect }) =>
    <div className="tabs">
        <ul className="tabs__list">
            {children.map((element, index) =>
                <li
                    key={index}
                    id={`${uniqueId}-tab-${index}`}
                    className={classnames(
                        'tabs__list-item',
                        { 'tabs__list-item--selected': (selectedIndex === index) })}>
                    <button
                        onClick={() => onSelect(index)}
                        tabIndex="0"
                        className="link tabs__button">
                        {element.props.heading}
                    </button>
                </li>
            )}
        </ul>
        {children.map((element, index) =>
            React.cloneElement(element, {
                key: index,
                index,
                uniqueId,
                isSelected: (index === selectedIndex)
            }))}
    </div>;

Tabs.TabElement = ({ index, uniqueId, isSelected, children }) =>
    <div
        className={classnames(
            'tabs__content',
            { 'tabs__content--selected': isSelected })}
        aria-labelledby={`${uniqueId}-tab-${index}`}>
        {children}
    </div>;

Tabs.propTypes = {
    uniqueId: PropTypes.string,
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
};

Tabs.defaultProps = {
    selectedIndex: 0
};

export default Tabs;