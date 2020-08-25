import React from 'react';
import classnames from 'classnames';

type OwnTabsProps = {
    uniqueId?: string;
    selectedIndex?: number;
    onSelect?: (...args: any[]) => any;
    skipPanelRendering?: boolean;
    noMargin?: boolean;
    compact?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'TabsProps' circularly references itsel... Remove this comment to see the full error message
type TabsProps = OwnTabsProps & typeof Tabs.defaultProps;

/**
 * Status: *finished*
 * Category: Tabs
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'Tabs' implicitly has type 'any' because it does n... Remove this comment to see the full error message
const Tabs = ({ uniqueId, children, selectedIndex, onSelect, skipPanelRendering, noMargin, compact }: TabsProps) => (
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

const TabList = ({
  children,
  selectedIndex,
  uniqueId,
  onSelect
}: any) => (
  <ul className="tabs__list" role="tablist">
    {children.map((element: any, index: any) => (
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

const Tab = ({
  index,
  uniqueId,
  selectedIndex,
  heading,
  onSelect
}: any) => (
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

Tabs.TabPanels = ({
  children,
  uniqueId,
  selectedIndex
}: any) =>
  children.map((element: any, index: any) =>
    React.cloneElement(element, {
      key: element.props.heading,
      index,
      uniqueId,
      isSelected: index === selectedIndex,
    })
  );

const TabPanel = ({
  index,
  uniqueId,
  isSelected,
  children
}: any) => (
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

Tabs.defaultProps = {
  selectedIndex: 0,
};

export default Tabs;
