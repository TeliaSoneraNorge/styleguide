import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
const FunkyTabs = ({ uniqueId, children, selectedIndex, onSelect }) => {
  const selectedChild = children.find((_, index) => index === selectedIndex);
  return (
    <div className="funky-tabs">
      <ul className="funky-tabs__tabs" role="tablist">
        {children.map((element, index) => (
          <li
            key={element.props.heading}
            className={classNames('funky-tabs__tab', {
              'funky-tabs__tab--selected': selectedIndex === index,
            })}
            id={`${uniqueId}-tab-${index}`}
            role="tab"
            aria-controls={`${uniqueId}-panel-${index}`}
            aria-selected={selectedIndex === index}
          >
            <a
              className="funky-tabs__link"
              href={element.props.url}
              onClick={e => onSelect(e, index, element.props.url, element.props.heading)}
            >
              <img alt="" className="funky-tabs__tab-image" src={element.props.imagePath} />
              <div className="funky-tabs__tab-text">
                <span className="link">{element.props.heading}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {selectedChild &&
        React.cloneElement(selectedChild, {
          key: selectedIndex,
          index: selectedIndex,
          uniqueId,
          isSelected: true,
        })}
    </div>
  );
};

export const TabPanel = ({ index, uniqueId, isSelected, children }) => (
  <div
    className={classNames('funky-tabs__panel', { 'funky-tabs__panel--selected': isSelected })}
    id={`${uniqueId}-panel-${index}`}
    aria-labelledby={`${uniqueId}-tab-${index}`}
    role="tabpanel"
  >
    {children}
  </div>
);

FunkyTabs.TabPanel.propTypes = {
  index: PropTypes.number,
  uniqueId: PropTypes.string,
  isSelected: PropTypes.bool,
  heading: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node,
};

FunkyTabs.propTypes = {
  selectedIndex: PropTypes.number,
  onSelect: PropTypes.func,
  uniqueId: PropTypes.string,
};

FunkyTabs.defaultProps = {
  selectedIndex: 0,
};

export default FunkyTabs;
