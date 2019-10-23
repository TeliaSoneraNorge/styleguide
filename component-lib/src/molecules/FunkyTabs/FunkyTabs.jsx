import React, { useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import FunkyTab from './FunkyTab';

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
    const containerRef = useRef();

    const handleKeyDown = (e) => {
        if (e.which === 37) {
            const previousIndex = (selectedIndex - 1 + children.length) % children.length;
            const previousElement = children.find((_, index) => index === previousIndex);
            onSelect(e, previousIndex, previousElement.props.url, previousElement.props.heading);
        } else if (e.which === 39) {
            const nextIndex = (selectedIndex + 1) % children.length;
            const nextElement = children.find((_, index) => index === nextIndex);
            onSelect(e, nextIndex, nextElement.props.url, nextElement.props.heading);
        } else if (e.which === 40 && containerRef.current) {
            containerRef.current.focus();
        }
    };

    return (
        <div className="funky-tabs">
            <ul className="funky-tabs__tabs" role="tablist" onKeyDown={handleKeyDown}>
                {children.map((element, index) =>
                    <FunkyTab
                        element={element}
                        isSelected={index === selectedIndex}
                        index={index}
                        uniqueId={uniqueId}
                        key={element.props.heading}
                        onSelect={onSelect} />
                )}
            </ul>
            {
                selectedChild && React.cloneElement(selectedChild, {
                    key: selectedIndex,
                    index: selectedIndex,
                    uniqueId,
                    isSelected: true,
                    containerRef
                })
            }
        </div>
    );
};

FunkyTabs.TabPanel = ({ index, uniqueId, isSelected, children, containerRef }) =>
    <section
        tabIndex="-1"
        ref={containerRef}
        className={classNames(
            'funky-tabs__panel',
            { 'funky-tabs__panel--selected': isSelected })}
        id={`${uniqueId}-panel-${index}`}
        aria-labelledby={`${uniqueId}-tab-${index}`}
        role="tabpanel"
        hidden={isSelected}>
        {children}
    </section>;

FunkyTabs.TabPanel.propTypes = {
    index: PropTypes.number,
    uniqueId: PropTypes.string,
    isSelected: PropTypes.bool,
    heading: PropTypes.string,
    url: PropTypes.string,
    children: PropTypes.node
};

FunkyTabs.propTypes = {
    selectedIndex: PropTypes.number,
    onSelect: PropTypes.func,
    uniqueId: PropTypes.string,
};

FunkyTabs.defaultProps = {
    selectedIndex: 0
};

export default FunkyTabs;