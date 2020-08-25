import React, { useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import FunkyTab from './FunkyTab';

const LEFT_ARROW_KEY = 37;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;

type OwnFunkyTabsProps = {
    selectedIndex?: number;
    onSelect?: (...args: any[]) => any;
    uniqueId?: string;
    noImages?: boolean;
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'FunkyTabsProps' circularly references ... Remove this comment to see the full error message
type FunkyTabsProps = OwnFunkyTabsProps & typeof FunkyTabs.defaultProps;

/**
 * Status: *finished*
 * Category: Tabs
 *
 * <p>
 * The FunkyTabs component are implemented as a list, where each tab is a list element with a link inside.
 * The link has a href; <code>&lt;a href=""&gt;</code>, with the intention that the href also is a part of the URL.
 * </p>
 * <p>
 * When a new tab is clicked, the content in the panel associated with the tab should be displayed, and the URL
 * changes to indicate to the user that he/she are looking at some new content.
 * </p>
 */
// @ts-expect-error ts-migrate(7022) FIXME: 'FunkyTabs' implicitly has type 'any' because it d... Remove this comment to see the full error message
const FunkyTabs = ({ uniqueId, children, selectedIndex, onSelect, noImages = false }: FunkyTabsProps) => {
  const selectedChild = children.find((_: any, index: any) => index === selectedIndex);
  const containerRef = useRef();

  const changeTabByOffset = (e: any, offset: any) => {
    const indexToSelect = (selectedIndex + offset + children.length) % children.length;
    const elementToSelect = children.find((_: any, index: any) => index === indexToSelect);

    onSelect(e, indexToSelect, elementToSelect.props.url, elementToSelect.props.heading);
  };

  const handleKeyDown = (e: any) => {
    if (e.which === LEFT_ARROW_KEY) changeTabByOffset(e, -1);
    else if (e.which === RIGHT_ARROW_KEY) changeTabByOffset(e, 1);
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    else if (e.which === DOWN_ARROW_KEY && containerRef.current) containerRef.current.focus();
  };

  return (
    <div className="funky-tabs">
      <ul
        className={classNames('funky-tabs__tabs', { 'funky-tabs__tabs--no-images': noImages })}
        role="tablist"
        onKeyDown={handleKeyDown}
      >
        {children.map((element: any, index: any) => (
          <FunkyTab
            element={element}
            isSelected={index === selectedIndex}
            index={index}
            uniqueId={uniqueId}
            key={element.props.heading}
            onSelect={onSelect}
            noImages={noImages}
          />
        ))}
      </ul>
      {selectedChild &&
        React.cloneElement(selectedChild, {
          key: selectedIndex,
          index: selectedIndex,
          uniqueId,
          isSelected: true,
          containerRef,
          noImages,
        })}
    </div>
  );
};

const TabPanel = ({
  index,
  uniqueId,
  isSelected,
  children,
  containerRef,
  noImages
}: any) => (
  <section
    tabIndex={-1}
    ref={containerRef}
    className={classNames('funky-tabs__panel', {
      'funky-tabs__panel--selected': isSelected,
      'funky-tabs__panel--no-images': noImages,
    })}
    id={`${uniqueId}-panel-${index}`}
    aria-labelledby={`${uniqueId}-tab-${index}`}
    role="tabpanel"
    hidden={!isSelected}
  >
    {children}
  </section>
);
FunkyTabs.TabPanel = TabPanel;

FunkyTabs.TabPanel.propTypes = {
  index: PropTypes.number,
  uniqueId: PropTypes.string,
  isSelected: PropTypes.bool,
  heading: PropTypes.string,
  url: PropTypes.string,
  noImages: PropTypes.bool,
  children: PropTypes.node,
};

FunkyTabs.defaultProps = {
  selectedIndex: 0,
};

export default FunkyTabs;
