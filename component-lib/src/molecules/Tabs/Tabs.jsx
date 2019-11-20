import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Status: *finished*
 * Category: Tabs
 */
const Tabs = ({ uniqueId, children, selectedIndex, onSelect, skipPanelRendering, noMargin, compact }) => (
  <div
    className={classnames('tabs', {
      'tabs--no-margin': noMargin,
      'tabs--compact': compact,
    })}
  >
    <Tabs.TabList selectedIndex={selectedIndex} uniqueId={uniqueId} onSelect={onSelect}>
      {children}
    </Tabs.TabList>

    {!skipPanelRendering && (
      <Tabs.TabPanels selectedIndex={selectedIndex} uniqueId={uniqueId}>
        {children}
      </Tabs.TabPanels>
    )}
  </div>
);

const TabList = ({ children, selectedIndex, uniqueId, onSelect }) => (
  <ul className="tabs__list" role="tablist">
    {children.map((element, index) => (
      <Tabs.Tab
        key={element.props.heading}
        index={index}
        selectedIndex={selectedIndex}
        uniqueId={uniqueId}
        heading={element.props.heading}
        onSelect={onSelect}
      />
    ))}
  </ul>
);
Tabs.TabList = TabList;

const Tab = ({ index, uniqueId, selectedIndex, heading, onSelect }) => (
  <li
    className={classnames('tabs__list-item', { 'tabs__list-item--selected': selectedIndex === index })}
    id={`${uniqueId}-tab-${index}`}
    role="tab"
    aria-controls={`${uniqueId}-panel-${index}`}
    aria-selected={selectedIndex === index}
  >
    <button onClick={() => onSelect(index)} className="link tabs__button">
      {heading}
    </button>
  </li>
);
Tabs.Tab = Tab;

Tabs.TabPanels = ({ children, uniqueId, selectedIndex }) =>
  children.map((element, index) =>
    React.cloneElement(element, {
      key: element.props.heading,
      index,
      uniqueId,
      isSelected: index === selectedIndex,
    })
  );

const TabPanel = ({ index, uniqueId, isSelected, children }) => (
  <div
    className={classnames('tabs__content', { 'tabs__content--selected': isSelected })}
    id={`${uniqueId}-panel-${index}`}
    aria-labelledby={`${uniqueId}-tab-${index}`}
    role="tabpanel"
  >
    {children}
  </div>
);
Tabs.TabPanel = TabPanel;

Tabs.propTypes = {
  uniqueId: PropTypes.string,
  selectedIndex: PropTypes.number,
  onSelect: PropTypes.func,
};

Tabs.defaultProps = {
  selectedIndex: 0,
};

export default Tabs;
