import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FunkyTabs = ({ uniqueId, children, selectedIndex, onSelect }) =>
    <div className="funky-tabs">
        <ul className="funky-tabs__tabs" role="tablist">
            {children.map((element, index) =>
                <li
                    key={index}
                    className={classNames('funky-tabs__tab', {
                        'funky-tabs__tab--selected': (selectedIndex === index)
                    })}
                    id={`${uniqueId}-tab-${index}`}
                    role="tab"
                    aria-controls={`${uniqueId}-panel-${index}`}
                    aria-selected={selectedIndex === index}>
                    <a
                        className="funky-tabs__link"
                        href={element.props.url}
                        onClick={(e) => onSelect(e, index)}>
                        <img className="funky-tabs__tab-image" src={element.props.imagePath} />
                        <div className="funky-tabs__tab-text">
                            <span className="link">{element.props.heading}</span>
                        </div>
                    </a>
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

FunkyTabs.TabPanel = ({ index, uniqueId, isSelected, children }) =>
    <div
        className={classNames(
            'funky-tabs__panel',
            { 'funky-tabs__panel--selected': isSelected })}
        id={`${uniqueId}-panel-${index}`}
        aria-labelledby={`${uniqueId}-tab-${index}`}
        role="tabpanel">
        {children}
    </div>;

FunkyTabs.propTypes = {
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func
};

FunkyTabs.defaultProps = {
    selectedIndex: 0
};

export default FunkyTabs;