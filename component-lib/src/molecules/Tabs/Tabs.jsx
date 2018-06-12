import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Tabs = ({ uniqueId, children, selectedIndex, onSelect }) =>
    <div className="tabs">
        <ul className="tabs__list" role="tablist">
            {children.map((element, index) =>
                <li
                    key={index}
                    className={classnames(
                        'tabs__list-item',
                        { 'tabs__list-item--selected': (selectedIndex === index) })}
                    id={`${uniqueId}-tab-${index}`}
                    role="tab"
                    aria-controls={`${uniqueId}-panel-${index}`}
                    aria-selected={selectedIndex === index}>
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

Tabs.TabPanel = ({ index, uniqueId, isSelected, children }) =>
    <div
        className={classnames(
            'tabs__content',
            { 'tabs__content--selected': isSelected })}
        id={`${uniqueId}-panel-${index}`}
        aria-labelledby={`${uniqueId}-tab-${index}`}
        role="tabpanel">
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